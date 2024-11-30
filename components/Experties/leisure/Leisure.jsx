import React, { useEffect } from "react";
import img1 from "../../../public/images/leisureimages/leisure8.jpg";
import img2 from "../../../public/images/leisureimages/leisure9.jpg";
import Footer from "../../Footer/Footer";
import "./leisure.css";
import { Link } from "react-router-dom";
import { Button } from "../../Buttons/index";

import AOS from "aos";
import "aos/dist/aos.css";

function Leisure() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="leisure__container">
        <div className="leisure_cards-1">
          <div className="leisure__left__card">
            <img src={img2} alt="image" />
          </div>
          <div className="leisure__right__card">
            <h2>LEISURE</h2>
            <hr />
            <div className="paragraph">
              <p>
                Bespoke Leisure design and interior Architecture, including
                A-Frame house, pool house, spa and gym design. A-Frame House: We
                were asked to contribute an architectural design for the
                conversion of a swimming pool building, into an artists A-Frame
                cabin/studio house that would in its own right be a
                self-contained space. A place for quiet reflection, unhindered
                by daily noise.
                <br /> In that regard we devised a scheme that applied an
                oriental quality, a lightness of touch featuring various
                screening elements – moving sliding and pivoting screens that
                were part open, revealing elements through. The whole aspect was
                designed to diaphanous, adaptive yet simple bandas.
                <br /> The dynamics were very interesting. We didn’t want the
                space to be corridor like and so we divided the space neatly
                into areas with the ability to extend that area via the screens
                and/or close off areas.
              </p>
            </div>
          </div>
        </div>
        <div className="leisure_cards-2">
          <div className="leisure__right__card2 small">
            <img src={img1} alt="image" />
          </div>
          <div className="leisure__left__card2">
            <hr />
            <div className="paragraph">
              <p id="leisure-paragraph">
                The material involvement was kept to a minimum. Bronze, glass
                (light), slatted cedar/white wood and flamed basalt. A paired
                down aesthetic helped to focus on the quality of the space and
                kept visual clutter to an absolute minimum.
                <br /> A key delight for us was the ascent fireplace with the
                steel finish. A Hinoki style bath – with bronze and ceramic
                structure echoed in the main storage/staircase space, which
                formed a handrail.
                <br /> A picture window with skylight that slides open – becomes
                an infinity window i.e. the window at the end of the corridor,
                visible from the studio through the spaces through the rear of
                the building. We fully explored the concept in 3D modelling.
              </p>
            </div>
            <div className="leisure__button">
              <Link to="/casestudy">
                <Button text={"VIEW PORTFOLIO"} />
              </Link>
            </div>
          </div>
          <div className="leisure__right__card2">
            <img src={img1} alt="image" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Leisure;
