import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="section aboutBanner">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <div>
              <h1>Welcome To Laerskool Bekker Primary</h1>
              <p className="padding-top_large size_1-of-1 medium-size_1-of-2">
                At Bekker, we invite you to embrace a higher echelon of
                education. Beyond academic proficiency, we are dedicated to
                Cultivating a foundation of essential
                values-respect,accountability,honesty,attitude and loyalty.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="section-content">
          <div className="grid grid-wrap grid-align_horizontal-spread grid-align_vertical-center">
            <div className="padding-top_xxx-large padding-bottom_xxx-large size_1-of-1 medium-size_3-of-6">
              <h1 className="color-maroon">
                Laerskool Bekker: Nurturing Excellence in Education and
                Character Development
              </h1>
              <p className="padding-top_xxx-large">
                Laerskool Bekker stands as a beacon of education, shaping the
                future of young minds in Gauteng. With a proud community of 500
                learners from diverse backgrounds, our commitment to excellence
                resonates through every corridor.
                <br />
                <br />
                Our hostel provides a nurturing home for 150 English-speaking
                students from grades 1 to 7, fostering a holistic learning
                environment. At the heart of our success is a dynamic governing
                body, passionately overseeing every facet of school governance,
                from finance to policy, ensuring a foundation of excellence.
                <br />
                <br />
                Led by a team of capable and experienced professionals, our
                school thrives under the guidance of educators dedicated to
                unlocking the full potential of each child. At Laerskool Bekker,
                we don't just educate; we inspire a future where knowledge and
                character converge for a lifetime of success.
              </p>
            </div>
            <div className="padding-top_xxx-large padding-bottom_xxx-large size_1-of-1 medium-size_3-of-7">
              <div className=" image">
                <Image
                  src="/img/banners/school.webp"
                  alt="About Us"
                  fill={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="section-content">
          <div className="grid grid-wrap ">
            <div className="size_1-of-1 medium-size_3-of-5 padding-bottom_xxx-large padding-top_xxx-large">
              <h1 className="color-maroon">Vision:</h1>
              <p className="padding-top_large">
                Laerskool Bekker Primary: Igniting leaders through values-driven
                education. Inspiring potential, fostering excellence, and
                shaping compassionate leaders.
              </p>
            </div>
            <div className="size_1-of-1 medium-size_3-of-5 padding-bottom_xxx-large padding-top_xxx-large">
              <h1 className="color-maroon">Mission:</h1>
              <p className="padding-top_large">
                <div>
                  1. Cultivating Joy: Fostering a positive, safe, and joyful
                  learning environment where every child thrives.
                </div>
                <div className="padding-top_large">
                  2. Building Partnerships: Striving for positive collaborations
                  among parents, teachers, learners, and the community to create
                  a united and supportive educational ecosystem.
                </div>
                <div className="padding-top_large">
                  3. Empowering Potential: Enlisting qualified and passionate
                  staff dedicated to providing personalized teaching, ensuring
                  that each learner has the opportunity to unfold and maximize
                  their unique potential.
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="section">
        <div className="section-content">Our Mission</div>
      </div> */}
      <div className="section" style={{ backgroundColor: "rgb(128, 25, 25)" }}>
        <div className="section-content">
          <div className="size_1-of-1 medium-size_3-of-4 padding-bottom_xxx-large padding-top_xxx-large">
            <h1 className="color-white">
              Laerskool Bekker: Cultivating Character, Fostering Excellence –
              Our Core Values
            </h1>
            <p className="padding-top_large color-white">
              Beyond academic proficiency, Laerskool Bekker is unwavering in its
              commitment to nurturing a foundation of indispensable
              values—respect, honesty, accountability, attitude, and loyalty.
              These core principles are seamlessly woven into our curriculum,
              ensuring that our students not only acquire the knowledge to excel
              but also develop a deep sense of respect for others, a commitment
              to honesty, a strong sense of accountability, a positive attitude,
              and unwavering loyalty.
              <br />
              <br />
              At the heart of our educational approach is the belief that these
              values are integral to shaping well-rounded individuals. We aspire
              to graduate students who not only possess the academic prowess to
              succeed but also exhibit compassion and emotional resilience. By
              instilling these values, we aim to empower our students to make
              meaningful contributions to a society characterized by harmony,
              safety, and a collective commitment to excellence.
            </p>
            <ul className=" color-white">
              <li>
                <h5>RESPECT</h5>
              </li>
              <li className=" padding-top_medium">
                <h5>HONESTY</h5>
              </li>
              <li className=" padding-top_medium">
                <h5>ACCOUNTABILTY</h5>
              </li>
              <li className=" padding-top_medium">
                <h5>ATTITUDE</h5>
              </li>
              <li className=" padding-top_medium">
                <h5>LOYALTY</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
