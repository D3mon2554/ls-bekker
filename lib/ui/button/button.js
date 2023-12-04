import styles from "./button.module.scss";
import Link from "next/link";
import React from "react";

const Button = React.forwardRef(
  (
    { label, type = "button", variant, route, target = "self", onClick, href },
    ref
  ) => {
    const getButtonClass = () => {
      const classList = [styles.button];
      switch (variant) {
        case "getStarted": {
          classList.push(styles.getStarted);
          break;
        }
        case "submit": {
          classList.push(styles.submit);
          break;
        }
        case "signUp": {
          classList.push(styles.signUp);
          break;
        }
        case "about": {
          classList.push(styles.about);
          break;
        }
        case "next": {
          classList.push(styles.next);
          classList.push(styles.chevron);
          break;
        }
        case "link": {
          classList.push(styles.link);
          break;
        }
        case "Dark": {
          classList.push(styles.Dark);
          break;
        }
      }
      return classList.join(" ");
    };

    Button.displayName = "Button";
    return (
      <>
        {type === "link" && (
          <Link href={route} className={getButtonClass()} target={target}>
            <span>{label}</span>
          </Link>
        )}

        {type === "button" && (
          <button
            onClick={onClick}
            className={getButtonClass()}
            href={route}
            ref={ref}
            type={type}
          >
            {label}
          </button>
        )}
      </>
    );
  }
);

export default Button;
