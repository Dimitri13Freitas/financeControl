import React from "react";
import styles from "./Input.module.css";

export const Input = ({ label, id, ...props }) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} {...props} type="text" id={id} />
    </>
  );
};

