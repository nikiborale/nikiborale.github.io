import SectionHeader from '../components/SectionHeader.jsx';
import { nowFocus } from '../data/content.js';

export default function NowSection() {
  return (
    <section id="now" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Now"
          title="What I&apos;m exploring"
          description="Current focus areas that keep my thinking sharp."
        />
        <div className="glass-card grid gap-3 rounded-2xl p-5 md:grid-cols-2">
          {nowFocus.map((item) => (
            <div key={item} className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-fog">
              <span className="mr-2 text-gold">•</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
