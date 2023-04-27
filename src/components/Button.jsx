import React from "react";
import styles from "./Button.module.css";

export const Button = ({ children, ...props }) => {
  return (
    <div className={styles.border}>
      <button className={styles.button} {...props}>
        {children}
      </button>
    </div>
  );
};

