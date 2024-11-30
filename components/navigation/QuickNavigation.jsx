import { Link } from "react-router-dom";
import { Button } from "../Buttons";
import "./index.css";
const QuickNav = () => {
  return (
    <>
      <section className="quick-nav-body">
        <div className="nav-card">
          <div
            style={{
              backgroundImage:
                `url('./images/PHOTO-2022-03-14-16-27-00 (6).jpg')`,
            }}
            className="q-nav fade"
          >
            <div className="nav-card-content">
              {" "}
              <h1>OUR EXPERTIES</h1>
              <hr />
             <Link to={'/expertise'}> <Button text={"Discover"} /></Link>
            </div>
          </div>
        </div>
        <div className="nav-card">
          <div
            style={{
              backgroundImage:
              ` url('./images/PHOTO-2022-03-14-16-27-00 (6).jpg')`
            }}
            className="q-nav1 fade"
          >
            <div className="nav-card-content">
              {" "}
              <h1>VIEW CASE STUDIES</h1>
              <hr />
             <Link to={'/casestudy'}> <Button text={"Discover"} /></Link>
            </div>
          </div>
        </div>
        <div className="nav-card">
          <div
            style={{
              backgroundImage: `url('./images/PHOTO-2022-03-14-16-50-37.jpg')`,
            }}
            className="q-nav2 fade"
          >
            <div className="nav-card-content">
              {" "}
              <h1>DISCUS A PROJECT</h1>
              <hr />
             <Link to={'casestudy'}> <Button text={"Discover"} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export { QuickNav };
