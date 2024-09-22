import React from "react";
import Navbar from "./Navbar";
import "../styling/contact.css";

// Define the social media links and icons
const socialLinks = [
  {
    platform: "LinkedIn",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/174/174857.png", // LinkedIn icon
    link: "https://www.linkedin.com/in/allan-kiprop-51767431a"
  },
  {
    platform: "Gmail",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/281/281769.png", // Gmail icon
    link: "mailto:kipropallan24@gmail.com"
  },
  {
    platform: "WhatsApp",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/733/733585.png", // WhatsApp icon
    link: "https://wa.me/0775976640"
  },
  {
    platform: "Instagram",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/174/174855.png", // Instagram icon
    link: "https://www.instagram.com/_.allxns2real/"
  },
  {
    platform: "GitHub",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png", // GitHub icon
    link: "https://github.com/all3n0"
  }
];

export default function Contact() {
  return (
    <div id="contact">
      <Navbar />
      <h1>Contact</h1>
      <div id="social-media">
        {socialLinks.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
            <div className="circle">
              <img src={social.iconUrl} alt={social.platform} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
