import React, { useEffect } from "react";
import img1 from "../../../public/images/residentialimages/residential12.jpg";
import img2 from "../../../public/images/residentialimages/residential10.jpg";
import Footer from "../../Footer/Footer";
import "./residential.css";
import { Link } from "react-router-dom";
import { Button } from "../../Buttons/index";

import AOS from "aos";
import "aos/dist/aos.css";

function Residential() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="residential__container">
        <div className="residential_cards-1">
          <div className="residential__left__card">
            <img src={img2} alt="image" />
          </div>
          <div className="residential__right__card">
            <h2>RESIDENTIAL DESIGN</h2>
            <hr />
            <div className="paragraph">
              <p>
                Full residential design and interior Architecture services for
                luxury Interiors. Every project we deliver is an opportunity for
                us to bring our unique thinking to solve problems, innovate and
                collaborate with our clients and beyond.
                <br />
                Ruiru Residences: This project created significant benefits for
                the surrounding area and local communities. The site team formed
                excellent relationships with JKUAT College, offering site
                visits, work experience, and helping some young people into
                apprenticeships.
                <br />
                In addition, the speed of the programme influenced the internal
                sequence for forming the studios, with deliveries made before
                internal walls were constructed and external SFS walls were
                built. External landscaping and paving enhancement were
                completed in the second half of the programme, requiring careful
                phasing and planning to prevent disruption.
              </p>
            </div>
          </div>
        </div>
        <div className="residential_cards-2">
          <div className="residential__right__card2 small">
            <img src={img1} alt="image" />
          </div>
          <div className="residential__left__card2">
            <hr />
            <div className="paragraph">
              <p id="residential-paragraph">
                The one-way road network around the site meant that it was vital
                to minimise disruption to the road; all contractor parking was
                located in local car parks surrounding the site, and road
                closures were limited to the dates of the installation and
                removal of the crane. The Nest Boutique Hotel is part of the
                larger Naivasha Hotelier. This project consists of 2 residential
                blocks, making up 49 apartments, surrounding a central
                landscaped podium courtyard. Below the apartments situates a
                commercial unit, a car park and cycle storage.
              </p>
            </div>
            <div className="residential__button">
              <Link to="/casestudy">
                <Button text={"VIEW PORTFOLIO"} />
              </Link>
            </div>
          </div>
          <div className="residential__right__card2" data-aos="zoom-in">
            <img src={img1} alt="image" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Residential;
