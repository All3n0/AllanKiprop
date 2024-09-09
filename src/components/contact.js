import React, { useState } from "react";
import "../styling/contact.css";
import Navbar from "./Navbar";

// Define the details for each social media
const socialMediaDetails = {
  linkedin: <a href="https://www.linkedin.com/in/allankiprop/" target="_blank" rel="noopener noreferrer">Contact me on LinkedIn</a>,
  gmail: <a href="mailto:kipropallan24@gmail.com" target="_blank" rel="noopener noreferrer">Contact me on Gmail</a>,
  whatsapp: <a href="https://wa.me/0775976640" target="_blank" rel="noopener noreferrer">Contact me on WhatsApp</a>,
  instagram: <a href="https://www.instagram.com/_.allxns2real/" target="_blank" rel="noopener noreferrer">Contact me on Instagram</a>,
  github: <a href="https://github.com/all3n0" target="_blank" rel="noopener noreferrer">Contact me on GitHub</a>
};

export default function Contact() {
  const [selectedDetail, setSelectedDetail] = useState("");

  const handleCircleClick = (media) => {
    setSelectedDetail(socialMediaDetails[media]);
  };

  return (
    <div id="contact">
      <Navbar /> {/* Insert the Navbar component here */}
      <h1>CONTACT</h1>
      <div id="social-media">
        <div className="social-circle" onClick={() => handleCircleClick("linkedin")}>
          <img src="https://i.pinimg.com/236x/70/12/18/701218a0c48418468c9e532ca31a2337.jpg" alt="LinkedIn" />
        </div>
        <div className="social-circle" onClick={() => handleCircleClick("gmail")}>
          <img src="https://i.pinimg.com/236x/88/e1/4c/88e14cc7e7fcbb0e0e09de26cec86c61.jpg" alt="Gmail" />
        </div>
        <div className="social-circle" onClick={() => handleCircleClick("whatsapp")}>
          <img src="https://i.pinimg.com/236x/bf/8a/76/bf8a76719f900b8757154eb3cfbc844a.jpg" alt="WhatsApp" />
        </div>
        <div className="social-circle" onClick={() => handleCircleClick("instagram")}>
          <img src="https://i.pinimg.com/236x/30/8b/49/308b4978318a5ac83e6b128c32504742.jpg" alt="Instagram" />
        </div>
        <div className="social-circle" onClick={() => handleCircleClick("github")}>
          <img src="https://i.pinimg.com/236x/64/88/0b/64880b9b0fe5b53bbe3f7280d262b33f.jpg" alt="GitHub" />
        </div>
      </div>
      {selectedDetail && <div id="details"><p>{selectedDetail}</p></div>}
    </div>
  );
}
