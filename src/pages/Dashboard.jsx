import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Dashboard() {

return (

<div className="dashboard">

{/* Sidebar */}

<div className="sidebar">

<h2 className="logo">LearnSmart</h2>

<ul>

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

<button className="logout">Logout</button>

</div>


{/* Main Content */}

<div className="main">

<h1 className="welcome">Welcome Back 👋</h1>

<p className="subtitle">
Continue improving your reading and learning skills.
</p>


{/* Stats */}

<div className="stats">

<div className="card">
<h3>XP Points</h3>
<p>2450</p>
</div>

<div className="card">
<h3>Achievements</h3>
<p>24</p>
</div>

<div className="card">
<h3>Level</h3>
<p>12</p>
</div>

<div className="card">
<h3>Lessons Done</h3>
<p>48</p>
</div>

</div>


{/* Continue Learning */}

<h2 className="section-title">Continue Learning</h2>

<div className="learning">

<div className="lesson">

<h3>Reading Adventures</h3>

<p>Easy • 65% complete</p>

<div className="progress-bar">
<div className="progress progress1"></div>
</div>

<Link to="/lessons">
<button className="start-btn">Start</button>
</Link>

</div>


<div className="lesson">

<h3>Word Building</h3>

<p>Medium • 40% complete</p>

<div className="progress-bar">
<div className="progress progress2"></div>
</div>

<Link to="/lessons">
<button className="start-btn">Start</button>
</Link>

</div>

</div>


{/* AI Games */}

<h2 className="section-title">AI Learning Games</h2>

<div className="games">

<div className="game-card">

<h3>Pronunciation AI</h3>

<p>Practice speaking words.</p>

<Link to="/pronunciation">
<button className="play-btn">Play</button>
</Link>

</div>


<div className="game-card">

<h3>Word Prediction</h3>

<p>Complete sentences using AI.</p>

<Link to="/prediction">
<button className="play-btn green">Play</button>
</Link>

</div>


<div className="game-card">

<h3>Letter Recognition</h3>

<p>Identify confusing letters.</p>

<Link to="/letters">
<button className="play-btn orange">Play</button>
</Link>

</div>

</div>


{/* Badges */}

<h2 className="section-title">Recent Badges</h2>

<div className="badges">

<div className="badge">🏆 Week Warrior</div>

<div className="badge">⭐ Speed Reader</div>

<div className="badge">🎯 Perfect Score</div>

</div>

</div>

</div>

);
}