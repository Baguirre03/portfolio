import { Link } from "react-scroll";

export default function Navlink({ to, children, download, className }) {
  return download ? (
    <li>
      <a className={className} href={download} download="Ben_Aguirre_Resume">
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
