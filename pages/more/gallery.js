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
      <div className="section">
        <div className="section-content padding-top_xxx-large">
          <h1 className="padding-bottom_xxx-large">Sports Gallery</h1>
          <Gallery folder="sports" />
        </div>
      </div>
      <div className="section">
        <div className="section-content padding-top_xxx-large padding-bottom_xxx-large">
          <h1 className="padding-bottom_xxx-large">Grade 1's Gallery</h1>
          <Gallery folder="grade1" />
        </div>
      </div>
    </>
  );
}
