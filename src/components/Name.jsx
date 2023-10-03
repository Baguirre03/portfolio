import { useState, useEffect } from "react";
import Navlink from "./Link";
import "../styles/name.css";

export default function Name({ name }) {
  const [curr, setCurr] = useState(0);
  const description = ["Web-developer", "Marketer", "Student"];

  useEffect(() => {
    const key = setInterval(() => {
      setCurr((curr) => (curr === 2 ? 0 : curr + 1));
    }, 4000);
    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <div name={name} className="name">
      <div className="top">
        <p>Hi there!</p>
        <h3>My name is Ben Aguirre</h3>
        <div className="intro">
          <p>I am a</p>
          <p key={curr} className="animate">
            {description[curr]}
          </p>
        </div>
      </div>
      <button className="projects-link">
        <Navlink to="projects">Projects</Navlink>
      </button>
    </div>
  );
}
