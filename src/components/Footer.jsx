import React from "react";
import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>
              Shreyansh<span>.dev</span>
            </h2>
            <p>Building beautiful web experiences.</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a href="https://github.com/ShreyanshVala" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shreyansh-vala-622168205/"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            {/* <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a> */}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Shreyansh Vala.2026 All rights reserved.</p>
          <p className="made-with">
            Made with <Heart size={16} className="heart-icon" /> in React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
