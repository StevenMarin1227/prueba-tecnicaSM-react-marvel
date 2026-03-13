import React from "react";

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">

      <div className="footer-content">

        <div className="footer-left">
          <strong>Marvel Portal</strong>
        </div>

        <div className="footer-center">
          © {year} | Desarrollado por{" "}
          <a
            href="https://portafolio-sm.vercel.app/#home"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Steven Marin
          </a>
        </div>

        <div className="footer-right">
          React · Node · API
        </div>

      </div>

    </footer>
  );
}

export default Footer;