import { Slideshow } from "../ImageSlider";
import { QuickNav } from "../navigation/QuickNavigation";
import Footer from "../Footer/Footer";
import "./index.css";
// import { Header } from "../Header";
import { HomepageDeatails } from "./HomePageDetails";
import { Slider } from "../Slider";

const HomePage = () => {
  return (
    <main className="main">
      <Slider />
      <HomepageDeatails />
      <QuickNav />
      <Footer />
    </main>
  );
};

export default HomePage;
