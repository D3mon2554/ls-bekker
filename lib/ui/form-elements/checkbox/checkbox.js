import React, { useRef } from "react";
import styles from "./checkbox.module.scss";

export default function Checkbox({ id, label, checked, onChange }) {
  const checkboxRef = useRef();

  const handleOnChange = () => {
    onChange && onChange(checkboxRef.current.checked);
  };

  return (
    <div className={styles.checkboxContainer}>
      <input
        ref={checkboxRef}
        id={id}
        type="checkbox"
        className={styles.checkboxInput}
        checked={checked}
        onChange={handleOnChange}
      />
      <label htmlFor={id} className={styles.checkboxLabel}>
        {label}
      </label>
    </div>
  );
}
