import { useState, useEffect } from "react";
import "./name.css";
import profile from "./assets/profile.jpg";

export default function Name() {
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
    <>
      <p>Hi there!</p>
      <p>I'm Ben Aguirre</p>
      <div>
        a
        <div key={curr} className="animate">
          {description[curr]}
        </div>
      </div>

      <img src={profile} alt="" />
    </>
  );
}
