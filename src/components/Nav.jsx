import Navlink from "./Link";
import "../styles/nav.css";
import resume from "../assets/Resume.pdf";
import { useState } from "react";

const Navbar = () => {
  const [scrolled, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  });

  return (
    <header className={scrolled ? "scrolled" : "not-scrolled"}>
      <p>Ben Aguirre</p>
      <ul>
        <Navlink to="/">Home</Navlink>
        <Navlink to="about">About</Navlink>
        <Navlink to="projects">Projects</Navlink>
        <Navlink to="contact">Contact</Navlink>
        <Navlink download={resume}>Resume</Navlink>
      </ul>
    </header>
  );
};

export default Navbar;
