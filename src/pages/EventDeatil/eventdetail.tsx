import { useLocation, useNavigate } from "react-router-dom";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import "./eventdetail.scss";

type EventInfo = {
  title: string;
  date: string;
  category: string;
  image: string;
  desc: string;
};

const EventDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as { state?: { event?: EventInfo; activeType?: string } };

  const fallbackEvent: EventInfo = {
    title: "Hackathon 2027",
    date: "18 Jan 2027",
    category: "Technology",
    image: "/events/hackathon.jpg",
    desc: "A 24-hour coding challenge bringing together innovators and developers."
  };

  const event = state?.event ?? fallbackEvent;

  return (
    <section className="event-details">

      {/* HERO */}

      <div className="event-hero">

        <img
          src={event.image}
          alt={event.title}
        />

        <div className="event-overlay">

          <span className="event-category">
            {event.category} Event
          </span>

          <h1 className="event-title">
            {event.title}
          </h1>

          <div className="event-meta">

            <span><FiCalendar className="event-meta-icon" /> {event.date}</span>
            <span><FiMapPin className="event-meta-icon" /> UIT Campus, Ahmedabad</span>

          </div>

        </div>

      </div>


      {/* CONTENT */}

      <div className="event-container">

        <div className="event-info">

          <h2>About This Event</h2>

          <p>
            {event.desc}
          </p>

          <p>
            Participants will work with mentors, attend rapid workshops,
            and compete for exciting prizes while showcasing their ideas
            to industry experts.
          </p>

        </div>


        {/* EVENT DETAILS */}

        <div className="event-sidebar">

          <div className="details-card">

            <h3>Event Information</h3>

            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> 10:00 AM – 10:00 AM (24 Hours)</p>
            <p><strong>Venue:</strong> UIT Auditorium</p>
            <p><strong>Organizer:</strong> VARCHAS Committee</p>

            <button className="register-btn" onClick={() => navigate(-1)} type="button">
              Back To Events →
            </button>

          </div>

        </div>

      </div>


      {/* GALLERY */}

      <div className="event-gallery">

        <h2>Event Moments</h2>

        <div className="gallery-grid">

          <img src="/events/gallery1.jpg"/>
          <img src="/events/gallery2.jpg"/>
          <img src="/events/gallery3.jpg"/>
          <img src="/events/gallery4.jpg"/>

        </div>

      </div>

    </section>
  );
};

export default EventDetails;