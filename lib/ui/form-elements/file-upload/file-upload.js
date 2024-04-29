import React, { useRef, useState } from "react";
import styles from "./file-upload.module.scss";

export default function FileUpload({ label, onFilesChange }) {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const newSelectedFiles = Array.from(event.target.files);
    setSelectedFiles(newSelectedFiles); // Update the selected files state
    onFilesChange(newSelectedFiles); // Pass the selected files to the parent component
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles); // Update the selected files state
    onFilesChange(updatedFiles); // Pass the updated files to the parent component
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    const newFiles = [...selectedFiles, ...droppedFiles];
    setSelectedFiles(newFiles); // Update the selected files state
    onFilesChange(newFiles); // Pass the selected files to the parent component
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className={styles.fileUploadContainer}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="size_1-of-1">
        <h1 className="color-maroon">{label}</h1>
      </div>
      <div className={styles.fileList}>
        {selectedFiles.map((file, index) => (
          <div key={index} className={styles.fileItem}>
            <span>{file.name}</span>
            <button type="button" onClick={() => handleRemoveFile(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the input element
        multiple // Allow multiple file selection
      />
      <button type="button" onClick={handleButtonClick}>
        Upload Files
      </button>
    </div>
  );
}
