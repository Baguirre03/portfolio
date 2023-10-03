import { useState, useEffect } from "react";

export default function Name() {
  const [curr, setCurr] = useState(0);
  const description = ["Web-developer", "Marketer", "Student"];

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 4000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <>
      <p>Hi there!</p>
      <p>I'm Ben Aguirre</p>
      <p>A {description[curr]}</p>
      <img src="" alt="" />
    </>
  );
}
