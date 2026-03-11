import "../styles/home.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        
        {/* LEFT SIDE TEXT */}
        <div className="hero-text">
          <span className="hero-tag">✨ Designed for Dyslexic Learners</span>

          <h1>
            Learning Made Fun <br /> & Easy! <span className="emoji">🎉</span>
          </h1>

          <p>
            AI-powered platform that makes reading and learning exciting with
            games, rewards, and personalized support.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Start Learning Free! 🚀</button>
            <button className="secondary-btn">Watch Demo 🎬</button>
          </div>

          <div className="hero-checks">
            <span>✔ No credit card</span>
            <span>✔ Free forever</span>
          </div>
        </div>

        {/* RIGHT SIDE FEATURE CARD */}
        <div className="hero-right">
          <div className="hero-dashboard">

            {/* Floating icons */}
            <div className="floating-icon star">⭐</div>
            <div className="floating-icon target">🎯</div>

            {/* Card inside */}
            <div className="dashboard-inner">

              {/* Top welcome */}
              <div className="dashboard-top">
                <div className="avatar">🦁</div>
                <div>
                  <h3>Welcome, Alex!</h3>
                  <p>Level 12 Learner</p>
                </div>
              </div>

              {/* Middle cards */}
              <div className="dashboard-stats">
                <div className="stat-card xp">
                  <h2>2,450</h2>
                  <p>XP Points</p>
                </div>

                <div className="stat-card badges">
                  <h2>24</h2>
                  <p>Badges</p>
                </div>
              </div>

              {/* Bottom AI bar */}
              <div className="dashboard-ai">
                <h4>🤖 AI Assistant Ready!</h4>
                <p>Get help anytime you need it 💬</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
