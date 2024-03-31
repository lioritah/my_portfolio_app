import React from "react";
import bambooProjectThumbnail from "../../../assets/Bamboo social network.png";
import portfolioProjectThumbnail from "../../../assets/portfolio-thumbnail.png";
import chatAppProjectThumbnail from "../../../assets/chatApp.png";
import Carousel from "../Carousel/Carousel";

import "./Projects.scss";

const projects = [
  {
    name: "Bamboo",
    url: "https://bamboo-social-network-app.netlify.app",
    description: "Social network app",
    thumbnail: bambooProjectThumbnail,
  },
  {
    name: "Portfolio",
    url: "https://lioritah-portfolio.netlify.app",
    description: "My portfolio website",
    thumbnail: portfolioProjectThumbnail,
  },
  {
    name: "Chatgram",
    url: "https://chatappmaster.netlify.app",
    description: "Chat-app website",
    thumbnail: chatAppProjectThumbnail,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title header">My Projects</h2>
      <Carousel projects={projects} />
    </section>
  );
}
