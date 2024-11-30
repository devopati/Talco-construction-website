import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Header } from "../Header";
import { NewsData } from "./newsData";
import "./newsexact.css";
import { BsShare } from "react-icons/bs";
import { AiOutlinePrinter } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { Button } from "../Buttons";

function NewsExact() {
  const { newsId } = useParams();
  console.log({ newsId });
  return (
    <>
      <Header />
      <section>
        {NewsData.filter((news) => news.id == newsId).map((news) => {
          return (
            <div key={news.id} className="exact-news-container">
              <div className="exact-news-header">
                <h2>
                  <span>{news.date} </span>
                  {news.title}
                </h2>
                <small>Posted at: {news.time}</small>
              </div>
              <div className="exact-news-body">
                <div className="exact-news-image">
                  <img src={news.image} alt={news.title} />
                </div>
                <div className="exact-news-description">
                  <hr />
                  <p>{news.paragraph}</p>
                </div>
              </div>
              <div className="exact-news-icons">
                <div className="icon-container">
                  <div className="icon">
                    <BsShare />
                    <h5>Share</h5>
                  </div>
                  <div className="icon">
                    <AiOutlinePrinter />
                    <h5>Print</h5>
                  </div>
                  <div className="icon">
                    {onclick ? <FcLike /> : <FcLikePlaceholder />}
                    <h5>Like</h5>
                  </div>
                </div>
              </div>
              <div className="exact-news-btn">
                <Link to="/news">
                  <Button text={"Back to News"} />
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}

export default NewsExact;
