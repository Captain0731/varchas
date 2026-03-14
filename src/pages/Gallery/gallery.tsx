
import f1 from "../../assets/images/f1.png";
import "./gallery.scss";
import { Link } from "react-router-dom";

const Gallery = () => { 
  return (
    <section className="activities">

      <div className="activities-header">

        <p className="activities-small">
          IN ACTION
        </p>

        <h2 className="activities-title">
          Our Activities
        </h2>

        <p className="activities-desc">
          Every moment captured here is a testament to the energy, creativity, and spirit of the UIT student community...
        </p>

      </div>



      <div className="activities-grid">
        <div className="activity-card">
          <img src={f1} alt="activity"/>
        </div>
        {/* Show other cards only on desktop */}
        <div className="activity-card hide-on-mobile">
          <img src={f1} alt="activity"/>
        </div>
        <div className="activity-card hide-on-mobile">
          <img src={f1} alt="activity"/>
        </div>
        <div className="activity-card hide-on-mobile">
          <img src={f1} alt="activity"/>
        </div>
      </div>

      {/* View More button below grid on all devices */}
      <div className="view-more-btn">
        <Link to="/moregallery">
          <button>View More</button>
        </Link>
      </div>

    </section>
  );
};

export default Gallery;