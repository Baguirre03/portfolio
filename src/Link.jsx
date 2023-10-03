import { Link } from "react-scroll";
export default function Navlink({ to, content }) {
  return (
    <li>
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        {content}
      </Link>
    </li>
  );
}
