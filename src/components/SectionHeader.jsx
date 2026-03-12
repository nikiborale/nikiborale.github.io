export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      {eyebrow && <span className="text-sm uppercase tracking-[0.25em] text-sage">{eyebrow}</span>}
      <h2 className="serif text-3xl font-semibold text-ivory section-title">{title}</h2>
      {description && <p className="max-w-3xl text-fog">{description}</p>}
    </div>
  );
}
