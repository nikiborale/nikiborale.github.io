import { motion } from 'framer-motion';
import SparkLine from '../components/graphs/SparkLine.jsx';
import { heroSpark } from '../data/content.js';

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient" id="top">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-fog">
            <span className="h-2 w-2 rounded-full bg-gold" />
            Product strategy • Fintech curiosity • Creative energy
          </div>
          <h1 className="serif text-4xl font-semibold leading-tight text-ivory md:text-5xl">
            Building at the intersection of Technology, Finance, and Creativity
          </h1>
          <p className="max-w-xl text-lg text-fog">
            Product-focused professional with experience in healthcare analytics, product strategy, and fintech
            interests. Analytical by default, creative by instinct.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="rounded-full bg-gold px-5 py-3 text-charcoal font-semibold shadow-glow" href="#work">
              View Work
            </a>
            <a className="rounded-full border border-white/15 px-5 py-3 text-ivory" href="#about">
              About
            </a>
            <a className="rounded-full border border-white/15 px-5 py-3 text-ivory" href="#contact">
              Contact
            </a>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { label: 'Products shipped', value: '12+', accent: 'bg-gold' },
              { label: 'Experiments run', value: '30+', accent: 'bg-sage' },
              { label: 'Creative pieces', value: '40+', accent: 'bg-blush' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl px-4 py-3">
                <div className={`h-1 w-12 rounded-full ${stat.accent}`} />
                <p className="mt-3 text-2xl font-semibold text-ivory">{stat.value}</p>
                <p className="text-sm text-fog">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="glass-card gradient-border relative overflow-hidden rounded-2xl p-6">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-gradient-to-br from-gold via-blush to-sage opacity-30 blur-2xl" />
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-gold to-blush text-charcoal grid place-items-center text-2xl font-bold shadow-lg">
                NB
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-sage">Product & Strategy</p>
                <p className="text-2xl font-semibold text-ivory">Nikita Borale</p>
                <p className="text-fog">Healthcare analytics · Fintech · Creative maker</p>
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-white/5 bg-charcoal/60 p-4 shadow-inner">
              <div className="flex items-center justify-between text-sm text-fog">
                <span>Portfolio Growth</span>
                <span className="text-gold font-semibold">+154% since 2019</span>
              </div>
              <SparkLine data={heroSpark} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-fog">
              <div className="rounded-lg border border-white/5 bg-white/5 p-3">
                <p className="text-ivory font-semibold">Healthcare Analytics</p>
                <p>Risk stratification, cohort design, and dashboards.</p>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/5 p-3">
                <p className="text-ivory font-semibold">Finance & Markets</p>
                <p>Fintech rails, blockchain research, and market structure.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
