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
export function ExtraActivities({ image, title, description }) {
  return (
    <>
      <div className={styles.ExtraActivitiesCardContainer}>
        <div className={styles.ExtraActivitiesCardImageContainer}>
          <img
            src={image}
            alt={title}
            className={styles.ExtraActivitiesCardImage}
          />
        </div>
        <div className={styles.ExtraActivitiesCardContent}>
          <div>
            <h1 className={`${styles.ExtraActivitiesTitle} color-white`}>
              {title}
            </h1>
          </div>
          <div>
            <p
              className={`${styles.ExtraActivitiesCardDescription} color-white`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function SortsHoverCard({ image, title, description }) {
  return (
    <>
      <div className={styles.SportshoverCardContainer}>
        <div className={styles.SportshoverCardImageContainer}>
          <img
            src={image}
            alt={title}
            className={styles.SportshoverCardImage}
          />
        </div>
        <div className={styles.SportshoverCardContent}>
          <div>
            <h1 className={`${styles.title} color-white`}>{title}</h1>
          </div>
          <div>
            <p className={`${styles.sortsHoverCardDescription} color-white`}>
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
      <div className={styles.teacherContainer}>
        <div className={styles.teacherImageContainer}>
          <img src={Image} alt={Name} className={styles.teacherImage} />
        </div>
        <div className={`${styles.teacherFootprintImageContainer}`}>
          <img
            src="/img/icons/footprints/onefootprintred.png"
            alt="one footprint red"
            className={`${styles.teacherFootprintImage}`}
          />
        </div>
        <div
          className={`${styles.contentContainer} grid grid-wrap grid-align_horizontal-center padding-top_large`}
        >
          <h2 className="size_1-of-1 font-size_large text-align_center color-maroon">
            {Name}
          </h2>
          <p className="size_1-of-1 font-size_x-medium text-align_center color-maroon">
            {Slogan}
          </p>
        </div>
      </div>
    </>
  );
}
export function PrincipalCard({}) {
  return (
    <>
      <div className={`${styles.principalCardContainer}`}>
        <div className={`${styles.principalTitleContainer}`}>
          <div>
            <h1 className={`color-white font-size_x-large font-weight_bold`}>
              Andrè Opperman
            </h1>
          </div>
          <div>
            <h4 className={`color-primary font-size_large font-weight_regular`}>
              principal
            </h4>
          </div>
        </div>
        <div
          className={`grid grid-align_horizontal-end medium-padding-right_x-large`}
        >
          <div className={`${styles.principalImage}`}>
            <Image
              src="/img/school/teachers/SirOpperman.png"
              alt="Andrè Opperman"
              fill
            />
          </div>
        </div>
        <div className={`${styles.PrincipalImageFeetContainer}`}>
          <Image
            src="/img/icons/footprints/rotatedfootprints.svg"
            alt="Andrè Opperman"
            fill
          />
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
            <Image
              src="/img/icons/footprints/rotatedfootprints.svg"
              alt="Andrè Opperman"
              fill
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
export function StaffCardChef({ Image, Name }) {
  return (
    <>
      <div className={`${styles.staffCardContainer}`}>
        <div className={`section-content`}>
          <h1 className="color-white padding-top_large padding-bottom_large">
            {Name}
          </h1>
        </div>
        <div className={`${styles.staffCardImageContainer}`}>
          <img
            src={Image}
            alt="Head Chef"
            className={`${styles.staffCardImage}`}
          />
          <img
            src="/img/icons/footprints/rotatedfootprints.svg"
            alt="Andrè Opperman"
            className={`${styles.staffCardImageFootprints}`}
          />
        </div>
      </div>
    </>
  );
}
