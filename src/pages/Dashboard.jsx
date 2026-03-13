
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {

const [stats, setStats] = useState({
 lessons: 0,
 games: 0,
 accuracy: 0
});

useEffect(() => {
 fetch("http://localhost:5000/api/game/stats")
 .then(res => res.json())
 .then(data => {
   setStats(data);
 })
 .catch(err => console.log(err));
}, []);

return (

<div className="p-8">

{/* Header */}

<h1 className="text-3xl font-bold mb-2">
Welcome Back 👋
</h1>

<p className="text-gray-500 mb-8">
Continue improving your reading and learning skills.
</p>


{/* Stats Section */}

<div className="grid grid-cols-3 gap-6 mb-10">

<div className="bg-white shadow rounded-xl p-6">
<h2 className="text-lg font-semibold">Lessons Completed</h2>
<p className="text-2xl font-bold text-purple-600 mt-2">{stats.lessons}</p>
</div>

<div className="bg-white shadow rounded-xl p-6">
<h2 className="text-lg font-semibold">Games Played</h2>
<p className="text-2xl font-bold text-blue-600 mt-2">{stats.games}</p>
</div>

<div className="bg-white shadow rounded-xl p-6">
<h2 className="text-lg font-semibold">Accuracy</h2>
<p className="text-2xl font-bold text-green-600 mt-2">{stats.accuracy}%</p>
</div>

</div>


{/* Continue Learning */}

<h2 className="text-2xl font-bold mb-4">
Continue Learning
</h2>

<div className="grid grid-cols-2 gap-6 mb-10">

<div className="bg-white shadow-md rounded-xl p-6">

<h3 className="text-xl font-semibold mb-2">
My Lessons
</h3>

<p className="text-gray-500 mb-4">
Practice reading and spelling lessons.
</p>

<Link
to="/lessons"
className="bg-purple-600 text-white px-4 py-2 rounded"
>
View Lessons
</Link>

</div>


<div className="bg-white shadow-md rounded-xl p-6">

<h3 className="text-xl font-semibold mb-2">
Achievements
</h3>

<p className="text-gray-500 mb-4">
Track badges and milestones.
</p>

<Link
to="/achievements"
className="bg-yellow-500 text-white px-4 py-2 rounded"
>
View Achievements
</Link>

</div>

</div>


{/* AI Games */}

<h2 className="text-2xl font-bold mb-4">
AI Learning Games
</h2>

<div className="grid grid-cols-3 gap-6">

<div className="bg-white shadow rounded-xl p-6">

<h3 className="font-semibold mb-2">
Pronunciation AI
</h3>

<p className="text-gray-500 mb-4">
Practice speaking words.
</p>

<Link
to="/pronunciation"
className="bg-blue-600 text-white px-4 py-2 rounded"
>
Play
</Link>

</div>


<div className="bg-white shadow rounded-xl p-6">

<h3 className="font-semibold mb-2">
Word Prediction
</h3>

<p className="text-gray-500 mb-4">
Complete sentences using AI.
</p>

<Link
to="/prediction"
className="bg-green-600 text-white px-4 py-2 rounded"
>
Play
</Link>

</div>


<div className="bg-white shadow rounded-xl p-6">

<h3 className="font-semibold mb-2">
Letter Recognition
</h3>

<p className="text-gray-500 mb-4">
Identify confusing letters.
</p>

<Link
to="/letters"
className="bg-orange-600 text-white px-4 py-2 rounded"
>
Play
</Link>

</div>

</div>

</div>

);
}