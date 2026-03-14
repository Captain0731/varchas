import "./contact.scss";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact">

      <div className="contact-header">

        <p className="contact-small">
          GET IN TOUCH
        </p>

        <h2 className="contact-title">
          Contact & Institutional Support
        </h2>

        <p className="contact-desc">
          Have an event idea, proposal, or collaboration in mind? Contact the VARCHAS team and let’s create something extraordinary together...
        </p>

      </div>


      <div className="contact-card">

        <div className="contact-avatar">
          SC
        </div>

        <h3 className="contact-name">
          Mr. Sumanlu Dineshbhai Chharodiya
        </h3>

        <p className="contact-role">
          Student Coordinator – VARCHAS Committee
        </p>

        <p className="contact-email">
          uitstudentscommittee@karnavatiuniversity.edu.in
        </p>

        <p className="contact-phone">
          <FiPhone className="contact-icon" /> +91 63545 32131
        </p>

        <br />
        <button className="contact-btn">
          Reach Out →
        </button>

      </div>

    </section>
  );
};

export default Contact;