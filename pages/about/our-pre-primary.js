import Image from "next/image";
import BannerBekkerBekkies from "@/lib/ui/banner/banner";
import { TeachersCard, SortsHoverCard } from "@/lib/ui/card/card";
import Head from "next/head";

const teachers = [
  {
    Image: "/img/school/teachers/christelle.jpg",
    Name: "Christelle",
    Slogan: "Head Of Gr.R",
  },
  {
    Image: "/img/school/teachers/lerato.jpg",
    Name: "Lerato",
    Slogan: "",
  },
  {
    Image: "/img/school/teachers/rebecca.jpg",
    Name: "Rebecca",
    Slogan: "",
  },
];
export default function OurPreSchool() {
  return (
    <>
      <Head>
        <title>Our Pre-Primary | Bekkies Pre-Primary</title>
        <meta
          name="description"
          content="Welcome to Bekkies Pre-Primary at Laerskool Bekker Primary in Magaliesburg. Discover our high-quality early development program for children aged 3 to 6, with a focus on learning through play."
        />
        <meta
          name="keywords"
          content="Pre-Primary, Bekkies Pre-Primary, Laerskool Bekker Primary, preschool, early childhood development, Magaliesburg, education"
        />
        <meta name="author" content="Laerskool Bekker Primary" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Our Pre-Primary | Bekkies Pre-Primary"
        />
        <meta
          property="og:description"
          content="Welcome to Bekkies Pre-Primary at Laerskool Bekker Primary in Magaliesburg. Discover our high-quality early development program for children aged 3 to 6, with a focus on learning through play."
        />
        <meta
          property="og:image"
          content="https://lsbekker.com/img/school/bekkieswall.jpg"
        />
        <meta
          property="og:url"
          content="https://lsbekker.com/about/our-pre-primary"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Laerskool Bekker Primary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Pre-Primary | Bekkies Pre-Primary"
        />
        <meta
          name="twitter:description"
          content="Welcome to Bekkies Pre-Primary at Laerskool Bekker Primary in Magaliesburg. Discover our high-quality early development program for children aged 3 to 6, with a focus on learning through play."
        />
        <meta
          name="twitter:image"
          content="https://lsbekker.com/img/school/bekkieswall.jpg"
        />
        <link
          rel="canonical"
          href="https://lsbekker.com/about/our-pre-primary"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <script type="application/ld+json">
          {`
    {
      "@context": "http://schema.org",
      "@type": "School",
      "name": "Bekkies Pre-Primary",
      "url": "https://lsbekker.com/about/our-pre-primary",
      "logo": "https://lsbekker.com/img/school/bekkieswall.jpg",
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
      "description": "Welcome to Bekkies Pre-Primary at Laerskool Bekker Primary in Magaliesburg. Discover our high-quality early development program for children aged 3 to 6, with a focus on learning through play."
    }
    `}
        </script>
      </Head>
      {/* Banner */}
      <BannerBekkerBekkies />
      {/* About */}
      <div className="section grid grid-align_vertical-center">
        <div className="section-content">
          <div className="grid grid-wrap grid-align_vertical-center grid-align_horizontal-spread">
            <div className="medium-size_5-of-11 size_1-of-1 padding-top_large medium-padding-top_none grid grid-align_horizontal-start">
              <div className="test">
                <Image src="/img/school/bekkieswall.jpg" alt="Wall" fill />
              </div>
            </div>
            <div className="medium-size_1-of-2 size_1-of-1">
              <h1 className="color-maroon padding-top_large size_1-of-1 padding-bottom_large">
                Where Dreams Are Made
              </h1>
              <p className="font-size_x-medium size_1-of-1 padding-bottom_large">
                Laerskool Bekker Primary has a preschool in Magaliesburg, that
                provides high quality early development for children from 3 to 6
                years of age. Our classes are divided into age groups to control
                the number of children per class to make sure that they are
                cared for and entertained.
              </p>
              <p className="font-size_x-medium size_1-of-1">
                At Bekker Bekkies, we learn through play. We follow the CAPS
                curriculum and our children enjoy a structured day full of
                music,art,messy play, worksheets,Maths, Language and free play.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* School Hours */}
      <div className="hide-mobile">
        <div className="section">
          <div className="section-content">
            <div className="grid grid-wrap grid-align_vertical-center grid-align_horizontal-spread">
              <div className="medium-size_5-of-11 size_1-of-1">
                <h1 className="font-size_x-large color-maroon">School Hours</h1>
                <div>
                  <ul className="color-maroon font-size_x-medium custom-list">
                    <li className="padding-top_large padding-bottom_large">
                      The Preschool will be{" "}
                      <span className="font-weight_bold">closed</span> during
                      the school and public holidays.
                    </li>
                    <li className="padding-top_large padding-bottom_large">
                      School hours start from 08:00 – 12:30.
                    </li>
                    <li className="padding-top_large padding-bottom_large">
                      There will be{" "}
                      <span className="font-weight_bold">
                        NO supervision after 14:00.
                      </span>{" "}
                      Monday to Thursday
                    </li>
                    <li className="padding-top_large padding-bottom_large">
                      Primary and{" "}
                      <span className="font-weight_bold">Preschool close</span>{" "}
                      at <span className="font-weight_bold">13:30</span> on{" "}
                      <span className="font-weight_bold">Fridays.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="medium-size_1-of-2 size_1-of-1 grid grid-align_horizontal-end">
                <div className="test">
                  <Image src="/img/school/bekkies.jpg" alt="class room" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hide-desktop">
        <div className="section padding-top_large">
          <div className="section-content">
            <div className="test">
              <Image src="/img/school/bekkies.jpg" alt="class room" fill />
            </div>
            <div className="size_1-of-1 padding-top_large">
              <h1 className="font-size_x-large color-maroon">School Hours</h1>
              <div>
                <ul className="color-maroon font-size_x-medium custom-list">
                  <li className="padding-top_large padding-bottom_large">
                    The Preschool will be{" "}
                    <span className="font-weight_bold">closed</span> during the
                    school and public holidays.
                  </li>
                  <li className="padding-top_large padding-bottom_large">
                    School hours start from 08:00 – 12:30.
                  </li>
                  <li className="padding-top_large padding-bottom_large">
                    There will be{" "}
                    <span className="font-weight_bold">
                      NO supervision after 14:00.
                    </span>{" "}
                    Monday to Thursday
                  </li>
                  <li className="padding-top_large padding-bottom_large">
                    Primary and{" "}
                    <span className="font-weight_bold">Preschool close</span> at{" "}
                    <span className="font-weight_bold">13:30</span> on{" "}
                    <span className="font-weight_bold">Fridays.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RULES AND REGULATIONS */}
      <div className="hide-mobile">
        <div className="section">
          <div className="section-content">
            <div className="grid grid-wrap grid-align_vertical-center grid-align_horizontal-spread">
              <div className="medium-size_5-of-11 size_1-of-1 grid grid-align_horizontal-start">
                <div className="test">
                  <Image
                    src="/img/school/bekkiesclassroom.jpg"
                    alt="class room"
                    fill
                  />
                </div>
              </div>
              <div className="medium-size_1-of-2 size_1-of-1">
                <h1 className="font-size_x-large color-maroon">
                  Rules And Regulations
                </h1>
                <div>
                  <ul className="color-maroon font-size_x-medium custom-list">
                    <li className="padding-top_large padding-bottom_large">
                      Please make sure{" "}
                      <span className="font-weight_bold">ALL</span> your child’s
                      belongings is{" "}
                      <span className="font-weight_bold">MARKED clearly.</span>
                    </li>
                    <li className="padding-top_large padding-bottom_large">
                      There should always be a spare set of clothing in his/her
                      bag.
                    </li>
                    <li className="padding-top_large padding-bottom_large">
                      Children must{" "}
                      <span className="font-weight_bold">please not bring</span>{" "}
                      sweets or toys to school.
                    </li>
                    <li className="padding-top_large padding-bottom_large">
                      Children must bring their{" "}
                      <span className="font-weight_bold">own food</span> and{" "}
                      <span className="font-weight_bold">cold drinks</span> or{" "}
                      <span className="font-weight_bold">water</span> to school.
                      Cool drinks or water must be in a non-spill sippy bottle.{" "}
                      <span className="font-weight_bold">
                        PLEASE NO COKE OR ENERGADE!
                      </span>
                    </li>
                    <li className="padding-top_large padding-bottom_large">
                      There is no uniform, please dress your child
                      appropriately, as they play and get dirty.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hide-desktop">
        <div className="section padding-top_large">
          <div className="section-content">
            <div className="test">
              <Image
                src="/img/school/bekkiesclassroom.jpg"
                alt="class room"
                fill
              />
            </div>
            <div className="size_1-of-1 padding-top_large">
              <h1 className="font-size_x-large color-maroon">
                Rules And Regulations
              </h1>
              <div>
                <ul className="color-maroon font-size_x-medium custom-list">
                  <li className="padding-top_large padding-bottom_large">
                    Please make sure{" "}
                    <span className="font-weight_bold">ALL</span> your child’s
                    belongings is{" "}
                    <span className="font-weight_bold">MARKED clearly.</span>
                  </li>
                  <li className="padding-top_large padding-bottom_large">
                    There should always be a spare set of clothing in his/her
                    bag.
                  </li>
                  <li className="padding-top_large padding-bottom_large">
                    Children must{" "}
                    <span className="font-weight_bold">please not bring</span>{" "}
                    sweets or toys to school.
                  </li>
                  <li className="padding-top_large padding-bottom_large">
                    Children must bring their{" "}
                    <span className="font-weight_bold">own food</span> and{" "}
                    <span className="font-weight_bold">cold drinks</span> or{" "}
                    <span className="font-weight_bold">water</span> to school.
                    Cool drinks or water must be in a non-spill sippy bottle.{" "}
                    <span className="font-weight_bold">
                      PLEASE NO COKE OR ENERGADE!
                    </span>
                  </li>
                  <li className="padding-top_large padding-bottom_large">
                    There is no uniform, please dress your child appropriately,
                    as they play and get dirty.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Teachers */}
      <div className="section">
        <div className="section-content">
          <div className=" padding-bottom_x-large">
            <h1 className="color-maroon font-size_x-large font-weight_bold">
              Our Teachers
            </h1>
          </div>
          <div className="grid grid-wrap ">
            {teachers.map((type) => {
              return (
                <div
                  className="size_1-of-1 medium-size_1-of-2 large-size_1-of-3 padding-left_small padding-right_small"
                  key={type.Name}
                >
                  <TeachersCard
                    Image={type.Image}
                    Name={type.Name}
                    Slogan={type.Slogan}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="section">
        <div className="section-content">
          <div className="padding-top_xx-large padding-bottom_xx-large">
            <h1 className="color-maroon font-size_x-large font-weight_bold">
              Our Teachers
            </h1>
          </div>
          <div className="grid grid-wrap ">
            {teachers.map((type) => {
              return (
                <div
                  className="size_1-of-1 medium-size_1-of-2 large-size_1-of-3 padding-left_small padding-right_small"
                  key={type.Name}
                >
                  <TeachersCard
                    Image={type.Image}
                    Name={type.Name}
                    Slogan={type.Slogan}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div> */
}
