import React from "react";
import { memo } from "react";

const Input = ({ className, ...attributes }) => {
  return (
    <input
      className={
        "px-5 py-0.5 rounded-3xl border-2 border-black focus:outline-none " +
        className
      }
      {...attributes}
    />
  );
};

export default memo(Input);
