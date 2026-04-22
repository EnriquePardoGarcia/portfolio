import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Scientist & Data Engineer",
          "Machine Learning Enthusiast",
          "BI & Analytics Developer",
          "Deep Learning Practitioner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
