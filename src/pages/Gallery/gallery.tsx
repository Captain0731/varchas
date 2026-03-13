import "./gallery.scss";

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
          <img src="/images/activity1.jpg" alt="activity"/>
        </div>

        <div className="activity-card">
          <img src="/images/activity2.jpg" alt="activity"/>
        </div>

        <div className="activity-card">
          <img src="/images/activity3.jpg" alt="activity"/>
        </div>

        <div className="activity-card">
          <img src="/images/activity4.jpg" alt="activity"/>
        </div>

      </div>

    </section>
  );
};

export default Gallery;