// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  const foucs = () => {
    console.log("Good!");
  };
  const blur = () => {
    console.log("Hey! Eyes on me!");
  };
  return (
    <div>
      <button
        onFocus={() => {
          foucs();
        }}
        onBlur={() => {
          blur();
        }}
      >
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
