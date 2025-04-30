import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";

const NotFound = ({ redirectTo }) => {
  return (
    <div>
      <h2>Page not found!</h2>
      <Link to={redirectTo}>Go Back</Link>
    </div>
  );
};

export default memo(NotFound);
