import React from "react";
import styles from "./Radio.module.css";

export const Radio = ({ label, id, ...props }) => {
  return (
    <div>
      <input type="radio" value={id} id={id} />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

