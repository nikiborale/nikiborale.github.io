import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { thinkingSteps } from '../data/content.js';

export default function Thinking() {
  return (
    <section id="thinking" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="How I Think"
          title="Product frameworks that translate strategy into shipping"
          description="A simple, repeatable loop that keeps discovery, data, and delivery in sync."
        />
        <div className="glass-card rounded-2xl p-6">
          <div className="grid gap-4 md:grid-cols-5">
            {thinkingSteps.map((step, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05 }}
                className="relative rounded-xl border border-white/5 bg-card/80 p-4 text-sm text-ivory shadow-inner"
              >
                <div className="mb-2 h-1.5 w-10 rounded-full bg-gold" />
                <p>{step}</p>
                {idx < thinkingSteps.length - 1 && (
                  <div className="absolute right-[-12px] top-1/2 hidden h-px w-6 bg-gradient-to-r from-gold/80 to-blush/80 md:block" />
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-fog">
            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <p className="text-ivory font-semibold">Operating system</p>
              <p>Clarity on the user problem, explicit constraints, and a success metric per bet.</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <p className="text-ivory font-semibold">Validation approach</p>
              <p>Lightweight prototypes, analytics grammar, and experiment guardrails before build.</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <p className="text-ivory font-semibold">Scale mindset</p>
              <p>Shipable architecture diagrams, observability, and playbooks for repeatability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
