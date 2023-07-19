import React from "react";
import "./nav.css";

export const NavSection = () => {
  return (
    <div className="navSection">
      <h1 className="logo">
        INPSIRE<span>ME</span>
      </h1>
      <div className="navLinks">
        <ul>
          <li className="sameStyle">Blog</li>
          <li className="sameStyle">ABout Us</li>
          <li>Contact US</li>
        </ul>
      </div>
    </div>
  );
};
