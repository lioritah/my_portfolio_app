import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import "./Hero.scss";

const socials = {
  "https://www.linkedin.com/in/lior-itah-9b0a12247/": (
    <FaLinkedin className="hero-social-link-image" />
  ),
  "https://github.com/lioritah": (
    <FaGithub className="hero-social-link-image" />
  ),
};

export default function Hero() {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-title">Hey, I'm Lior Itah</div>
      <div className="hero-subtitle">A Fullstack Web Developer</div>

      <div className="hero-socials">
        {Object.keys(socials).map((social) => {
          return (
            <a
              key={social}
              href={social}
              target="_blank"
              className="hero-social-link"
            >
              {socials[social]}
            </a>
          );
        })}
      </div>
    </section>
  );
}
