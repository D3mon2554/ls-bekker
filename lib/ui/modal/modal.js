import React, { useState, useEffect } from "react";
import Styles from "./modal.module.scss";

const Modal = ({
  isOpen,
  onClose,
  width = "800px",
  height = "800px",
  chevron = true,
  images = [],
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Update currentIndex state when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [isOpen, initialIndex]);

  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Return null if modal is not open or images array is empty
  if (!isOpen || !images || images.length === 0) return null;

  // Retrieve the current image URL based on currentIndex
  const imageUrl = images[currentIndex]?.url || "";

  return (
    <div className={Styles.ModalOverlay} onClick={onClose}>
      <div
        className={Styles.ModalContent}
        style={{ width, height }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={`Image ${currentIndex + 1}`}
          className={Styles.Image}
        />

        {/* Render navigation buttons if chevron is true */}
        {chevron && (
          <>
            <button className={Styles.PrevButton} onClick={handlePrevImage}>
              &lt;
            </button>
            <button className={Styles.NextButton} onClick={handleNextImage}>
              &gt;
            </button>
          </>
        )}

        {/* Close button to close the modal */}
        <button className={Styles.CloseButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
