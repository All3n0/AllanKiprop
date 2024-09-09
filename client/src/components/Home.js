import React from "react";
import "../styling/home.css";
import Navbar from "./Navbar";

export default function Home() {
    return (
        <div id="home">
            <Navbar />  {/* Insert the Navbar component here */}
            <span id="name">
                <h1>Allan </h1>
                <h1>Kiprop</h1>
            </span>
            <span id="role">
                <h2>CREATE</h2>
                <h2>DEVELOP</h2>
                <h2>IMPROVE</h2>
                <h2>MOVE</h2>
            </span>
            <p>
                Hi, I'm an innovative, creative, and passionate Full Stack Web Developer based in Nairobi, Kenya.
            </p>
            <div id="languages">
                <p>HTML | CSS | React | Javascript | Python | Flask | SQL | SQLAlchemy</p>
            </div>
        </div>
    );
}
