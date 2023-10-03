import { Link } from "react-scroll";
export default function Navlink({ to, children }) {
  return (
    <li>
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-90}
        duration={500}
      >
        {children}
      </Link>
    </li>
  );
}
