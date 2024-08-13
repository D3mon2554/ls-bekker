import styles from "./banner.module.scss";
import PurposeImages from "@/lib/ui/images/images";

export default function BannerBekkerBekkies() {
  return (
    <div className={`${styles.Container}`}>
      <div className={`${styles.cutOutSection}`}>
        <div className="section-content grid grid-align_vertical-center">
          <div className={`${styles.Footprints}`}>
            <PurposeImages color="#FFF" width={450} height={214} />
          </div>
          <div className={`${styles.textContainer}`}>
            <h1 className="font-size_xx-large font-weight_black">Welcome To</h1>
            <h1 className="font-size_x-large">
              Bekkies <span className="color-primary">Pre-primary</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
