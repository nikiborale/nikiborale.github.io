import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeader
          eyebrow="Experience"
          title="Building outcomes across healthcare, enterprise, and emerging tech"
          description="Modern product cards highlighting impact, analytics, and cross-functional delivery."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((role, index) => (
            <motion.article
              key={role.company}
              className="rounded-3xl bg-white/75 p-6 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-renaissance/70">{role.company}</p>
              <h3 className="serif mt-2 text-2xl text-ink">{role.role}</h3>
              <ul className="mt-4 space-y-3 text-sm text-cocoa">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-ochre" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
