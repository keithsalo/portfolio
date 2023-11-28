import React from "react";
import "../css/styles.css"; // Import the CSS file for styling

const Card = () => {
  return (
    <div className="business-card">
      <div className="card-content">
        <h2>Keith Salo</h2>
        <p>Web Developer</p>
        <p>Email: keithsalo@gmail.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Card;
