import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="nav" className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <NavLink className="logo-container" to="/">
        <img className="logo" src="assets/images/autodoc-logo.png" alt="AutoDoc - logo" />
      </NavLink>

      <div className="navigation-content">
        <a href="#content">Content</a>
        <a href="#features">Features</a>
      </div>

      <div className="navigation-buttons">
        <NavLink id="getStarted" to="/document-editor">
          Get Started
        </NavLink>
        <NavLink id="authentication" to="/login">
          Log in
        </NavLink>
      </div>
    </nav>
  );
}
