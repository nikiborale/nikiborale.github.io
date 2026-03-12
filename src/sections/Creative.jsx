import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { gallery } from '../data/content.js';

export default function Creative() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="creative" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Creative Work"
          title="Minimalist gallery grid"
          description="Paintings and visual experiments. Hover to explore, click to open the modal."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((item) => (
            <motion.button
              key={item.title}
              whileHover={{ scale: 1.01 }}
              className={`group relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br ${item.palette} text-left`}
              onClick={() => setSelected(item)}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_35%)] opacity-60" />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
              <div className="relative p-4">
                <p className="serif text-xl font-semibold text-ivory">{item.title}</p>
                <p className="text-sm text-ivory/80">View artwork</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-40 grid place-items-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative w-full max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-br ${selected.palette} p-8 text-ivory`}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="serif text-2xl font-semibold">{selected.title}</p>
              <p className="mt-2 text-sm text-ivory/90">Exploring light, grids, and rhythm.</p>
              <button
                className="absolute right-4 top-4 rounded-full bg-black/20 px-3 py-1 text-sm"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
