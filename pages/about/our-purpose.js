import Image from "next/image";
import PurposeImages from "@/lib/ui/images/images";

export default function OurPurpose() {
  return (
    <>
      {/* Banner */}
      <div className=" section aboutBanner">
        <div className="cutout-sectionLeft">
          <div className="section-content grid grid-align_horizontal-end grid-align_vertical-end">
            <div className="size_1-of-1 large-size_2-of-4 medium-padding-left_xx-large  medium-padding-bottom_xx-large">
              <PurposeImages color="#FFC82D" width={380} height={180} />
              <div className="size_1-of-1 padding-bottom_xx-large ">
                <h1 className="font-size_xx-large font-family_futuraDemi">
                  WELCOME TO
                </h1>
                <h2 className="font-size_x-large">
                  Laerskool <span className="color-primary">Bekker</span>{" "}
                  Primary
                </h2>
              </div>
              <div className="size_1-of-1 padding-bottom_large">
                <p className="font-size_x-medium">
                  At Bekker, we invite you to embrace a higher echelon of
                  education. Beyond academic proficiency, we are dedicated to
                  Cultivating a foundation of essential values, respect,
                  accountability, honesty, attitude, and loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About School */}
      <div className="section">
        <div className="grid grid-wrap grid-align_horizontal-spread">
          <div
            className="size_1-of-1  medium-size_4-of-7 "
            style={{ backgroundColor: "#6a0911" }}
          >
            <div className="contentLeft padding-top_xx-large medium-padding-right_xxx-large">
              <h1 className="color-white font-size_x-large">
                Laerskool Bekker: Nurturing Excellence in Education and
                Character Development
              </h1>
              <p className="color-white font-size_x-medium font-weight_regular padding-top_xxx-large ">
                At Bekker, we invite you to embrace a higher echelon of
                education. Beyond academic proficiency, we are dedicated to
                Cultivating a foundation of essential
                values-respect,accountability,honesty,attitude and loyalty.
              </p>
            </div>
          </div>
          <div className="banner size_1-of-1 medium-size_3-of-7">
            <Image src="/img/school/excellence.png" alt="back to school" fill />
          </div>
        </div>
      </div>
      {/* Vision & Mission */}
      <div className="section">
        <div className="grid grid-wrap padding-top_xxx-large">
          <div className="padding-left_large padding-right_large medium-padding-left_xxx-large medium-padding-right_xxx-large">
            <h1 className="color-maroon font-size_x-large">Vision</h1>
            <p className="color-maroon font-size_x-medium padding-top_x-large">
              A value drive school striving towards excellence.
            </p>
          </div>
          <div className="padding-left_large padding-right_large medium-padding-left_xxx-large medium-padding-right_xxx-large padding-top_xxx-large">
            <h1 className="color-maroon font-size_x-large">Mission</h1>
            <ul className="color-maroon font-size_x-medium custom-list">
              <li>Creating a happy, positive and safe learning environment.</li>
              <li>
                Strive for positive partnerships between parents, teachers,
                learners and community.
              </li>
              <li>
                Qualified and passionate staff who through dedicated teaching
                give every learner the opportunity to develop their potential.
              </li>
            </ul>
          </div>
        </div>
        {/* Values */}
        <div className="padding-top_xxx-large padding-left_large padding-right_large medium-padding-left_xxx-large medium-padding-right_xxx-large">
          <h1 className="color-maroon font-size_x-large">
            Cultivating Character, Fostering Excellence – Our Core Values
          </h1>
          <p className="color-maroon font-size_x-medium padding-top_x-large">
            Beyond academic proficiency, Laerskool Bekker is unwavering in its
            commitment to nurturing a foundation of indispensable
            values—respect, honesty, accountability, attitude, and loyalty.
            These core principles are seamlessly woven into our curriculum,
            ensuring that our students not only acquire the knowledge to excel
            but also develop a deep sense of respect for others, a commitment to
            honesty, a strong sense of accountability, a positive attitude, and
            unwavering loyalty.
          </p>
          <p className="color-maroon font-size_x-medium padding-top_x-large">
            At the heart of our educational approach is the belief that these
            values are integral to shaping well-rounded individuals. We aspire
            to graduate students who not only possess the academic prowess to
            succeed but also exhibit compassion and emotional resilience. By
            instilling these values, we aim to empower our students to make
            meaningful contributions to a society characterized by harmony,
            safety, and a collective commitment to excellence.
          </p>
        </div>
        <div className="padding-top_xx-large grid grid-wrap grid-align_horizontal-spread medium-padding-left_xxx-large medium-padding-right_xxx-large padding-bottom_xxx-large">
          <div className="size_1-of-1 medium-size_1-of-5 grid grid-wrap padding-top_x-large">
            <div className="size_1-of-1 grid grid-align_horizontal-center">
              <Image
                src="/img/icons/values/respect.png"
                alt="Respect"
                height={150}
                width={150}
              />
            </div>
            <div className="size_1-of-1 text-align_center color-maroon font-size_x-medium font-family_futuraDemi">
              Respect
            </div>
          </div>
          <div className="size_1-of-1 medium-size_1-of-5 grid grid-wrap padding-top_x-large">
            <div className="size_1-of-1 grid grid-align_horizontal-center">
              <Image
                src="/img/icons/values/honesty.png"
                alt="Honesty"
                height={150}
                width={150}
              />
            </div>
            <div className="size_1-of-1 text-align_center color-maroon font-size_x-medium font-family_futuraDemi">
              Honesty
            </div>
          </div>
          <div className="size_1-of-1 medium-size_1-of-5 grid grid-wrap padding-top_x-large">
            <div className="size_1-of-1 grid grid-align_horizontal-center">
              <Image
                src="/img/icons/values/accountability.png"
                alt="Accountability"
                height={150}
                width={150}
              />
            </div>
            <div className="size_1-of-1 text-align_center color-maroon font-size_x-medium font-family_futuraDemi">
              Accountability
            </div>
          </div>
          <div className="size_1-of-1 medium-size_1-of-5 grid grid-wrap padding-top_x-large">
            <div className="size_1-of-1 grid grid-align_horizontal-center">
              <Image
                src="/img/icons/values/attitude.png"
                alt="Attitude"
                height={150}
                width={150}
              />
            </div>
            <div className="size_1-of-1 text-align_center color-maroon font-size_x-medium font-family_futuraDemi">
              Attitude
            </div>
          </div>
          <div className="size_1-of-1 medium-size_1-of-5 grid grid-wrap padding-top_x-large">
            <div className="size_1-of-1 grid grid-align_horizontal-center">
              <Image
                src="/img/icons/values/loyalty.png"
                alt="Loyalty"
                height={150}
                width={150}
              />
            </div>
            <div className="size_1-of-1 text-align_center color-maroon font-size_x-medium font-family_futuraDemi">
              Loyalty
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
