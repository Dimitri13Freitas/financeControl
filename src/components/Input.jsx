import React from "react";
import styles from "./Input.module.css";

export const Input = ({ setInput, label, id, ...props }) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        onChange={({ target }) => setInput(target.value)}
        className={styles.input}
        {...props}
        type="text"
        id={id}
      />
    </>
  );
};

