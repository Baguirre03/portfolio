import { Link } from "react-scroll";

export default function Navlink({ to, children, download, className }) {
  return download ? (
    <li>
      <a
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        href={download}
      >
        {children}
      </a>
    </li>
  ) : (
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
