import "./navbar.scss";
import { useScroll, useSpring, motion } from "framer-motion";
import { FiLogIn } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logoSrc from "../../assets/images/logo.png";

const Navbar = () => {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.2,
  });

  const isActive = (key: "home" | "speakers" | "guest" | "events" | "gala" | "reach") => {
    const path = location.pathname;

    if (key === "home") return path === "/";
    if (key === "speakers") return path === "/speakers" || path.startsWith("/speaker/");
    if (key === "guest") return path === "/guest";
    if (key === "events") return path === "/event" || path === "/eventdetail";
    if (key === "gala") return path === "/gala-dinner";
    if (key === "reach") return path === "/reachout";

    return false;
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LEFT SIDE LOGOS */}

        <div className="navbar-left">

          
          

          <div className="aayam-logo">
            <img src={logoSrc} alt="aayam"/>
            <span>Varchas</span>
          </div>

        </div>


        {/* NAVIGATION */}

        <nav className="navbar-menu">

          <Link className={isActive("home") ? "active" : ""} to="/">Home</Link>
          <Link className={isActive("speakers") ? "active" : ""} to="/speakers">Speakers</Link>
          <Link className={isActive("guest") ? "active" : ""} to="/guest">Guest Directory</Link>
          <Link className={isActive("events") ? "active" : ""} to="/event">Events</Link>
          <Link className={isActive("gala") ? "active" : ""} to="/gala-dinner">Gala Dinner</Link>
          <Link className={isActive("reach") ? "active" : ""} to="/reachout">Reach Out</Link>

        </nav>


        {/* RIGHT SIDE */}

        <div className="navbar-right">

          <Link className="login-btn" to="/login">
            <FiLogIn className="nav-icon" /> Login
          </Link>

         

        </div>

      </div>

      <motion.div
        className="navbar-scroll-progress"
        style={{ scaleX: smoothProgress }}
        aria-hidden="true"
      />

    </header>
  );
};

export default Navbar;