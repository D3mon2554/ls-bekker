import React, { useRef, useState } from "react";
import styles from "./file-upload.module.scss";
import FormElement from "../form-element";

export default function FileUpload({ id, label, variant, onChange }) {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const newSelectedFiles = Array.from(event.target.files);
    setTimeout(() => {
      updateSelectedFiles(newSelectedFiles);
    }, 0);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    updateSelectedFiles(updatedFiles);
  };

  const handleButtonClick = () => {
    // Trigger file input click
    fileInputRef.current.click();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    updateSelectedFiles([...selectedFiles, ...droppedFiles]);
  };

  const updateSelectedFiles = (files) => {
    setSelectedFiles(files);
    onChange && onChange(files);
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
      <FormElement input_id={id} variant={variant}>
        <input
          type="file"
          id={id}
          ref={fileInputRef}
          onChange={handleFileChange}
          className={styles.fileInput}
          accept="*/*" // Accept any file type
          multiple // Allow multiple file selection
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className={styles.uploadButton}
        >
          Upload Files
        </button>
      </FormElement>
    </div>
  );
}
