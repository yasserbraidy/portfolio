import { Link } from "react-router-dom";
import './styles/index.css';
import "./styles/navigationMenu.css";
import "aos/dist/aos.css";
import TypedText from "../../components/TypedText";
import SocialLinks from "../../components/SocialLinks";
import IHeader from "./interface";
import { Container } from "react-bootstrap";
import useHeaderHooks from "./hooks";
import { BsList, BsXLg } from "react-icons/bs";
import { useRef } from 'react';

export default function Header(props: IHeader) {
  const navbar = useRef <HTMLDivElement>(null);
  const {
    activeNav,
    isHeaderTop,
    speed,
    backSpeed,
    backDelay,
    isInfinity,
    strings,
    active,
    isCollapsed,
    toggle,
  } = useHeaderHooks(props, navbar);

  return (
    <header id="header" className={`${isHeaderTop ? "header-top" : ""}`}>
      <Container>
        <h1>
          <Link to="/" onClick={() => active("home")}>
            Yasser Al Braidy
          </Link>
        </h1>
        <div data-aos="fade-in">
          <h2>
            I'm a{" "}
            <span>
              <TypedText
                typeSpeed={speed}
                backSpeed={backSpeed}
                infinity={isInfinity}
                backDelay={backDelay}
                strings={strings}
              />
            </span>
            from Lebanon
          </h2>
        </div>

        <nav id="navbar" className="navbar" ref={navbar}>
          <ul>
            <li>
              <Link
                className={`nav-link ${activeNav === "home" ? "active" : ""}`}
                to="/"
                onClick={() => active("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${activeNav === "about" ? "active" : ""}`}
                to="/"
                onClick={() => active("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${activeNav === "resume" ? "active" : ""}`}
                to="/"
                onClick={() => active("resume")}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  activeNav === "services" ? "active" : ""
                }`}
                to="/"
                onClick={() => active("services")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  activeNav === "contact" ? "active" : ""
                }`}
                to="/"
                onClick={() => active("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle" onClick={() => toggle()}>
            {isCollapsed ? <BsList /> : <BsXLg />}
          </i>
        </nav>

        <SocialLinks />
      </Container>
    </header>
  );
}