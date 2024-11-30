import { useContext, useState } from "react";
import { CaseStudyCard } from "../Cards/CasestudyCard";
import { AuthContext } from "../../Assets/context";
import Footer from "../Footer/Footer";
import CasestudyData from "../systemData/CasestudyData";
import "./index.css";
const CaseStudy = () => {
  const [showmore, setshowmore] = useState(false);
  const [btn, setbtn] = useState(1);
  const ViewMore = CasestudyData.filter((id) => id.id < 7);
  const more = ViewMore.map((data) => (
    <CaseStudyCard key={data.id} {...data} />
  ));
  const { case_study_fillter_value, setCase_study_filter_value } =
    useContext(AuthContext);
  let filltered = CasestudyData.filter((data) =>
    data.category.toLocaleLowerCase().includes(`${case_study_fillter_value}`)
  );
  const render = filltered.map((data) => (
    <CaseStudyCard key={data.id} {...data} />
  ));
  return (
    <section className="casestudy">
      <h1>CASE STUDY</h1>
      <section className="case-study-filter">
        <nav>
          <button
            style={{
              color: btn === 1 && "green",
            }}
            className="case-study-fillter"
            onClick={() => {
              setCase_study_filter_value("");
              setshowmore(false);
              setbtn(1);
            }}
          >
            All
          </button>
          <button
            style={{
              color: btn === 2 && "green",
            }}
            className="case-study-fillter"
            onClick={() => {
              setCase_study_filter_value("commercial");
              setshowmore(true);
              setbtn(2);
            }}
          >
            COMMERCIAL
          </button>
          <button
            style={{
              color: btn === 3 && "green",
            }}
            className="case-study-fillter"
            onClick={() => {
              setCase_study_filter_value("leisure");
              setshowmore(true);
              setbtn(3);
            }}
          >
            LEISURE
          </button>
          <button
            style={{
              color: btn === 4 && "green",
            }}
            className="case-study-fillter"
            onClick={() => {
              setCase_study_filter_value("residential");
              setshowmore(true);
              setbtn(4);
            }}
          >
            RESIDENTIAL
          </button>
        </nav>
      </section>
      <div className="cases-body fade1">{render}</div>
      {showmore && <h3>VIEW MORE CASE STUDIES...</h3>}
      {showmore && <hr />}
      {showmore && <div className="cases-body fade1">{more}</div>}
      <Footer />
    </section>
  );
};
export default CaseStudy;
