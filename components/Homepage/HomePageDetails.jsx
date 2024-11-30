import { Button } from "../Buttons";
import { useEffect } from "react";
import { BsFillOctagonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./index.css";
import img1 from "../../public/images/leisureimages/leisure8.jpg";
import img2 from "../../public/images/PHOTO-2022-03-14-16-50-37.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const HomepageDeatails = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="residential__container">
      <div className="residential_cards-1">
        <div className="residential__left__card home-card">
          <img src={img2} alt="image" />
        </div>
        <div className="residential__right__card">
          <h2 data-aos="fade-right">ABOUT US</h2>
          <hr />
          <div className="paragraph">
            <p>
              TALCO Contractors and Design Ltd specialise in the creation,
              design and interior architecture of exquisite environments for
              residential, leisure and commercial interiors at home and abroad.
              <br />
              Established in 2015 and based in Nairobi, TALCO has become a
              leading Architectural Interior Design and Contractor with offices
              in Nairobi and Mombasa.
              <br />
              With TALCO’s all-encompassing and pragmatic approach to Interior
              design, an expertise based on accurate spatial planning and
              improving the flow of the interior space. Through structure,
              detailed design, the use of lighting and individually designed
              furniture, fixtures and fittings, the practice has completed a
              wide variety of projects both at home and abroad.
              <br />
              At TALCO we have been creating classic – contemporary Interior
              Design for over 5 years. Our approach is to produce meticulously
              designed dateless Interiors.
            </p>
          </div>
          <div className="home-btn" data-aos="flip-right">
            <Link to="/about">
              <Button text={"ABOUT US"} />
            </Link>
          </div>
        </div>
      </div>
      <div className="residential_cards-2">
        <div className="residential__right__card2 small">
          <img src={img1} alt="image" />
        </div>
        <div className="residential__left__card2">
          <h2>WHAT WE DO</h2>
          <hr />
          <div className="paragraph">
            <p id="residential-paragraph">
              As a company, we design complete interiors, including designing
              individual furniture pieces for clients. Our love for Georgian
              architecture’s symmetry, formulism and the way buildings were
              considered and designed to minimize structure and allow natural
              light into rooms, is our inspiration.
              <br />
            </p>
            <div className="our-services">
              <div className="our-services-left">
                <div className="service-class">
                  <BsFillOctagonFill className="icon" />
                  <h3>COMMERCIAL</h3>
                </div>
                <br />
                <div className="service-class">
                  <BsFillOctagonFill className="icon" />
                  <h3>WORK-OFFICES</h3>
                </div>
                <br />
                <div className="service-class">
                  <BsFillOctagonFill className="icon" />
                  <h3>LEISURE</h3>
                </div>
              </div>
              <div className="our-services-right">
                <div className="service-class">
                  <BsFillOctagonFill className="icon" />
                  <h3>RESIDENTIAL</h3>
                </div>
                <br />
                <div className="service-class">
                  <BsFillOctagonFill className="icon" />
                  <h3>SHOPPING MALLS</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="home-btn" data-aos="flip-right">
            <Link to="/expertise">
              <Button text={"VIEW SERVICES"} />
            </Link>
          </div>
        </div>
        <div className="residential__right__card2">
          <img src={img1} alt="image" />
        </div>
      </div>
    </div>
  );
};

export { HomepageDeatails };
