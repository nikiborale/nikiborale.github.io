export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      {eyebrow && <span className="text-xs uppercase tracking-[0.3em] text-renaissance/70">{eyebrow}</span>}
      <h2 className="serif text-3xl font-semibold text-ink md:text-4xl">{title}</h2>
      {description && <p className="max-w-3xl text-cocoa">{description}</p>}
    </div>
  );
}
