/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Navlink from "./Link";
import resume from "../assets/Ben_Aguirre_Resume.pdf";
import "../styles/name.css";

export default function Name({ name }) {
  const [curr, setCurr] = useState(0);
  const description = ["Web-developer", "Marketer", "Student", "Photographer"];

  useEffect(() => {
    const key = setInterval(() => {
      setCurr((curr) => (curr === 3 ? 0 : curr + 1));
    }, 4000);
    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <div>
      <div name={name} className="name">
        <div className="top">
          <p>Hi there!</p>
          <h3>
            My name is{" "}
            <span className="my-name">
              <span className="letter">B</span>
              <span className="letter">e</span>
              <span className="letter">n</span>
              <span className="letter"> </span>
              <span className="letter">A</span>
              <span className="letter">g</span>
              <span className="letter">u</span>
              <span className="letter">i</span>
              <span className="letter">r</span>
              <span className="letter">r</span>
              <span className="letter">e</span>
            </span>
          </h3>
          <div className="intro">
            <p>and I'm a</p>
            <p key={curr} className="animate">
              {description[curr]}
            </p>
          </div>
        </div>
        <div className="main-buttons">
          <Navlink to="projects" className="projects-link">
            <button to="projects" className="projects-link">
              Projects
            </button>
          </Navlink>
          <Navlink className="resume-link" download={resume}>
            <button className="projects-link">Resume</button>
          </Navlink>
        </div>
      </div>
    </div>
  );
}
