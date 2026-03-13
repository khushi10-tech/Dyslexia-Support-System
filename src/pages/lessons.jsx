import { Link } from "react-router-dom";

export default function Dashboard() {
  return (

<div className="flex min-h-screen bg-gray-100">

{/* Sidebar */}

<div className="w-64 bg-white shadow-lg p-6">

<h1 className="text-2xl font-bold text-purple-600 mb-8">
LearnSmart
</h1>

<div className="mb-8">
<p className="font-semibold">Learner</p>
<p className="text-gray-500 text-sm">Level 12</p>
</div>

<nav className="space-y-4">

<Link to="/" className="block text-purple-600 font-semibold">
Dashboard
</Link>

<Link to="/lessons" className="block text-gray-600 hover:text-purple-600">
My Lessons
</Link>

<Link to="/achievements" className="block text-gray-600 hover:text-purple-600">
Achievements
</Link>

<Link to="/profile" className="block text-gray-600 hover:text-purple-600">
Profile
</Link>

<Link to="/settings" className="block text-gray-600 hover:text-purple-600">
Settings
</Link>

</nav>

</div>


{/* Main Content */}

<div className="flex-1 p-8">

{/* Header */}

<div className="flex justify-between items-center mb-8">

<div>
<h1 className="text-3xl font-bold">
Welcome back 👋
</h1>

<p className="text-gray-500">
Ready to continue your learning journey?
</p>
</div>

<div className="bg-white px-6 py-3 rounded-xl shadow">
🔥 7 day streak
</div>

</div>


{/* Stats */}

<div className="grid grid-cols-4 gap-6 mb-10">

<div className="bg-white p-6 rounded-xl shadow">
<p className="text-gray-500">XP Points</p>
<h2 className="text-2xl font-bold">2,450</h2>
<p className="text-purple-600 text-sm">+120 today</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<p className="text-gray-500">Achievements</p>
<h2 className="text-2xl font-bold">24</h2>
<p className="text-yellow-500 text-sm">3 new</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<p className="text-gray-500">Level</p>
<h2 className="text-2xl font-bold">12</h2>
<p className="text-green-500 text-sm">75% to next</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<p className="text-gray-500">Lessons Done</p>
<h2 className="text-2xl font-bold">48</h2>
<p className="text-blue-500 text-sm">6 this week</p>
</div>

</div>


{/* Continue Learning */}

<div className="grid grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-xl font-bold mb-4">
Continue Learning
</h2>

{/* Reading */}

<div className="mb-6">

<div className="flex justify-between items-center">

<div>
<h3 className="font-semibold">Reading Adventures</h3>
<p className="text-sm text-gray-500">
Easy • 65% complete
</p>
</div>

<Link
to="/reading"
className="bg-purple-600 text-white px-4 py-2 rounded"
>
Start
</Link>

</div>

<div className="w-full bg-gray-200 h-2 mt-2 rounded">
<div className="bg-purple-600 h-2 w-2/3 rounded"></div>
</div>

</div>


{/* Word Building */}

<div>

<div className="flex justify-between items-center">

<div>
<h3 className="font-semibold">Word Building</h3>
<p className="text-sm text-gray-500">
Medium • 40% complete
</p>
</div>

<Link
to="/wordbuilding"
className="bg-purple-600 text-white px-4 py-2 rounded"
>
Start
</Link>

</div>

<div className="w-full bg-gray-200 h-2 mt-2 rounded">
<div className="bg-green-500 h-2 w-1/2 rounded"></div>
</div>

</div>

</div>


{/* Badges */}

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-xl font-bold mb-4">
Recent Badges
</h2>

<div className="space-y-4">

<div className="bg-gray-100 p-4 rounded">
🏆 Week Warrior
<p className="text-sm text-gray-500">
7 day streak
</p>
</div>

<div className="bg-gray-100 p-4 rounded">
⭐ Speed Reader
<p className="text-sm text-gray-500">
100 words/min
</p>
</div>

<div className="bg-gray-100 p-4 rounded">
🎯 Perfect Score
<p className="text-sm text-gray-500">
All correct!
</p>
</div>

</div>

</div>

</div>

</div>

</div>

  );
}