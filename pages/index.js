import { HoverCard } from "@ui/card/card";
import Link from "next/link";
import Events from "@/lib/ui/eventes/events";
import Button from "@/lib/ui/button/button";
import Image from "next/image";

const hovercard = [
  {
    image: "/img/school/backtoschool.webp",
    title: "School",
    description:
      "Giving every child the opportunity to reach his or her full potential. Gehalte personeel wat vaardig is in beide Engels en Afrikaans, sowel as in hulle spesifieke vakgebied, aan te stel, tot voordeel van die skool.",
    link: "/school/about-school",
  },
  {
    image: "/img/hostel/hostel2.webp",
    title: "Hostel",
    description:
      "The decision to attend boarding school is not an easy one. Young children find it difficult to be away from their family. Moving away from the familiar in to the unknown is not a decision to be taken lightly.",
    link: "/hostel/about-hostel",
  },
];
export default function Home() {
  return (
    <div>
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
      <div className="section" style={{ backgroundColor: "maroon" }}>
        <div className="section-content">
          <div className="padding-top_xxx-large padding-bottom_xxx-large">
            <h1 className="color-white">
              Empowering Education and Boarding Excellence at Laerskool Bekker
              Primary
            </h1>
            <div className="grid grid-wrap grid-align_horizontal-space padding-top_xxx-large">
              <div
                className="size_1-of-1 medium-size_3-of-7 padding-around_large"
                style={{ backgroundColor: "#fff" }}
              >
                <h2 className="color-maroon">
                  Tailored Education at Laerskool Bekker
                </h2>
                <p className="padding-top_large">
                  At Laerskool Bekker, we champion personalized learning through
                  separate English and Afrikaans classes within the CAPS
                  curriculum. Our well-equipped classrooms strike a balance
                  between relaxation and discipline, fostering an environment
                  where your child can thrive. With ongoing upgrades and
                  exciting projects, we're committed to continuous improvement.
                  Our cutting-edge computer center and on-site Bekker Bekkies
                  Nursery School ensure your child's education is enriched with
                  the latest technology and optimal preparation for Grade R.
                </p>
              </div>
              <div
                className="size_1-of-1 medium-size_3-of-7 padding-around_large"
                style={{ backgroundColor: "#fff" }}
              >
                <h2 className="color-maroon">
                  Bekker Boarding: Home Away From Home
                </h2>
                <p className=" padding-top_large">
                  At Laerskool Bekker, boarding is more than a choice; it's a
                  transformative journey. Nestled in the serene Magaliesburg
                  Mountains, our tranquil setting shapes independent,
                  disciplined, and well-rounded individuals. From Grades 1-7,
                  our boarding experience offers a 'home away from home,'
                  blending structured discipline with enriching extramural
                  activities.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-wrap grid-align_horizontal-space padding-bottom_xxx-large padding-top_xxx-large">
            {hovercard.map((x) => {
              return (
                <div key={x.title}>
                  <div className="padding-around_small">
                    <HoverCard
                      title={x.title}
                      image={x.image}
                      description={x.description}
                      link={x.link}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
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
      {/* <div className="section">
        <div className="section-content">
          What parents have to say/like rating reviews from google
        </div>
      </div> */}
      {/* <div className="section">
        <div className="section-content">where we are located</div>
      </div> */}
    </div>
  );
}
