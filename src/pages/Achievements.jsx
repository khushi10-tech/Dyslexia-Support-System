import "../styles/Achievements.css";

export default function Achievements() {
  return (
    <div className="achievements-page">

      <h1 className="achievements-title">Achievements</h1>

      <div className="badges-grid">

        <div className="badge-card">
          <div className="badge-icon">🏆</div>
          <div className="badge-title">Top Learner</div>
          <div className="badge-desc">Completed 10 lessons</div>
        </div>

        <div className="badge-card">
          <div className="badge-icon">⭐</div>
          <div className="badge-title">Star Student</div>
          <div className="badge-desc">High accuracy score</div>
        </div>

        <div className="badge-card">
          <div className="badge-icon">🎯</div>
          <div className="badge-title">Perfect Score</div>
          <div className="badge-desc">100% in a lesson</div>
        </div>

      </div>

    </div>
  );
}