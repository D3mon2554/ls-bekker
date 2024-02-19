import React, { useEffect, useState } from "react";
import { getPublicGoogleCalendarEvents } from "pages/api/google-calendar";
import Image from "next/image";
import styles from "./eventscountdown.module.scss";
import Link from "next/link";

const CountdownSquare = ({ label, value }) => (
  <div className={`${styles.countdownSquare}`}>
    <p className={styles.countdownValue}>{value}</p>
    <p className={styles.countdownLabel}>{label}</p>
  </div>
);

export default function EventCountdown({ numberOfEventsToShow = 1 }) {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  const extractFileId = (fileUrl) => {
    const startIdx = fileUrl.indexOf("=") + 1;
    const endIdx = fileUrl.indexOf("&");
    return fileUrl.substring(startIdx, endIdx);
  };

  const getDaysUntilEvent = (eventDate) => {
    const today = new Date();
    const eventDateTime = new Date(eventDate);
    const timeDifference = eventDateTime - today;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };

  useEffect(() => {
    if (calendarEvents.length > 0) {
      const today = new Date();
      const upcomingEvent = calendarEvents
        .filter(
          (event) => new Date(event.start.dateTime || event.start.date) >= today
        )
        .sort(
          (a, b) =>
            new Date(a.start.dateTime || a.start.date) -
            new Date(b.start.dateTime || b.start.date)
        )
        .slice(0, numberOfEventsToShow)[0];

      if (upcomingEvent) {
        const eventDate = new Date(
          upcomingEvent.start.dateTime || upcomingEvent.start.date
        );

        const interval = setInterval(() => {
          const now = new Date();
          const timeDifference = eventDate - now;
          const seconds = Math.floor(timeDifference / 1000);
          const minutes = Math.floor(seconds / 60);
          const hours = Math.floor(minutes / 60);
          const days = Math.floor(hours / 24);

          setCountdown({
            days: days % 24,
            hours: hours % 24,
            minutes: minutes % 60,
            seconds: seconds % 60,
          });

          if (timeDifference <= 0) {
            clearInterval(interval);
            // Optionally, you can perform any action when the countdown reaches 0
          }
        }, 1000);

        return () => clearInterval(interval);
      }
    }
  }, [calendarEvents, numberOfEventsToShow]);
  const today = new Date().toISOString().split("T")[0];

  const upcomingEvents = calendarEvents
    .filter(
      (event) =>
        new Date(event.start.dateTime || event.start.date) >= new Date(today)
    )
    .sort(
      (a, b) =>
        new Date(a.start.dateTime || a.start.date) -
        new Date(b.start.dateTime || b.start.date)
    )
    .slice(0, numberOfEventsToShow);
  return (
    <>
      <div className={`size_1-of-1 `}>
        {loading ? (
          <p>Loading...</p>
        ) : upcomingEvents.length === 0 ? (
          <p>
            No upcoming events. We will let you know when we have fun planned.
          </p>
        ) : (
          upcomingEvents.map((event) => {
            const fileId =
              event.attachments && event.attachments.length > 0
                ? extractFileId(event.attachments[0].fileUrl)
                : null;

            const directLink = fileId
              ? `https://drive.google.com/uc?export=view&id=${fileId}`
              : null;

            return (
              <div key={event.id} className=" grid grid-wrap">
                <div className={`${styles.eventCard} `}>
                  <div className={`${styles.content}`}>
                    <div className="padding-bottom_x-large padding-top_x-large">
                      <h1 className={`${styles.title}`}>{event.summary}</h1>
                    </div>
                    <div className={`${styles.eventImage}`}>
                      {directLink ? (
                        <Image
                          src={directLink}
                          fill={true}
                          alt={event.summary}
                        />
                      ) : (
                        <Image
                          src="/img/banners/events.webp"
                          fill={true}
                          alt={event.summary}
                        />
                      )}
                    </div>
                    <div className="grid grid-align_horizontal-center">
                      <div className={`${styles.countdownContainer}`}>
                        <CountdownSquare label="Days" value={countdown.days} />
                        <CountdownSquare
                          label="Hours"
                          value={countdown.hours}
                        />
                        <CountdownSquare
                          label="Minutes"
                          value={countdown.minutes}
                        />
                        <CountdownSquare
                          label="Seconds"
                          value={countdown.seconds}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
