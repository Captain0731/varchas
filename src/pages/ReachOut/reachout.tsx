import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import "./reachout.scss";

const ReachOut = () => {
	return (
		<section className="reach-page">
			<div className="reach-header">
				<p className="reach-small">WE ARE HERE TO HELP</p>
				<h1 className="reach-title">Reach Out To VARCHAS</h1>
				<p className="reach-desc">
					Have a proposal, sponsorship idea, event query, or collaboration request?
					Send us your details and our team will connect with you shortly.
				</p>
			</div>

			<div className="reach-layout">
				<div className="reach-form-card premium-card">
					<h2>Send A Message</h2>

					<form className="reach-form">
						<label htmlFor="reachName">Full Name</label>
						<input id="reachName" type="text" placeholder="Your full name" />

						<label htmlFor="reachEmail">Email Address</label>
						<input id="reachEmail" type="email" placeholder="you@example.com" />

						<label htmlFor="reachTopic">Subject</label>
						<input id="reachTopic" type="text" placeholder="Sponsorship / Proposal / Query" />

						<label htmlFor="reachMessage">Message</label>
						<textarea id="reachMessage" rows={5} placeholder="Write your message here..." />

						<button className="reach-btn premium-button" type="submit">
							<FiSend className="reach-btn-icon" /> Send Message
						</button>
					</form>
				</div>

				<div className="reach-info-col">
					<div className="reach-info-card premium-card">
						<h3>Contact Details</h3>
						<p><FiMail className="reach-icon" /> varchas@uit.ac.in</p>
						<p><FiPhone className="reach-icon" /> +91 63545 32131</p>
						<p><FiMapPin className="reach-icon" /> UIT Campus, Ahmedabad</p>
					</div>

					<div className="reach-info-card premium-card">
						<h3>Response Time</h3>
						<p>General inquiries: Within 24 hours</p>
						<p>Partnership & sponsorship: Within 48 hours</p>
						<p>Event day support: Immediate hotline assistance</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReachOut;
