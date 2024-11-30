import "./index.css";
import React from "react";
import SliderDet from "./Sliderdet";

const Slider = () => {
  const images = [
    "/images/leisureimages/leisure9.jpg",
  "/images/leisureimages/leisure8.jpg",
  "/images/PHOTO-2022-03-14-16-27-00 (6).jpg",
  "/images/PHOTO-2022-03-14-16-27-00 (7).jpg",
  "/images/PHOTO-2022-03-14-16-27-01 (1).jpg",
  "/images/PHOTO-2022-03-14-16-27-01 (2).jpg",
  "/images/PHOTO-2022-03-14-16-27-01 (3).jpg",
  "/images/PHOTO-2022-03-14-16-27-01 (4).jpg",
  "/images/PHOTO-2022-03-14-16-27-01 (5).jpg",
  "/images/PHOTO-2022-03-14-16-27-01 (6).jpg",
  "/images/leisureimages/leisure2.jpg",
  "/images/leisureimages/leisure3.jpg",
  "/images/leisureimages/leisure4.jpg",
  "/images/leisureimages/leisure5.jpg",
  "/images/commercialimages/commercial1.jpg",
  ];

  const render = images.map((image) => (
    <div className="slider-image">
      <img src={image} alt="...loading..." />
    </div>
  ));
  return <SliderDet>{render}</SliderDet>;
};

export { Slider };
