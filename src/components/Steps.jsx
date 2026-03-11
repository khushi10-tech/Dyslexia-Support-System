import "../styles/home.css";

const Steps = () => {
  return (
    <section className="steps">
      <div className="steps-container">
        <h2 className="steps-title">
          Get Started in 3 Easy Steps! <span>🚀</span>
        </h2>

        <p className="steps-subtitle">
          Start your learning journey in less than 2 minutes
        </p>

        <div className="steps-grid">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-number purple">1</div>
            <div className="step-icon">👤</div>

            <h3>Create Your Account</h3>
            <p>
              Sign up for free and choose your favorite animal avatar to
              represent you!
            </p>
          </div>

          <div className="step-arrow">›</div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-number blue">2</div>
            <div className="step-icon">🎯</div>

            <h3>Pick Your First Lesson</h3>
            <p>
              Choose from reading adventures, word games, and story time
              activities.
            </p>
          </div>

          <div className="step-arrow">›</div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-number orange">3</div>
            <div className="step-icon">🎉</div>

            <h3>Start Earning Rewards</h3>
            <p>
              Complete lessons, earn XP, unlock badges, and level up your
              learning!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
