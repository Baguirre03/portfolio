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
    <div name={name}>
      <p>Hi there!</p>
      <p>My name is Ben Aguirre</p>
      <div>
        I am a
        <div key={curr} className="animate">
          {description[curr]}
        </div>
      </div>
      <button>
        <Navlink to="projects">Projects</Navlink>
      </button>
    </div>
  );
}
