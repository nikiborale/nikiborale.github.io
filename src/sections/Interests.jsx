import SectionHeader from '../components/SectionHeader.jsx';
import { interests } from '../data/portfolio.js';

export default function Interests() {
  return (
    <section id="interests" className="scroll-mt">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeader
          eyebrow="Interests"
          title="Personal inspirations"
          description="Interests that keep my thinking fresh and creative."
        />
        <div className="grid gap-4 rounded-3xl bg-white/85 p-6 shadow-soft sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest) => (
            <div key={interest} className="flex items-center justify-between rounded-2xl bg-ivory/80 px-4 py-3">
              <span className="font-semibold text-ink">{interest}</span>
              <span className="text-renaissance">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
