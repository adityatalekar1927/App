import React from "react";
import "../styles/Marquee.css";

function Marquee() {
  return (
    <div className="marqueeWrapper">
      <div className="marqueeTrack">
        <img src="/marquee1.webp" alt="logo1" />
        <img src="/marquee4.webp" alt="logo2" />
        <img src="/marquee3.webp" alt="logo3" />

        {/* Duplicate images for smooth infinite scroll */}
        <img src="/marquee1.webp" alt="logo1" />
        <img src="/marquee4.webp" alt="logo2" />
        <img src="/marquee3.webp" alt="logo3" />
      </div>
    </div>
  );
}

export default Marquee;