import React, { useEffect, useState } from "react";
import { getPublicGoogleCalendarEvents } from "pages/api/google-calendar";
import Image from "next/image";
import styles from "./events.module.scss";

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
      "74f710515235c9cadc6ae341b0d6201129e57d16ecb42ce070dc63290ec8db6c@group.calendar.google.com";
    const apiKey = "AIzaSyDBvfAqNiYryyG6MKzbu5pD2iICsmYiWZA";

    const fetchEvents = async () => {
      try {
        const events = await getPublicGoogleCalendarEvents(calendarId, apiKey);
        setCalendarEvents(events);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (calendarEvents.length > 0) {
      const now = new Date();
      let currentEvent = null;

      // Find the current event or the next upcoming event
      for (let i = 0; i < calendarEvents.length; i++) {
        const event = calendarEvents[i];
        const eventStart = new Date(event.start.dateTime || event.start.date);
        const eventEnd = new Date(event.end.dateTime || event.end.date);

        if (eventStart <= now && eventEnd > now) {
          // Event is ongoing
          currentEvent = event;
          break;
        } else if (eventStart > now) {
          // Next upcoming event
          currentEvent = event;
          break;
        }
      }

      if (currentEvent) {
        const eventDate = new Date(
          currentEvent.start.dateTime || currentEvent.start.date
        );

        const updateCountdown = () => {
          const currentTime = new Date();
          const timeDifference = eventDate - currentTime;

          if (timeDifference <= 0) {
            clearInterval(interval);
            setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            return;
          }

          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          setCountdown({ days, hours, minutes, seconds });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
      }
    }
  }, [calendarEvents]);

  const today = new Date().toISOString().split("T")[0];
  const now = new Date();

  const upcomingEvents = calendarEvents
    .filter(
      (event) => new Date(event.start.dateTime || event.start.date) >= now
    )
    .sort(
      (a, b) =>
        new Date(a.start.dateTime || a.start.date) -
        new Date(b.start.dateTime || b.start.date)
    )
    .slice(0, numberOfEventsToShow);

  return (
    <>
      <div className={`size_1-of-1`}>
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
              <div
                key={event.id}
                className={`grid grid-wrap ${styles.container}`}
              >
                <div className={`${styles.eventCard}`}>
                  <div className={`${styles.content}`}>
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
                  </div>
                </div>
                <div className={`${styles.eventDescription}`}>
                  <div className={`${styles.descriptionContainer}`}>
                    <div className="">
                      <h1 className={`${styles.title}`}>{event.summary}</h1>
                    </div>
                    <div
                      className={`${styles.description}`}
                      style={{ whiteSpace: "pre-line" }}
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    ></div>
                  </div>
                  <div className={`${styles.countdownContainer}`}>
                    <CountdownSquare label="Days" value={countdown.days} />
                    <CountdownSquare label="Hours" value={countdown.hours} />
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
            );
          })
        )}
      </div>
    </>
  );
}
