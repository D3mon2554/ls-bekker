
import styles from "./calendar.module.scss";
import React, { useEffect, useState } from "react";
import { getPublicGoogleCalendarEvents } from "pages/api/google-calendar";
import Button from "../button/button";

export default function GoogleCalendar() {
  const getSortableDate = (event) => event.start.dateTime || event.start.date;

  const getFirstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1);

  const today = new Date();

  const [calendarEvents, setCalendarEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(
    getFirstDayOfMonth(new Date(today))
  );

  useEffect(() => {
    const calendarId =
      "";
    const apiKey = "";

    const fetchEvents = async () => {
      try {
        const events = await getPublicGoogleCalendarEvents(calendarId, apiKey);
        setCalendarEvents(events);
      } catch (error) {
        console.error("Failed to fetch calendar events", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const goToPreviousMonth = () => {
    const previousMonth = new Date(firstDayOfMonth);
    previousMonth.setMonth(firstDayOfMonth.getMonth() - 1);
    setFirstDayOfMonth(previousMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(firstDayOfMonth);
    nextMonth.setMonth(firstDayOfMonth.getMonth() + 1);
    setFirstDayOfMonth(nextMonth);
  };

  const getMonthName = (date) =>
    date.toLocaleString("en-US", { month: "long", year: "numeric" });

  const offset = (firstDayOfMonth.getDay() + 6) % 7;

  const upcomingEvents = calendarEvents.filter((event) => {
    const eventDate = new Date(getSortableDate(event));
    const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1);
    const lastDayOfYear = new Date(new Date().getFullYear(), 11, 31);

    return eventDate >= firstDayOfYear && eventDate <= lastDayOfYear;
  });

  const handleDayClick = (day) => {
    const eventsForDay = calendarEvents.filter((event) => {
      const eventDate = new Date(getSortableDate(event));
      return (
        eventDate.getDate() === day.getDate() &&
        eventDate.getMonth() === day.getMonth() &&
        eventDate.getFullYear() === day.getFullYear()
      );
    });

    if (eventsForDay.length > 0) {
      const calendarContent = eventsForDay
        .map((event) => {
          const { summary, description, location, start, end, attachments } =
            event;
          const startDate = new Date(start.dateTime || start.date);
          const endDate = new Date(end.dateTime || end.date);

          return [
            "BEGIN:VEVENT",
            `SUMMARY:${summary}`,
            `DESCRIPTION:${description || ""}`,
            `LOCATION:${location || ""}`,
            `DTSTART:${startDate.toISOString().replace(/[-:]/g, "")}`,
            `DTEND:${endDate.toISOString().replace(/[-:]/g, "")}`,
            ...(attachments
              ? attachments.map((attachment) => `ATTACH:${attachment}`)
              : []),
            "END:VEVENT",
          ].join("\n");
        })
        .join("\n");

      const calendarContentWithHeader = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        calendarContent,
        "END:VCALENDAR",
      ].join("\n");

      const blob = new Blob([calendarContentWithHeader], {
        type: "text/calendar",
      });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "events.ics");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const downloadCalendar = () => {
    const eventsForMonth = upcomingEvents
      .map((event) => {
        const { summary, description, location, start, end, attachments } =
          event;
        const startDate = new Date(start.dateTime || start.date);
        const endDate = new Date(end.dateTime || end.date);

        return [
          "BEGIN:VEVENT",
          `SUMMARY:${summary}`,
          `DESCRIPTION:${description || ""}`,
          `LOCATION:${location || ""}`,
          `DTSTART:${startDate.toISOString().replace(/[-:]/g, "")}`,
          `DTEND:${endDate.toISOString().replace(/[-:]/g, "")}`,
          ...(attachments
            ? attachments.map((attachment) => `ATTACH:${attachment}`)
            : []),
          "END:VEVENT",
        ].join("\n");
      })
      .join("\n");

    const calendarContentWithHeader = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      eventsForMonth,
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([calendarContentWithHeader], {
      type: "text/calendar",
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "calendar.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.navigation}>
        <div className={styles.heading}>{getMonthName(firstDayOfMonth)}</div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={goToPreviousMonth}>
            &lt;
          </button>
          <button className={styles.button} onClick={goToNextMonth}>
            &gt;
          </button>
        </div>
      </div>
      <div className={styles.gridContainer}>
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => (
          <div key={day} className={styles.weekday}>
            {day}
          </div>
        ))}

        {Array.from({ length: 42 }, (_, index) => {
          const currentDay = new Date(firstDayOfMonth);
          currentDay.setDate(firstDayOfMonth.getDate() + index - offset);

          const isToday =
            currentDay.getFullYear() === today.getFullYear() &&
            currentDay.getMonth() === today.getMonth() &&
            currentDay.getDate() === today.getDate();

          const eventsForDay = calendarEvents.filter(
            (event) =>
              new Date(getSortableDate(event)).getDate() ===
                currentDay.getDate() &&
              new Date(getSortableDate(event)).getMonth() ===
                currentDay.getMonth() &&
              new Date(getSortableDate(event)).getFullYear() ===
                currentDay.getFullYear()
          );

          const firstEvent = eventsForDay.length > 0 ? eventsForDay[0] : null;

          return (
            <div
              key={index}
              className={`${styles.calendarDay} ${isToday ? styles.today : ""}`}
              onClick={() => handleDayClick(currentDay)}
            >
              <div className={styles.dayNumber}>{currentDay.getDate()}</div>
              {firstEvent && (
                <div className={styles.eventContainer}>
                  <div key={firstEvent.id} className={styles.event}>
                    {firstEvent.summary}
                  </div>
                  {eventsForDay.length > 1 && (
                    <div className={styles.moreEvents}>More Events</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="padding-top_xx-large">
        <Button
          variant="submit"
          label="Download Calendar"
          onClick={downloadCalendar}
        />
      </div>
    </div>
  );
}
