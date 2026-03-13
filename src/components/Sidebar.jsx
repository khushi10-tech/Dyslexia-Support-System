import { Link } from "react-router-dom";

export default function Sidebar() {

return (

<div className="w-64 bg-white shadow-md min-h-screen p-6">

<h1 className="text-xl font-bold mb-6">
🧠 LearnSmart
</h1>

<ul className="space-y-4">

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

);

}