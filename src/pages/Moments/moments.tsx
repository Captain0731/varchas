import f1 from "../../assets/images/f1.png";
import "./moments.scss";
import { Link } from "react-router-dom";

const Moments = () => {
  return (
    <section className="moments">

      <div className="moments-header">

        <p className="moments-small">
          EVENTS & COLLABORATIONS
        </p>

        <h2 className="moments-title">
          Moments That Matter
        </h2>

        <p className="moments-desc">
         From large-scale cultural celebrations to specialized technical gatherings — VARCHAS stands behind every event that shapes meaningful experiences and lasting memories.
        </p>

        <div className="moments-badge">
          ★ POWERED BY VARCHAS EXCELLENCE ★
        </div>

      </div>

      <div className="moments-grid">
        <div className="moment-card">
          <img src={f1} alt="event"/>
        </div>
        {/* Show other cards only on desktop/tablet */}
        <div className="moment-card hide-on-mobile">
          <img src={f1} alt="event"/>
        </div>
        <div className="moment-card hide-on-mobile">
          <img src={f1} alt="event"/>
        </div>
        <div className="moment-card hide-on-mobile">
          <img src={f1} alt="event"/>
        </div>
      </div>

      {/* View More button below grid on mobile only */}
      <div className="view-more-btn">
        <Link to="/moremovment">
          <button>View More</button>
        </Link>
      </div>

    </section>
  );
};

export default Moments;
