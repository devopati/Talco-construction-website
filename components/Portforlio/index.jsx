import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Assets/context";
import { Button } from "../Buttons";
import Footer from "../Footer/Footer";
import "./index.css";
const Portforlio = () => {
  const { portforliodata } = useContext(AuthContext);

  return (
    <main className="portforlio">
      <section className="portforlio-body">
        <h2>{portforliodata.title}</h2>
        <div className="portforlio-image">
          <img src={portforliodata.images} />
        </div>

        <p>{portforliodata.details}</p>
        <p>{portforliodata.moreDetails}</p>

        <Link to={portforliodata.route}>
          <Button text={portforliodata.buttontext} />
        </Link>
      </section>

      <Footer />
    </main>
  );
};
export default Portforlio;
