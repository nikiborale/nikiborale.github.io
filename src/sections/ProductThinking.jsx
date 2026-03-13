import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { productPrinciples, playgrounds } from '../data/portfolio.js';

export default function ProductThinking() {
  const [activePlayground, setActivePlayground] = useState(0);

  return (
    <section id="product-thinking" className="scroll-mt">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeader
          eyebrow="Product Thinking"
          title="How I think about products"
          description="Frameworks and creative teardown exercises that show how I reason about problems, experiments, and outcomes."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-4">
            {productPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="rounded-3xl bg-white/80 p-5 shadow-soft"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <h3 className="serif text-xl text-ink">{principle.title}</h3>
                <p className="mt-2 text-sm text-cocoa">{principle.detail}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-3xl bg-white/85 p-6 shadow-soft">
            <h3 className="serif text-2xl text-ink">Product Thinking Playground</h3>
            <p className="mt-2 text-sm text-cocoa">Interactive 3-minute teardowns recruiters love.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {playgrounds.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActivePlayground(index)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    index === activePlayground
                      ? 'border-renaissance bg-renaissance text-ivory'
                      : 'border-renaissance/20 text-renaissance hover:border-renaissance'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <motion.div
              className="mt-6 rounded-2xl bg-ivory/80 p-5"
              key={playgrounds[activePlayground].title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h4 className="serif text-xl text-ink">{playgrounds[activePlayground].title}</h4>
              <p className="mt-2 text-sm text-cocoa">{playgrounds[activePlayground].detail}</p>
              <div className="mt-4 grid gap-3 text-xs text-cocoa md:grid-cols-3">
                <div className="rounded-xl bg-white/80 p-3">
                  <p className="font-semibold text-renaissance">Problem</p>
                  <p>Define the user tension.</p>
                </div>
                <div className="rounded-xl bg-white/80 p-3">
                  <p className="font-semibold text-renaissance">Idea</p>
                  <p>Frame a product bet.</p>
                </div>
                <div className="rounded-xl bg-white/80 p-3">
                  <p className="font-semibold text-renaissance">Metrics</p>
                  <p>Adoption, savings, engagement.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="mt-10 rounded-3xl bg-white/75 p-6 shadow-soft">
          <h3 className="serif text-2xl text-ink">Art &amp; Product Thinking</h3>
          <p className="mt-2 text-cocoa">
            Painting trains my ability to see patterns, contrast, and structure — the same thinking I apply when
            analyzing complex systems in product work.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-cocoa md:grid-cols-3">
            <div className="rounded-2xl bg-ivory/80 p-4 text-center">
              <p className="font-semibold text-renaissance">Painting inspiration</p>
              <p>Color + composition</p>
            </div>
            <div className="rounded-2xl bg-ivory/80 p-4 text-center">
              <p className="font-semibold text-renaissance">Pattern recognition</p>
              <p>Signals + structures</p>
            </div>
            <div className="rounded-2xl bg-ivory/80 p-4 text-center">
              <p className="font-semibold text-renaissance">Product design</p>
              <p>Intentional decisions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
