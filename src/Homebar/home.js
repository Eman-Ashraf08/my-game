import React, { useState, useEffect } from "react";
import "./home.css"; 

function Home() {
  const videoSource = "/vedio/background-vedio.mp4";

  const containerStyle = {
    position: "relative",
    height: "100vh",
  };

  const videoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "85%",
    objectFit: "cover",
  };

  const textContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "32px",
    paddingBottom: "400px",
  };

  const initialText = "Games you wanna play";
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const typeText = () => {
      for (let i = 0; i <= initialText.length; i++) {
        setTimeout(() => {
          setDisplayText(initialText.slice(0, i));
        }, i * 100); 
      }

      
      setTimeout(() => {
        setCursorVisible(true);
      }, initialText.length * 100);
    };

    typeText();
  }, []);

  return (
    <div style={containerStyle}>
      <video autoPlay muted loop style={videoStyle}>
        <source src={videoSource} type="video/mp4" />
      </video>
      <div style={textContainerStyle}>
        <div className="placeholder">
          {`${displayText}${cursorVisible ? "|" : ""}`}
        </div>
      </div>
    </div>
  );
}

export default Home