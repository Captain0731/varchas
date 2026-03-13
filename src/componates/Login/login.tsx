import "./login.scss";
import { FiCalendar, FiMic, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login-page">
      <div className="login-container">
        <div className="login-left">
          <p className="login-eyebrow">VARCHAS MEMBER PORTAL</p>

          <h1>Welcome Back</h1>

          <p>
            Sign in to manage event registrations, networking access, and
            private updates in one place.
          </p>

          <div className="login-features">
            <span><FiMic className="login-feature-icon" /> Speakers Access</span>
            <span><FiUsers className="login-feature-icon" /> Guest Networking</span>
            <span><FiCalendar className="login-feature-icon" /> Gala Dinner Seating</span>
          </div>

          <div className="login-stat-row">
            <div className="login-stat">
              <strong>2500+</strong>
              <small>Attendees</small>
            </div>
            <div className="login-stat">
              <strong>45+</strong>
              <small>Sessions</small>
            </div>
            <div className="login-stat">
              <strong>30+</strong>
              <small>Speakers</small>
            </div>
          </div>
        </div>

        <div className="login-card">
          <h2>Member Login</h2>

          <p className="login-sub">
            Access the private event portal
          </p>

          <form className="login-form">
            <label className="login-label" htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="you@example.com" />

            <label className="login-label" htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter password" />

            <div className="login-form-row">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            <button className="premium-button" type="submit">
              Login →
            </button>
          </form>
    
          <p className="login-footer">
            Not registered? <Link to="/signup">Create account</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;