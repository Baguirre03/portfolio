import Navlink from "./Link";

const Navbar = () => {
  return (
    <header>
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
