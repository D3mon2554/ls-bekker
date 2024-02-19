import React, { useRef } from "react";
import styles from "./address.module.scss";
import FormElement from "../form-element";

export default function Address({ id, label, variant, required = false }) {
  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const postalCodeRef = useRef();
  const countryRef = useRef();

  return (
    <>
      <div className="padding-bottom_large">
        <p>{label}</p>
      </div>
      <div className={styles.addressContainer}>
        <FormElement
          input_id={`${id}-street`}
          label="Street Address"
          variant={variant}
          required={required}
        >
          <input
            ref={streetRef}
            className={styles.input}
            id={`${id}-street`}
            type="text"
            placeholder="Enter street address"
          />
        </FormElement>

        <FormElement
          input_id={`${id}-city`}
          label="City"
          variant={variant}
          required={required}
        >
          <input
            ref={cityRef}
            className={styles.input}
            id={`${id}-city`}
            type="text"
            placeholder="Enter city"
          />
        </FormElement>

        <FormElement
          input_id={`${id}-state`}
          label="State"
          variant={variant}
          required={required}
        >
          <input
            ref={stateRef}
            className={styles.input}
            id={`${id}-state`}
            type="text"
            placeholder="Enter state"
          />
        </FormElement>

        <FormElement
          input_id={`${id}-postal-code`}
          label="Postal Code"
          variant={variant}
          required={required}
        >
          <input
            ref={postalCodeRef}
            className={styles.input}
            id={`${id}-postal-code`}
            type="text"
            placeholder="Enter postal code"
          />
        </FormElement>

        <FormElement
          input_id={`${id}-country`}
          label="Country"
          variant={variant}
          required={required}
        >
          <input
            ref={countryRef}
            className={styles.input}
            id={`${id}-country`}
            type="text"
            placeholder="Enter country"
          />
        </FormElement>
      </div>
    </>
  );
}
