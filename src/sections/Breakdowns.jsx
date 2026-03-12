import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { breakdowns } from '../data/content.js';

export default function Breakdowns() {
  return (
    <section id="breakdowns" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Product Breakdowns"
          title="Thinking in public"
          description="Quick breakdowns that highlight strengths, gaps, and how I would iterate."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {breakdowns.map((item, idx) => (
            <motion.div
              key={item.product}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card rounded-2xl p-5"
            >
              <p className="text-sm text-sage">{item.product}</p>
              <p className="mt-1 text-lg font-semibold text-ivory">{item.insight}</p>
              <div className="mt-3 text-sm text-fog">
                <p className="text-ivory">Strengths</p>
                <ul className="mt-1 list-disc pl-4">
                  {item.strengths.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 text-sm text-fog">
                <p className="text-ivory">Opportunities</p>
                <ul className="mt-1 list-disc pl-4">
                  {item.opportunities.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
