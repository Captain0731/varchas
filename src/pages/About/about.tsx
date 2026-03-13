import React from "react";
import { FiAward, FiShield, FiUsers, FiZap } from "react-icons/fi";
import "./about.scss";

const About: React.FC = () => {
  return (
   <section className="about">
  <div className="about-container">

    <p className="about-small">WHO WE ARE</p>

    <h2 className="about-title">
      VARCHAS – The Hub for Events, Speakers & Connections.
    </h2>

    <p className="about-highlight">
Empowering Ideas. Enabling Events. Creating Experiences.    </p>

    <p className="about-text">
      VARCHAS is where inspiring speakers, distinguished guests, and unforgettable events come together...
    </p>

    <p className="about-text">
      VARCHAS serves as a comprehensive event platform where ideas, conversations, and experiences converge. Through a curated lineup of speakers, a private guest directory for meaningful networking, thoughtfully organized events, and elegant gala dinners, the platform creates an environment where connections are built and memorable experiences unfold. VARCHAS ensures that every participant can engage, connect, and be part of extraordinary gatherings...
    </p>

    <div className="about-tags">
      <span className="about-tag"><FiShield className="about-tag-icon" /> Governance</span>
      <span className="about-tag"><FiUsers className="about-tag-icon" /> Collaboration</span>
      <span className="about-tag"><FiZap className="about-tag-icon" /> Innovation</span>
      <span className="about-tag"><FiAward className="about-tag-icon" /> Excellence</span>
    </div>

  </div>
</section>
  );
};

export default About;