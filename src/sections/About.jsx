import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { timeline } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="scroll-mt">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeader
          eyebrow="About"
          title="A product leader blending analytics, strategy, and artistic intuition"
          description="Product Manager with a strong analytics and technical background, a Master of Engineering Management from Dartmouth College, and experience across healthcare, AI products, analytics, and enterprise platforms. Interested in fintech, AI, and product strategy, and passionate about creative expression through painting."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="rounded-3xl bg-white/75 p-6 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="serif text-2xl text-ink">Signature focus</h3>
            <p className="mt-3 text-cocoa">
              I build products where data meets human intuition. My work centers on translating ambiguous, complex
              problems into clear product narratives, measurable experiments, and elegant execution. I love shaping
              products that feel both strategic and beautifully crafted.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-cocoa">
              <div className="flex items-start gap-2">
                <span className="text-renaissance">✦</span>
                <p>Enterprise healthcare + AI product strategy with measurable impact.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-renaissance">✦</span>
                <p>Analytics-driven roadmaps that turn insight into stakeholder alignment.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-renaissance">✦</span>
                <p>Creative exploration through painting to sharpen pattern recognition and storytelling.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="rounded-3xl border border-renaissance/10 bg-white/70 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="serif text-2xl text-ink">Career timeline</h3>
            <div className="mt-6 space-y-5">
              {timeline.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-renaissance" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-renaissance/70">{item.year}</p>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="text-sm text-cocoa">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
