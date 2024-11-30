import React from "react";
import Footer from "../Footer/Footer";
import { Header } from "../Header";
import "./index.css";
import { Button } from "../Buttons/index";
import img1 from "../../public/images/residentialimages/residential10.jpg";
import img2 from "../../public/images/leisureimages/leisure8.jpg";
import img3 from "../../public/images/leisureimages/leisure5.jpg";
import img4 from "../../public/images/computeraidedimages/computeraided.jpg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function Experties() {
  return (
    <>
      <motion.div
        className="eperties__container"
        animate={{ opacity: [0, 0, 1] }}
        exit={{ opacity: [1, 1, 0] }}
        transition={{ type: "tween", duration: 0.8 }}
      >
        <div className="experties__top-part">
          <h2>OUR EXPERTIES</h2>
          <hr />
          <motion.div className="experties-paragraph">
            <p>
              With an emphasis on detail, Talco contractors specialise in the
              design of exquisite,
              <br /> high-end, bespoke, luxury environments from private homes
              to swimming pools, <br />
              private spas and a wide range of commercial spaces.
            </p>
          </motion.div>
        </div>
        <div className="experties__cards">
          <div className="experties__card">
            <div className="blurimg">
              <img src={img1} alt="image" className="experties__image" />
            </div>
            <div className="middle">
              {/*<div class="text">RESIDENTIAL</div>*/}
              <div className="text">RESIDENTIAL</div>
              <hr />
              <Link to="/residential">
                <Button text={"DISCOVER"} style={"btn-discover"} />
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="experties__card">
            <div className="blurimg">
              <img src={img2} alt="image" className="experties__image" />
            </div>
            <div className="middle">
              <div className="text">LEISURE</div>
              <hr />
              <Link to="/leisure">
                <Button text={"DISCOVER"} style={"btn-discover"} />
              </Link>
            </div>
          </div>
          <div className="experties__card">
            <div className="blurimg">
              <img src={img3} alt="image" className="experties__image" />
            </div>
            <div className="middle">
              <div className="text">COMMERCIAL</div>
              <hr />
              <Link to="/commercial">
                <Button text={"DISCOVER"} style={"btn-discover"} />
              </Link>
            </div>
          </div>
          <div className="experties__card">
            <div className="blurimg">
              <img src={img4} alt="image" className="experties__image" />
            </div>
            <div className="middle">
              <div className="text">COMPUTER AIDED DESIGN</div>
              <hr />
              <Link to="/about">
                <Button text={"DISCOVER"} style={"btn-discover"} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export { Experties };
