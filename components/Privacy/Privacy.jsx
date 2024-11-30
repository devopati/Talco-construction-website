import "./privacy.css";
import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Header } from "../Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { Button } from "../Buttons";

function Privacy() {
  return (
    <div className="about__container">
      <div className="spinner">
        <LoadingSpinner />
        <div className="info">
          <h2>This page is under development</h2>
        </div>
      </div>
      <div className="btnn">
        <Link to="/">
          {" "}
          <Button text={"HOME"} />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
