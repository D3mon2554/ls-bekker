import HostelFacebookPosts from "@/lib/ui/facebook-posts/facebookposthostel";
import { NewsLetterImage } from "@/lib/ui/images/images";
import Head from "next/head";

const HostelNewsletterPage = () => {
  return (
    <>
      <Head>
        <title>Hostel Newsletter</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta property="og:title" content="Hostel Newsletter" />
        <link rel="canonical" href="https://lsbekker.com/hostel/newsletter" />
      </Head>
      <div className="section hostel">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <NewsLetterImage color="#ffc82d" width={500} height={170} />
            <div style={{ letterSpacing: "1px" }}>
              <h1 className="font-size_xx-large font-weight_black padding-bottom_large padding-top_x-large">
                Hostel Newsletter
              </h1>
              <p>
                We are thrilled to welcome you to our monthly newsletter, where
                you'll find exciting updates, events, and news. Whether you're a
                guest, a regular visitor, or simply curious about what's
                happening at our hostel, this newsletter is designed to keep you
                informed and engaged.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-content padding-top_xx-large">
          <HostelFacebookPosts />
        </div>
      </div>
    </>
  );
};

export default HostelNewsletterPage;
