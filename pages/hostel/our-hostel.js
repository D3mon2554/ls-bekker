import PurposeImages from "@/lib/ui/images/images";
import Image from "next/image";
import Head from "next/head";

export default function OurHostel() {
  return (
    <>
      <Head>
        <title>Our Hostel | Laerskool Bekker Primary</title>
        <meta
          name="description"
          content="Discover the hostel facilities at Laerskool Bekker Primary. We provide a nurturing and fun environment where lifelong friendships are made and memories are cherished."
        />
        <meta
          name="keywords"
          content="Laerskool Bekker Primary, hostel, boarding school, student housing, school hostel, boarding facilities, Bekker hostel,top boarding schools in south africa, top boarding schools, top primary boarding school, top boarding school in gauteng,bnoarding schools in gauteng"
        />
        <meta name="author" content="Laerskool Bekker Primary" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Our Hostel | Laerskool Bekker Primary"
        />
        <meta
          property="og:description"
          content="Discover the hostel facilities at Laerskool Bekker Primary. We provide a nurturing and fun environment where lifelong friendships are made and memories are cherished."
        />
        <meta
          property="og:image"
          content="https://lsbekker.com/img/hostel-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://lsbekker.com/hostel/our-hostel"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Laerskool Bekker Primary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Hostel | Laerskool Bekker Primary"
        />
        <meta
          name="twitter:description"
          content="Discover the hostel facilities at Laerskool Bekker Primary. We provide a nurturing and fun environment where lifelong friendships are made and memories are cherished."
        />
        <meta
          name="twitter:image"
          content="https://lsbekker.com/img/hostel-banner.jpg"
        />
        <link rel="canonical" href="https://lsbekker.com/hostel/our-hostel" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <script type="application/ld+json">
          {`
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Laerskool Bekker Primary",
      "url": "https://lsbekker.com/hostel/our-hostel",
      "logo": "https://lsbekker.com/img/hostel-banner.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Laerskool Bekker Primary",
        "addressLocality": "Magaliesburg",
        "addressRegion": "Gauteng",
        "postalCode": "1791",
        "addressCountry": "ZA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+27-14-576-0040",
        "contactType": "Customer Service"
      },
      "description": "Discover the hostel facilities at Laerskool Bekker Primary. We provide a nurturing and fun environment where lifelong friendships are made and memories are cherished."
    }
    `}
        </script>
      </Head>

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
              decision. The picturesque Magaliesburg Mountains allows our
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
