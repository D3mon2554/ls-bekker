import React, { useState } from "react";
import styles from "./email.module.scss";
import FormElement from "../form-element";
import Validation from "../validation";

export default function Email({
  id,
  label,
  variant,
  required = false,
  onChange,
}) {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Validate the email format
    const result = Validation(newEmail, {
      type: "email",
      required,
    });

    setHasError(!result.valid);
    setErrorMessage(result.message);

    // Invoke the parent's onChange callback if provided
    onChange && onChange(newEmail, result.valid);
  };

  return (
    <FormElement
      input_id={id}
      label={label}
      variant={variant}
      required={required}
      error={hasError}
      error_message={errorMessage}
    >
      <input
        className={styles.element}
        id={id}
        name={id}
        type="email"
        placeholder="example@example.com"
        onChange={handleEmailChange}
        value={email}
      />
    </FormElement>
  );
}
