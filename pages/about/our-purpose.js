import Image from "next/image";

export default function OurPurpose() {
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
          <div className="size_1-of-1 medium-size_3-of-4 padding-bottom_xxx-large padding-top_xxx-large">
            <h1 className="color-maroon">
              Laerskool Bekker: Cultivating Character, Fostering Excellence –
              Our Core Values
            </h1>
            <p className="padding-top_large ">
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
            <ul>
              <li>
                <h5>RESPECT haha</h5>
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
