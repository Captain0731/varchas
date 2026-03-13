import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TiltCard from "../../componates/animations/TiltCard";
import { dashboardStaggerContainer, dashboardStaggerItem } from "../../componates/animations/motionPresets";
import "./speakers.scss";

const speakers = [
  {
    id: 1,
    name: "Dr. Rohan Shah",
    org: "Google",
    topic: "AI & Future Innovation",
    image: "/speakers/s1.jpg"
  },
  {
    id: 2,
    name: "Priya Mehta",
    org: "Microsoft",
    topic: "Cloud Computing",
    image: "/speakers/s2.jpg"
  },
  {
    id: 3,
    name: "Arjun Patel",
    org: "Startup Founder",
    topic: "Building Startups",
    image: "/speakers/s3.jpg"
  },
  {
    id: 4,
    name: "Neha Desai",
    org: "Amazon",
    topic: "Product Leadership",
    image: "/speakers/s4.jpg"
  },
  {
    id: 5,
    name: "Kunal Shah",
    org: "Tech Investor",
    topic: "Startup Funding",
    image: "/speakers/s5.jpg"
  },
  {
    id: 6,
    name: "Ananya Gupta",
    org: "Meta",
    topic: "Future of Social Tech",
    image: "/speakers/s6.jpg"
  }
];

const Speakers = () => {
  const navigate = useNavigate();

  return (
    <section className="speakers-page">

      <div className="speakers-header">
        <p className="speakers-small">EVENT SPEAKERS</p>
        <h1 className="speakers-title">Meet Our Speakers</h1>
      </div>

      <motion.div
        className="speakers-grid"
        variants={dashboardStaggerContainer}
        initial="hidden"
        animate="show"
      >

        {speakers.map((speaker) => (

          <motion.div key={speaker.id} variants={dashboardStaggerItem}>

          <TiltCard
            className="speaker-card premium-card"
            onClick={() => navigate(`/speaker/${speaker.id}`)}
          >

            <img src={speaker.image} alt={speaker.name} />

            <div className="speaker-content">

              <h3>{speaker.name}</h3>

              <p className="speaker-org">
                {speaker.org}
              </p>

              <p className="speaker-topic">
                {speaker.topic}
              </p>

              <button
                className="speaker-btn premium-button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/speaker/${speaker.id}`);
                }}
                type="button"
              >
                View Profile →
              </button>

            </div>

          </TiltCard>

          </motion.div>

        ))}

      </motion.div>

    </section>
  );
};

export default Speakers;