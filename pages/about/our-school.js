import Image from "next/image";
import { SortsHoverCard, ExtraActivities } from "@/lib/ui/card/card";
import { SchoolImages, OurSchoolImage } from "@/lib/ui/images/images";
import Head from "next/head";

const SportsCards = [
  {
    image: "/img/sports/rugbyteam.jpg",
    title: "Rugby",
    description:
      " Played in a safe and modified format, primary school rugby introduces the fundamentals of the sport, emphasizing teamwork, sportsmanship, and basic skills such as passing, catching, and running with the ball. The focus is on fostering a love for physical activity, building social skills, and instilling values of fair play.",
  },
  {
    image: "/img/sports/cricket.webp",
    title: "Cricket",
    description:
      "Primary school cricket is a dynamic and inclusive bat-and-ball sport tailored for young children, typically aged 6 to 13. Played in a simplified format, primary school cricket introduces fundamental skills such as batting, bowling, and fielding. The emphasis is on developing hand-eye coordination, teamwork, and fair play. ",
  },
  {
    image: "/img/sports/hokey.webp",
    title: "Hockey",
    description:
      "Primary school hockey, for ages 6 to 13, emphasizes fundamental skills in a dynamic team setting. With simplified rules, it promotes physical activity, teamwork, and fair play, fostering a love for sports and social skills.",
  },
  {
    image: "/img/sports/athletics.webp",
    title: "Athletics",
    description:
      "Primary school athletics, for ages 6 to 13, includes track and field events, promoting fitness, teamwork, and individual achievement. It encourages fundamental motor skills and a love for physical activity in a supportive environment.",
  },
  {
    image: "/img/sports/swimming.jpg",
    title: "Swimming",
    description:
      "Primary school swimming, for ages 6 to 13, teaches essential swimming skills, water safety, and builds confidence in a supportive environment. It lays the foundation for a lifelong enjoyment of aquatic activities.",
  },
  {
    image: "/img/sports/netball.jpeg",
    title: "Netball",
    description:
      "Primary school Netball, for ages 6 to 13, is a team sport emphasizing passing, shooting, and teamwork. With simplified rules, it promotes basic ball-handling skills and provides an inclusive environment for kids to enjoy team-based competition.",
  },
];
const ExtraActivitiesCard = [
  {
    image: "/img/sports/revue.JPG",
    title: "Revue",
    description:
      "Primary school revue, for ages 6 to 13, is a lively showcase of student talents, including singing, dancing, and skits. It fosters creativity, teamwork, and confidence in an inclusive and entertaining setting.",
  },
  {
    image:
      "https://lsbekker.s3.eu-north-1.amazonaws.com/Files/img/sports/drama.JPG",
    title: "Drama",
    description:
      "Primary school drama, for ages 6 to 13, lets students explore creativity through acting and performance. It builds communication skills, self-confidence, and a love for the arts in a fun and supportive environment.",
  },
  {
    image: "/img/sports/readingweek4.jpg",
    title: "Reading week",
    description:
      "Primary school Reading Week, for all ages, promotes a love for reading through activities like story sessions and book clubs. It enhances literacy skills and fosters a supportive reading culture in the school community.",
  },
  {
    image: "/img/sports/chess.png",
    title: "Chess",
    description:
      "Primary school chess, for ages 6 to 13, teaches the strategic game of chess. It enhances critical thinking and problem-solving skills in a fun, competitive environment, fostering a love for the game.",
  },
  {
    image: "/img/sports/Ballet.png",
    title: "Ballet",
    description:
      "Primary school ballet, for ages 6 to 13, introduces basic techniques, posture, and movement. It nurtures coordination, flexibility, and a love for dance in a supportive and creative environment.",
  },
  {
    image: "/img/sports/croscountry.jpg",
    title: "Cross Country",
    description:
      "Primary school Cross Country is a lively running event for ages 6 to 13, promoting fitness and endurance. Kids navigate varied terrains, fostering a love for outdoor activities and a healthy, active lifestyle.",
  },
];

export default function OurSchool() {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Our School</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta property="og:title" content="Our School" />
        <link rel="canonical" href="https://lsbekker.com/about/our-school" />
      </Head>

      {/* Banner */}
      <div className="section prefect">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <OurSchoolImage color="#FFFFFF" width={450} height={200} />
            <div>
              <h1 className="font-size_xx-large">Welcome To</h1>
              <h1 className="padding-top_medium">
                the future of <span className="color-primary">education</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Welcome */}
      <div className="section">
        <div className="section-content ">
          <div className="grid grid-wrap grid-align_horizontal-spread grid-align_vertical-spread padding-top_xxx-large padding-bottom_large">
            <div className="size_1-of-1 font-size_x-medium color-maroon font-weight_regular">
              <p className="color-maroon font-size_x-medium padding-top_x-large">
                When contemplating a school curriculum, the usual associations
                are with subjects such as math, languages, and social sciences.
                However, the importance of instilling core values is often
                overlooked. At Bekker, we invite you to embrace a higher echelon
                of education.
              </p>
              <p className="color-maroon font-size_x-medium padding-top_x-large">
                Beyond academic proficiency, we are dedicated to cultivating a
                foundation of essential values—respect, accountability, honesty,
                attitude, and loyalty. By seamlessly integrating these moral
                principles into our curriculum, we aim to ensure that our
                students not only leave equipped with the knowledge to succeed
                but also possess the compassion and emotional resilience to make
                meaningful contributions to a society characterized by peace and
                safety.
              </p>
              <p className="color-maroon font-size_x-medium padding-top_x-large">
                Welcome to Bekker, where education extends beyond the
                conventional, shaping individuals who are not only academically
                adept but also morally grounded contributors to a harmonious
                society.
              </p>
            </div>
          </div>
          {/* Academics */}
          <div className="padding-top_xxx-large ">
            <h1 className="color-maroon font-family_futuraDemi">Academics</h1>
          </div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#f4eeee" }}>
        <div className="section-content padding-top_xxx-large">
          <div className="padding-top_large  ">
            <div className="grid grid-align_horizontal-end">
              <SchoolImages color="#FFC82D" width={280} height={280} />
            </div>

            <p className=" size_1-of-1 padding-top_large padding-bottom_large font-size_x-medium font-weight_regular large-size_4-of-5">
              We offer English and Afrikaans classes, and provide parallel
              medium education for Grade 1 to 3, with dual medium education for
              Grade 4 to 7. We adhere to the CAPS curriculum, ensuring a
              comprehensive and structured learning experience. Introducing
              innovative subjects, such as Robotics, reflects our commitment to
              staying at the forefront of education.
            </p>
            <p className=" size_1-of-1 padding-top_large padding-bottom_large font-size_x-medium font-weight_regular large-size_4-of-5">
              Our well-equipped classrooms provide an optimal environment for
              your child to thrive, fostering both relaxation and discipline.
              Continuous upgrades to our premises are underway, accompanied by
              exciting projects in the pipeline.
            </p>
            <p className=" size_1-of-1 padding-top_large padding-bottom_large font-size_x-medium font-weight_regular">
              The state-of-the-art computer center boasts 32 computers,
              employing the latest technology to enhance the learning process.
              Additionally, our Bekker Bekkies Nursery School, situated on the
              school premises, is highly recommended as the ideal preparation
              for Grade R, offering a solid foundation for your child's
              educational journey.
            </p>
          </div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#6a0911" }}>
        <div className="grid grid-wrap grid-align_horizontal-spread contentRightSmall">
          <div
            className="size_1-of-1 medium-size_3-of-7"
            style={{ position: "relative", height: "350px" }}
          >
            <Image
              src="/img/subjects/computer.jpg"
              alt="Computer Science"
              fill
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-2 grid grid-align_vertical-center padding-top_large medium-padding-top_none">
            <div className="large-padding-left_xx-large  medium-padding-left_large ">
              <div>
                <h1 className="color-white padding-bottom_x-large">
                  Computer Science
                </h1>
                <p className="color-white font-size_x-medium padding-bottom_large">
                  Learning computer science in primary school benefits students
                  by fostering critical thinking, digital literacy, creativity,
                  and problem-solving skills. It provides early exposure to STEM
                  (Science, Technology, Engineering, and Mathematics.), prepares
                  for the future, promotes collaboration, and enhances
                  adaptability.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-wrap grid-align_horizontal-spread contentLeftSmall hide-mobile">
          <div className="size_1-of-1 medium-size_1-of-2 grid grid-align_vertical-center padding-top_large medium-padding-top_none">
            <div className="large-padding-right_xx-large  medium-padding-right_large ">
              <div>
                <h1 className="color-white padding-bottom_x-large">Robotics</h1>
                <p className="color-white font-size_x-medium">
                  A robotics class in primary school introduces students to the
                  exciting world of designing, building, and programming robots.
                  It provides a hands-on learning experience that combines
                  elements of science, technology, engineering, and mathematics
                  (STEM).
                </p>
              </div>
            </div>
          </div>
          <div
            className="size_1-of-1 medium-size_1-of-2"
            style={{ position: "relative", height: "400px" }}
          >
            <Image
              src="https://lsbekker.s3.eu-north-1.amazonaws.com/Files/img/subjects/Robotics.jpg"
              alt="Robotics"
              fill
            />
          </div>
        </div>
        <div className="grid grid-wrap contentLeftSmall hide-desktop">
          <div
            className="size_1-of-1 medium-size_1-of-2"
            style={{ position: "relative", height: "350px" }}
          >
            <Image
              src="https://lsbekker.s3.eu-north-1.amazonaws.com/Files/img/subjects/Robotics.jpg"
              alt="Robotics"
              fill
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-2 grid grid-align_vertical-center padding-top_large medium-padding-top_none">
            <div className="large-padding-right_xx-large  medium-padding-right_large ">
              <div>
                <h1 className="color-white padding-bottom_x-large">Robotics</h1>
                <p className="color-white font-size_x-medium">
                  A robotics class in primary school introduces students to the
                  exciting world of designing, building, and programming robots.
                  It provides a hands-on learning experience that combines
                  elements of science, technology, engineering, and mathematics
                  (STEM).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-wrap contentRightSmall padding-top_large medium-padding-top_none">
          <div
            className="size_1-of-1 medium-size_1-of-2"
            style={{ position: "relative", height: "400px" }}
          >
            <Image
              src="/img/subjects/farming.jpg"
              alt="Agricultural Studies"
              fill
            />
          </div>
          <div className="size_1-of-1 medium-size_1-of-2 grid grid-align_vertical-center padding-top_large medium-padding-top_none">
            <div className="large-padding-left_xx-large  medium-padding-left_large ">
              <div>
                <h1 className="color-white padding-bottom_x-large">
                  Agricultural Studies
                </h1>
                <p className="color-white font-size_x-medium">
                  Introducing Agricultural Studies, a dynamic and hands-on
                  subject designed for Grade 7 students as an additional
                  offering. This innovative curriculum is part of a piloted
                  project in collaboration with the Department of Education,
                  aimed at fostering a deeper understanding of agriculture's
                  vital role in our lives. Through engaging lessons and
                  practical activities, students explore topics such as crop
                  cultivation, animal husbandry, and environmental
                  sustainability, empowering them with essential knowledge for a
                  sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sport */}
      <div className="section">
        <div className="section-content padding-top_xxx-large padding-bottom_xxx-large">
          <h1 className="color-maroon padding-bottom_xxx-large">Sports</h1>
          <p className="color-maroon font-size_x-medium">
            Sport forms an integral part of life at Bekker. It provides the
            learners with the opportunity to show their talents. Laerskool
            Bekker offers both summer and winter sports. Laerskool Bekker has
            well maintained sport facilities. Sport is offered at both a
            competitive and recreational level so that all learners are
            encouraged to participate. Our emphasis is on the enjoyment of
            sport. CULTURE : Learners explore their creative talents through
            art, drama, music and dance. Our learners participate in eisteddfods
            and enjoy being part of the annual play.
          </p>
          <div className="padding-top_xxx-large grid grid-wrap">
            {SportsCards.map((type) => {
              return (
                <div
                  key={type.title}
                  className="size_1-of-1 medium-size_1-of-3 grid grid-align_horizontal-center padding-around_large"
                >
                  <SortsHoverCard
                    image={type.image}
                    title={type.title}
                    description={type.description}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="color-maroon padding-top_xxx-large">
              Extracurricular activities
            </h1>
          </div>
          <div className="padding-top_xxx-large grid grid-wrap">
            {ExtraActivitiesCard.map((type) => {
              return (
                <div
                  key={type.title}
                  className="size_1-of-1 medium-size_1-of-3 grid grid-align_horizontal-center padding-around_large"
                >
                  <ExtraActivities
                    image={type.image}
                    title={type.title}
                    description={type.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* School Application & Contact Us
      <div className="section">
        <div className="section-content">
          <h1>If you have any questions please feel free to contact us</h1>
        </div>
      </div> */}
    </>
  );
}
