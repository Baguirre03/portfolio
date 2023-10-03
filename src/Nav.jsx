import Navlink from "./Link";

const Navbar = () => {
  return (
    <header>
      <p>Ben Aguirre</p>
      <ul>
        <Navlink to="/" content="Home"></Navlink>
        <Navlink to="about" content="About"></Navlink>
        <Navlink to="projects" content="Projects"></Navlink>
        <Navlink to="contact" content="Contact"></Navlink>
      </ul>
    </header>
  );
};

export default Navbar;
