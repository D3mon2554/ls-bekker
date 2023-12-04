import Events from "@/lib/ui/eventes/events";
import Image from "next/image";

export default function Upcoming() {
  return (
    <>
      <div className="section" style={{ position: "relative" }}>
        <Image
          src="/img/banners/upcomingevets.webp"
          alt="Upcoming Events"
          fill={true}
          style={{
            position: "absolute",
            zIndex: "-1",
            objectFit: "cover",
          }}
        />
        <div className="section-content">
          <div
            className="grid grid-align_vertical-center"
            style={{ height: "600px" }}
          >
            <div className="padding-top_xxx-large padding-bottom_xxx-large">
              <h1 className="color-white">
                Events at Laerskool Bekker Primary
              </h1>
              <p className="padding-top_large size_1-of-1 medium-size_4-of-9 color-white">
                Embark on a journey of anticipation and joy as we unveil the
                uplifting events planned for our school. From inspiring
                educational experiences to heartwarming community gatherings,
                our calendar is filled with moments that nurture the spirit.
                <br />
                <br />
                To discover the blessings awaiting you, click on the button
                below. Let faith guide you through the excitement of upcoming
                events, where learning, connection, and celebration come
                together. Click now and step into a future filled with grace and
                inspiration!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="section-content">
          <div className="padding-top_xxx-large padding-bottom_xxx-large">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Africa%2FJohannesburg&showPrint=0&showTitle=0&showTz=0&showCalendars=0&showTabs=1&showNav=1&src=Y19iM2IxMWUxZTRhNjczYjE3NDhiMWU3YzUyMzhjYTRjNTgxMzYzYjg0NGU3ODRlNjNlYWYxNjkwMmQwNWMwZDg3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uc2EjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986CB&color=%230B8043"
              style={{ width: "100%", height: "800px" }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="section-content">
          <div className="padding-top_xxx-large padding-bottom_xxx-large">
            <h1 className="color-maroon">
              🌟 Exciting Events on the Horizon! 📅
            </h1>
            <p className="padding-top_large size_1-of-1 medium-size_2-of-3">
              Get ready for a series of captivating events that will make the
              upcoming weeks unforgettable! From immersive experiences to
              engaging activities, there's something for everyone. Here's a
              sneak peek at what's in store:
            </p>
          </div>
          <div className="padding-top_xxx-large padding-bottom_xxx-large">
            <Events numberOfEventsToShow={20} />
          </div>
        </div>
      </div>
    </>
  );
}
