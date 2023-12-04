import styles from "./card.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Card({ image, title, description }) {
  return (
    <>
      <div
        className={`${styles.cardContainer} grid grid-wrap grid-align_horizontal-spread`}
      >
        <div className={`${styles.cardImage}`}>
          <Image
            className={`${styles.image}`}
            src={image}
            fill={true}
            alt={title}
          />
        </div>
        <div
          className={`${styles.cardContent} grid grid-wrap padding-right_xx-large`}
        >
          <div className="padding-top_xxx-large">
            <h1
              className={` size_1-of-1 padding-bottom_xxx-large ${styles.cardTitle}`}
            >
              {title}
            </h1>
            <p className={`size_1-of-1 ${styles.cardDescription}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export function HoverCard({ image, title, description, link }) {
  return (
    <>
      <Link href={link} className={`${styles.text}`}>
        <div className={`${styles.hoverCardContainer}`}>
          <div className={`${styles.hoverCardImageContainer}`}>
            <img
              src={image}
              alt="image"
              className={`${styles.hoverCardImage}`}
            />
          </div>
          <div className={`${styles.hoverCardContent}`}>
            <div>
              <h1 className={`${styles.title} color-maroon`}>{title}</h1>
            </div>
            <div className="padding-top_large">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export function SortsHoverCard({ image, title, description }) {
  return (
    <>
      <div className={`${styles.SportshoverCardContainer}`}>
        <div className={`${styles.SportshoverCardImageContainer}`}>
          <img
            src={image}
            alt="image"
            className={`${styles.SportshoverCardImage}`}
          />
        </div>
        <div className={`${styles.SportshoverCardContent}`}>
          <div>
            <h1 className={`${styles.title} color-maroon`}>{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export function BannerCard({}) {
  return <></>;
}
export function RatingsCard({}) {
  return <></>;
}
