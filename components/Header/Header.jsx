import React, { useEffect, useState } from "react";
import "./header.css";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
  IoLogoTwitter,
} from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [aboutDropDownClicked, setAboutDropDownClicked] = useState(false);
  //   const [expertiseDropDownClicked, setExpertiseDropDownClicked] =
  //     useState(false);
  //   const [newsDropDownClicked, setNewsDropDownClicked] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = window.innerHeight * 0.3;

      if (scrollPosition > headerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={`headermain-container ${isScrolled && "header-scrolled"}`}>
      <div className="headermain-icons">
        <FaFacebookF />
        <FiInstagram />
        <IoLogoTwitter />
        <BsLinkedin />
      </div>
      <div className="headermain-logo">
        <Link to="/">
          <h2>TALCO CONT</h2>
        </Link>
      </div>
      <div
        className={`headermain-navitems ${
          !menuOpen && "headermain-navitems-closed"
        }`}
      >
        <Link to="/">
          <li
            id={`headitem `}
            className={`${selectedItem == "home" ? "selectedItem" : ""}`}
            onClick={() => setSelectedItem("home")}
          >
            home
          </li>
        </Link>
        <div
          className="dropdown"
          onClick={() => setAboutDropDownClicked(!aboutDropDownClicked)}
        >
          <li
            id="headitem"
            onClick={() => setSelectedItem("about")}
            className={`${selectedItem == "about" ? "selectedItem" : ""}`}
          >
            about
            {/* {aboutDropDownClicked ? <IoIosArrowUp /> : <IoIosArrowDown />} */}
            <IoIosArrowDown id="small-dropdown" />
          </li>
          <div
            className={`dropdown-items ${
              aboutDropDownClicked ? "dropdown-clicked" : "dropdown-items"
            }`}
          >
            <Link to="/about">
              <li>our company</li>
            </Link>
            <Link to="/about">
              <li>our processes</li>
            </Link>
          </div>
        </div>
        <li
          id="headitem"
          onClick={() => setSelectedItem("case")}
          className={`${selectedItem == "case" ? "selectedItem" : ""}`}
        >
          case studies
          <IoIosArrowForward id="small-dropdown" />
        </li>
        <div className="dropdown">
          <li
            id="headitem"
            onClick={() => setSelectedItem("expertise")}
            className={`${selectedItem == "expertise" ? "selectedItem" : ""}`}
          >
            our expertise
            <IoIosArrowDown id="small-dropdown" />
          </li>
          <div className="dropdown-items">
            <Link to="commercial" onClick={() => setMenuOpen(false)}>
              <li>commercial</li>
            </Link>
            <Link to="residential" onClick={() => setMenuOpen(false)}>
              <li>residential</li>
            </Link>
            <Link to="leisure" onClick={() => setMenuOpen(false)}>
              <li>leisure</li>
            </Link>
            <Link to="furniture" onClick={() => setMenuOpen(false)}>
              <li>furniture</li>
            </Link>
          </div>
        </div>
        <div className="dropdown">
          <li
            id="headitem"
            onClick={() => setSelectedItem("news")}
            className={`${selectedItem == "news" ? "selectedItem" : ""}`}
          >
            news
            <IoIosArrowDown id="small-dropdown" />
          </li>
          <div className="dropdown-items">
            <li>blog</li>
            <li>press</li>
          </div>
        </div>
        <li
          id="headitem"
          onClick={() => setSelectedItem("contact")}
          className={`${selectedItem == "contact" ? "selectedItem" : ""}`}
        >
          contact
          <IoIosArrowForward id="small-dropdown" />
        </li>
      </div>
      <div className="small-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen ? <FiMenu /> : <AiOutlineClose />}
      </div>
    </div>
  );
};

export default Header;
