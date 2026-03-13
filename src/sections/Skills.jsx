import SectionHeader from '../components/SectionHeader.jsx';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeader
          eyebrow="Skills"
          title="Product + technical toolkit"
          description="A blend of product leadership, analytics, and technical fluency."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white/85 p-6 shadow-soft">
            <h3 className="serif text-2xl text-ink">Product Skills</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.product.map((skill) => (
                <span key={skill} className="rounded-full bg-ivory px-4 py-2 text-sm text-renaissance">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white/85 p-6 shadow-soft">
            <h3 className="serif text-2xl text-ink">Technical Skills</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.technical.map((skill) => (
                <span key={skill} className="rounded-full bg-ivory px-4 py-2 text-sm text-renaissance">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
