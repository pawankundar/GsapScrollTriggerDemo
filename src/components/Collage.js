import { photosLeft, photosRight, videos } from "../data";
import { gsap } from "gsap";
import { useEffect } from "react";


const React = require("react");


const VideoElement = ({ src }) => {
  return (
    <div className="hero-element">
      <video
        className="collage-element"
        playsInline=""
        autoPlay
        webkit-playsinline=""
        loop
        src={src}
      ></video>
    </div>
  );
};
const ImageElement = ({ src }) => {
  return (
    <div className="hero-element">
      <img src={src} className="collage-element" alt=""></img>
    </div>
  );
};
const Collage = () => {
  const leftImages = photosLeft;
  const rightImages = photosRight;
  const [leftVideo, rightVideo] = videos;

  useEffect(() => {
    

    const tl = gsap.timeline({
      delay: 0.5,
    });
    tl.fromTo(
      ".hero-element",
      { y: 300 },
      {
        duration: 1,
        y: 0,
        delay: (i) => {
          return 0.2 * i;
        },
      }
    );
  }, []);

  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImages.map((src) => (
          <ImageElement src={src} />
        ))}
        <VideoElement src={leftVideo} />
      </div>
      <div className="right-column">
        {rightImages.map((src) => (
          <ImageElement src={src} />
        ))}
        <VideoElement src={rightVideo} />
      </div>
    </div>
  );
};

export default Collage;
