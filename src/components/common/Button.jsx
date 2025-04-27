import React from "react";
import { memo } from "react";

const Button = ({ children, className, ...attributes }) => {
  return (
    <button
      className={
        "bg-blue-500 text-white px-5 py-2 rounded-3xl hover:bg-blue-600 transition duration-300 ease-in-out" +
        className
      }
      {...attributes}
    >
      {children}
    </button>
  );
};

export default memo(Button);
