import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Engineer",
          "Machine Learning Enthusiast",
          "Deep Learning Enthusiast",
          "Agentic AI Enthusiast",
          "Someone who loves to explore new technologies",
          "Graphic Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
