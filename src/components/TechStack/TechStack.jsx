import React from "react";
import TechTile from "../TechTile/TechTile";

import "./TechStack.scss";

const techStack = {
  React:
    "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
  Node: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  Express:
    "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
  JavaScript:
    "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png",
  SCSS: "https://miro.medium.com/max/1366/1*HFYKWq92BcXJIdata7d-JQ.png",
  HTML5:
    "https://www.ujudebug.com/wp-content/uploads/2022/07/html-logo-transparent.png",
  CSS3: "https://www.ujudebug.com/wp-content/uploads/2022/07/css-new-logo.jpg",
  MySQL:
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/353427794_646728614158776_8437791729050769556_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TwmBryIse-wAX_Lc1y_&_nc_ht=scontent.ftlv1-1.fna&oh=00_AfAOfG0F7BPN_cerlTQh652sBw5AaHjlA2chVXS6Rb9nzQ&oe=660CC456",
  MongoDB:
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/246656344_10165689418720557_4225476852778908330_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LVmNrinmSdcAX_ptbc5&_nc_ht=scontent.ftlv1-1.fna&oh=00_AfBHtbPQakc6rBja32vm2_fazK_yX-WBRUJAQ-l9cjewcQ&oe=660B755D",
  Angular:
    "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
  Wordpress:
    "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  Typescript: "https://titrias.com/files/2022/04/typescript.png",
};

export default function TechStack() {
  return (
    <div className="tech-stack-container">
      <h2 className="tech-stack-title section-inner-title">Tech Stack</h2>
      <div className="tech-tiles-frame">
        {Object.entries(techStack).map(([techName, techImageUrl]) => (
          <TechTile
            key={techImageUrl}
            techName={techName}
            techImageUrl={techImageUrl}
          />
        ))}
      </div>
    </div>
  );
}
