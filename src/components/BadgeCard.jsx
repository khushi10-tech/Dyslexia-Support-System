export default function BadgeCard({ icon, title, subtitle }) {

return (

<div className="flex items-center gap-3">

<span className="text-2xl">
{icon}
</span>

<div>

<p className="font-semibold">
{title}
</p>

<p className="text-sm text-gray-500">
{subtitle}
</p>

</div>

</div>

);

}