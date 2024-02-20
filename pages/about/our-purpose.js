import Image from "next/image";

export default function OurPurpose() {
  return (
    <>
      {/* Banner */}
      <div className=" section aboutBanner">
        <div className="cutout-sectionLeft">
          <div className="section-content grid grid-align_horizontal-end grid-align_vertical-center">
            <div className="size_2-of-5 ">
              <div className="size_1-of-1">Images</div>
              <div className="size_1-of-1 padding-bottom_xxx-large">
                <h1 className="font-size_xx-large font-family_futuraDemi">
                  WELCOME TO
                </h1>
                <h2 className="font-size_x-large">
                  Laerskool <span className="color-primary">Bekker</span>{" "}
                  Primary
                </h2>
              </div>
              <div className="size_1-of-1">
                <p className="font-size_medium">
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
    </>
  );
}
