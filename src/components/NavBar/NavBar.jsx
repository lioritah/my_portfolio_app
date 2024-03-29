import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import resumeFile from "../../../documents/resume.pdf";
import navImage from "../../../assets/profile-img-lior.jpeg";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

import "./NavBar.scss";

const LINK_SLIDING_ANIMATION_DURATION = 350;
const SCROLL_LINK_OFFSET = -110;

export default function NavBar({
  mobileNavBarMenuRef,
  scrollToPageTop,
  closeNavBarMenu,
}) {
  const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(true);

  function toggleNavBarMenu(e) {
    mobileNavBarMenuRef.current.classList.toggle("hide");
    setIsMobileMenuClosed((previousValue) => !previousValue);
  }

  function onNavBarMenuOptionClick() {
    closeNavBarMenu();
    setIsMobileMenuClosed(true);
  }

  return (
    <nav>
      <div className="left-nav-frame">
        <div className="nav-bar-image-frame">
          <img src={navImage} alt="navbar image" className="nav-bar-image" />
        </div>
        <div className="nav-title nav-button" onClick={scrollToPageTop}>
          Lior Itah
        </div>
      </div>
      <ul className="nav-buttons">
        <li>
          <ScrollLink
            to="about"
            className="nav-about-button nav-button"
            spy={true}
            offset={SCROLL_LINK_OFFSET}
            smooth={true}
            duration={LINK_SLIDING_ANIMATION_DURATION}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            className="nav-about-button nav-button"
            spy={true}
            offset={SCROLL_LINK_OFFSET}
            smooth={true}
            duration={LINK_SLIDING_ANIMATION_DURATION}
          >
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            className="nav-contact-button nav-button"
            spy={true}
            offset={SCROLL_LINK_OFFSET}
            smooth={true}
            duration={LINK_SLIDING_ANIMATION_DURATION}
          >
            Contact
          </ScrollLink>
        </li>
        <li>
          <a
            href={resumeFile}
            target="_blank"
            className="nav-resume-button"
            download="lior_itah_resume"
          >
            Download Resume
          </a>
        </li>
      </ul>
      <div
        className="mobile-navbar-menu-button hidden"
        onClick={toggleNavBarMenu}
      >
        {isMobileMenuClosed ? (
          <IoMdMenu className="mobile-navbar-menu-button-image" />
        ) : (
          <IoCloseOutline className="mobile-navbar-menu-button-image" />
        )}
      </div>
      <ul ref={mobileNavBarMenuRef} className="mobile-navbar-menu hide">
        <li>
          <ScrollLink
            onClick={onNavBarMenuOptionClick}
            to="about"
            className="nav-about-button menu-button"
            spy={true}
            offset={SCROLL_LINK_OFFSET}
            smooth={true}
            duration={LINK_SLIDING_ANIMATION_DURATION}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            onClick={onNavBarMenuOptionClick}
            to="projects"
            className="nav-about-button menu-button"
            spy={true}
            offset={SCROLL_LINK_OFFSET}
            smooth={true}
            duration={LINK_SLIDING_ANIMATION_DURATION}
          >
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            onClick={onNavBarMenuOptionClick}
            to="contact"
            className="nav-contact-button menu-button"
            spy={true}
            offset={SCROLL_LINK_OFFSET}
            smooth={true}
            duration={LINK_SLIDING_ANIMATION_DURATION}
          >
            Contact
          </ScrollLink>
        </li>
        <li>
          <a
            href={resumeFile}
            target="_blank"
            onClick={onNavBarMenuOptionClick}
            className="menu-button"
            download="lior_itah_resume"
          >
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
