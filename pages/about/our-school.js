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

export default function OurSchool() {
  return (
    <>
      {/* Banner */}
      <div className="section prefect">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
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
          <div className="grid grid-wrap grid-align_horizontal-spread grid-align_vertical-center padding-top_xxx-large padding-bottom_large">
            <div className="size_1-of-1 font-size_x-medium color-maroon font-weight_regular">
              <p>
                When contemplating a school curriculum, the usual associations
                are with subjects such as math, languages, and social sciences.
                However, the importance of instilling core values is often
                overlooked. At Bekker, we invite you to embrace a higher echelon
                of education.
                <div className="size_1-of-1 padding-top_x-large"></div>
                Beyond academic proficiency, we are dedicated to cultivating a
                foundation of essential values—respect, accountability, honesty,
                attitude, and loyalty. By seamlessly integrating these moral
                principles into our curriculum, we aim to ensure that our
                students not only leave equipped with the knowledge to succeed
                but also possess the compassion and emotional resilience to make
                meaningful contributions to a society characterized by peace and
                safety.
                <div className="size_1-of-1 padding-top_x-large"></div>
                Welcome to Bekker, where education extends beyond the
                conventional, shaping individuals who are not only academically
                adept but also morally grounded contributors to a harmonious
                society.
              </p>
            </div>
          </div>
          {/* Academics */}
          <div className="padding-top_xxx-large">
            <h1 className="color-maroon font-family_futuraDemi">Academics</h1>
          </div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#6a0911" }}>
        <div className="section-content padding-bottom_xxx-large">
          <div className="padding-top_xx-large padding-bottom_xxx-large">
            <p className="color-white size_1-of-1 padding-top_large padding-bottom_large font-size_x-medium font-weight_regular">
              Distinct English and Afrikaans classes guarantee that your
              children receive education in their preferred language. We adhere
              to the CAPS curriculum, ensuring a comprehensive and structured
              learning experience. Introducing innovative subjects, such as
              Robotics, reflects our commitment to staying at the forefront of
              education.
              <div className="size_1-of-1 padding-top_x-large"></div>
              Our well-equipped classrooms provide an optimal environment for
              your child to thrive, fostering both relaxation and discipline.
              Continuous upgrades to our premises are underway, accompanied by
              exciting projects in the pipeline.
              <div className="size_1-of-1 padding-top_x-large"></div>
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
    </>
  );
}
