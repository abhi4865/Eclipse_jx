export default function SectionHeading({ label, title, action }) {
  return (
    <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
      <div>
        <p className="section-label mb-3">// {label}</p>
        <h2 className="text-5xl md:text-6xl font-display font-bold text-ink">{title}</h2>
      </div>
      {action}
    </div>
  )
}
