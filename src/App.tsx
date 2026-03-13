import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Scope from "./pages/Scope/scope";
import Events from "./pages/Events/event";
import EventDetails from "./pages/EventDeatil/eventdetail";
import Speakers from "./pages/Speakers/speakers";
import SpeakerDetails from "./pages/SpeakerDetails/speakerDetails";
import GuestDirectory from "./pages/GuestDirectory/guestDirectory";
import GalaDinner from "./pages/GalaDinner/galaDinner";
import ReachOut from "./pages/ReachOut/reachout";
import Login from "./componates/Login/login";
import Signup from "./componates/Signup/signup";
import Gallery from "./pages/Gallery/gallery";
// import Vision from "./pages/Vision/vision";
import VisionMission from "./pages/Vision/vision";
import Moments from "./pages/Moments/moments";
import Contact from "./pages/Contact/contact";
import Footer from "./componates/Footer/footer";
import Navbar from "./componates/Navbar/navbar";
import ScrollTop from "./componates/ScrollTop/scrollTop";
import FloatingBackground from "./componates/animations/FloatingBackground";
import PageTransition from "./componates/animations/PageTransition";
import PremiumLoader from "./componates/animations/PremiumLoader";
import Reveal from "./componates/animations/Reveal";

function HomePage() {
  return (
    <>
      <Reveal delay={0.05}><Home /></Reveal>
      <Reveal delay={0.1}><About /></Reveal>
      <Reveal delay={0.15}><Scope /></Reveal>
      <Reveal delay={0.2}><Gallery /></Reveal>
      <Reveal delay={0.25}><VisionMission /></Reveal>
      <Reveal delay={0.3}><Moments /></Reveal>
      <Reveal delay={0.35}><Contact /></Reveal>
    </>
  );
}


function AppContent() {
  const location = useLocation();
  const hideFooter = location.pathname === "/login" || location.pathname === "/signup";
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      document.body.style.overflow = "";
      setIsBooting(false);
    }, 1800);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="App">
      <FloatingBackground />
      <Navbar />
      <AnimatePresence mode="wait">
        {isBooting && <PremiumLoader key="boot-loader" />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/speakers" element={<PageTransition><Speakers /></PageTransition>} />
          <Route path="/speaker/:id" element={<PageTransition><SpeakerDetails /></PageTransition>} />
          <Route path="/guest" element={<PageTransition><GuestDirectory /></PageTransition>} />
          <Route path="/gala-dinner" element={<PageTransition><GalaDinner /></PageTransition>} />
          <Route path="/reachout" element={<PageTransition><ReachOut /></PageTransition>} />
          <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
          <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
          <Route path="/event" element={<PageTransition><Events /></PageTransition>} />
          <Route path="/eventdetail" element={<PageTransition><EventDetails /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <ScrollTop />
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
