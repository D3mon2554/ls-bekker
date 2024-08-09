import HostelFacebookPosts from "@/lib/ui/facebook-posts/facebookposthostel";
import { NewsLetterImage } from "@/lib/ui/images/images";
import Head from "next/head";
import Gallery from "@/lib/ui/gallery/gallery";

const HostelNewsletterPage = () => {
  return (
    <>
      <Head>
        <title>Hostel Newsletter | Laerskool Bekker Primary</title>
        <meta
          name="description"
          content="Stay informed with the latest updates, events, and news from the Laerskool Bekker Primary hostel. Our monthly Hostel Newsletter keeps you connected with everything happening at our hostel."
        />
        <meta
          name="keywords"
          content="Hostel newsletter, Laerskool Bekker Primary, hostel updates, hostel news, student life, Bekker hostel"
        />
        <meta name="author" content="Laerskool Bekker Primary" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Hostel Newsletter | Laerskool Bekker Primary"
        />
        <meta
          property="og:description"
          content="Stay informed with the latest updates, events, and news from the Laerskool Bekker Primary hostel. Our monthly Hostel Newsletter keeps you connected with everything happening at our hostel."
        />
        <meta
          property="og:image"
          content="https://lsbekker.com/img/hostel-newsletter-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://lsbekker.com/hostel/newsletter"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Laerskool Bekker Primary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hostel Newsletter | Laerskool Bekker Primary"
        />
        <meta
          name="twitter:description"
          content="Stay informed with the latest updates, events, and news from the Laerskool Bekker Primary hostel. Our monthly Hostel Newsletter keeps you connected with everything happening at our hostel."
        />
        <meta
          name="twitter:image"
          content="https://lsbekker.com/img/hostel-newsletter-banner.jpg"
        />
        <link rel="canonical" href="https://lsbekker.com/hostel/newsletter" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <script type="application/ld+json">
          {`
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Laerskool Bekker Primary",
      "url": "https://lsbekker.com/hostel/newsletter",
      "logo": "https://lsbekker.com/img/hostel-newsletter-banner.jpg",
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
      "description": "Stay informed with the latest updates, events, and news from the Laerskool Bekker Primary hostel. Our monthly Hostel Newsletter keeps you connected with everything happening at our hostel."
    }
    `}
        </script>
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
      <div className="section">
        <div className="section-content padding-top_xx-large">
          <HostelFacebookPosts />
        </div>
      </div>
    </>
  );
};

export default HostelNewsletterPage;
