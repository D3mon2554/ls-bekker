import "@css/bundle.scss";
import "@css/nextjs-override.css";
import Navigation from "@ui/navigation";
import Footer from "@ui/footer";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {<Navigation />}
      <main>
        <Component {...pageProps} />
        <Analytics />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
