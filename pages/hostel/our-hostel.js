import PurposeImages from "@/lib/ui/images/images";
import Image from "next/image";
import { StaffCardChef, StaffCard } from "@/lib/ui/card/card";

const HeadCheff = [
  {
    Image: "/img/school/teachers/headcheff2.jpg",
    Name: "Our Head Chef",
  },
];

export default function OurHostel() {
  return (
    <>
      {/* Banner */}
      <div className="section hostel">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <PurposeImages color="#ffc82d" width={430} height={154} />
            <div style={{ letterSpacing: "2px" }}>
              <h1 className="font-size_xx-large font-weight_black padding-bottom_large">
                Hostel
              </h1>
              <p className="font-size_x-medium">
                At Laerskool Bekker the child is the focal point and we strive
                to make their stay at the hostel a happy, fun filled one where
                memories are made and friends are kept forever.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About Our Hostel */}
      <div className="section">
        <div className="section-content ">
          <div className="padding-top_xxx-large">
            <h1 className="color-maroon">About Our Hostel</h1>
          </div>
          <div className="padding-top_xxx-large padding-bottom_xxx-large">
            <p className="font-size_x-medium">
              The hostel caters for learners from Grade 1-7. Boys and Girls are
              housed separately. The grade 1-3 learners are accommodated in the
              "Cradle" and are supervised by kind, motherly matrons and teachers
              who go over and above the call of duty.
              <br />
              <br />
              The grade 4-7 learners share pleasant four bedroomed dormitories.
              Rules and regulations ensure that the hostel is well run. The
              warm, cosy dining room has a fully equipped kitchen that supplies
              the learners with three balanced meals a day. Our hostel menu is
              compiled by a professional nutritionist ensuring our children are
              nourished correctly according to their age and gender. At
              Laerskool Bekker the child is the focal point and we strive to
              make their stay at the hostel a happy, fun filled one where
              memories are made and friends are kept forever.
            </p>
          </div>
        </div>
        <div style={{ position: "relative", height: "300px" }}>
          <Image src="/img/hostel/hostelbathroom.PNG" alt="Bathroom" fill />
        </div>
      </div>
      {/* Why Boarding School */}
      <div className="section">
        <div className="grid grid-wrap grid-align_vertical-center">
          <div className="size_1-of-1 medium-size_1-of-2 medium-padding-left_xxx-large padding-left_medium padding-right_medium">
            <h1 className="color-maroon padding-bottom_xx-large padding-top_large medium-padding-top_large">
              Why Choose Boarding School
            </h1>
            <p className="font-size_x-medium padding-bottom_large medium-padding-bottom_none">
              There is a number of positive things to consider when making this
              decision The picturesque Magaliesburg Mountains allows our
              children to learn in a tranquil and safe environment. Our learners
              are encouraged to be independent and self disciplined. A hostel is
              a place where strong, positive friendships are formed for life.
              Our learners become part of the Bekker family and are loyal to
              each other. Our learners make friends with children from all
              echelons of society and this stands them in good stead as they
              become well rounded young adults.
              <br />
              <br />
              The hostel also teaches them to take responsibility for their
              actions. At Laerskool Bekker we endeavour to give the learners a
              'home away from home' experience while still maintaining a
              structured and disciplined environment. We motivate our learners
              to speak up for themselves and take part in the extramural
              activities that are offered after school . Our School Values and
              Code of Conduct are instilled in our learners, teaching them to be
              honest and above reproach.
            </p>
          </div>
          <div className="size_1-of-1 medium-size_1-of-2 medium-padding-left_xxx-large BoardingSchool">
            <Image src="/img/hostel/hostellearners.jpg" alt="Hostel" fill />
          </div>
        </div>
      </div>
      {/* Staff */}
      <div className="section grid grid-wrap grid-align_vertical-center hide-mobile">
        <div className="medium-size_1-of-2 size_1-of-1 grid grid-align_horizontal-end">
          <div className="staff">
            <Image
              src="/img/school/teachers/kitchenStaff.jpg"
              alt="Kitchen Staff"
              fill
            />
          </div>
        </div>
        <div className=" size_1-of-1 medium-size_1-of-2">
          <div className="medium-padding-left_xxx-large padding-left_medium padding-right_medium">
            <h1 className="color-maroon padding-top_xxx-large padding-bottom_large">
              Our Staff
            </h1>
            <p className="padding-bottom_large font-size_x-medium">
              Welcome to the heart of our boarding school's culinary realm,
              where an exceptional kitchen staff, led by a seasoned chef
              recruited from a prestigious lodge, crafts a dining experience
              like no other. The kitchen is not just a place to prepare meals;
              it's a haven of culinary expertise and creativity.
              <br />
              <br />
              At the helm of our kitchen is our esteemed chef, whose expertise
              has been honed in the distinguished setting of a lodge known for
              its gastronomic excellence. Bringing a wealth of experience,
              innovative techniques, and a passion for high-quality cuisine, the
              chef adds a touch of sophistication to every meal prepared in our
              boarding school kitchen.
            </p>
          </div>
        </div>
      </div>
      <div className="section grid grid-wrap grid-align_vertical-center hide-desktop">
        <div className=" size_1-of-1 medium-size_1-of-2">
          <div className="medium-padding-left_xxx-large padding-left_medium padding-right_medium">
            <h1 className="color-maroon padding-top_xxx-large padding-bottom_large">
              Our Staff
            </h1>
            <p className="padding-bottom_large font-size_x-medium">
              Welcome to the heart of our boarding school's culinary realm,
              where an exceptional kitchen staff, led by a seasoned chef
              recruited from a prestigious lodge, crafts a dining experience
              like no other. The kitchen is not just a place to prepare meals;
              it's a haven of culinary expertise and creativity.
              <br />
              <br />
              At the helm of our kitchen is our esteemed chef, whose expertise
              has been honed in the distinguished setting of a lodge known for
              its gastronomic excellence. Bringing a wealth of experience,
              innovative techniques, and a passion for high-quality cuisine, the
              chef adds a touch of sophistication to every meal prepared in our
              boarding school kitchen.
            </p>
          </div>
        </div>
        <div className="medium-size_1-of-2 size_1-of-1 grid grid-align_horizontal-end">
          <div className="staff">
            <Image
              src="/img/school/teachers/kitchenStaff.jpg"
              alt="Kitchen Staff"
              fill
            />
          </div>
        </div>
      </div>
    </>
  );
}
// {/* <div className="section">
//         <div className="section-content">welcome to live in the hostel</div>
//       </div> */}
//       <div className="section" style={{ backgroundColor: "#fff" }}>
//         <div className="section-content">
//           <div className="padding-top_xxx-large padding-bottom_xxx-large">
//             <div>
//               <h1 className="color-maroon">Why Boarding School</h1>
//             </div>
//             <div className="padding-top_x-large size_1-of-1 medium-size_3-of-6">
// <p>
//   There is a number of positive things to consider when making
//   this decision The picturesque Magaliesburg Mountains allows our
//   children to learn in a tranquil and safe environment. Our
//   learners are encouraged to be independent and self disciplined.
//   A hostel is a place where strong, positive friendships are
//   formed for life. Our learners become part of the Bekker family
//   and are loyal to each other. Our learners make friends with
//   children from all echelons of society and this stands them in
//   good stead as they become well rounded young adults.
//   <br />
//   <br />
//   The hostel also teaches them to take responsibility for their
//   actions. At Laerskool Bekker we endeavour to give the learners a
//   'home away from home' experience while still maintaining a
//   structured and disciplined environment. We motivate our learners
//   to speak up for themselves and take part in the extramural
//   activities that are offered after school . Our School Values and
//   Code of Conduct are instilled in our learners, teaching them to
//   be honest and above reproach.
// </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="section" style={{ backgroundColor: "maroon" }}>
//         <div className="section-content padding-top_xxx-large padding-bottom_xxx-large">
//           <div className="grid grid-wrap" style={{ backgroundColor: "#fff" }}>
//             <div className="size_1-of-1 medium-size_1-of-2">Image</div>
//             <div className="size_1-of-1 medium-size_1-of-2 grid grid-wrap grid-align_horizontal-center grid-align_vertical-center">
//               <div className="size_1-of-1 medium-size_4-of-5 padding-top_large">
//                 <h1 className="color-maroon">Home Away From Home</h1>
//                 <h3 className="padding-top_large">More about the hostel</h3>
//               </div>
//               <div className="padding-top_x-large size_1-of-1 medium-size_4-of-5 padding-bottom_large">
// <p>
//   The hostel caters for learners from Grade 1-7. Boys and Girls
//   are housed separately. The grade 1-3 learners are accommodated
//   in the "Cradle" and are supervised by kind, motherly matrons
//   and teachers who go over and above the call of duty.
//   <br />
//   <br />
//   The grade 4-7 learners share pleasant four bedroomed
//   dormitories. Rules and regulations ensure that the hostel is
//   well run. The warm, cosy dining room has a fully equipped
//   kitchen that supplies the learners with three balanced meals a
//   day. Our hostel menu is compiled by a professional
//   nutritionist ensuring our children are nourished correctly
//   according to their age and gender. At Laerskool Bekker the
//   child is the focal point and we strive to make their stay at
//   the hostel a happy, fun filled one where memories are made and
//   friends are kept forever.
// </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="section">
//         <div className="section-content">The live of a Hostel learner</div>
//       </div> */}
//       {/* <div className="section">
//         <div className="section-content">link to fees</div>
//       </div> */}
//       {/* <div className="section">
//         <div className="section-content">link to applications</div>
//       </div> */}
