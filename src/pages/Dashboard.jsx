import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

const [user,setUser] = useState(null)

useEffect(()=>{

const userId = localStorage.getItem("userId")
console.log("UserId:",userId)

axios.get(`http://localhost:5000/api/dashboard/${userId}`)

.then(res=>{
setUser(res.data)
})

.catch(err=>{
console.log("API error:",err)
})

},[])

if(!user){
return <h2>Loading dashboard...</h2>
}

return (

<div className="dashboard">

{/* Sidebar */}
<div className="sidebar">

<h2 className="logo">LearnSmart</h2>

<div className="user">
<img src={user.avatar} alt="avatar"/>
<div>
<h4>{user.name}</h4>
<p>Level {user.level} Learner</p>
</div>
</div>

<ul className="menu">
<li><Link to="/dashboard">Dashboard</Link></li>
<li><Link to="/lessons">My Lessons</Link></li>
<li><Link to="/achievements">Achievements</Link></li>
<li><Link to="/profile">Profile</Link></li>
<li><Link to="/settings">Settings</Link></li>
</ul>

<button className="logout">Logout</button>

</div>

{/* Main Content */}

<div className="main">

{/* Welcome */}

<div className="welcome">
<h1>Welcome back {user.name} 👋</h1>
<p>Ready to continue learning today?</p>
</div>


{/* Search */}

<div className="searchBar">
<input type="text" placeholder="Search lessons..." />
</div>


{/* Stats */}

<div className="stats">

<div className="statCard">
<h4>XP Points</h4>
<h2>{user.xp}</h2>
<p>Based on your performance</p>
</div>

<div className="statCard">
<h4>Achievements</h4>
<h2>{user.badges.length}</h2>
<p>Badges unlocked</p>
</div>

<div className="statCard">
<h4>Level</h4>
<h2>{user.level}</h2>
<p>Keep learning to level up</p>
</div>

<div className="statCard">
<h4>Lessons Done</h4>
<h2>{user.lessonsCompleted || 0}</h2>
<p>Great progress</p>
</div>

</div>


{/* Continue Learning */}

<div className="learning">

<h2>Continue Learning</h2>

<div className="lessonCard">

<h3>Reading Adventures</h3>
<p>Easy • 65% complete</p>

<div className="progress">
<div className="progressBar" style={{width:"65%"}}></div>
</div>

<button>Start</button>

</div>

<div className="lessonCard">

<h3>Word Building</h3>
<p>Medium • 40% complete</p>

<div className="progress">
<div className="progressBar green" style={{width:"40%"}}></div>
</div>

<button>Start</button>

</div>

</div>


{/* Achievements */}

<div className="recentAchievements">

<h2>Recent Achievements</h2>

<div className="badges">

{user.badges.map((badge,index)=>(
<div className="badge" key={index}>
{badge.icon} {badge.name}
</div>
))}

</div>

</div>


{/* Streak */}

<div className="streak">

🔥 <span>{user.streak || 0} Day Learning Streak</span>

</div>

</div>

</div>

)

}

export default Dashboard;