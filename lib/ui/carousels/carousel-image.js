import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./carousel-image.module.scss";

export default function CarouselImage({ images }) {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
  };
  return (
    <div className={`${styles.container} `}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={`${styles.slide}`}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
