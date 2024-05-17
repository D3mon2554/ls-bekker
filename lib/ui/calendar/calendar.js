// import styles from "./calendar.module.scss";
// import React, { useEffect, useState } from "react";
// import { getPublicGoogleCalendarEvents } from "pages/api/google-calendar";

// export default function GoogleCalendar() {
//   // Function to convert dates to a sortable format
//   const getSortableDate = (event) => {
//     return event.start.dateTime || event.start.date;
//   };

//   // Function to get the starting date of the month and ensure it's a Monday
//   const getFirstDayOfMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth(), 1);
//   };

//   const today = new Date().toISOString().split("T")[0];

//   const [calendarEvents, setCalendarEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [firstDayOfMonth, setFirstDayOfMonth] = useState(
//     getFirstDayOfMonth(new Date(today))
//   );

//   const upcomingEvents = calendarEvents.filter(
//     (event) => new Date(getSortableDate(event)) >= new Date(today)
//   );

//   const getMonthName = (date) => {
//     return date.toLocaleString("en-US", { month: "long", year: "numeric" });
//   };

//   const goToPreviousMonth = () => {
//     const previousMonth = new Date(firstDayOfMonth);
//     previousMonth.setMonth(firstDayOfMonth.getMonth() - 1);
//     setFirstDayOfMonth(previousMonth);
//   };

//   const goToNextMonth = () => {
//     const nextMonth = new Date(firstDayOfMonth);
//     nextMonth.setMonth(firstDayOfMonth.getMonth() + 1);
//     setFirstDayOfMonth(nextMonth);
//   };

//   useEffect(() => {
//     const calendarId =
//       "c_b3b11e1e4a673b1748b1e7c5238ca4c581363b844e784e63eaf16902d05c0d87@group.calendar.google.com";
//     const apiKey = "AIzaSyDBvfAqNiYryyG6MKzbu5pD2iICsmYiWZA";

//     const fetchEvents = async () => {
//       try {
//         const events = await getPublicGoogleCalendarEvents(calendarId, apiKey);
//         setCalendarEvents(events);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const offset = (firstDayOfMonth.getDay() + 6) % 7;
//   const daysInMonth = new Date(
//     firstDayOfMonth.getFullYear(),
//     firstDayOfMonth.getMonth() + 1,
//     0
//   ).getDate();

//   const handleEventClick = (event) => {
//     const { summary, description, location, start, end, attachments } = event;

//     const startDate = new Date(start.dateTime || start.date);
//     const endDate = new Date(end.dateTime || end.date);

//     const calendarContent = [
//       "BEGIN:VCALENDAR",
//       "VERSION:2.0",
//       "BEGIN:VEVENT",
//       `SUMMARY:${summary}`,
//       `DESCRIPTION:${description || ""}`,
//       `LOCATION:${location || ""}`,
//       `DTSTART:${startDate.toISOString().replace(/[-:]/g, "")}`,
//       `DTEND:${endDate.toISOString().replace(/[-:]/g, "")}`,
//       ...(attachments
//         ? attachments.map((attachment) => `ATTACH:${attachment}`)
//         : []),
//       "END:VEVENT",
//       "END:VCALENDAR",
//     ].join("\n");

//     const blob = new Blob([calendarContent], { type: "text/calendar" });
//     const url = URL.createObjectURL(blob);

//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "event.ics");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <>
//       <div className={styles.calendarContainer}>
//         <div className={styles.navigation}>
//           <div className={styles.heading}>{getMonthName(firstDayOfMonth)}</div>
//           <div className={`${styles.buttonContainer}`}>
//             <button className={`${styles.button}`} onClick={goToPreviousMonth}>
//               &lt;
//             </button>
//             <button className={`${styles.button}`} onClick={goToNextMonth}>
//               &gt;
//             </button>
//           </div>
//         </div>
//         <div className={styles.gridContainer}>
//           {/* Days of the week */}
//           {[
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday",
//             "Sunday",
//           ].map((day) => (
//             <div key={day} className={styles.weekday}>
//               {day}
//             </div>
//           ))}

//           {/* Calendar days with events */}
//           {Array.from({ length: 36 }, (_, index) => {
//             const currentDay = new Date(firstDayOfMonth);
//             currentDay.setDate(firstDayOfMonth.getDate() + index - offset);

//             const eventsForDay = upcomingEvents.filter(
//               (event) =>
//                 new Date(getSortableDate(event)).getDate() ===
//                   currentDay.getDate() &&
//                 new Date(getSortableDate(event)).getMonth() ===
//                   currentDay.getMonth() &&
//                 new Date(getSortableDate(event)).getFullYear() ===
//                   currentDay.getFullYear()
//             );

//             if (
//               currentDay.getDate() > 0 &&
//               currentDay.getDate() <= daysInMonth
//             ) {
//               return (
//                 <div key={index + 1} className={styles.calendarDay}>
//                   <div className={styles.dayNumber}>{currentDay.getDate()}</div>
//                   {eventsForDay.length > 0 && (
//                     <div className={styles.eventContainer}>
//                       {eventsForDay.map((event) => (
//                         <div
//                           key={event.id}
//                           className={styles.event}
//                           onClick={() => handleEventClick(event)}
//                         >
//                           {event.summary}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               );
//             }

//             return null;
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
// Import necessary modules and styles
import styles from "./calendar.module.scss";
import React, { useEffect, useState } from "react";
import { getPublicGoogleCalendarEvents } from "pages/api/google-calendar";
import Button from "../button/button";

export default function GoogleCalendar() {
  // Function to convert dates to a sortable format
  const getSortableDate = (event) => {
    return event.start.dateTime || event.start.date;
  };

  // Function to get the starting date of the month and ensure it's a Monday
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };

  const today = new Date().toISOString().split("T")[0];

  const [calendarEvents, setCalendarEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(
    getFirstDayOfMonth(new Date(today))
  );
  const upcomingEvents = calendarEvents.filter(
    (event) => new Date(getSortableDate(event)) >= new Date(today)
  );

  const getMonthName = (date) => {
    return date.toLocaleString("en-US", { month: "long", year: "numeric" });
  };

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

  useEffect(() => {
    const calendarId =
      "c_b3b11e1e4a673b1748b1e7c5238ca4c581363b844e784e63eaf16902d05c0d87@group.calendar.google.com";
    const apiKey = "AIzaSyDBvfAqNiYryyG6MKzbu5pD2iICsmYiWZA";

    const fetchEvents = async () => {
      try {
        const events = await getPublicGoogleCalendarEvents(calendarId, apiKey);
        setCalendarEvents(events);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  const offset = (firstDayOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(
    firstDayOfMonth.getFullYear(),
    firstDayOfMonth.getMonth() + 1,
    0
  ).getDate();

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

      // Create a Blob containing the calendar content
      const blob = new Blob([calendarContentWithHeader], {
        type: "text/calendar",
      });

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Create a link element (fallback to HTML <a> tag)
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "events.ics");

      // Append the link to the document body
      document.body.appendChild(link);

      // Trigger a click event on the link to start the download
      link.click();

      // Remove the link from the document body
      document.body.removeChild(link);

      // Revoke the URL to release the resources
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
    <>
      <div className={styles.calendarContainer}>
        <div className={styles.navigation}>
          <div className={styles.heading}>{getMonthName(firstDayOfMonth)}</div>
          <div className={`${styles.buttonContainer}`}>
            <button className={`${styles.button}`} onClick={goToPreviousMonth}>
              &lt;
            </button>
            <button className={`${styles.button}`} onClick={goToNextMonth}>
              &gt;
            </button>
          </div>
        </div>
        <div className={styles.gridContainer}>
          {/* Days of the week */}
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

          {/* Calendar days with events */}
          {Array.from({ length: 36 }, (_, index) => {
            const currentDay = new Date(firstDayOfMonth);
            currentDay.setDate(firstDayOfMonth.getDate() + index - offset);

            const eventsForDay = upcomingEvents.filter(
              (event) =>
                new Date(getSortableDate(event)).getDate() ===
                  currentDay.getDate() &&
                new Date(getSortableDate(event)).getMonth() ===
                  currentDay.getMonth() &&
                new Date(getSortableDate(event)).getFullYear() ===
                  currentDay.getFullYear()
            );

            if (
              currentDay.getDate() > 0 &&
              currentDay.getDate() <= daysInMonth
            ) {
              return (
                <div
                  key={index + 1}
                  className={styles.calendarDay}
                  onClick={() => handleDayClick(currentDay)}
                >
                  <div className={styles.dayNumber}>{currentDay.getDate()}</div>
                  {eventsForDay.length > 0 && (
                    <div className={styles.eventContainer}>
                      {eventsForDay.map((event) => (
                        <div key={event.id} className={styles.event}>
                          {event.summary}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>
        <div>
          <Button
            variant="submit"
            label="Download Calendar"
            onClick={downloadCalendar}
          />
        </div>
      </div>
    </>
  );
}
