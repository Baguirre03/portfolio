import Navlink from "./Link";
import "../styles/nav.css";
import { useState } from "react";

const Navbar = () => {
  const [scrolled, setScroll] = useState(false);
  window.addEventListener("scroll", () => setScroll(true));

  return (
    <header className={scrolled && "scrolled"}>
      <p>Ben Aguirre</p>
      <ul>
        <Navlink to="/">Home</Navlink>
        <Navlink to="about">About</Navlink>
        <Navlink to="projects">Projects</Navlink>
        <Navlink to="contact">Contact</Navlink>
      </ul>
    </header>
  );
};

export default Navbar;
