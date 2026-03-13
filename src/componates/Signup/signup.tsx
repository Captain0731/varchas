import "./signup.scss";
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<section className="signup-page">
			<div className="signup-container">
				<div className="signup-left">
					<p className="signup-eyebrow">NEW MEMBER ACCESS</p>
					<h1>Create Your Account</h1>
					<p>
						Join VARCHAS to register for events, connect with speakers, and unlock
						private member-only sections.
					</p>

					<div className="signup-points">
						<span>Fast event registration</span>
						<span>Direct speaker updates</span>
						<span>Exclusive networking access</span>
					</div>
				</div>

				<div className="signup-card">
					<h2>Member Signup</h2>
					<p className="signup-sub">Complete your profile to continue</p>

					<form className="signup-form">
						<label htmlFor="fullName">Full Name</label>
						<input id="fullName" type="text" placeholder="Your full name" />

						<label htmlFor="signupEmail">Email Address</label>
						<input id="signupEmail" type="email" placeholder="you@example.com" />

						<label htmlFor="phone">Phone Number</label>
						<input id="phone" type="tel" placeholder="+91 98765 43210" />

						<label htmlFor="signupPassword">Password</label>
						<input id="signupPassword" type="password" placeholder="Create password" />

						<button className="premium-button" type="submit">Create Account →</button>
					</form>

					<p className="signup-footer">
						Already have an account? <Link to="/login">Login</Link>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Signup;
