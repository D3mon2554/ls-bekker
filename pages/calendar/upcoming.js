import Events from "@/lib/ui/eventes/events";
import Image from "next/image";
import GoogleCalendar from "@/lib/ui/calendar/calendar";
import PurposeImages from "@/lib/ui/images/images";
import Head from "next/head";

export default function Upcoming() {
  return (
    <>
      <Head>
        <title>Events</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta property="og:title" content="Events" />
        <link rel="canonical" href="https://lsbekker.com/calendar/upcomming" />
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
