import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Assets/context";
import { Button } from "../Buttons";
import "./index.css"
const CaseStudyCard = (props) => {
  const{setportforliodata}=useContext(AuthContext)
  const backgroundimage = `url('${props.images[0]}')`;
  const settingData = (props) => {
    setportforliodata({
      title:props.case,
      details:props.description,
      moreDetails:props.more,
      buttontext:'More Cases',
      route:'/casestudy',
      images:[props.images],
    })
  };
  return (
    <section
      className="casestudy-card fade1"
      style={{
        backgroundImage: `${backgroundimage}`,
      }}
    >
      <div className="casestudy-card-content">
        <h1>{props.case}</h1>
        <hr />
      <Link to={'/portforlio'}>
      <Button text={"View"} onClick={() => settingData(props)} />
      </Link>
      </div>
    </section>
  );
};
export { CaseStudyCard };
