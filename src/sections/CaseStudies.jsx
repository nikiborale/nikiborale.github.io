import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { caseStudies } from '../data/content.js';

export default function CaseStudies() {
  return (
    <section id="work" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Professional Work"
          title="Product case studies"
          description="Visual-first stories that highlight the problem, approach, solution, and measurable impact."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card gradient-border relative overflow-hidden rounded-2xl p-5"
            >
              <div className="absolute right-6 top-6 h-10 w-10 rounded-full bg-gold/20 blur-xl" />
              <p className="text-sm uppercase tracking-[0.15em] text-sage">{item.signal}</p>
              <h3 className="mt-2 text-lg font-semibold text-ivory">{item.title}</h3>
              <div className="mt-3 space-y-2 text-sm text-fog">
                <p><span className="text-ivory">Problem:</span> {item.problem}</p>
                <p><span className="text-ivory">Approach:</span> {item.approach}</p>
                <p><span className="text-ivory">Solution:</span> {item.solution}</p>
                <p><span className="text-ivory">Impact:</span> {item.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
