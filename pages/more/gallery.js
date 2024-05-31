import Gallery from "@/lib/ui/gallery/gallery";
import { NewsLetterImage } from "@/lib/ui/images/images";
import Head from "next/head";

export default function Fees() {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta property="og:title" content="Gallery" />
        <link rel="canonical" href="https://lsbekker.com/more/gallery" />
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
