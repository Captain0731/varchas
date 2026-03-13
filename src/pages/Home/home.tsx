import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import logoSrc from "../../assets/images/logo.png";


const Home: React.FC = () => {
  return (
    <div className="home">

      <div className="hero">

        <img src={logoSrc} alt="varchas" />

        <div className="tag">
          <span className="dot"></span>
          Welcome to the official Varchas Event Portal.
        </div>

        <p className="welcome">WELCOME TO</p>

        <h1 className="title">VARCHAS</h1>

        <p className="committee">
          वर्चस् · The Hub for Events, Speakers & Connections
        </p>

        <p className="desc">
         Where ideas become events, moments become memories, and leaders emerge.
        </p>

        <div className="home-actions">
          <Link to="/event" className="home-btn home-btn-primary premium-button">Explore Events</Link>
          <Link to="/signup" className="home-btn home-btn-outline premium-button">Join VARCHAS</Link>
        </div>

      </div>

    </div>
  );
};

export default Home;