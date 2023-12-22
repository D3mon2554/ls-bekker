import React, { useState } from "react";
import styles from "./date.module.scss";

export default function DatePicker({ id, label, onChange }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    onChange && onChange(`${newDate}-${selectedMonth}-${selectedYear}`);
  };

  const handleMonthChange = (event) => {
    const newMonth = event.target.value;
    setSelectedMonth(newMonth);
    onChange && onChange(`${selectedDate}-${newMonth}-${selectedYear}`);
  };

  const handleYearChange = (event) => {
    const newYear = event.target.value;
    setSelectedYear(newYear);
    onChange && onChange(`${selectedDate}-${selectedMonth}-${newYear}`);
  };

  return (
    <div className={styles.datePickerContainer}>
      <label htmlFor={id} className={styles.datePickerLabel}>
        {label}
      </label>
      <div className={styles.datePickerInputs}>
        <input
          id={`${id}-date`}
          type="text"
          placeholder="DD"
          maxLength="2"
          value={selectedDate}
          onChange={handleDateChange}
          className={styles.datePickerInput}
        />
        <span className={styles.separator}>/</span>
        <input
          id={`${id}-month`}
          type="text"
          placeholder="MM"
          maxLength="2"
          value={selectedMonth}
          onChange={handleMonthChange}
          className={styles.datePickerInput}
        />
        <span className={styles.separator}>/</span>
        <input
          id={`${id}-year`}
          type="text"
          placeholder="YYYY"
          maxLength="4"
          value={selectedYear}
          onChange={handleYearChange}
          className={styles.datePickerInput}
        />
      </div>
    </div>
  );
}

export function YearPicker({ id, label, onChange }) {
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearChange = (event) => {
    const newYear = event.target.value;
    setSelectedYear(newYear);
    onChange && onChange(newYear);
  };

  return (
    <>
      <div className={``}>
        <label htmlFor={id} className={styles.datePickerLabel}>
          {label}
        </label>
        <input
          id={`${id}-year`}
          type="text"
          placeholder="YYYY"
          maxLength="4"
          value={selectedYear}
          onChange={handleYearChange}
          className={`${styles.yearpicker}`} // Pass the className as a prop
        />
      </div>
    </>
  );
}
