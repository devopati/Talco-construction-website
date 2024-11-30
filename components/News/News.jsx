import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Button } from "../Buttons";
import "./news.css";
import { NewsData } from "./newsData";

import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

function News() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <motion.div
        className="news-main-container"
        animate={{ opacity: [0, 0, 1] }}
        exit={{ opacity: [1, 1, 0] }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <div className="news-header">
          <h2>NEWS</h2>
          <hr />
        </div>
        {NewsData.map((news) => {
          return (
            <div className="news__container" key={news.id}>
              <div className="news__left">
                <div className="news-small">
                  <h2 id="news-title" data-aos="zoom-in">
                    <span>{news.date} </span>
                    {news.title}
                  </h2>
                  <small>Posted at: {news.time}</small>
                </div>
                <div className="news-image" data-aos="slide-right">
                  <img src={news.image} alt={news.title} />
                </div>
              </div>
              <div className="news__right">
                <p>
                  <div className="news-big" data-aos="zoom-in">
                    <h2 id="news-title">
                      <span>{news.date} </span>
                      {news.title}
                    </h2>
                    <small>Posted at: {news.time}</small>
                  </div>
                  <motion.div
                    className="news-paragraph"
                    animate={{ opacity: [0, 0, 1] }}
                    transition={{ type: "tween", duration: 1.7 }}
                  >
                    {news.paragraph}
                  </motion.div>
                </p>
                <div className="news-btn" data-aos="flip-right">
                  <Link to={`/news/${news.id}`}>
                    {" "}
                    <Button text={"Read More"} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      <Footer />
    </div>
  );
}

export default News;
