import styles from "./form-element.module.scss";
import React from "react";

export default function FormElement({
  input_id,
  variant,
  label,
  required,
  error,
  error_message,
  children,
  icon,
  icon_color,
  icon_size = 20,
  search = false,
}) {
  const isNumberVariant = variant === "number";

  const handleInputChange = (event) => {
    // If it's a number variant, restrict input to numeric characters only
    if (isNumberVariant) {
      event.target.value = event.target.value.replace(/\D/g, "");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.label_wrapper}>
        {required && <abbr>*</abbr>}
        {variant !== "label-hidden" && label && (
          <label className={styles.label} htmlFor={input_id}>
            {label}
          </label>
        )}
      </div>
      {search ? (
        <div className={`grid ${styles.search_wrapper}`} data-error={error}>
          <div className="grid grid-align_horizontal-center grid-align_vertical-center padding-left_medium"></div>

          {children &&
            React.cloneElement(children, { onChange: handleInputChange })}
          {error && <div className={styles.error_label}>{error_message}</div>}
        </div>
      ) : (
        <div className={`grid ${styles.control_wrapper}`} data-error={error}>
          <div className="grid grid-align_horizontal-center grid-align_vertical-center padding-left_small"></div>

          {children &&
            React.cloneElement(children, { onChange: handleInputChange })}
          {error && <div className={styles.error_label}>{error_message}</div>}
        </div>
      )}
    </div>
  );
}
