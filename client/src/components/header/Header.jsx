import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => (window.scrollY > 50 ? setScrolled(true) : setScrolled(false));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="nav" className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <a className="logo-container" href="/landing-page.html">
        <img className="logo" src="assets/images/autodoc-logo.png" alt="AutoDoc - logo" />
      </a>

      <div className="navigation-content">
        <a href="#content">Content</a>
        <a href="#tools">Tools</a>
      </div>

      <div className="navigation-buttons">
        <a id="getStarted" href="/document-editor.html">
          Get Started
        </a>
        <a id="authentication" href="/login.html">
          Log in
        </a>
      </div>
    </nav>
  );
}
