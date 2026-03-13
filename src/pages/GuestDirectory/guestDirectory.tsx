import f1 from "../../assets/images/f1.png";
import "./guestDirectory.scss";

const guests = [
  {
    id: 1,
    name: "Rahul Mehta",
    designation: "Product Manager",
    organization: "Google",
    linkedin: "https://linkedin.com"
  },
  {
    id: 2,
    name: "Ananya Patel",
    designation: "Startup Founder",
    organization: "FinTech Labs",
    linkedin: "https://linkedin.com"
  },
  {
    id: 3,
    name: "Kunal Shah",
    designation: "Investment Analyst",
    organization: "Sequoia Capital",
    linkedin: "https://linkedin.com"
  },
  {
    id: 4,
    name: "Riya Desai",
    designation: "Software Engineer",
    organization: "Microsoft",
    linkedin: "https://linkedin.com"
  },
  {
    id: 5,
    name: "Arjun Verma",
    designation: "AI Researcher",
    organization: "OpenAI",
    linkedin: "https://linkedin.com"
  },
  {
    id: 6,
    name: "Sneha Gupta",
    designation: "Marketing Head",
    organization: "Meta",
    linkedin: "https://linkedin.com"
  }
];

const GuestDirectory = () => {
  return (
    <section className="guest-directory">

      <div className="guest-header">

        <p className="guest-small">
          PRIVATE NETWORKING
        </p>

        <h1 className="guest-title">
          Guest Directory
        </h1>

        <p className="guest-desc">
          Connect with fellow attendees and build meaningful professional relationships.
        </p>

      </div>


      <div className="guest-grid">

        {guests.map((guest) => (

          <div key={guest.id} className="guest-card">

            <img src={f1} alt={guest.name} className="guest-img" />

            <h3>{guest.name}</h3>

            <p className="guest-role">
              {guest.designation}
            </p>

            <p className="guest-org">
              {guest.organization}
            </p>

            {guest.linkedin && (
              <a
                href={guest.linkedin}
                target="_blank"
                rel="noreferrer"
                className="linkedin-btn"
              >
                LinkedIn →
              </a>
            )}

          </div>

        ))}

      </div>

    </section>
  );
};

export default GuestDirectory;