import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import SectionHeader from '../components/SectionHeader.jsx';
import { dataFlows } from '../data/portfolio.js';

const insightSeries = [
  { name: 'Week 1', value: 38 },
  { name: 'Week 2', value: 42 },
  { name: 'Week 3', value: 48 },
  { name: 'Week 4', value: 61 },
  { name: 'Week 5', value: 67 },
  { name: 'Week 6', value: 74 },
];

export default function DataDecision() {
  return (
    <section id="data-decision" className="scroll-mt">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeader
          eyebrow="Data → Decision"
          title="How I use data in product decisions"
          description="Visualizing insights, experimentation frameworks, and the analytics patterns that drive measurable product impact."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="rounded-3xl bg-white/85 p-6 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-cocoa">
              <span className="rounded-full bg-renaissance/10 px-4 py-2">Data</span>
              <span>→</span>
              <span className="rounded-full bg-ochre/10 px-4 py-2">Insight</span>
              <span>→</span>
              <span className="rounded-full bg-sage/15 px-4 py-2">Product Decision</span>
              <span>→</span>
              <span className="rounded-full bg-lavender/15 px-4 py-2">Impact</span>
            </div>
            <div className="mt-6 grid gap-4">
              {dataFlows.map((flow) => (
                <div key={flow.title} className="rounded-2xl bg-ivory/80 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-renaissance/70">{flow.title}</p>
                  <p className="mt-2 text-sm text-cocoa"><span className="font-semibold text-ink">Insight:</span> {flow.insight}</p>
                  <p className="mt-1 text-sm text-cocoa"><span className="font-semibold text-ink">Action:</span> {flow.action}</p>
                  <p className="mt-1 text-sm text-cocoa"><span className="font-semibold text-ink">Impact:</span> {flow.impact}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="rounded-3xl bg-white/85 p-6 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="serif text-2xl text-ink">Experimentation velocity</h3>
            <p className="mt-2 text-sm text-cocoa">Signal strength from rapid experiments and dashboards.</p>
            <div className="mt-6 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={insightSeries}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9E2A2B" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#9E2A2B" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E8DCD0" />
                  <XAxis dataKey="name" stroke="#9E2A2B" fontSize={12} />
                  <YAxis stroke="#9E2A2B" fontSize={12} />
                  <Tooltip contentStyle={{ borderRadius: 16, borderColor: '#E8DCD0' }} />
                  <Area type="monotone" dataKey="value" stroke="#9E2A2B" fill="url(#colorValue)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-cocoa">
              <div className="rounded-2xl bg-ivory/80 p-4 text-center">
                <p className="text-lg font-semibold text-renaissance">12</p>
                <p>Experiments / quarter</p>
              </div>
              <div className="rounded-2xl bg-ivory/80 p-4 text-center">
                <p className="text-lg font-semibold text-renaissance">2x</p>
                <p>Faster readouts</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
