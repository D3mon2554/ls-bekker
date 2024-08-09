import Events from "@/lib/ui/eventes/events";
import Image from "next/image";
import GoogleCalendar from "@/lib/ui/calendar/calendar";
import PurposeImages from "@/lib/ui/images/images";
import Head from "next/head";

export default function Upcoming() {
  return (
    <>
      <Head>
        <title>Events | Laerskool Bekker Primary</title>
        <meta
          name="description"
          content="Stay updated with all upcoming events at Laerskool Bekker Primary. From school holidays to outdoor activities, find all the information you need right here."
        />
        <meta
          name="keywords"
          content="Laerskool Bekker Primary, school events, upcoming events, school calendar, Bekker events, outdoor activities"
        />
        <meta name="author" content="Laerskool Bekker Primary" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Events | Laerskool Bekker Primary" />
        <meta
          property="og:description"
          content="Stay updated with all upcoming events at Laerskool Bekker Primary. From school holidays to outdoor activities, find all the information you need right here."
        />
        <meta
          property="og:image"
          content="https://lsbekker.com/img/events-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://lsbekker.com/calendar/upcomming"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Laerskool Bekker Primary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Events | Laerskool Bekker Primary"
        />
        <meta
          name="twitter:description"
          content="Stay updated with all upcoming events at Laerskool Bekker Primary. From school holidays to outdoor activities, find all the information you need right here."
        />
        <meta
          name="twitter:image"
          content="https://lsbekker.com/img/events-banner.jpg"
        />
        <link rel="canonical" href="https://lsbekker.com/calendar/upcomming" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <script type="application/ld+json">
          {`
    {
      "@context": "http://schema.org",
      "@type": "Event",
      "name": "Upcoming Events",
      "url": "https://lsbekker.com/calendar/upcomming",
      "description": "Stay updated with all upcoming events at Laerskool Bekker Primary. From school holidays to outdoor activities, find all the information you need right here.",
      "startDate": "2023-08-01T08:00:00Z",
      "endDate": "2023-12-31T17:00:00Z",
      "location": {
        "@type": "Place",
        "name": "Laerskool Bekker Primary",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Laerskool Bekker Primary",
          "addressLocality": "Magaliesburg",
          "addressRegion": "Gauteng",
          "postalCode": "1791",
          "addressCountry": "ZA"
        }
      },
      "image": "https://lsbekker.com/img/events-banner.jpg",
      "organizer": {
        "@type": "Organization",
        "name": "Laerskool Bekker Primary",
        "url": "https://lsbekker.com"
      }
    }
    `}
        </script>
      </Head>

      {/* Banner */}
      <div className="section events">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <PurposeImages color="#ffc82d" width={430} height={164} />
            <div style={{ letterSpacing: "2px" }}>
              <h1 className="font-size_xx-large font-weight_black">Events</h1>
              <p className="font-size_x-medium padding-top_xx-large">
                For everything that is happening in our school, from holidays to
                outdoor activities, we would like to keep you updated right here
                on our web page.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Events */}
      <div className=" testing grid grid-align_vertical-center">
        <div className="size_1-of-1">
          <Events />
        </div>
      </div>
      {/* Calendar */}
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="section-content">
          <div className="grid grid-wrap padding-top_xxx-large ">
            <div className="size_1-of-1 medium-size_1-of-2">
              <h1 className="color-maroon">
                How to download events of the day:
              </h1>
              <ul>
                <li>Click on the day with the events you want.</li>
                <li>An ICS file will start downloading.</li>
                <li>Once downloaded, go to your Downloads folder.</li>
                <li>Double-click the downloaded file.</li>
                <li>Your device's default calendar will open.</li>
                <li>Add the event to your calendar from there.</li>
              </ul>
            </div>
            <div className="size_1-of-1 medium-size_1-of-2">
              <h1 className="color-maroon">How to download the calendar:</h1>
              <ul>
                <li>Click on the "Download Calendar Button".</li>
                <li>
                  An ICS file containing all events for the whole year will
                  download.
                </li>
                <li>
                  Once the download is complete, locate the file in your
                  Downloads folder.
                </li>
                <li>Double-click the downloaded file to open it.</li>
                <li>Your device's default calendar application will launch.</li>
                <li>
                  You can then view and add the events to your calendar as
                  needed.
                </li>
              </ul>
            </div>
          </div>
          <div className="padding-top_xxx-large padding-bottom_xxx-large">
            <GoogleCalendar />
          </div>
        </div>
      </div>
    </>
  );
}
