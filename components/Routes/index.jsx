import { Route, Routes, useLocation } from "react-router-dom";
import About from "../About/About";
import CaseStudy from "../casestudy";
import Contact from "../Contact/Contact";
import { Experties } from "../Experties";
import Commercial from "../Experties/commercial/Commercial";
import Leisure from "../Experties/leisure/Leisure";
import Residential from "../Experties/Residential/Residential";
import HomePage from "../Homepage";
import News from "../News/News";
import NewsExact from "../News/NewsExact";
import Portforlio from "../Portforlio";
import scrollToTop from "../scrollToTop";

import { AnimatePresence } from "framer-motion";
// import Header from "../Header/Header";
import { Header } from "../Header";
import { useEffect } from "react";

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <scrollToTop>
      <AnimatePresence>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/expertise" element={<Experties />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/leisure" element={<Leisure />} />
          <Route path="/portforlio" element={<Portforlio />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsId" element={<NewsExact />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </scrollToTop>
  );
};
export { AppRoutes };
