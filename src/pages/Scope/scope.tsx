import "./scope.scss";
import { FiCheckSquare, FiClock, FiLink2, FiShield } from "react-icons/fi";

const Scope = () => {
  return (
    <section className="operation">

      <div className="operation-header">
        <p className="operation-small">WHAT WE DO</p>

        <h2 className="operation-title">
          Our Operational Scope
        </h2>

        <p className="operation-desc">
          VARCHAS serves as the central platform for planning, organizing, and hosting exceptional events, connecting speakers, guests, and experiences that create lasting memories...
        </p>
      </div>


      <div className="operation-grid">

        <div className="operation-card">
          <div className="icon icon1"><FiCheckSquare className="scope-icon" /></div>
          <h3>Event Oversight</h3>
          <p>
            From concept approval to post-event reporting — VARCHAS oversees every
            phase of event management with structured quality assurance and
            meticulous planning.
          </p>
        </div>

        <div className="operation-card">
          <div className="icon icon2"><FiLink2 className="scope-icon" /></div>
          <h3>Departmental Bridge</h3>
          <p>
            Acting as the connective tissue between all academic departments,
            clubs, and student bodies — enabling seamless inter-departmental
            collaboration and unified campus culture.
          </p>
        </div>

        <div className="operation-card">
          <div className="icon icon3"><FiClock className="scope-icon" /></div>
          <h3>Student Growth</h3>
          <p>
            Creating platforms for students to lead, present, compete, and
            collaborate — nurturing the skills, confidence, and professional
            mindset needed for real-world success.
          </p>
        </div>

        <div className="operation-card">
          <div className="icon icon4"><FiShield className="scope-icon" /></div>
          <h3>Institutional Voice</h3>
          <p>
            Serving as a bridge for communication, coordination, and collaboration — ensuring that events, ideas, and initiatives are organized with clarity, transparency, and purpose.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Scope;
