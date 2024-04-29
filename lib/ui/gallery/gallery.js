import React, { useState, useEffect } from "react";
import { listObjects } from "@/pages/api/s3-images";
import Styles from "./gallery.module.scss";
import Modal from "../modal/modal";

const Gallery = ({ folder }) => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      const bucketName = process.env.AWS_BUCKET_NAME;
      const fetchedImages = await listObjects(
        bucketName,
        `Files/img/${folder}/`
      );
      const limitedImages = fetchedImages.slice(0, 10);
      setImages(limitedImages);
    }

    fetchImages();
  }, [folder]);

  const openModalAtIndex = (index) => {
    setInitialIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={Styles.ImageContainer}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={`Image ${index + 1}`}
          className={Styles.Image}
          onClick={() => openModalAtIndex(index)}
        />
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        width="600px"
        height="600px"
        chevron={true}
        images={images}
        initialIndex={initialIndex}
      />
    </div>
  );
};

export default Gallery;
