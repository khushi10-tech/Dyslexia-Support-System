import { Link } from "react-router-dom";
import "../styles/Lessons.css";

export default function Lessons() {
  return (

<div className="dashboard">

{/* Sidebar */}

<div className="sidebar">

<h2 className="logo">LearnSmart</h2>

<div className="user-info">
<p className="user-name">Learner</p>
<p className="user-level">Level 12</p>
</div>

<ul className="menu">

<li>
<Link to="/dashboard">Dashboard</Link>
</li>

<li>
<Link to="/lessons">My Lessons</Link>
</li>

<li>
<Link to="/achievements">Achievements</Link>
</li>

<li>
<Link to="/profile">Profile</Link>
</li>

<li>
<Link to="/settings">Settings</Link>
</li>

</ul>

</div>


{/* Main Content */}

<div className="main">

<div className="header">

<div>
<h1>Welcome back 👋</h1>
<p className="subtitle">
Ready to continue your learning journey?
</p>
</div>

<div className="streak">
🔥 7 day streak
</div>

</div>


{/* Stats */}

<div className="stats">

<div className="card">
<p>XP Points</p>
<h2>2,450</h2>
<span className="purple">+120 today</span>
</div>

<div className="card">
<p>Achievements</p>
<h2>24</h2>
<span className="yellow">3 new</span>
</div>

<div className="card">
<p>Level</p>
<h2>12</h2>
<span className="green">75% to next</span>
</div>

<div className="card">
<p>Lessons Done</p>
<h2>48</h2>
<span className="blue">6 this week</span>
</div>

</div>


{/* Continue Learning */}

<div className="content-grid">

<div className="learning-card">

<h2>Continue Learning</h2>

<div className="lesson-item">

<div>
<h3>Reading Adventures</h3>
<p>Easy • 65% complete</p>
</div>

<Link to="/reading">
<button className="start-btn">Start</button>
</Link>

<div className="progress-bar">
<div className="progress progress65"></div>
</div>

</div>


<div className="lesson-item">

<div>
<h3>Word Building</h3>
<p>Medium • 40% complete</p>
</div>

<Link to="/wordbuilding">
<button className="start-btn">Start</button>
</Link>

<div className="progress-bar">
<div className="progress progress40"></div>
</div>

</div>

</div>


{/* Badges */}

<div className="badge-card">

<h2>Recent Badges</h2>

<div className="badge">🏆 Week Warrior</div>
<div className="badge">⭐ Speed Reader</div>
<div className="badge">🎯 Perfect Score</div>

</div>

</div>

</div>

</div>

  );
}