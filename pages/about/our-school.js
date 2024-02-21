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
          <div className="padding-top_xxx-large padding-bottom_x-large">
            <h1 className="color-maroon font-family_futuraDemi">Academics</h1>
          </div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#6a0911" }}>
        <div className="section-content padding-bottom_xxx-large">
          <div className="padding-top_large padding-bottom_xxx-large ">
            <p className="color-white size_1-of-1 padding-top_large padding-bottom_large font-size_x-medium font-weight_regular size_4-of-5">
              Distinct English and Afrikaans classes guarantee that your
              children receive education in their preferred language. We adhere
              to the CAPS curriculum, ensuring a comprehensive and structured
              learning experience. Introducing innovative subjects, such as
              Robotics, reflects our commitment to staying at the forefront of
              education.
            </p>
            <p className="color-white size_1-of-1 padding-top_large padding-bottom_large font-size_x-medium font-weight_regular size_4-of-5">
              Our well-equipped classrooms provide an optimal environment for
              your child to thrive, fostering both relaxation and discipline.
              Continuous upgrades to our premises are underway, accompanied by
              exciting projects in the pipeline.
            </p>
            <p className="color-white size_1-of-1 padding-top_large padding-bottom_large font-size_x-medium font-weight_regular">
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
    </>
  );
}
