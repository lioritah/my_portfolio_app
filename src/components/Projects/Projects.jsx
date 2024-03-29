import React from "react";
import bambooProjectThumbnail from "../../../assets/Bamboo social network.png";
// import portfolioProjectThumbnail from "../../../assets/portfolio-thumbnail.png";
import Carousel from "../Carousel/Carousel";

import "./Projects.scss";

const projects = [
  {
    name: "Bamboo",
    url: "https://bamboo-social-network-app.netlify.app",
    description: "Social network app",
    thumbnail: bambooProjectThumbnail,
  },
  // {
  //   name: 'Portfolio',
  //   url: 'https://bendevportfolio.onrender.com',
  //   description: 'My portfolio website',
  //   thumbnail: portfolioProjectThumbnail
  // }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title header">My Projects</h2>
      <Carousel projects={projects} />
    </section>
  );
}
