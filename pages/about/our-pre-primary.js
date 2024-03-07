import Image from "next/image";
import PurposeImages from "@/lib/ui/images/images";

export default function OurPreSchool() {
  return (
    <>
      {/* Banner */}
      <div className="section prePrimary">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <PurposeImages color="#FFF" width={450} height={214} />
            <div style={{ letterSpacing: "2px" }}>
              <h1 className="font-size_xxx-large font-weight_black">
                Welcome To
              </h1>
              <h1 className="font-size_x-large">
                Bekkies <span className="color-primary">Pre-primary</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="section">
        <div className="grid grid-wrap">
          <div className="medium-size_3-of-7 size_1-of-1 ">
            <div
              className="grid grid-align_vertical-center grid-align_horizontal-center"
              style={{ height: "500px", position: "relative" }}
            >
              <Image src="/img/school/bekkieswall.jpg" alt="Wall" fill />
            </div>
          </div>
          <div className="medium-size_3-of-6 size_1-of-1 contentRight medium-padding-left_xxx-large grid grid-wrap grid-align_vertical-center">
            <h1 className="size_1-of-1 color-maroon font-size_x-large">
              Where dreams are made
            </h1>
            <p className="font-size_x-medium">
              Laerskool Bekker Primary has a preschool in Magaliesburg, that
              provides high quality early development for children from 3 to 6
              years of age. Our classes are divided into age groups to control
              the number of children per class to make sure that they are cared
              for and entertained.
              <br />
              <br />
              At Bekker Bekkies, we learn through play. We follow the CAPS
              curriculum and our children enjoy a structured day full of
              music,art,messy play,worksheets,Maths,Language and free play.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
