import "../styles/Lessons.css";
import { Link } from "react-router-dom";

function Lessons() {

const lessons = [
{
title: "Reading Adventures",
difficulty: "Easy",
progress: 65
},
{
title: "Word Building",
difficulty: "Medium",
progress: 40
},
{
title: "Story Time",
difficulty: "Easy",
progress: 80
},
{
title: "Listening Skills",
difficulty: "Hard",
progress: 20
}
];

return (

<div className="dashboard">

{/* Sidebar */}

<div className="sidebar">

<h2 className="logo">LearnSmart</h2>

<div className="user">
<img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" alt="avatar"/>
<div>
<h4>John</h4>
<p>Level 12 Learner</p>
</div>
</div>

<ul className="menu">

<li><Link to="/dashboard">Dashboard</Link></li>
<li className="active"><Link to="/lessons">My Lessons</Link></li>
<li><Link to="/achievements">Achievements</Link></li>
<li><Link to="/profile">Profile</Link></li>
<li><Link to="/settings">Settings</Link></li>

</ul>

<button className="logout">Logout</button>

</div>

{/* Lessons Content */}

<div className="main">

<div className="lessonHeader">

<h1>My Lessons</h1>
<p>Choose a lesson and continue your learning journey</p>

</div>


<div className="lessonsGrid">

{lessons.map((lesson,index)=>(

<div className="lessonCard" key={index}>

<h3>{lesson.title}</h3>

<span className="difficulty">{lesson.difficulty}</span>

<div className="progress">

<div
className="progressBar"
style={{width:`${lesson.progress}%`}}
></div>

</div>

<p>{lesson.progress}% complete</p>

<button className="startBtn">

{lesson.progress > 0 ? "Continue" : "Start"}

</button>

</div>

))}

</div>

</div>

</div>

);

}

export default Lessons;