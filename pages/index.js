import Link from "next/link";
import Events from "@/lib/ui/eventes/events";
import Button from "@/lib/ui/button/button";
import Image from "next/image";
import CarouselImage from "@/lib/ui/carousels/carousel-image";
import { PrincipalCard, EducationCard } from "@/lib/ui/card/card";
import EventCountdown from "@/lib/ui/eventcountdown/evetscountdown";

const images = ["/img/hostel/hostel.webp", "/img/hostel/hostel2.webp"];
const schoolImages = [
  "/img/banners/school.webp",
  "/img/banners/preprimary.webp",
  "/img/banners/fundraiser.webp",
];
export default function Home() {
  return (
    <div>
      {/* Banner */}
      <div className="section landingContainer">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <div className="size_1-of-1 medium-size_2-of-3">
              <h1 className="font-size_x-large medium-font-size_xx-large">
                Laerskool
              </h1>
              <h1 className=" font-size_x-large medium-font-size_xx-large color-primary">
                Bekker
              </h1>
              <h1 className=" font-size_x-large medium-font-size_xx-large">
                Primary
              </h1>
              <h5 className=" font-size_large padding-top_medium color-primary">
                STAAN VAS | STAND FIRM
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* Principal Message */}
      <div className=" section background ">
        <div
          className="grid grid-wrap grid-align_horizontal-spread"
          style={{ position: "relative" }}
        >
          <div
            className="size_1-of-1 medium-size_1-of-3"
            style={{ backgroundColor: "#6a0911" }}
          >
            <div className="contentLeft">
              <PrincipalCard />
            </div>
          </div>
          <div className="contentRight medium-size_4-of-7 grid grid-align_vertical-center">
            <p className="color-secondary font-size_large">
              Welcome to Bekker Primary School!
              <br /> <br /> Nestled in the picturesque Magaliesberge, our school
              is a second home where children thrive academically, socially, and
              emotionally. With dedicated educators and unique boarding
              facilities, we provide a nurturing environment.
              <br />
              <br /> Our diverse sports program, cultural activities, and
              upcoming events like a major production showcase students'
              talents. Explore our revamped website for updates and curriculum
              information. As we begin this academic journey, let's celebrate
              learning in the stunning Magaliesberg.
              <br />
              <br /> Your partnership is crucial, and we look forward to a year
              of growth and unforgettable experiences. Thank you for choosing
              Bekker Primary School.
              <br />
              <br /> Warm regards.
            </p>
          </div>
        </div>
        <div
          className="grid grid-wrap grid-align_horizontal-spread padding-top_xxx-large"
          style={{ position: "relative" }}
        >
          <div className="contentLeft medium-size_4-of-8 grid grid-align_vertical-center padding-top_xxx-large">
            <p className="color-secondary font-size_large">
              When contemplating a school curriculum, the usual associations are
              with subjects such as math, languages, and social sciences.
              However, the importance of instilling core values is often
              overlooked. At Bekker, we invite you to embrace a higher echelon
              of education.
              <br />
              <br /> Beyond academic proficiency, we are dedicated to
              cultivating a foundation of essential values—respect,
              accountability, honesty, attitude, and loyalty. By seamlessly
              integrating these moral principles into our curriculum, we aim to
              ensure that our students not only leave equipped with the
              knowledge to succeed but also possess the compassion and emotional
              resilience to make meaningful contributions to a society
              characterized by peace and safety. <br />
              <br />
              Welcome to Bekker, where education extends beyond the
              conventional, shaping individuals who are not only academically
              adept but also morally grounded contributors to a harmonious
              society.
            </p>
          </div>
          <div
            className="size_1-of-1 medium-size_3-of-7"
            style={{ backgroundColor: "#6a0911" }}
          >
            <EducationCard />
          </div>
        </div>
      </div>
      {/* Events */}
      <div className="section test">
        <div className="grid grid-wrap">
          <div className="size_1-of-1 medium-size_1-of-2">
            <EventCountdown />
          </div>
          <div className=" size_1-of-1 medium-size_1-of-2 medium-padding-left_xxx-large padding-top_x-large medium-padding-right_xxx-large">
            <div className="text-align_center font-size_x-large">
              <h1 className="color-maroon">Upcoming Events</h1>
            </div>
            <div className=" padding-top_x-large">
              <p className="font-size_large">
                Embark on a journey of anticipation and joy as we unveil the
                uplifting events planned for our school. From inspiring
                educational experiences to heartwarming community gatherings,
                our calendar is filled with moments that nurture the spirit.
                <br /> <br />
                To discover the blessings awaiting you, click on the button
                below. Let faith guide you through the excitement of upcoming
                events, where learning, connection, and celebration come
                together. Click now and step into a future filled with grace and
                inspiration!
              </p>
            </div>
            <div className="padding-top_xx-large padding-bottom_xxx-large padding-left_large padding-right_large medium-padding-left_none medium-padding-right_none">
              <Link href="/about">
                <Button label="Learn More" variant="submit" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Boarding and school */}
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="contentLeft">
          <div className="grid grid-wrap">
            <div className="size_1-of-1 medium-size_1-of-2">
              Bekker Boarding
            </div>
            <div className="size_1-of-1 medium-size_1-of-2">Image</div>
          </div>
        </div>
        <div className="contentRight">
          <div className="grid grid-wrap">
            <div className="size_1-of-1 medium-size_1-of-2">Image</div>
            <div className="size_1-of-1 medium-size_1-of-2">Bekker School</div>
          </div>
        </div>
      </div>
    </div>
  );
}
