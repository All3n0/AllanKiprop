import React from "react";
import "../styling/about.css";
import Navbar from "./Navbar";

export default function About() {
    return (
        <div id="about">
            <Navbar />
            <div className="content">
                <h1>ABOUT</h1>
                <p>
                    Hello! I’m Allan Kiprop, a dedicated software developer with a comprehensive background in both frontend and backend development. I pursued my passion for technology at Moringa School, where I specialized in software development. Since then, I’ve honed my skills to build dynamic, user-friendly applications and robust backend systems. I’m excited to leverage my expertise to create innovative solutions and contribute to impactful projects.
                </p>
            </div>
        </div>
    );
}
