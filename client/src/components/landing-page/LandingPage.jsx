import { Link } from "react-router";

export default function LandingPage() {
  return (
    <>
      <div className="hero-section padding-container">
        <div className="container">
          <div className="hero-content">
            <h1 className="heading-main">AutoDoc – A place to:</h1>
            <ul>
              <li>Automate your document workflow</li>
              <li>Generate and manage contracts with ease</li>
              <li>Securely collaborate and sign online</li>
            </ul>
            <Link className="btn" to="/document-editor">
              Get started -{">"}
            </Link>
          </div>
        </div>
      </div>

      <div id="content" className="container padding-container">
        <h1 className="heading">Creating documents has never been easier</h1>
        <p className="text">
          Say goodbye to manual paperwork. AutoDoc helps you draft, edit, and generate
          documents effortlessly—saving time and reducing errors.
        </p>
        <div className="media-container">
          <video
            autoPlay
            playsInline
            loop
            src="https://cdn.spline.design/_assets/_videos/spline_beta_release.mp4"
            poster="assets/images/authentication-background.png"
            width="1080"
            height="634"></video>
        </div>
      </div>

      <div id="features" className="container padding-container">
        <div className="flex-container">
          <h1 className="heading">Tools to ease document creation</h1>
        </div>
      </div>
    </>
  );
}
