import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Student Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>🎯 Progress</h3>
          <p>Reading Level: Beginner</p>
        </div>

        <div className="card">
          <h3>⭐ Points</h3>
          <p>120 Points Earned</p>
        </div>

        <div className="card">
          <h3>🤖 AI Suggestion</h3>
          <p>Try phonics game with audio support</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
