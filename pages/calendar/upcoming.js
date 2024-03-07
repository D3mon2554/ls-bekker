import Events from "@/lib/ui/eventes/events";
import Image from "next/image";
import GoogleCalendar from "@/lib/ui/calendar/calendar";

export default function Upcoming() {
  return (
    <>
      {/* Banner */}
      <div className="banner">Banner</div>
      {/* Events */}
      <div className=" testing grid grid-align_vertical-center">
        <div className="size_1-of-1">
          <Events />
        </div>
      </div>
      {/* Calendar */}
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="section-content">
          <div className="padding-top_xxx-large padding-bottom_xxx-large">
            <GoogleCalendar />
          </div>
        </div>
      </div>
    </>
  );
}
