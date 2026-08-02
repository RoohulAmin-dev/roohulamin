import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science Student",
          "Building AI-powered solutions",
          "Full-Stack Developer",
          "Exploring LLMs & Agents",
          "Turning ideas into practical software",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
