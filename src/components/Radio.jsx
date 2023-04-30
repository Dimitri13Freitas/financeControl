import React from "react";

export const Radio = ({ label, id, ...props }) => {
  return (
    <label htmlFor={id} {...props}>
      <input type="radio" value={id} id={id} />
      {label}
    </label>
  );
};

