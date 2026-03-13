import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import SectionHeader from '../components/SectionHeader.jsx';
import { skills, skillsRadar } from '../data/portfolio.js';

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
        <div className="mt-6 rounded-3xl bg-white/85 p-6 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="serif text-2xl text-ink">Product leadership radar</h3>
              <p className="mt-2 text-sm text-cocoa">A visual snapshot of strengths across strategy, analytics, and execution.</p>
            </div>
            <div className="rounded-full bg-ivory px-4 py-2 text-xs font-semibold text-renaissance">
              Finance-grade clarity
            </div>
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillsRadar}>
                <PolarGrid stroke="#D7E6F3" />
                <PolarAngleAxis dataKey="metric" stroke="#1B4D7A" fontSize={12} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#1B4D7A" fontSize={10} />
                <Radar dataKey="value" stroke="#1B4D7A" fill="#7FD1FF" fillOpacity={0.35} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
