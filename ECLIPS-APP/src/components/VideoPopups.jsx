import React, { useEffect, useRef } from "react";
import { Button } from 'primereact/button';
import "./VideoPopups.css";

function VideoPopup({ videoSrc, onClose }) {
 // Crea un riferimento per il tag video
 const videoRef = useRef(null);

 useEffect(() => {
   // Avvia la riproduzione del video quando il componente viene montato
   if (videoRef.current) {
     videoRef.current.play();
   }
 }, []);
  return (
    <div className="video-overlay">
      <div className="video-container">
        <Button className="btn-video-close" onClick={onClose}>
          &times;
        </Button>
        <video ref={videoRef} controls width="600">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoPopup;
