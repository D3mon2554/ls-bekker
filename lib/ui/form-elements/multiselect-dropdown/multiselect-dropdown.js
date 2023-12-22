import React, { useState, useEffect, useRef } from "react";
import styles from "./multiselect-dropdown.module.scss";
import FormElement from "../form-element";

export default function MultiSelectDropdown({
  id,
  label,
  options,
  onChange,
  header,
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const chevronStyle = {
    transform: dropdownVisible ? "rotate(0deg)" : "rotate(0deg)",
  };

  const handleOptionToggle = (option) => {
    const isSelected = selectedOptions.includes(option);
    let updatedOptions;

    if (isSelected) {
      updatedOptions = selectedOptions.filter(
        (selectedOption) => selectedOption !== option
      );
    } else {
      updatedOptions = [...selectedOptions, option];
    }

    setSelectedOptions(updatedOptions);
    onChange && onChange(updatedOptions);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    updateChevronRotation(!dropdownVisible, dropdownRef);
  };

  const updateChevronRotation = (isActive, ref) => {
    const chevronElement = ref.current.querySelector(`.${styles.chevron}`);
    if (chevronElement) {
      chevronElement.classList.toggle(styles.bottom, isActive);
    }
  };

  const closeDropdown = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      dropdownVisible
    ) {
      setDropdownVisible(false);
    }
  };

  const handleFilterOptions = (event) => {
    const filterText = event.target.value.toLowerCase();
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(filterText)
    );
    setDropdownVisible(true);
    setSelectedOptions(filteredOptions);
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [dropdownVisible]);

  return (
    <FormElement input_id={id} label={header} variant="default">
      <div
        className={`${styles.dropdownContainer} ${
          dropdownVisible ? styles.active : ""
        }`}
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
        <div className={styles.label}>
          {selectedOptions.length > 0 ? (
            selectedOptions.join(", ")
          ) : (
            <span className={styles.placeholder}>{label}</span>
          )}
          <div className={styles.chevron} style={chevronStyle}></div>
        </div>
        {dropdownVisible && (
          <div className={styles.dropdownOptions}>
            {options.map((option) => (
              <div
                key={option}
                className={styles.option}
                onClick={() => handleOptionToggle(option)}
              >
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  readOnly
                />
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </FormElement>
  );
}
