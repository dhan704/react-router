import React from "react";
import { useOutletContext } from "react-router-dom";

function Sports() {
  const { sports } = useOutletContext();
  console.log("Sports--->", sports);

  return (
    <div>
      {Object.keys(sports).map((item) => {
        return (
          <div>
            {item}:<span>{" " + sports[item]}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Sports;
