const Testimonials = () => {
  return (
    <>
      {/* STATS SECTION */}
      <section className="stats-section">
        <h2 className="stats-title">Trusted by Learners Worldwide</h2>

        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-icon">👩‍🎓</div>
            <h3>10K+</h3>
            <p>Happy Learners</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">📚</div>
            <h3>500+</h3>
            <p>Interactive Lessons</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">⭐</div>
            <h3>4.9/5</h3>
            <p>User Rating</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">🏆</div>
            <h3>200+</h3>
            <p>Awards Won</p>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="reviews-section">
        <h2 className="reviews-title">What People Say</h2>

        <div className="reviews-grid">
          <div className="review-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              This platform helped my child read with confidence. The games are
              fun and the progress tracking is amazing.
            </p>
            <h4>— Priya Sharma</h4>
          </div>

          <div className="review-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              The AI reading assistant is the best part. It makes learning easy
              and enjoyable for dyslexic learners.
            </p>
            <h4>— Rahul Mehta</h4>
          </div>

          <div className="review-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              I love the badge rewards system. It motivates me daily and makes
              me feel proud of my learning progress.
            </p>
            <h4>— Ananya Singh</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
