import React, { useEffect, useState } from "react";
import { getPublicGoogleCalendarEvents } from "pages/api/google-calendar";
import Image from "next/image";
import styles from "./events.module.scss";
import Link from "next/link";

export default function Events({ numberOfEventsToShow = 3 }) {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    const calendarId =
      "c_b3b11e1e4a673b1748b1e7c5238ca4c581363b844e784e63eaf16902d05c0d87@group.calendar.google.com";
    const apiKey = "AIzaSyDBvfAqNiYryyG6MKzbu5pD2iICsmYiWZA";

    // Fetch public calendar events when the component mounts
    const fetchEvents = async () => {
      const events = await getPublicGoogleCalendarEvents(calendarId, apiKey);
      setCalendarEvents(events);
    };

    fetchEvents();
  }, []);

  const extractFileId = (fileUrl) => {
    const startIdx = fileUrl.indexOf("=") + 1;
    const endIdx = fileUrl.indexOf("&");
    return fileUrl.substring(startIdx, endIdx);
  };

  // Function to convert dates to a sortable format
  const getSortableDate = (event) => {
    return event.start.dateTime || event.start.date;
  };
  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      <div
        className={`medium-padding-around_large grid grid-wrap grid-align_horizontal-start`}
      >
        {calendarEvents
          .filter((event) => getSortableDate(event) >= today)
          .sort(
            (a, b) =>
              new Date(getSortableDate(a)) - new Date(getSortableDate(b))
          )
          .slice(0, numberOfEventsToShow)
          .map((event) => {
            const fileId =
              event.attachments && event.attachments.length > 0
                ? extractFileId(event.attachments[0].fileUrl)
                : null;

            const directLink = fileId
              ? `https://drive.google.com/uc?export=view&id=${fileId}`
              : null;
            const eventDate = event.start.dateTime
              ? new Date(event.start.dateTime)
              : null;
            const formattedDate = eventDate
              ? eventDate.toLocaleDateString()
              : null;
            const formatEventDate = event.start.date
              ? new Date(event.start.date)
              : null;
            const formattedEventDate = formatEventDate
              ? formatEventDate.toLocaleDateString()
              : null;
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              event.location
            )}`;

            return (
              <div
                key={event.id}
                className="padding-bottom_x-large medium-padding-around_x-large"
              >
                <div className={`${styles.eventCard} `}>
                  <div className={`${styles.eventImage}`}>
                    {directLink ? (
                      <Image src={directLink} fill={true} alt={event.summary} />
                    ) : (
                      <Image
                        src="/img/banners/events.webp"
                        fill={true}
                        alt={event.summary}
                      />
                    )}
                  </div>
                  <div className={`${styles.content}`}>
                    <div className="padding-bottom_large">
                      <h1>{event.summary}</h1>
                    </div>
                    <div className="padding-bottom_large">
                      {formattedEventDate}
                    </div>
                    <div className="padding-bottom_large">{formattedDate}</div>
                    <div className="padding-bottom_large">
                      <p>{event.description}</p>
                    </div>
                    <div className="padding-bottom_large">
                      <Link
                        className={`${styles.link}`}
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {event.location}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
