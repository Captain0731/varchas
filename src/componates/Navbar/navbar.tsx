import "./navbar.scss";
import { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logoSrc from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

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
    <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>

      <div className="navbar-container">

        {/* LEFT SIDE LOGOS */}

        <div className="navbar-left">

          
          

          <div className="aayam-logo">
            <img src={logoSrc} alt="aayam"/>
            <span>Varchas</span>
          </div>

        </div>


        {/* NAVIGATION */}

        <nav id="navbar-menu" className={`navbar-menu ${menuOpen ? "open" : ""}`} aria-label="Primary">

          <Link className={isActive("home") ? "active" : ""} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className={isActive("speakers") ? "active" : ""} to="/speakers" onClick={() => setMenuOpen(false)}>Speakers</Link>
          <Link className={isActive("guest") ? "active" : ""} to="/guest" onClick={() => setMenuOpen(false)}>Guest Directory</Link>
          <Link className={isActive("events") ? "active" : ""} to="/event" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link className={isActive("gala") ? "active" : ""} to="/gala-dinner" onClick={() => setMenuOpen(false)}>Gala Dinner</Link>
          <Link className={isActive("reach") ? "active" : ""} to="/reachout" onClick={() => setMenuOpen(false)}>Reach Out</Link>
          <Link className="mobile-menu-login" to="/login" onClick={() => setMenuOpen(false)}>
            <FiLogIn className="nav-icon" /> Login
          </Link>

        </nav>


        {/* RIGHT SIDE */}

        <div className="navbar-right">

          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="navbar-menu"
          >
            <span className="menu-lines" aria-hidden="true">
              <span className="menu-line" />
              <span className="menu-line" />
              <span className="menu-line" />
            </span>
          </button>

          <Link className="login-btn" to="/login">
            <FiLogIn className="nav-icon" /> Login
          </Link>

         

        </div>

      </div>
    </header>
  );
};

export default Navbar;