import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { dashboardStaggerContainer, dashboardStaggerItem } from "../../componates/animations/motionPresets";
import f1 from "../../assets/images/f1.png";
import "./event.scss";

const runningEvents = [
  {
    title: "Inter-Department Sports League",
    date: "Running Now",
    category: "Sports",
    image: f1,
    desc: "Live league matches are currently ongoing across multiple departments."
  },
  {
    title: "AI Workshop Series",
    date: "Running This Week",
    category: "Technology",
    image: f1,
    desc: "Daily sessions on practical AI, product building, and team mentorship."
  },
  {
    title: "Startup Incubation Sprint",
    date: "Applications Open",
    category: "Entrepreneurship",
    image: f1,
    desc: "Student founders are building and refining ideas with expert guidance."
  }
];

const upcomingEvents = [
  {
    title: "Hackathon 2027",
    date: "18 Jan 2027",
    category: "Technology",
    image: f1,
    desc: "A 24-hour coding challenge bringing together innovators and developers."
  },
  {
    title: "Cultural Fest",
    date: "02 Feb 2027",
    category: "Culture",
    image: f1,
    desc: "A celebration of music, dance, art and student creativity."
  },
  {
    title: "Startup Pitch Day",
    date: "20 Feb 2027",
    category: "Entrepreneurship",
    image: f1,
    desc: "Students pitch innovative startup ideas to mentors and investors."
  },
  {
    title: "Design Sprint Weekend",
    date: "08 Mar 2027",
    category: "Innovation",
    image: f1,
    desc: "A fast-paced weekend where student teams build and present new product ideas."
  }
];

const pastEvents = [
  {
    title: "Football Tournament",
    date: "5 May 2026",
    category: "Sports",
    image: f1,
    desc: "Inter-department football championship at UIT campus."
  },
  {
    title: "Tech Symposium",
    date: "14 Apr 2026",
    category: "Technology",
    image: f1,
    desc: "A day of workshops, demos, and keynote sessions by industry experts."
  },
  {
    title: "Annual Cultural Night",
    date: "25 Mar 2026",
    category: "Culture",
    image: f1,
    desc: "A campus-wide showcase of performances, music, and student art."
  }
];

const Events = () => {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState<"running" | "upcoming" | "past">("running");
  const activeEvents =
    activeType === "running"
      ? runningEvents
      : activeType === "upcoming"
        ? upcomingEvents
        : pastEvents;

  return (
    <section id="event" className="events-page">

      <div className="events-header">

        <p className="events-small">CAMPUS EVENTS</p>

        <h1 className="events-title">
          Explore Our Events
        </h1>

        <p className="events-desc">
          Discover technical, cultural, and social events organized by the
          VARCHAS Students' Committee.
        </p>

      </div>

      <div className="events-switch" role="tablist" aria-label="Events type">
        <button
          type="button"
          className={`events-switch-btn ${activeType === "running" ? "active" : ""}`}
          onClick={() => setActiveType("running")}
        >
          Running Events
        </button>
        <span className="events-switch-divider">|</span>
        <button
          type="button"
          className={`events-switch-btn ${activeType === "upcoming" ? "active" : ""}`}
          onClick={() => setActiveType("upcoming")}
        >
          Upcoming Events
        </button>
        <span className="events-switch-divider">|</span>
        <button
          type="button"
          className={`events-switch-btn ${activeType === "past" ? "active" : ""}`}
          onClick={() => setActiveType("past")}
        >
          Past Events
        </button>
      </div>

      <motion.div
        className={`events-grid ${activeType === "past" ? "events-grid-past" : ""}`}
        variants={dashboardStaggerContainer}
        initial="hidden"
        animate="show"
      >

        {activeEvents.map((event, index) => (

          <motion.div key={index} variants={dashboardStaggerItem}>

          <div className="event-card premium-card">

            <div className="event-image">

              <img src={event.image} alt={event.title}/>

              <span className="event-date">
                {event.date}
              </span>

            </div>

            <div className="event-content">

              <span className="event-category">
                {event.category}
              </span>

              <h3>
                {event.title}
              </h3>

              <p>
                {event.desc}
              </p>

              <button
                className={`event-btn premium-button ${activeType === "past" ? "event-btn-muted" : ""}`}
                onClick={() => navigate("/eventdetail", { state: { event, activeType } })}
                type="button"
              >
                View Details →
              </button>

            </div>

          </div>

          </motion.div>

        ))}

      </motion.div>

    </section>
  );
};

export default Events;