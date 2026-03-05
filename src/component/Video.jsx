import React from "react";
import "../styles/Video.css";

function Video() {
  return (
    <div className="videoContainer">
      <video
        className="baapVideo"
        src="/Company-hd-Video-1.mp4"
        autoPlay
        muted
        loop
      />

      <div className="overlay"></div>

      <h2 className="videoText">
        AI-Powered Digital Infrastructure
      </h2>
    </div>
  );
}

export default Video;
