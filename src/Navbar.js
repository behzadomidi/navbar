import React, { useState } from "react";
import logo from "./logo192.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { links, socials } from "./data";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="nav-logo">
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            {showLinks ? <FaTimes /> : <FaBars />}
          </button>
          <img src={logo} alt="" />
        </div>
        <div className={`${showLinks ? "nav-links active" : "nav-links"}`}>
          <ul className="list">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="nav-social">
          {socials.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
