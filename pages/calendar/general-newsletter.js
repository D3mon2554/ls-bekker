import SchoolFacebookPosts from "@/lib/ui/facebook-posts/facebookpostschool";
import { NewsLetterImage } from "@/lib/ui/images/images";

export default function NewsLetter() {
  return (
    <>
      <div className="section hostel">
        <div className="cutout-section">
          <div className="section-content grid grid-align_vertical-center">
            <NewsLetterImage color="#ffc82d" width={500} height={180} />
            <div style={{ letterSpacing: "1px" }}>
              <h1 className="font-size_xxx-large font-weight_black padding-bottom_large">
                News Letter
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
