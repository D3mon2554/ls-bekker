import Image from "next/image";
import { SortsHoverCard, TeachersCard } from "@/lib/ui/card/card";
import Card from "@/lib/ui/card/card";

const cardContent = [
  {
    image: "/img/subjects/computerSience.webp",
    title: "Computer Science",
    description:
      "Learning computer science in primary school benefits students by fostering critical thinking, digital literacy, creativity, and problem-solving skills. It provides early exposure to STEM (Science, Technology, Engineering, and Mathematics.), prepares for the future, promotes collaboration, and enhances adaptability.",
  },
  {
    image: "/img/subjects/robotics.webp",
    title: "Robotics",
    description:
      "A robotics class in primary school introduces students to the exciting world of designing, building, and programming robots. It provides a hands-on learning experience that combines elements of science, technology, engineering, and mathematics (STEM).",
  },
];
const teachers = [
  {
    Image: "/img/school/teachers/angelique.jpg",
    Name: "Angelique",
    Slogan: "Admin",
  },
  {
    Image: "/img/school/teachers/AnneMarieRadiceadmin.jpg",
    Name: "Anne Marie",
    Slogan: "Admin",
  },
  {
    Image: "/img/school/teachers/Janineadmin.jpg",
    Name: "Janine",
    Slogan: "Admin",
  },
];
const hovercard = [
  {
    image: "/img/sports/rugby.webp",
    title: "Rugby",
    description:
      "Giving every child the opportunity to reach his or her full potential. Gehalte personeel wat vaardig is in beide Engels en Afrikaans, sowel as in hulle spesifieke vakgebied, aan te stel, tot voordeel van die skool.",
  },
  {
    image: "/img/sports/hokey.webp",
    title: "Hockey",
    description:
      "The decision to attend boarding school is not an easy one. Young children find it difficult to be away from their family. Moving away from the familiar in to the unknown is not a decision to be taken lightly.",
  },
  {
    image: "/img/sports/athletics.webp",
    title: "Athletics",
    description:
      "Giving every child the opportunity to reach his or her full potential. Gehalte personeel wat vaardig is in beide Engels en Afrikaans, sowel as in hulle spesifieke vakgebied, aan te stel, tot voordeel van die skool.",
  },
  {
    image: "/img/sports/cricket.webp",
    title: "Cricket",
    description:
      "The decision to attend boarding school is not an easy one. Young children find it difficult to be away from their family. Moving away from the familiar in to the unknown is not a decision to be taken lightly.",
  },
];

export default function AboutOurSchool() {
  return (
    <>
      <div className="section prefect">
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
        <div className="section-content ">
          <div className="grid grid-wrap grid-align_horizontal-spread grid-align_vertical-center padding-top_xxx-large padding-bottom_large">
            <div className="size_1-of-1 medium-size_3-of-7 padding-bottom_large">
              <h1 className="padding-bottom_large color-maroon">
                Welcome to the future of education:
              </h1>
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
        <div className="section-content padding-bottom_xxx-large">
          <div className="padding-top_xxx-large padding-bottom_xxx-large">
            <h1 className="color-white">Academics/Akademie</h1>
            <p className="color-white size_1-of-1 medium-size_1-of-1 padding-top_large padding-bottom_large">
              Distinct English and Afrikaans classes guarantee that your
              children receive education in their preferred language. We adhere
              to the CAPS curriculum, ensuring a comprehensive and structured
              learning experience. Introducing innovative subjects, such as
              Robotics, reflects our commitment to staying at the forefront of
              education.
              <br />
              <br />
              Our well-equipped classrooms provide an optimal environment for
              your child to thrive, fostering both relaxation and discipline.
              Continuous upgrades to our premises are underway, accompanied by
              exciting projects in the pipeline.
              <br />
              <br />
              The state-of-the-art computer center boasts 32 computers,
              employing the latest technology to enhance the learning process.
              Additionally, our Bekker Bekkies Nursery School, situated on the
              school premises, is highly recommended as the ideal preparation
              for Grade R, offering a solid foundation for your child's
              educational journey.
            </p>
          </div>
          <div className="grid grid-wrap">
            {cardContent.map((x) => {
              return (
                <div
                  className="size_1-of-1 medium-size_1-of-2 padding-around_large"
                  key={x.title}
                >
                  <Card
                    image={x.image}
                    title={x.title}
                    description={x.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="section-content">
          <div className="padding-top_xxx-large">
            <h1 className="color-maroon">Sports</h1>
            <p className="size_1-of-1 padding-top_xxx-large">
              Sport forms an integral part of life at Bekker. It provides the
              learners with the opportunity to show their talents. Laerskool
              Bekker offers both summer and winter sports. Laerskool Bekker has
              well maintained sport facilities. Sport is offered at both a
              competitive and recreational level so that all learners are
              encouraged to participate. Our emphasis is on the enjoyment of
              sport. CULTURE : Learners explore their creative talents through
              art, drama, music and dance. Our learners participate in
              eisteddfods and enjoy being part of the annual play.
            </p>
          </div>
          <div className="grid grid-wrap grid-align_horizontal-spread medium-grid-align_horizontal-start padding-bottom_xxx-large padding-top_xxx-large">
            {hovercard.map((x) => {
              return (
                <div key={x.title}>
                  <div className="padding-around_medium">
                    <SortsHoverCard
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
      <div className="section">
        <div className="section-content">Extra Activities</div>
      </div>
      <div className="section" style={{ backgroundColor: "maroon" }}>
        <div className="section-content grid grid-align_vertical-center padding-top_xx-large padding-bottom_xx-large">
          <div className="color-white">
            <div>
              <h1>School Fees | Skool fonds</h1>
            </div>
            <div className="grid grid-wrap padding-top_xxx-large">
              <div className="size_1-of-1 medium-size_1-of-4 padding-top_large">
                <h3>Annual payments R 12 540.00</h3>
                <p className="padding-top_large">
                  Annually (before the end of Feb 2023) R 11 400. (10 % discount
                  for advance payment)
                </p>
              </div>
              <div className="size_1-of-1 medium-size_1-of-4 medium-padding-left_xxx-large padding-top_large borderLine">
                <h3>Quarterly payments</h3>
                <ul className="line">
                  <li>1st Quarter – R 3 420.00</li>
                  <li>2nd Quarter – R 3 420.00</li>
                  <li>3rd Quarter – R 3 420.00</li>
                  <li>4th Quarter – R 2 280.00</li>
                </ul>
              </div>
              <div className="size_1-of-1 medium-size_1-of-4  medium-padding-left_xx-large padding-top_large borderLine">
                <h3>Bi-Annually</h3>
                <ul className="line">
                  R 6 270.00 payable 11 Jan. (Discount included)
                </ul>
                <ul className="line">
                  R 6 270.00 payable 7 June. (Discount included)
                </ul>
              </div>
              <div className="size_1-of-1 medium-size_1-of-4 medium-padding-left_xxx-large padding-top_large borderLine">
                <h3>Monthly payments</h3>
                <p className="padding-top_large">
                  Monthly payments of R 1 140.00 by EFT before the 7th of each
                  month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="section-content">
          <div className="grid grid-wrap grid-align_horizontal-start ">
            {teachers.map((x) => {
              return (
                <div key={x.Name}>
                  <div className="padding-around_small">
                    <TeachersCard
                      Name={x.Name}
                      Image={x.Image}
                      Slogan={x.Slogan}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
