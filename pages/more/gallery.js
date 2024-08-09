import Gallery from "@/lib/ui/gallery/gallery";
import { NewsLetterImage } from "@/lib/ui/images/images";
import Head from "next/head";

export default function Fees() {
  return (
    <>
      <Head>
        <title>Gallery | Laerskool Bekker Primary</title>
        <meta
          name="description"
          content="Explore the moments captured at Laerskool Bekker Primary. View our gallery to see the fun and memories made during hostel weekends, sports events, and the Grade 1's activities."
        />
        <meta
          name="keywords"
          content="Laerskool Bekker Primary, school gallery, hostel activities, sports gallery, Grade 1 gallery, student life, school events"
        />
        <meta name="author" content="Laerskool Bekker Primary" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Gallery | Laerskool Bekker Primary"
        />
        <meta
          property="og:description"
          content="Explore the moments captured at Laerskool Bekker Primary. View our gallery to see the fun and memories made during hostel weekends, sports events, and the Grade 1's activities."
        />
        <meta
          property="og:image"
          content="https://lsbekker.com/img/gallery-banner.jpg"
        />
        <meta property="og:url" content="https://lsbekker.com/more/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Laerskool Bekker Primary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gallery | Laerskool Bekker Primary"
        />
        <meta
          name="twitter:description"
          content="Explore the moments captured at Laerskool Bekker Primary. View our gallery to see the fun and memories made during hostel weekends, sports events, and the Grade 1's activities."
        />
        <meta
          name="twitter:image"
          content="https://lsbekker.com/img/gallery-banner.jpg"
        />
        <link rel="canonical" href="https://lsbekker.com/more/gallery" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <script type="application/ld+json">
          {`
    {
      "@context": "http://schema.org",
      "@type": "ImageGallery",
      "name": "Gallery | Laerskool Bekker Primary",
      "url": "https://lsbekker.com/more/gallery",
      "description": "Explore the moments captured at Laerskool Bekker Primary. View our gallery to see the fun and memories made during hostel weekends, sports events, and the Grade 1's activities.",
      "image": "https://lsbekker.com/img/gallery-banner.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Laerskool Bekker Primary",
        "logo": "https://lsbekker.com/img/school-logo.png"
      }
    }
    `}
        </script>
      </Head>

      {/* Banner */}
      <div className="section hostel">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <NewsLetterImage color="#ffc82d" width={500} height={180} />
            <div style={{ letterSpacing: "1px" }}>
              <h1 className="font-size_xx-large font-weight_black padding-bottom_large">
                Gallery
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Hostel weekend Fun */}
      <div className="section">
        <div className="section-content padding-top_xxx-large">
          <h1 className="padding-bottom_x-large color-maroon">
            Hostel Weekend Fun
          </h1>
          <p className="padding-bottom_xxx-large">
            This weekend was filled with fun activities and laughter as the
            hostel kids built friendships and created memories that will last a
            lifetime.
          </p>
          <Gallery folder="Hostel-weekends-fun" />
        </div>
      </div>
      {/* Sports Gallery */}
      <div className="section">
        <div className="section-content padding-top_xxx-large">
          <h1 className="padding-bottom_xxx-large color-maroon">
            Sports Gallery
          </h1>
          <Gallery folder="sports" />
        </div>
      </div>
      {/* Grade 1's Gallery */}
      <div className="section">
        <div className="section-content padding-top_xxx-large padding-bottom_xxx-large">
          <h1 className="padding-bottom_xxx-large color-maroon">
            Grade 1's Gallery
          </h1>
          <Gallery folder="grade1" />
        </div>
      </div>
    </>
  );
}
