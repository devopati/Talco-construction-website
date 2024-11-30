import React from "react";
import Footer from "../Footer/Footer";
import "./about.css";
import IMG1 from "../../public/images/aboutimages/about1.jpg";
import IMG2 from "../../public/images/aboutimages/about2.jpg";
import IMG3 from "../../public/images/aboutimages/about3.jpg";
import IMG4 from "../../public/images/aboutimages/about4.jpg";
import { QuickNav } from "../navigation/QuickNavigation";
import { Button } from "../Buttons";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function About() {
  return (
    <>
      <motion.div
        className="about-container"
        animate={{ opacity: [0, 0, 1] }}
        transition={{ type: "tween", duration: 0.5 }}
        exit={{ opacity: [1, 1, 0] }}
      >
        <div className="about-top-container">
          <div className="about-h-small">
            <h2>TALCO CONTRACTORS</h2>
            <hr />
          </div>
          <div className="about-top-left-cards">
            <div className="about-top-card1">
              <img src={IMG1} alt="" />
            </div>
            <div className="about-top-card2">
              <img src={IMG1} alt="" />
            </div>
          </div>
          <div className="about-top-right-card">
            <div className="about-h-big">
              <h2>TALCO CONTRACTORS</h2>
              <hr />
            </div>

            <p>
              ‘Talco Contractors’ was born out of Vincents’s overriding interest
              in Art and Design over twenty-five years ago. <br /> <br />{" "}
              Vincent is a member of the Chartered Society of Designers and the
              British Institute of Interior Design (BIID) as well as a Fellow of
              the Royal Society for the Encouragement of Arts (RSA). <br />{" "}
              <br />
              <i>
                For a property to work it has to have a flow through it that is
                a constant joy, nothing should jar or annoy, the architecture of
                the building has to work in harmony with the design of the
                interior, it has to be created with the clients needs, wishes
                and lifestyle taken into account”
              </i>
            </p>
          </div>
        </div>
        <div className="about-bottom-cards">
          <div className="about-bottom-card1">
            <h2>THE INSPIRATION</h2>
            <hr />
            <p>
              With this in mind, John set about his journey to perfection,
              originally thinking that he would be an artist, his pursuit of
              perfection led him to much bigger canvases. John’s interest in art
              – and, in particular, modern art – is about many things (with
              composition, form, colour and balance looming large), coupled with
              a love of Georgian Architecture which explains his love of
              symmetry. <br /> <br />
              <i>
                “I am at my happiest working to achieve a client’s brief,
                interpreting their wish list into more than they ever imagined
                was possible. This is what has made us successful with new and
                returning clients. “If we can’t find what we are looking for, we
                design it and have it made.”
              </i>{" "}
              <br />
              <br /> Our collaborations with many of the best architects has
              allowed us to develop our skills in every aspect of Interior
              architecture and design. Importance is put on every element in the
              complex equation.
            </p>
          </div>
          <div className="about-bottom-card2">
            <img src={IMG2} alt="" />
          </div>
        </div>
        <div className="about-bottom-cards">
          <div className="about-h-small">
            <h2>THE COMPANY</h2>
            <hr />
          </div>
          <div className="about-bottom-card2">
            <img src={IMG3} alt="" />
          </div>
          <div className="about-bottom-card1">
            <div className="about-h-big">
              <h2>THE COMPANY</h2>
              <hr />
            </div>
            <p>
              With the clients’ wishes and best interest always at the heart of
              the project, we are motivated by fulfilling their ambitions.
              Whether that be creating a ‘dream home’ or commercially driving
              sales and footfall. <br /> <br /> We successfully collaborate and
              seek relevant experts to ensure the essential and best skills for
              each individual brief are always key to our project team. Over the
              years, we have built a network of solid working relationships with
              industry-recognised architects, specialist consultants, and
              contractors.
            </p>
          </div>
        </div>
        <div className="about-bottom-cards">
          <div className="about-bottom-card1">
            <h2>THE APPROACH</h2>
            <hr />
            <p>
              We are comfortable and able to adapt to new working methods,
              processes, and requirements in order to work coherently with new
              project teams towards the common goal of meeting the best
              interests of our mutual clients. <br />
              <br /> Through regular meetings and discussions, we build strong
              working relationships with our clients, supporting and guiding
              them through every step of the way, as well as being on hand with
              any other aspects of the project they may need. <br />
              <br /> Headed by John, our team of 10 talented designers consists
              of highly skilled professionals across multi-disciplines such as
              Interior Design, Furniture Design, Architectural Technology, and
              Graphic Design, all with a wide range of experience and
              capabilities dedicated to providing the best in luxury design.
            </p>
          </div>
          <div className="about-bottom-card2">
            <img src={IMG4} alt="" />
          </div>
        </div>
        <div className="about-quick-nav">
          <QuickNav />
        </div>
        <div className="about-btn">
          <Link to="/">
            <Button text={"Back to Homepage"} />
          </Link>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default About;
