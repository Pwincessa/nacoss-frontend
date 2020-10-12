import React from "react";
import "./Button.css";
const Button = ({text}) => {
  return (
    <>
      <button type="button" class="btn btn-primary btn-style btn-lg">
        {text}
      </button>
    </>
  );
};

export default Button;
