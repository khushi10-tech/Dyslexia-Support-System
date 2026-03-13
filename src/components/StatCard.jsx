export default function StatCard({ title, value, subtitle }) {

return (

<div className="bg-white p-6 rounded-xl shadow">

<p className="text-gray-500">
{title}
</p>

<h2 className="text-2xl font-bold">
{value}
</h2>

<p className="text-sm text-gray-400">
{subtitle}
</p>

</div>

);

}