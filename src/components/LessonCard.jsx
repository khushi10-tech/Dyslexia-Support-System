export default function LessonCard({ title, level, progress }) {

return (

<div className="bg-gray-50 p-4 rounded-lg mb-4">

<div className="flex justify-between">

<div>

<h3 className="font-semibold">
{title}
</h3>

<p className="text-sm text-gray-500">
{level} • {progress}% complete
</p>

</div>

<button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
Start
</button>

</div>

<div className="w-full bg-gray-200 h-2 rounded mt-3">

<div
className="bg-purple-600 h-2 rounded"
style={{ width: progress + "%" }}
/>

</div>

</div>

);

}