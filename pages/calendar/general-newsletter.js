import SchoolFacebookPosts from "@/lib/ui/facebook-posts/facebookpostschool";
import { NewsLetterImage } from "@/lib/ui/images/images";
import Head from "next/head";

export default function NewsLetter() {
  return (
    <>
      <Head>
        <title>Newsletter | Laerskool Bekker Primary</title>
        <meta
          name="description"
          content="Stay up to date with the latest news, events, and updates from Laerskool Bekker Primary. Our monthly newsletter keeps you informed about everything happening at our school."
        />
        <meta
          name="keywords"
          content="Laerskool Bekker Primary, newsletter, school news, updates, events, Bekker news"
        />
        <meta name="author" content="Laerskool Bekker Primary" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Newsletter | Laerskool Bekker Primary"
        />
        <meta
          property="og:description"
          content="Stay up to date with the latest news, events, and updates from Laerskool Bekker Primary. Our monthly newsletter keeps you informed about everything happening at our school."
        />
        <meta
          property="og:image"
          content="https://lsbekker.com/img/newsletter-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://lsbekker.com/calendar/general-newsletter"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Laerskool Bekker Primary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Newsletter | Laerskool Bekker Primary"
        />
        <meta
          name="twitter:description"
          content="Stay up to date with the latest news, events, and updates from Laerskool Bekker Primary. Our monthly newsletter keeps you informed about everything happening at our school."
        />
        <meta
          name="twitter:image"
          content="https://lsbekker.com/img/newsletter-banner.jpg"
        />
        <link
          rel="canonical"
          href="https://lsbekker.com/calendar/general-newsletter"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <script type="application/ld+json">
          {`
    {
      "@context": "http://schema.org",
      "@type": "School",
      "name": "Laerskool Bekker Primary",
      "url": "https://lsbekker.com/calendar/general-newsletter",
      "logo": "https://lsbekker.com/img/newsletter-banner.jpg",
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
      "description": "Stay up to date with the latest news, events, and updates from Laerskool Bekker Primary. Our monthly newsletter keeps you informed about everything happening at our school."
    }
    `}
        </script>
      </Head>

      <div className="section hostel">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <NewsLetterImage color="#ffc82d" width={500} height={180} />
            <div style={{ letterSpacing: "1px" }}>
              <h1 className="font-size_xx-large font-weight_black padding-bottom_large">
                Newsletter
              </h1>
              <p>
                We are thrilled to welcome you to our monthly newsletter, where
                you'll find exciting updates, events, and news from Bekker.
                Whether you're a guest, a regular visitor, or simply curious
                about what's happening at our school, this newsletter is
                designed to keep you informed and engaged.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-content padding-top_xx-large">
          <SchoolFacebookPosts />
        </div>
      </div>
    </>
  );
}
