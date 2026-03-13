import "./footer.scss";
import { FiInstagram, FiMail, FiMapPin, FiPhone, FiTwitter, FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP WAVE DIVIDER */}
      <div className="footer-wave" aria-hidden="true" />

      <div className="footer-inner">

        {/* BRAND COL */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logoSrc} alt="Varchas" />
            <span>Varchas</span>
          </div>
          <p className="footer-tagline">
            The grand annual cultural &amp; technical fest of UIT.<br />
            Celebrate talent. Experience excellence.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
            <a href="#" aria-label="YouTube"><FiYoutube /></a>
            <a href="mailto:aayam@uit.ac.in" aria-label="Email"><FiMail /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/event">Events</Link></li>
            <li><Link to="/speakers">Speakers</Link></li>
            <li><Link to="/guest">Guest Directory</Link></li>
            <li><Link to="/gala-dinner">Gala Dinner</Link></li>
            <li><Link to="/reachout">Reach Out</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <ul>
            <li><FiMail className="fc-icon" /> aayam@uit.ac.in</li>
            <li><FiPhone className="fc-icon" /> 6354532131</li>
            <li><FiPhone className="fc-icon" /> 9099063506</li>
            <li><FiMapPin className="fc-icon" /> UIT Campus, Surat</li>
          </ul>
        </div>

        {/* COORDINATORS */}
        <div className="footer-col">
          <h4 className="footer-heading">Coordinators</h4>
          <div className="coord-card">
            <div className="coord-avatar">SC</div>
            <div>
              <p className="coord-name">Sumantu D. Chhatrodiya</p>
              <p className="coord-role">Student Coordinator</p>
            </div>
          </div>
          <div className="coord-card">
            <div className="coord-avatar">JS</div>
            <div>
              <p className="coord-name">Jenil S. Sorathiya</p>
              <p className="coord-role">Student Coordinator</p>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <span>© 2026 Varchas · UIT Students' Committee. All rights reserved.</span>
        <span className="footer-made">Made with ♥ by Varchas Tech Team</span>
      </div>

    </footer>
  );
};

export default Footer;