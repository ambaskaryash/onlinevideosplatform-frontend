import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 Your Online Physiotherapist. All rights reserved. <br /> Made
          with ❤️ <a href="https://novitaswebworks.in">Novitas WebWorks</a>
        </p>
        <div className="social-links">
          <a href="#">
            <AiFillFacebook />
          </a>
          <a href="#">
            <AiFillTwitterSquare />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
