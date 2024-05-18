import PurposeImages from "@/lib/ui/images/images";
import Image from "next/image";
import Button from "@/lib/ui/button/button";
import Link from "next/link";

export default function Applications() {
  const handleHostelClick = () => {
    window.open("/forms/day-scholar");
  };
  const handleSchoolClick = () => {
    window.open("/forms/day-scholar");
  };
  return (
    <>
      {/* Banner */}
      <div className="section hostel">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <PurposeImages color="#ffc82d" width={430} height={200} />
            <div style={{ letterSpacing: "1px" }}>
              <h1 className="font-size_xx-large font-weight_black padding-bottom_large">
                Applications
              </h1>
              <p className="font-size_x-medium">
                For your convenience, no phone calls are needed. All the forms
                you ever needed, one click away.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="section">
        <div className="section-content color-maroon">
          <h1 className="padding-top_xxx-large">Why choose Laerskool Bekker</h1>
          <p className="font-size_x-medium padding-top_xx-large">
            Welcome to Laerskool Bekker, where every child's educational journey
            is nurtured with care and commitment. As you explore the options for
            your child's academic future, allow us to highlight why choosing us
            is a decision you won't regret.
            <br />
            <br />
            At Laerskool Bekker, we offer a unique blend of academic excellence
            and holistic development, tailored to meet the needs of each
            student. One distinguishing feature is our weekly boarding program,
            available for grades 1 through 7. This not only provides a
            structured environment conducive to learning but also fosters a
            sense of independence and camaraderie among learners.
            <br />
            <br />
            Nestled in the picturesque surroundings of Magaliesburg mountains,
            our school is more than just a place of learning; it's a community
            where values like respect, honesty, accountability, attitude, and
            loyalty are instilled in every aspect of school life. These values
            serve as the foundation upon which our learners build their
            character, ensuring they grow into responsible and compassionate
            individuals ready to make a positive impact on the world.
            <br />
            <br />
            For our youngest learners, we offer a vibrant pre-primary school
            exclusively for day scholars. Here, in a nurturing environment, our
            dedicated educators lay the groundwork for a lifetime of learning,
            fostering curiosity, creativity, and a love for discovery.
            <br />
            <br />
            Choosing Laerskool Bekker means choosing a supportive and enriching
            educational environment where your child will thrive academically,
            socially, and emotionally. Join us on this journey of growth and
            discovery, where every child is valued, challenged, and empowered to
            reach their full potential.
          </p>
        </div>
      </div>

      <div className="background">
        <div style={{ position: "relative" }}>
          {/* Application Hostel + fees */}
          <div className="section padding-top_xxx-large">
            <div className="grid grid-wrap">
              <div className="size_1-of-1 medium-size_1-of-2">
                <div className="pictureHeight">
                  <Image
                    src="/img/registration/hostel_applications.jpg"
                    alt="Hostel Applications"
                    fill
                  />
                </div>
              </div>
              <div className="size_1-of-1 medium-size_1-of-2">
                <div className="medium-padding-left_xxx-large padding-left_medium padding-right_medium color-maroon padding-bottom_xx-large">
                  <div className="padding-top_xx-large padding-bottom_large">
                    <h1>Hostel fees</h1>
                  </div>
                  <div className="padding-bottom_large">
                    <h3>Annual Fees R 57 365.00 (2024)</h3>
                  </div>
                  <div className="padding-bottom_large">
                    <p>
                      Annually (before the end of Feb 2024) R 52 150.00.
                      (Discount for advance payment)
                    </p>
                  </div>
                  <div>
                    <h3>Quarterly payments</h3>
                    <ul>1st Quarter – R 15 645.00</ul>
                    <ul>2nd Quarter – R 15 645.00</ul>
                    <ul>3rd Quarter – R 15 645.00</ul>
                    <ul>4th Quarter – R 10 430.00</ul>
                  </div>
                  <div>
                    <h3 className="padding-bottom_large">Monthly payments</h3>
                    <p>
                      Monthly payments of R5 215.00 by EFT before the 7th of
                      each month
                    </p>
                  </div>
                  <div className="padding-top_large">
                    <Link href="/forms/hostel-application">
                      <Button variant="submit" label="Apply Now" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application School + fees */}
          <div className="section padding-top_xxx-large">
            <div className="grid grid-wrap">
              <div className="size_1-of-1 medium-size_1-of-2 padding-bottom_large medium-padding-bottom_none">
                <div className="medium-padding-left_xxx-large padding-left_medium padding-right_medium color-maroon">
                  <div className="padding-top_xx-large padding-bottom_large">
                    <h1>School fees</h1>
                  </div>
                  <div className="padding-top_xx-large padding-bottom_large">
                    <h3>Annual Fees R 12 870.00</h3>
                  </div>
                  <div className="padding-bottom_large">
                    <p>
                      Annually (before the end of Feb 2024) R 11 700. (10 %
                      discount for advance payment)
                    </p>
                  </div>
                  <div>
                    <h3>Quarterly payments</h3>
                    <ul>1st Quarter – R 3 510.00</ul>
                    <ul>2nd Quarter – R 3 510.00</ul>
                    <ul>3rd Quarter – R 3 510.00</ul>
                    <ul>4th Quarter – R 2 340.00</ul>
                  </div>
                  {/* <div>
                    <h3 className="padding-bottom_large">Bi-Annually</h3>
                    <p className="padding-bottom_large">
                      R 6 270.00 payable 11 Jan. (Discount included)
                      <br />R 6 270.00 payable 7 June. (Discount included)
                    </p>
                  </div> */}
                  <div>
                    <h3 className="padding-bottom_large">Monthly payments</h3>
                    <p>
                      Monthly payments of R 1 170.00 by EFT before the 7th of
                      each month
                    </p>
                  </div>
                  <div className="padding-top_large padding-bottom_large">
                    <Link href="/forms/day-scholar">
                      <Button variant="submit" label="Apply Now" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="size_1-of-1 medium-size_1-of-2">
                <div className="pictureHeight">
                  <Image
                    src="/img/school/bekkies.jpg"
                    alt="School Applications"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Application Grade R + fees */}
          <div className="section padding-top_xxx-large">
            <div className="grid grid-wrap">
              <div className="size_1-of-1 medium-size_1-of-2">
                <div className="pictureHeight">
                  <Image
                    src="/img/banners/bekkerbekkies.jpg"
                    alt="Pre-Primary Applications"
                    fill
                  />
                </div>
              </div>
              <div className="size_1-of-1 medium-size_1-of-2">
                <div className="medium-padding-left_xxx-large padding-left_medium padding-right_medium color-maroon padding-bottom_xx-large">
                  <div className="padding-top_xx-large padding-bottom_large">
                    <h1>Grade R fees</h1>
                  </div>
                  <div className="padding-bottom_large">
                    <h3>REGISTRATION (JAN) ALL: R300.00 P/CHILD ONCE OFF.</h3>
                  </div>
                  <div>
                    <h3>Annual payments</h3>
                    <ul>GR.RR – R9900.00 P/YEAR</ul>
                    <ul>GR.R – R9350.00 P/YEAR</ul>
                  </div>
                  <div>
                    <h3>Monthly payments</h3>
                    <ul>GR.RR – R850.00 P/M</ul>
                    <ul>GR.R – R900.00 P/M</ul>
                  </div>
                  <div className="padding-top_large">
                    <Link href="https://lsbekker.s3.eu-north-1.amazonaws.com/Files/ENROLMENT+FORM_2025.pdf">
                      <Button variant="submit" label="Apply Now" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banking Details */}
      <div className="section">
        <div className="color-maroon padding-top_xxx-large padding-bottom_xxx-large medium-padding-left_xxx-large padding-left_medium">
          <h1>Banking Details</h1>
        </div>
        <div className="grid grid-wrap">
          {/* School */}
          <div className="size_1-of-1 medium-size_1-of-3 medium-padding-around_xx-large padding-top_large padding-bottom_large">
            <div className="" style={{ backgroundColor: "#707070" }}>
              <div className="padding-left_medium padding-right_medium medium-padding-left_x-large medium-padding-right_x-large">
                <div className="padding-top_xx-large padding-bottom_xx-large">
                  <h3
                    className="color-white padding-top_small padding-bottom_small text-align_center"
                    style={{ backgroundColor: "#6a0911" }}
                  >
                    SCHOOL FEES BANKING DETAILS
                  </h3>
                </div>
                <div className="color-white">
                  <h3 className="">Bank Information</h3>
                  <p className="padding-bottom_large">PRIMARY BEKKER</p>
                  <h3>Bank:</h3>
                  <p className="padding-bottom_large">ABSA</p>
                  <h3>Type of Account:</h3>
                  <p className="padding-bottom_large">Cheque Account</p>
                  <h3>Account Number:</h3>
                  <p className="padding-bottom_large">101 5800 158</p>
                  <h3>Branch code:</h3>
                  <p className="padding-bottom_large">630241</p>
                  <h3>Reference Information:</h3>
                  <p className="padding-bottom_large">
                    State the learners Name, Surname and Grade.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Hostel */}
          <div className="size_1-of-1 medium-size_1-of-3 medium-padding-around_xx-large padding-top_large padding-bottom_large">
            <div className="" style={{ backgroundColor: "#707070" }}>
              <div className="padding-left_medium padding-right_medium medium-padding-left_x-large medium-padding-right_x-large">
                <div className="padding-top_xx-large padding-bottom_xx-large">
                  <h3
                    className="color-white padding-top_small padding-bottom_small text-align_center"
                    style={{ backgroundColor: "#6a0911" }}
                  >
                    HOSTEL FEES BANKING DETAILS
                  </h3>
                </div>
                <div className="color-white">
                  <h3 className="">Bank Information</h3>
                  <p className="padding-bottom_large">PRIMARY BEKKER</p>
                  <h3>Bank:</h3>
                  <p className="padding-bottom_large">ABSA</p>
                  <h3>Type of Account:</h3>
                  <p className="padding-bottom_large">Cheque Account</p>
                  <h3>Account Number:</h3>
                  <p className="padding-bottom_large">101 5800 158</p>
                  <h3>Branch code:</h3>
                  <p className="padding-bottom_large">630241</p>
                  <h3>Reference Information:</h3>
                  <p className="padding-bottom_large">
                    State the learners Name, Surname and Grade.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* GR.R */}
          <div className="size_1-of-1 medium-size_1-of-3 medium-padding-around_xx-large padding-top_large ">
            <div className="" style={{ backgroundColor: "#707070" }}>
              <div className="padding-left_medium padding-right_medium medium-padding-left_x-large medium-padding-right_x-large">
                <div className="padding-top_xx-large padding-bottom_xx-large">
                  <h3
                    className="color-white padding-top_small padding-bottom_small text-align_center"
                    style={{ backgroundColor: "#6a0911" }}
                  >
                    GR. R FEES BANKING DETAILS
                  </h3>
                </div>
                <div className="color-white">
                  <h3 className="">Bank Information</h3>
                  <p className="padding-bottom_large">PRIMARY BEKKER</p>
                  <h3>Bank:</h3>
                  <p className="padding-bottom_large">ABSA</p>
                  <h3>Type of Account:</h3>
                  <p className="padding-bottom_large">Cheque Account</p>
                  <h3>Account Number:</h3>
                  <p className="padding-bottom_large">101 5800 158</p>
                  <h3>Branch code:</h3>
                  <p className="padding-bottom_large">630241</p>
                  <h3>Reference Information:</h3>
                  <p className="padding-bottom_large">
                    State the learners Name, Surname and Grade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
