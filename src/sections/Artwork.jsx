import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { gallery } from '../data/portfolio.js';

export default function Artwork() {
  return (
    <section id="artwork" className="scroll-mt">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeader
          eyebrow="Art & Creative Exploration"
          title="Painting, texture, and visual storytelling"
          description="Painting allows me to explore creativity and visual storytelling beyond product work."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((art, index) => (
            <motion.figure
              key={art.title}
              className="group overflow-hidden rounded-3xl bg-white/85 p-4 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-2xl border border-renaissance/10">
                <img
                  src={art.image}
                  alt={art.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-sm font-semibold text-ink">{art.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
