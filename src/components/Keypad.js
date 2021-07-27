// Code Keypad Component Here
import React from "react";

function Keypad() {
  const changeHandler = (e) => {
    console.log("Entering password...");
  };
  return (
    <div>
      <input
        onChange={() => {
          changeHandler();
        }}
        type="password"
        name=""
        id=""
      />
    </div>
  );
}

export default Keypad;
