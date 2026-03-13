import { useParams } from "react-router-dom";
import f1 from "../../assets/images/f1.png";
import "./speakerDetails.scss";

const speakers = [
  {
    id: 1,
    name: "Dr. Rohan Shah",
    org: "Google AI Research",
    topic: "AI & Future Innovation",
    bio: "Dr. Rohan Shah is an AI researcher working on advanced machine learning systems and innovation in artificial intelligence.",
    image: f1,
    time: "10:00 AM",
    venue: "UIT Auditorium"
  },
  {
    id: 2,
    name: "Priya Mehta",
    org: "Microsoft Cloud",
    topic: "Cloud Computing Future",
    bio: "Priya Mehta leads cloud infrastructure teams at Microsoft and works on scalable enterprise cloud platforms.",
    image: f1,
    time: "11:30 AM",
    venue: "Innovation Hall"
  }
];

const SpeakerDetails = () => {
  const { id } = useParams();
  const speaker = speakers.find((s) => s.id === Number(id));

  if (!speaker) return <h2>Speaker Not Found</h2>;

  return (
    <section className="speaker-details">

      <div className="speaker-container">

        <div className="speaker-image">
          <img src={speaker.image} alt={speaker.name} />
        </div>

        <div className="speaker-info">

          <h1>{speaker.name}</h1>

          <p className="speaker-org">
            {speaker.org}
          </p>

          <span className="speaker-topic">
            {speaker.topic}
          </span>

          <p className="speaker-bio">
            {speaker.bio}
          </p>

          <div className="speaker-session">

            <h3>Session Details</h3>

            <p><strong>Time:</strong> {speaker.time}</p>
            <p><strong>Venue:</strong> {speaker.venue}</p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SpeakerDetails;