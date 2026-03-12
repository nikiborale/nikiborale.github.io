import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { timeline } from '../data/content.js';

export default function About() {
  return (
    <section id="about" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="About"
          title="Nikita Borale"
          description="Engineer turned product manager with healthcare consulting experience. Passionate about data-driven product strategy, fintech, AI in healthcare, entrepreneurship, and painting."
        />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-fog">
            <div className="glass-card rounded-2xl p-5">
              <p className="text-ivory font-semibold">Education</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                <li>• Master of Engineering Management, Dartmouth</li>
                <li>• Bachelor’s in Mechanical Engineering</li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <p className="text-ivory font-semibold">Experience</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                <li>• Technical Product Manager at Blue Health Intelligence</li>
                <li>• Healthcare consulting experience</li>
                <li>• Product strategy and analytics work</li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <p className="text-ivory font-semibold">Interests</p>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm leading-relaxed">
                <li>• Product strategy</li>
                <li>• Fintech & markets</li>
                <li>• AI in healthcare</li>
                <li>• Entrepreneurship</li>
                <li>• Creative work & painting</li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-card relative rounded-2xl p-6"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-sage">Career timeline</p>
            <div className="mt-5 space-y-6">
              {timeline.map((item, idx) => (
                <div key={item.title} className="relative pl-6">
                  <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-gold" />
                  <p className="text-ivory font-semibold">{item.title}</p>
                  <p className="text-sm text-sage">{item.period}</p>
                  <p className="text-sm text-fog">{item.detail}</p>
                  {idx !== timeline.length - 1 && <div className="absolute left-[5px] top-4 h-14 w-px bg-white/15" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
