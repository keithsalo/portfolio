import React from "react";
// import { NavLink } from "react-router-dom";
import "../css/./navbar.css";
// import Work from "./work";
import Me from "../images/Me.jpg";

const NavBarTwo = () => {
  return (
    <nav className="top-nav">
      <div className="logo">
        <a href="/">Keith Salo</a>
        <div className="subName">Web Developer</div>
      </div>

      <img className="myImage" src={Me} alt="pictute of me" />
      <div className="navLinks">
        <a href="/work">Work</a>
        <a href="/contact">Contact</a>
        {/* <a href="/thoughts">Thoughts</a> */}
      </div>
    </nav>
  );
};
export default NavBarTwo;
