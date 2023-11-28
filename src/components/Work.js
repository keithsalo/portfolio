import ExampleProject from "./ExampleProject";
import ComingSoon from "../images/ComingSoon.jpeg";
import React from "react";
import NumberGame from "./NumberGame";
// import Weather from "./Weather";

export default function Work() {
  return (
    <div className="projectRow">
      <div>
        <NumberGame />
      </div>
      <div className="project">
        <ExampleProject image={ComingSoon} />
        <p>Test Project 1</p>
      </div>
      <div className="project">
        <ExampleProject image={ComingSoon} />
        <p>Test Project 1</p>
      </div>
    </div>
  );
}
