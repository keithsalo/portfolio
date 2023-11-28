import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "left",
        padding: "20px",
        marginTop: "20px",
        // backgroundColor: "#f0f0f0",
      }}
    >
      <a
        href="https://www.linkedin.com/in/keith-salo-166664192/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={32} />
      </a>

      <a
        href="https://www.facebook.com/keith.salo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={32} />
      </a>
    </footer>
  );
};

export default Footer;
