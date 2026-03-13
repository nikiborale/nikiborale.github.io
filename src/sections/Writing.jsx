import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { writings } from '../data/portfolio.js';

export default function Writing() {
  return (
    <section id="writing" className="scroll-mt">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeader
          eyebrow="Writing"
          title="Product, AI, fintech, and reflective essays"
          description="Blog-style cards for product insights and strategic commentary."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {writings.map((post, index) => (
            <motion.article
              key={post.title}
              className="rounded-3xl bg-white/85 p-6 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-renaissance/70">{post.tag}</p>
              <h3 className="serif mt-3 text-2xl text-ink">{post.title}</h3>
              <p className="mt-2 text-sm text-cocoa">{post.blurb}</p>
              <button type="button" className="mt-4 text-sm font-semibold text-renaissance">
                Read article →
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
