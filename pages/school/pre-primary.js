import Image from "next/image";

export default function PreSchool() {
  return (
    <>
      <div className="section prePrimary">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <div>
              <h1>Welcome To Bekker Bekkies Pre-Primary School,</h1>
              <p className="padding-top_large size_1-of-1 medium-size_1-of-2">
                At Bekker Bekkies Pre-Primary School, we learn through play. We
                follow the CAPS curriculum and our children enjoy a structured
                day full of music, art, messy play, worksheets, Maths, Language
                and free play.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="section " style={{ backgroundColor: "#fff" }}>
        <div className="section-content">
          <h1></h1>
          <p className="size_3-of-5">
            At Bekker Bekkies Pre-Primary School, we learn through play. We
            follow the CAPS curriculum and our children enjoy a structured day
            full of music, art, messy play, worksheets, Maths, Language and free
            play.
          </p>
        </div>
      </div> */}
      {/* <div className="section">
        <div className="section-content">Clases</div>
      </div> */}
      <div className="section" style={{ backgroundColor: "#fff" }}>
        <div className="section-content padding-bottom_xxx-large padding-top_xxx-large">
          <div className="padding-bottom_xxx-large padding-top_xxx-large">
            <h1 className="color-maroon">Our Teachers</h1>
            <div className="padding-top_xxx-large grid grid-align_horizontal-space">
              <div>
                <div className="grid grid-align_center">
                  <Image
                    src=""
                    alt="image"
                    height={250}
                    width={250}
                    style={{
                      borderRadius: "100%",
                      backgroundColor: "#707070",
                    }}
                  />
                </div>
                <div className="padding-top_large grid grid-align_horizontal-center">
                  <h1 className="color-maroon">Tracy McMahon</h1>
                </div>
              </div>
              <div>
                <div className="grid grid-align_center">
                  <Image
                    src=""
                    alt="image"
                    height={250}
                    width={250}
                    style={{
                      borderRadius: "100%",
                      backgroundColor: "#707070",
                    }}
                  />
                </div>
                <div className="padding-top_large grid grid-align_horizontal-center">
                  <h1 className="color-maroon">Christelle Fourie</h1>
                </div>
              </div>
              <div>
                <div className="grid grid-align_center">
                  <Image
                    src=""
                    alt="image"
                    height={250}
                    width={250}
                    style={{
                      borderRadius: "100%",
                      backgroundColor: "#707070",
                    }}
                  />
                </div>
                <div className="padding-top_large grid grid-align_horizontal-center">
                  <h1 className="color-maroon">Rebecca Molefe</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "maroon" }}>
        <div className="section-content grid grid-align_vertical-center">
          <div className=" color-white size_1-of-1">
            <div>
              <h1>Grade R fees | Graad R Fooi</h1>
            </div>
            <div className="padding-top_xxx-large grid grid-wrap">
              <div className="size_1-of-3 padding-top_large">
                <h3>REGISTRATION (JAN)</h3>
                <p className="padding-top_large">
                  ALL: R300.00 P/CHILD ONCE OFF.
                </p>
              </div>
              <div className="size_1-of-3 padding-left_xxx-large padding-top_large borderLine">
                <h3>Annual payments</h3>
                <ul className="line">
                  <li>GR.RR – R9900.00 P/YEAR</li>
                  <li>GR.R – R9350.00 P/YEAR</li>
                </ul>
              </div>
              <div className="size_1-of-3  padding-left_xx-large padding-top_large borderLine">
                <h3>Monthly payments</h3>
                <ul className="line">GR.RR – R850.00 P/M</ul>
                <ul className="line">GR.R – R900.00 P/M</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
