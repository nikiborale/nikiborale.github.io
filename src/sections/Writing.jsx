import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { writings } from '../data/content.js';

export default function Writing() {
  return (
    <section id="writing" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Writing & Insights"
          title="Articles and ideas"
          description="Strategy, AI in healthcare, experimentation, and lessons from building products."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {writings.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card rounded-2xl p-5"
            >
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sage">{post.tag}</span>
              <p className="mt-3 text-xl font-semibold text-ivory">{post.title}</p>
              <p className="text-sm text-fog">{post.blurb}</p>
              <button className="mt-4 text-sm text-gold">Read summary →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
