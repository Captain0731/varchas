import "./vision.scss";
import { FiShield, FiTarget } from "react-icons/fi";

const VisionMission = () => {
  return (
    <section className="vision">

      <div className="vision-header">

        <p className="vision-small">
          OUR COMPASS
        </p>

        <h2 className="vision-title">
          Vision & Mission
        </h2>

      </div>


      <div className="vision-grid">

        {/* Vision Card */}

        <div className="vision-card">

          <p className="vision-label">
            OUR DIRECTION
          </p>

          <div className="vision-icon icon1">
            <FiTarget className="vision-icon-svg" />
          </div>

          <h3 className="vision-card-title">
            Strategic Vision
          </h3>

          <p className="vision-text">
            We envision a platform where exceptional events, inspiring speakers,
and meaningful collaborations come together to create lasting experiences.
VARCHAS aims to become a benchmark for well-curated gatherings — a space
where ideas turn into impactful events, connections evolve into partnerships,
and every experience leaves a lasting impression.
          </p>

          <div className="vision-tags">
            <span>Leadership</span>
            <span>Innovation</span>
            <span>Excellence</span>
          </div>

        </div>


        {/* Mission Card */}

        <div className="vision-card">

          <p className="vision-label">
            OUR PURPOSE
          </p>

          <div className="vision-icon icon2">
            <FiShield className="vision-icon-svg" />
          </div>

          <h3 className="vision-card-title">
            Mission Objective
          </h3>

          <p className="vision-text">
            Our mission is to establish a structured, transparent, and forward-thinking
platform that brings together ideas, people, and experiences through
well-curated events. We are committed to organizing impactful gatherings,
hosting inspiring speakers, and fostering an environment where collaboration,
leadership, and innovation thrive through meaningful interactions.
          </p>

          <div className="vision-tags">
            <span>Transparency</span>
            <span>Structure</span>
            <span>Excellence</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default VisionMission;