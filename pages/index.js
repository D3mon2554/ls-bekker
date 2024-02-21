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
          <div className="section-content grid grid-wrap grid-align_vertical-center">
            <div className="size_1-of-1 padding-top_xxx-large ">
              <h1 className="test">Laerskool</h1>
              <h1 className="color-primary test">Bekker</h1>
              <h1 className="test">Primary</h1>
              <h5
                className=" font-size_medium padding-top_medium color-primary"
                style={{ letterSpacing: "2px" }}
              >
                STAAN VAS | STAND FIRM
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* Principal Message */}
      <div className=" section background ">
        <div
          className="grid grid-wrap  grid-align_horizontal-spread"
          style={{ position: "relative" }}
        >
          <div
            className="size_1-of-1 medium-size_1-of-2"
            style={{ backgroundColor: "#6a0911" }}
          >
            <div className="medium-padding-left_xx-large">
              <PrincipalCard />
            </div>
          </div>
          <div className="padding-left_xx-large padding-right_xx-large medium-size_4-of-8 grid grid-align_vertical-center">
            <p className="color-secondary font-size_x-medium font-weight_regular padding-top_xxx-large">
              Welcome to Bekker Primary School!
              <div className="size_1-of-1 padding-top_large"></div>
              Nestled in the picturesque Magaliesberge, our school is a second
              home where children thrive academically, socially, and
              emotionally. With dedicated educators and unique boarding
              facilities, we provide a nurturing environment.
              <div className="size_1-of-1 padding-top_large"></div>
              Our diverse sports program, cultural activities, and upcoming
              events like a major production showcase students' talents. Explore
              our revamped website for updates and curriculum information. As we
              begin this academic journey, let's celebrate learning in the
              stunning Magaliesberg.
              <div className="size_1-of-1 padding-top_large"></div>Your
              partnership is crucial, and we look forward to a year of growth
              and unforgettable experiences. Thank you for choosing Bekker
              Primary School.
              <div className="size_1-of-1 padding-top_large"></div>
              Warm regards.
            </p>
          </div>
        </div>
        <div
          className="grid grid-wrap grid-align_horizontal-spread padding-top_xxx-large"
          style={{ position: "relative" }}
        >
          <div className="padding-left_xx-large padding-right_xx-large medium-size_4-of-8 grid grid-align_vertical-center padding-top_large padding-bottom_large">
            <p className="color-secondary font-size_x-medium font-weight_regular">
              When contemplating a school curriculum, the usual associations are
              with subjects such as math, languages, and social sciences.
              However, the importance of instilling core values is often
              overlooked. At Bekker, we invite you to embrace a higher echelon
              of education.
              <div className="size_1-of-1 padding-top_x-large"></div>
              Beyond academic proficiency, we are dedicated to cultivating a
              foundation of essential values—respect, accountability, honesty,
              attitude, and loyalty. By seamlessly integrating these moral
              principles into our curriculum, we aim to ensure that our students
              not only leave equipped with the knowledge to succeed but also
              possess the compassion and emotional resilience to make meaningful
              contributions to a society characterized by peace and safety.
              <div className="size_1-of-1 padding-top_x-large"></div>
              Welcome to Bekker, where education extends beyond the
              conventional, shaping individuals who are not only academically
              adept but also morally grounded contributors to a harmonious
              society.
            </p>
          </div>
          <div
            className="size_1-of-1 medium-size_3-of-6"
            style={{ backgroundColor: "#6a0911" }}
          >
            <EducationCard />
          </div>
        </div>
      </div>
      {/* Events */}
      <div className="section testing">
        <div className="grid grid-wrap">
          <div className="size_1-of-1 medium-size_1-of-2">
            <EventCountdown />
          </div>
          <div className=" size_1-of-1 medium-size_1-of-2 medium-padding-left_xxx-large padding-top_x-large medium-padding-right_xxx-large">
            <div className="">
              <h1 className="color-maroon text-align_center font-size_x-large">
                Upcoming Events
              </h1>
            </div>
            <div className="padding-around_medium  padding-top_x-large">
              <p className="font-size_x-medium font-weight_regular">
                Embark on a journey of anticipation and joy as we unveil the
                uplifting events planned for our school. From inspiring
                educational experiences to heartwarming community gatherings,
                our calendar is filled with moments that nurture the spirit.
                <div className="size_1-of-1 padding-top_x-large"></div>
                To discover the blessings awaiting you, click on the button
                below. Let faith guide you through the excitement of upcoming
                events, where learning, connection, and celebration come
                together. Click now and step into a future filled with grace and
                inspiration!
              </p>
            </div>
            <div className="padding-top_xxx-large padding-bottom_xxx-large padding-left_large padding-right_large medium-padding-left_none medium-padding-right_none">
              <Link href="/about">
                <Button label="Learn More" variant="submit" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Boarding and school */}
      <div className="section">
        <div className=" medium-padding-left_xx-large">
          <div className="grid grid-wrap padding-bottom_xx-large padding-top_xx-large ">
            <div className="size_1-of-1 medium-size_1-of-2 grid grid-wrap grid-align_vertical-spread medium-padding-right_xxx-large padding-bottom_xx-large medium-padding-bottom_none padding-left_small padding-right_small">
              <div className="size_1-of-1 padding-top_xx-large">
                <h1 className="font-size_x-large color-maroon">
                  Bekker Boarding: Home Away From Home
                </h1>
              </div>
              <div>
                <p className="font-size_x-medium font-weight_regular">
                  At Laerskool Bekker, boarding is more than a choice; it's a
                  transformative journey. Our tranquil setting shapes
                  independent, disciplined, and well-rounded individuals in the
                  serene Magaliesburg Mountains.
                  <div className="size_1-of-1 padding-top_x-large"></div>
                  From Grades 1-7, our boarding experience offers a 'home away
                  from home,' blending structured discipline with enriching
                  extramural activities.
                </p>
              </div>
              <div className="size_1-of-1 grid grid-align_vertical-center">
                <div className="size_1-of-1 padding-top_large">
                  <Link href="/hostel/our-hostel">
                    <Button label="Read More" variant="submit" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="size_1-of-1 medium-size_1-of-2"
              style={{ position: "relative", height: "500px" }}
            >
              <Image src="/img/hostel/dinner.jpg" alt="Dinner" fill />
            </div>
          </div>
        </div>
        <div className="medium-padding-right_xx-large">
          <div className="grid grid-wrap padding-bottom_xx-large">
            <div
              className="size_1-of-1 medium-size_1-of-2"
              style={{ position: "relative", height: "550px" }}
            >
              <Image src="/img/banners/school.webp" alt="Dinner" fill />
            </div>
            <div className="size_1-of-1 medium-size_1-of-2 grid grid-wrap grid-align_vertical-spread medium-padding-left_xxx-large">
              <div className="size_1-of-1 padding-top_xx-large">
                <h1 className="font-size_x-large color-maroon">
                  Bekker School: Where Education Becomes Fun
                </h1>
              </div>
              <div>
                <p className="font-size_x-medium font-weight_regular">
                  Laerskool Bekker is a public school for Afrikaans and English
                  speaking children from pre-school to grade 7. We have 500
                  learners from all over Gauteng of whom approximately 150
                  learners from grade 1 to grade 7 are accommodated in the
                  hostel. All aspects of school governance, including finance,
                  asset management, policy and personal selection are looked
                  after by an active and energetic governing body, most of whom
                  are selected by the parents of the school. The professional
                  management of the school is in the hands of capable and
                  experienced staff.
                </p>
              </div>
              <div className="size_1-of-1 grid grid-align_vertical-center">
                <div className="size_1-of-1 padding-top_large">
                  <Link href="/about/our-school">
                    <Button label="Read More" variant="submit" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
