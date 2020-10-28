import React from "react";
import "./Button.css";
export default function Button({ text }) {
  return (
    <>
      <button type="button" class="btn btn-primary btn-style btn-lg">
        {text}
      </button>
    </>
  );
}

export const ColoredButton = ({ text }) => {
  return (
    <>
      <button type="button" class="btn btn-primary btn-lg btn-style colored-btn-style">
        {text}
      </button>
    </>
  );
};
