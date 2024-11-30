import { useState, useEffect } from "react";
import "./index.css";
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
const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      6500
    );

    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((picture, index) => (
          <div className="slide" key={index}>
            <img src={picture}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Slideshow };
