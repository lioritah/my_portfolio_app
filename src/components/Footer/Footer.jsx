import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

import "./Footer.scss";

const socials = {
  "https://www.linkedin.com/in/lior-itah-9b0a12247": (
    <GrLinkedinOption className="social-link-image" />
  ),
  "https://github.com/lioritah": <FaGithub className="social-link-image" />,
};

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-summery">
          <h3 className="footer-summery-title footer-title">Lior Itah</h3>
          <p className="footer-summery-subtitle">
            Fullstack Web Developer <br />
            Call me on:{" "}
            <a href="tel:0524017070" className="footer-phone-number">
              052-4017070
            </a>
          </p>
        </div>
        <div className="footer-social">
          <h3 className="footer-social-title footer-title">Social</h3>
          <div className="footer-social-content">
            {Object.keys(socials).map((social) => {
              return (
                <a
                  key={social}
                  className="social-link"
                  href={social}
                  target="_blank"
                >
                  {socials[social]}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        © Copyright {new Date().getFullYear()}. Developed by Lior Itah
      </div>
    </footer>
  );
}
