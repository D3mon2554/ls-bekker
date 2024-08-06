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

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Disable right-click
    const disableContextMenu = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    // Disable specific keyboard shortcuts
    const disableShortcuts = (event) => {
      if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && event.key === "I") ||
        (event.ctrlKey && event.shiftKey && event.key === "J") ||
        (event.ctrlKey && event.key === "U")
      ) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    // Custom console message
    console.log("%cStop!", "color: red; font-size: 30px;");
    console.log(
      "%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to enable a feature or 'hack' someone’s account, it is a scam and will give them access to your account.",
      "color: black; font-size: 18px;"
    );

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  return (
    <>
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
