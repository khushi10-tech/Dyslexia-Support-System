const Features = () => {
  return (
    <section className="features">
      <h2 className="features-title">
        Why Kids Love LearnSmart! <span>❤️</span>
      </h2>

      <p className="features-subtitle">
        Built specifically for dyslexic learners with features that make
        reading fun and stress-free
      </p>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="icon purple">🧠</div>
          <h3>AI Reading Assistant</h3>
          <p>
            Get instant help and explanations whenever you need them.
            Your personal tutor is always ready!
          </p>
        </div>

        <div className="feature-card">
          <div className="icon orange">🏆</div>
          <h3>Earn Rewards & Badges</h3>
          <p>
            Complete lessons, maintain streaks, and unlock cool avatars.
            Learning becomes an adventure!
          </p>
        </div>

        <div className="feature-card">
          <div className="icon blue">🔊</div>
          <h3>Text-to-Speech Support</h3>
          <p>
            Listen to any text read aloud with clear, natural voices.
            Learn at your own pace!
          </p>
        </div>

        <div className="feature-card">
          <div className="icon pink">✨</div>
          <h3>Personalized Learning</h3>
          <p>
            AI adapts lessons to your learning speed and strengths.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon green">🎯</div>
          <h3>Build Confidence</h3>
          <p>
            Celebrate every small achievement and grow with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
