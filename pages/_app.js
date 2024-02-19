import "@css/bundle.scss";
import "@css/nextjs-override.css";
import Navigation from "@ui/navigation";
import Footer from "@ui/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* {<Navigation />} */}
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
