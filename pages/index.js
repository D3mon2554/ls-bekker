import Link from "next/link";
import Events from "@/lib/ui/eventes/events";
import Button from "@/lib/ui/button/button";
import Image from "next/image";
import CarouselImage from "@/lib/ui/carousels/carousel-image";

const images = ["/img/hostel/hostel.webp", "/img/hostel/hostel2.webp"];
export default function Home() {
  return (
    <div>
      {/* Banner */}
      <div className="section landingContainer">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <div>
              <h1>LaerSkool Bekker/</h1>
              <h1 className="padding-top_large">Bekker Primary School</h1>
              <p className="padding-top_large">Where dreams are made.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Principal Message */}
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="section-content padding-bottom_xxx-large">
          <div className=" padding-top_xxx-large padding-bottom_large medium-padding-left_large medium-padding-right_large">
            <div className="grid grid-wrap grid-align_vertical-center ">
              <div className=" size_1-of-1 medium-size_2-of-6 padding-bottom_large medium-padding-bottom_none ">
                <div className=" image3">
                  <Image
                    src="/img/school/SirOpperman.webp"
                    alt="Andre Opperman"
                    fill={true}
                  />
                </div>
              </div>
              <div className="size_1-of-1 medium-size_4-of-7  medium-padding-left_xxx-large">
                <h2 className="color-maroon ">Andre Opperman,</h2>
                <h3 className="padding-bottom_medium color-maroon">
                  Principal
                </h3>
                <p>
                  Welcome to Bekker Primary School!
                  <br />
                  <br />
                  Nestled in the picturesque Magaliesberge, our school is a
                  second home where children thrive academically, socially, and
                  emotionally. With dedicated educators and unique boarding
                  facilities, we provide a nurturing environment.
                  <br />
                  <br />
                  Our diverse sports program, cultural activities, and upcoming
                  events like a major production showcase students' talents.
                  Explore our revamped website for updates and curriculum
                  information. As we begin this academic journey, let's
                  celebrate learning in the stunning Magaliesberg.
                  <br />
                  <br />
                  Your partnership is crucial, and we look forward to a year of
                  growth and unforgettable experiences. Thank you for choosing
                  Bekker Primary School.
                  <br />
                  <br />
                  Warm regards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brief description of school */}
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="section-content padding-bottom_xxx-large">
          <div className="padding-top_xxx-large ">
            <h1 className="color-maroon">
              “EDUCATION IS FOR IMPROVING THE LIVES OF OTHERS.”
            </h1>
            <p className="padding-top_medium ">– Marian Wright Edelaman</p>
          </div>
          <div className="grid grid-wrap grid-align_horizontal-spread grid-align_vertical-center padding-top_large padding-bottom_large">
            <div className="size_1-of-1 medium-size_3-of-7 padding-bottom_large">
              <p>
                When contemplating a school curriculum, the usual associations
                are with subjects such as math, languages, and social sciences.
                However, the importance of instilling core values is often
                overlooked. At Bekker, we invite you to embrace a higher echelon
                of education.
                <br />
                <br />
                Beyond academic proficiency, we are dedicated to cultivating a
                foundation of essential values—respect, accountability, honesty,
                attitude, and loyalty. By seamlessly integrating these moral
                principles into our curriculum, we aim to ensure that our
                students not only leave equipped with the knowledge to succeed
                but also possess the compassion and emotional resilience to make
                meaningful contributions to a society characterized by peace and
                safety.
                <br />
                <br />
                Welcome to Bekker, where education extends beyond the
                conventional, shaping individuals who are not only academically
                adept but also morally grounded contributors to a harmonious
                society.
              </p>
            </div>

            <div className=" size_1-of-1 medium-size_3-of-6">
              <div className=" image2">
                <Image
                  src="/img/banners/schoolwall.webp"
                  alt="About Us"
                  fill={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brief description of education */}
      <div className="section" style={{ backgroundColor: "#800000" }}>
        <div className="section-content">
          <div className="padding-top_xxx-large padding-bottom_xxx-large">
            <div
              className="size_4-of-5 carousel"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="grid grid-wrap grid-align_horizontal-spread">
                <div className="size_1-of-2 padding-top_xxx-large">
                  <div className="size_1-of-1 grid grid-wrap padding-left_xxx-large">
                    <h2 className="color-maroon">
                      Bekker Boarding: Home Away From Home
                    </h2>
                    <p className="padding-top_xxx-large">
                      At Laerskool Bekker, boarding is more than a choice; it's
                      a transformative journey. Nestled in the serene
                      Magaliesburg Mountains, our tranquil setting shapes
                      independent, disciplined, and well-rounded individuals.
                      From Grades 1-7, our boarding experience offers a 'home
                      away from home,' blending structured discipline with
                      enriching extramural activities.
                    </p>
                  </div>
                </div>
                <div className="size_2-of-5 padding-around_small">
                  <CarouselImage images={images} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Events */}
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="section-content">
          <div className="padding-top_xxx-large padding-bottom_xxx-large">
            <h1 className="color-maroon">Events at Laerskool Bekker Primary</h1>
            <p className="padding-top_large size_1-of-1 medium-size_2-of-3">
              Embark on a journey of anticipation and joy as we unveil the
              uplifting events planned for our school. From inspiring
              educational experiences to heartwarming community gatherings, our
              calendar is filled with moments that nurture the spirit.
              <br />
              <br />
              To discover the blessings awaiting you, click on the button below.
              Let faith guide you through the excitement of upcoming events,
              where learning, connection, and celebration come together. Click
              now and step into a future filled with grace and inspiration!
            </p>
            <div className="padding-top_large">
              <Link href="/more/upcomming" style={{ textDecoration: `none` }}>
                <Button variant="getStarted" label="Upcoming Events" />
              </Link>
            </div>
          </div>
          <div className="padding-top_xxx-large padding-bottom_xxx-large">
            <Events />
          </div>
        </div>
      </div>
    </div>
  );
}
