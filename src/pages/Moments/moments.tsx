import "./moments.scss";

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
          <img src="/images/event1.jpg" alt="event"/>
        </div>

        <div className="moment-card">
          <img src="/images/event2.jpg" alt="event"/>
        </div>

        <div className="moment-card">
          <img src="/images/event3.jpg" alt="event"/>
        </div>

        <div className="moment-card">
          <img src="/images/event4.jpg" alt="event"/>
        </div>

      </div>

    </section>
  );
};

export default Moments;
