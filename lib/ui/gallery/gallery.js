import React, { useState, useEffect } from "react";
import { listObjects } from "@/pages/api/s3-images";
import Styles from "./gallery.module.scss";
import Modal from "../modal/modal";

const Gallery = ({ folder }) => {
  const [images, setImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        const bucketName = process.env.AWS_BUCKET_NAME;
        const fetchedImages = await listObjects(
          bucketName,
          `Files/img/${folder}/`
        );
        setImages(fetchedImages);
        setDisplayedImages(fetchedImages.slice(0, 10));
      } catch (err) {
        console.error("Failed to fetch images:", err);
        setError("Failed to load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [folder]);

  useEffect(() => {
    const rotateImages = () => {
      setStartIndex((prevIndex) => {
        const newIndex = (prevIndex + 10) % images.length;
        const nextImages = [];
        for (let i = 0; i < 10; i++) {
          nextImages.push(images[(newIndex + i) % images.length]);
        }
        setDisplayedImages(nextImages);
        return newIndex;
      });
    };

    const interval = setInterval(rotateImages, 20000);
    return () => clearInterval(interval);
  }, [images]);

  const openModalAtIndex = (index) => {
    setInitialIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={Styles.ImageContainer}>
      {displayedImages.map((image, index) => (
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
