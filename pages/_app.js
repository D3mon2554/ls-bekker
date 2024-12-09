// import "@css/bundle.scss";
// import "@css/nextjs-override.css";
// import Navigation from "@ui/navigation";
// import Footer from "@ui/footer";
// import { Analytics } from "@vercel/analytics/react";

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       {<Navigation />}
//       <main>
//         <Component {...pageProps} />
//         <Analytics />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default MyApp;
import "@css/bundle.scss";
import "@css/nextjs-override.css";
import Navigation from "@ui/navigation";
import Footer from "@ui/footer";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   // Disable right-click
  //   const disableContextMenu = (event) => event.preventDefault();
  //   document.addEventListener("contextmenu", disableContextMenu);

  //   // Disable specific keyboard shortcuts
  //   const disableShortcuts = (event) => {
  //     if (
  //       event.key === "F12" ||
  //       (event.ctrlKey && event.shiftKey && event.key === "I") ||
  //       (event.ctrlKey && event.shiftKey && event.key === "J") ||
  //       (event.ctrlKey && event.key === "U")
  //     ) {
  //       event.preventDefault();
  //     }
  //   };
  //   document.addEventListener("keydown", disableShortcuts);

  //   // Custom console message
  //   console.log("%cStop!", "color: red; font-size: 30px;");
  //   console.log(
  //     "%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to enable a feature or 'hack' someone’s account, it is a scam and will give them access to your account.",
  //     "color: black; font-size: 18px;"
  //   );

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     document.removeEventListener("contextmenu", disableContextMenu);
  //     document.removeEventListener("keydown", disableShortcuts);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>Laerskool Bekker Primary</title>
        <meta
          name="description"
          content="Laerskool Bekker Primary is the leading primary school in South Africa and Gauteng, offering top-tier education and boarding facilities. Join our nurturing environment where academic excellence meets holistic development."
        />
        <meta
          name="keywords"
          content="Laerskool Bekker Primary, top primary school South Africa, leading school Gauteng, primary education, boarding school South Africa, hostel school, best primary school Gauteng, top school Magaliesburg, South African education, quality primary education, Gauteng school, private school South Africa, Magaliesburg education, Laerskool Bekker hostel, holistic education, independent school, best boarding school South Africa, primary school with boarding, academic excellence, pre-primary education"
        />
        <meta name="author" content="Laerskool Bekker Primary" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Laerskool Bekker Primary | Top School in South Africa & Gauteng"
        />
        <meta
          property="og:description"
          content="Discover Laerskool Bekker Primary, the top primary school in South Africa and Gauteng. We offer exceptional education and boarding facilities in a nurturing environment."
        />
        <meta
          property="og:image"
          content="https://lsbekker.com/img/school-banner.jpg"
        />
        <meta property="og:url" content="https://lsbekker.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Laerskool Bekker Primary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Laerskool Bekker Primary | Top School in South Africa & Gauteng"
        />
        <meta
          name="twitter:description"
          content="Join Laerskool Bekker Primary, the top primary school in South Africa and Gauteng, where academic excellence meets holistic development in a supportive environment."
        />
        <meta
          name="twitter:image"
          content="https://lsbekker.com/img/school-banner.jpg"
        />
        <link rel="canonical" href="https://lsbekker.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <script type="application/ld+json">
          {`
    {
      "@context": "http://schema.org",
      "@type": "School",
      "name": "Laerskool Bekker Primary",
      "url": "https://lsbekker.com",
      "logo": "https://lsbekker.com/img/school-logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3H22+5XC, Magaliesburg",
        "addressLocality": "Magaliesburg",
        "addressRegion": "Gauteng",
        "postalCode": "1791",
        "addressCountry": "ZA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+27-14-577-1129",
        "contactType": "Customer Service"
      },
      "description": "Laerskool Bekker Primary is the leading primary school in South Africa and Gauteng, offering top-tier education and boarding facilities in a nurturing environment."
    }
    `}
        </script>
      </Head>

      <Navigation />
      <main>
        <Component {...pageProps} />
        <Analytics />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
