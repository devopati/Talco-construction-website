import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import logo from "../../public/images/logo.png";

const Footer = () => {
  const getCurrentYear = new Date().getUTCFullYear();

  return (
    <footer className="container">
      <div className="footer__frames">
        <div className="frame1">
          {/*<h2>TALCO</h2>
          <h3>Constructors</h3>*/}
          <div className="footer__logo">
            <img src={logo} alt="talco logo" />
          </div>
        </div>
        <div className="frame2">
          <div className="location">
            <h3>TALCO</h3>
            <small>
              Navigators Complex Kindaruma Road, <br /> Off Ngong Road, Nairobi
              Kenya
            </small>
          </div>
          <div className="talco-contacts">
            <h5>
              {" "}
              Tel: <small>+254(0)732649117</small>
            </h5>
            <div className="web-page">
              <a href="https://talco.co.ke" id="footer__link">
                www.talco.co.ke
              </a>
            </div>
            <small>info@talco.co.ke</small>
          </div>
        </div>
        <div className="frame3">
          <form action="">
            <h3>Subscribe to our Mailing List</h3>
            <div className="subcsribe">
              <input type="email" id="input" placeholder="email@example.com" />
              <div className="footer-btn">
                <button className="subscribe-btn">SUBSCRIBE</button>
              </div>
              {/*<Button text ={"SUBSCRIBE"}/>*/}
            </div>
          </form>
        </div>
      </div>
      <div className="footer__socials">
        <div className="icons">
          <div className="icon">
            <a
              href="https://www.facebook.com/talcocreators?mibextid=LQQJ4d"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://instagram.com/talcodesignstudios?igshid=YmMyMTA2M2Y="
              rel="noreferrer"
              target="_blank"
            >
              <FiInstagram />
            </a>
          </div>
          <div className="icon">
            <a href="https://twitter.com" rel="noreferrer" target="_blank">
              <IoLogoTwitter />
            </a>
          </div>
          <div className="icon">
            <a href="https://linkedin.com" rel="noreferrer" target="_blank">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__last">
        <div className="contact">
          <Link to="/contact" id="footer__link">
            Contact
          </Link>
        </div>
        <div className="privacy">
          <Link to="/privacy" id="footer__link">
            Privacy Policy
          </Link>
        </div>
        <div className="about">
          <Link to="/about" id="footer__link">
            About Us
          </Link>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer__copyright">
        <small>
          Copyright &copy; {getCurrentYear} Talco contructors. All rights
          reserved.{" "}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
