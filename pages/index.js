import Link from "next/link";
import Head from "next/head";
import Button from "@/lib/ui/button/button";
import Image from "next/image";
import { PrincipalCard, EducationCard } from "@/lib/ui/card/card";
import EventCountdown from "@/lib/ui/eventcountdown/evetscountdown";
import { FootprintsGroup } from "@/lib/ui/images/images";

export default function Home() {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Laerskool Bekker Primary</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta property="og:title" content="Laerskool Bekker Primary" />
        <link rel="canonical" href="https://lsbekker.com" />
      </Head>
      {/* Banner */}
      <div className="section landingContainer">
        <div className="cutout-section-white">
          <div className="section-content grid grid-wrap grid-align_vertical-center">
            <div className="size_1-of-1 padding-top_xxx-large ">
              <h1 className="test color-secondary">Laerskool</h1>
              <h1 className="color-maroon test">Bekker</h1>
              <h1 className="test color-secondary">Primary</h1>
              <p
                className=" font-size_medium padding-top_medium color-maroon font-weight_black"
                style={{ letterSpacing: "2px" }}
              >
                STAAN VAS | STAND FIRM
              </p>
            </div>
            <FootprintsGroup color="#6a0911" width={300} height={180} />
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
            className="size_1-of-1 medium-size_3-of-7"
            style={{ backgroundColor: "#6a0911" }}
          >
            <div className="medium-padding-left_xx-large">
              <PrincipalCard />
            </div>
          </div>
          <div className="medium-padding-left_xx-large medium-padding-right_xx-large padding-right_large padding-left_large padding-top_x-large medium-size_4-of-7 grid grid-wrap grid-align_vertical-center">
            <p className="color-secondary font-size_x-medium font-weight_regular">
              Welcome to Bekker Primary School!
              <br />
              <br />
              Nestled in the picturesque Magaliesberge, our school is a second
              home where children thrive academically, socially, and
              emotionally. With dedicated educators and unique boarding
              facilities, we provide a nurturing environment.
              <br />
              <br />
              Our diverse sports program, cultural activities, and upcoming
              events like a major production showcase students' talents. Explore
              our revamped website for updates and curriculum information. As we
              begin this academic journey, let's celebrate learning in the
              stunning Magaliesberg.
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
        <div
          className="grid grid-wrap grid-align_horizontal-spread padding-top_xxx-large"
          style={{ position: "relative" }}
        >
          <div className="padding-left_xx-large padding-right_xx-large medium-size_4-of-8 grid grid-wrap padding-top_xx-large ">
            <p className="color-secondary font-size_x-medium font-weight_regular">
              When contemplating a school curriculum, the usual associations are
              with subjects such as math, languages, and social sciences.
              However, the importance of instilling core values is often
              overlooked. At Bekker, we invite you to embrace a higher echelon
              of education.
              <br />
              <br />
              Beyond academic proficiency, we are dedicated to cultivating a
              foundation of essential values—respect, accountability, honesty,
              attitude, and loyalty. By seamlessly integrating these moral
              principles into our curriculum, we aim to ensure that our students
              not only leave equipped with the knowledge to succeed but also
              possess the compassion and emotional resilience to make meaningful
              contributions to a society characterized by peace and safety.
              <br />
              <br />
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
            <div className="padding-around_medium  padding-top_large">
              <p className="font-size_x-medium font-weight_regular">
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
            <div className="padding-top_xxx-large padding-bottom_xxx-large padding-left_large padding-right_large medium-padding-left_none medium-padding-right_none">
              <Link href="/calendar/upcoming">
                <Button label="Learn More" variant="submit" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* school */}
      <div className="section">
        <div className=" medium-padding-left_xx-large">
          <div className="grid grid-wrap grid-align_horizontal-spread padding-bottom_xx-large padding-top_xx-large ">
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
                  <br />
                  <br />
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
            <div className=" images">
              <Image
                src="/img/hostel/hostelluange.PNG"
                alt="hostel luange"
                fill
              />
            </div>
          </div>
        </div>
        <div className="medium-padding-right_xx-large">
          <div className="grid grid-wrap padding-bottom_xx-large">
            <div className="size_1-of-1 medium-size_1-of-2 image">
              <Image src="/img/school/classroom.jpg" alt="class room" fill />
            </div>
            <div className="size_1-of-1 medium-size_1-of-2 grid grid-wrap grid-align_vertical-space medium-padding-left_xxx-large padding-bottom_xx-large medium-padding-bottom_none padding-left_small padding-right_small">
              <div className="size_1-of-1 padding-top_large medium-padding-top_none">
                <h1 className="font-size_x-large color-maroon">
                  Bekker School: Where Education Becomes Fun
                </h1>
              </div>
              <div>
                <p className="font-size_x-medium font-weight_regular">
                  Laerskool Bekker is a public school in Gauteng, serving
                  Afrikaans and English-speaking children from pre-school to
                  grade 7. With 500 learners, approximately 150 in grades 1 to 7
                  reside in the hostel. An active governing body, primarily
                  chosen by parents, oversees all school governance, including
                  finance, asset management, policy, and personal selection.
                  Capable and experienced staff manage the school's professional
                  aspects.
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
    </>
  );
}
