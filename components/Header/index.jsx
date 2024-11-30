import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../navigation/NavItems";
import Dropdown from "../navigation/Dropdown";
import logo from "../../public/images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import "./index.css";
const Header = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const [navSize, setnavSize] = useState("8rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("7rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <header
      className="navbar"
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "1s",
        position: navSize === "5rem" ? "fixed" : "relative",
        left: 0,
        right: 0,
      }}
    >
      <div className="navbar-icons">
        <div className="navbar-icon">
          <FaFacebookF />
        </div>
        <div className="navbar-icon">
          <FiInstagram />
        </div>
        <div className="navbar-icon">
          <IoLogoTwitter />
        </div>
        <div className="navbar-icon">
          <BsLinkedin />
        </div>
      </div>
      <div className="nav-logo">
        <Link to="/" className="navbar-logo">
          {/* <h3>TALCO</h3> */}
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className="navbar-items">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navItems.map((item, index) => {
              if (item.title === "Our Expertise") {
                return (
                  <li
                    key={index}
                    className={item.cName}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    <Link
                      to={item.path}
                      className={item.linkClass}
                      onClick={closeMobileMenu}
                    >
                      {item.title} <i className={item.iconClass} />
                    </Link>
                    {dropdown && <Dropdown />}
                  </li>
                );
              }
              return (
                <li key={item.index} className={item.cName}>
                  <Link
                    to={item.path}
                    className={item.linkClass}
                    onClick={closeMobileMenu}
                  >
                    {item.title} <i className={item.iconClass} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export { Header };
