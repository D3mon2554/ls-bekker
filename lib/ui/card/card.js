import styles from "./card.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Card({ image, title, description }) {
  return (
    <>
      <div className={`${styles.cardContainer} grid grid-wrap `}>
        <div className={`${styles.cardImage}`}>
          <Image
            className={`${styles.image}`}
            src={image}
            fill={true}
            alt={title}
          />
        </div>
        <div
          className={`${styles.cardContent} grid grid-wrap medium-padding-left_xx-large medium-padding-left_xx-large padding-around_small`}
        >
          <div className="padding-top_xx-large">
            <h1
              className={` size_1-of-1 padding-bottom_xxx-large ${styles.cardTitle}`}
            >
              {title}
            </h1>
            <p className={`size_1-of-1  ${styles.cardDescription}`}>
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
          <div>
            <p className={`${styles.sortsHoverCardDescription} color-maroon`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export function TeachersCard({ Image, Name, Slogan }) {
  return (
    <>
      <div className={`${styles.teacherContainer}`}>
        <div className="grid grid-align_horizontal-center">
          <div
            className={`${styles.teacherImage}`}
            style={{ backgroundImage: `url(${Image})` }}
          />
        </div>
        <div
          className={`grid grid-wrap grid-align_horizontal-center padding-top_large`}
        >
          <h2 className="size_1-of-1 text-align_center color-maroon">{Name}</h2>
          <p>{Slogan}</p>
        </div>
      </div>
    </>
  );
}
export function PrincipalCard({}) {
  return (
    <>
      <div className={`${styles.principalCardContainer}`}>
        <div className="">
          <div className={`${styles.PrincipalTitleContainer}`}>
            <h1 className={`${styles.PrincipalTitle}`}>Andrè Opperman</h1>
            <h4 className={`${styles.PrincipalSubTitle}`}>Principal</h4>
          </div>
          <div className={`${styles.PrincipalImageContainer}`}>
            <img
              src="/img/school/teachers/SirOpperman.png"
              alt="Andrè Opperman"
              className={`${styles.principalImage}`}
            />
          </div>
          <div className={`${styles.PrincipalImageFeetContainer}`}>
            <img
              src="/img/school/teachers/"
              alt="Andrè Opperman"
              className={`${styles.PrincipalImageFeet}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export function MessageCard({ image, title, description }) {
  return (
    <>
      <div
        className={`${styles.messageCardContainer} grid grid-wrap grid-align_horizontal-space`}
      >
        <div className={`${styles.messageCardImage}`}>
          <Image
            className={`${styles.messageImage}`}
            src={image}
            fill={true}
            alt={title}
          />
        </div>
        <div
          className={`${styles.messageCardContent} grid grid-wrap padding-right_xx-large`}
        >
          <div className="padding-top_xxx-large">
            <h1
              className={` size_1-of-1 padding-bottom_xxx-large ${styles.messageCardTitle}`}
            >
              {title}
            </h1>
            <p className={`size_1-of-1 ${styles.messageCardDescription}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export function EducationCard({}) {
  return (
    <>
      <div className={`${styles.EducationCardCardContainer}`}>
        <div className="">
          <div className={`${styles.EducationCardTitleContainer}`}>
            <h1 className={`${styles.EducationCardTitle}`}>
              “Education is for improving the lives of others.”
            </h1>
            <h4 className={`${styles.EducationCardSubTitle}`}>
              – Marian Wright Edelaman
            </h4>
          </div>
          <div className={`${styles.EducationCardImageFeetContainer}`}>
            <img
              src="/img/school/teachers/"
              alt="Andrè Opperman"
              className={`${styles.EducationCardImageFeet}`}
            />
          </div>
          <div className={`${styles.EducationCardImageContainer}`}>
            <img
              src="/img/banners/schoolwall.webp"
              alt="Andrè Opperman"
              className={`${styles.EducationCardImage}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
