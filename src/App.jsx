// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";

// Pages
import FrontPage from "./pages/FrontPage";
import AboutUs from "./pages/About-Us";
import ContactUs from "./pages/Contact-Us";
import OurHistory from "./pages/OurHistory";
import OurMission from "./pages/OurMission";
import SpiritualSignificance from "./pages/SpiritualSignificance.jsx";
import ActivitiesAtGaushala from "./pages/ActivitiesAtGaushala.jsx";
import Videos from "./pages/Videos";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import Galleries from "./pages/Galleries";
import GalleryDetail from "./pages/GalleryDetail";
import Donate from "./pages/Donate";

// Components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <ScrollToTop /> {/* Include ScrollToTop here */}
      <Navbar language={i18n.language} changeLanguage={changeLanguage} />
      {/* Add top padding to prevent content from being covered on mobile */}
      <div className="pt-20 md:pt-0">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-history" element={<OurHistory />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/spiritual-significance" element={<SpiritualSignificance />} />
          <Route path="/activities-at-gaushala" element={<ActivitiesAtGaushala />} />
          <Route path="/media/videos" element={<Videos />} />
          <Route path="/media/posts" element={<Posts />} />
          <Route path="/media/posts/:id" element={<PostDetail />} />
          <Route path="/media/galleries" element={<Galleries />} />
          <Route path="/media/galleries/:id" element={<GalleryDetail />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
