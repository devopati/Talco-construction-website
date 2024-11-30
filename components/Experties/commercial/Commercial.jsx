import React, { useEffect } from "react";
import "./commercial.css";
import { Button } from "../../Buttons/index";
import Footer from "../../Footer/Footer";
import img1 from "../../../public/images/commercialimages/commercial1.jpg";
import img2 from "../../../public/images/commercialimages/commercial2.jpg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

function Commercial() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <motion.div
        className="commercial__container"
        animate={{ opacity: [0, 0, 1] }}
        exit={{ opacity: [1, 1, 0] }}
        transition={{ type: "tween", duration: 0.4 }}
      >
        <div className="commercial_cards">
          <div className="commercial__card-top">
            <div className="card__top-left">
              <img src={img1} alt="Commercial Interior Image" />
            </div>

            <div className="card__top-right">
              <h2>COMMERCIAL INTERIOR ARCHITECTURE</h2>
              <hr />
              <div className="paragraph">
                <p>
                  Full interior architecture and design service for high-end
                  commercial developments. We specialize in the creation of
                  engaging retail environments, focused on customer experiences.
                  Our multi-disciplined creative team are as ambitious as our
                  clients, and are experienced in delivering innovative Retail
                  and Commercial spaces for market-leading brands. We’re a group
                  of creative and strategic thinkers with a passion and
                  enthusiasm to deliver. We provide total design from concept
                  through to project completion, where ever your brand lives. We
                  understand that Retail is ever-evolving and believe in the
                  continuous redevelopment of ourselves through our team. From
                  new talent to experienced designers, their individual
                  expertise allows us to create unique experiences, that
                  connects brands to their customers.
                </p>
              </div>
            </div>
          </div>
          <div className="card__bottom-right yes-small">
            <img src={img2} alt="Commercial Interior Image" />
          </div>
          <div className="commercial__card-bottom">
            <div className="card__bottom-left">
              <hr />
              <div className="paragraph">
                <p>
                  iPhone Street Shop Design has been one of the leading Apple
                  brands in Nairobi for over 35 Years, specialising in Phones,
                  iPads and Apple dealers. Due their ambitious mind-set and
                  continued growth, we were approached to lead the relocation of
                  their original store to a new Flagship location at Pioneer
                  Building. The store design has a more experiential emphasis
                  than their previous showrooms, which also went hand in hand
                  with the new sales process. This was achieved through our
                  design approach to varying display methods, with varying
                  materials and finishes; the introduction of tools for
                  interaction, and a considered Lighting Design creating very
                  specific atmospheres. Directline Assurance Offices: We’ve been
                  working with Directline Assurance for quite a few years now,
                  and when the opportunity came to rebrand and relocate, they
                  knew we were the right people to help them. The brief was for
                  TALCO to come up with Tom Mboya’s Town Branch. And what we got
                  was a design they were all blown away with; from the Angular
                  Wood slatted ceilings working beautifully in tandem with the
                  lowered bulkhead plasterboard ceilings, to the new service
                  areas and even desks that all worked seamlessly together.We
                  were then asked to additionally design all displays plus a
                  boardroom they could welcome VIP clients into and the result
                  was again, stunning!
                </p>
              </div>
              <div className="commercial__button">
                <Link to="/casestudy">
                  <Button text={"VIEW PORTFOLIO"} />
                </Link>
              </div>
            </div>

            <div className="card__bottom-right no-small">
              <img src={img2} alt="Commercial Interior Image" />
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default Commercial;
