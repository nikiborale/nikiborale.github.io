import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="scroll-mt">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <span className="text-xs uppercase tracking-[0.3em] text-renaissance/70">Boston, Massachusetts</span>
          <h1 className="serif mt-4 text-4xl font-semibold text-ink md:text-5xl">Nikita Borale</h1>
          <p className="mt-3 text-lg text-renaissance font-medium">Product Manager | Product Strategy | Data &amp; AI</p>
          <p className="mt-5 max-w-xl text-cocoa">
            Solving complex problems through product thinking, analytics, and creative exploration.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-renaissance px-5 py-3 text-sm font-semibold text-ivory shadow-bloom hover:bg-ochre transition"
            >
              View Work
            </a>
            <a
              href="/Nikita_Borale_Resume.pdf"
              className="rounded-full border border-renaissance/40 px-5 py-3 text-sm font-semibold text-renaissance hover:bg-renaissance hover:text-ivory transition"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/nikitaborale"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ochre/50 px-5 py-3 text-sm font-semibold text-ochre hover:bg-ochre hover:text-ivory transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="absolute -left-6 top-6 h-32 w-32 rounded-full bg-blush/40 blur-3xl" />
          <div className="absolute -right-4 bottom-0 h-32 w-32 rounded-full bg-lavender/50 blur-3xl" />
          <div className="gradient-border rounded-[32px] bg-white/80 p-6 shadow-soft">
            <div className="flex flex-col items-center gap-5 rounded-3xl bg-ivory/70 p-6">
              <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-ivory shadow-soft">
                <img
                  src="/nikita-headshot.svg"
                  alt="Nikita Borale headshot"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="serif text-xl text-ink">Product leader + creative strategist</p>
                <p className="mt-2 text-sm text-cocoa">Healthcare, AI products, analytics, and elegant product systems.</p>
              </div>
              <div className="grid w-full grid-cols-3 gap-3 text-center text-xs text-cocoa">
                <div className="rounded-2xl bg-white/70 p-3">
                  <p className="text-lg font-semibold text-renaissance">$1M</p>
                  <p>ARR Growth</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-3">
                  <p className="text-lg font-semibold text-renaissance">1B+</p>
                  <p>Rows Analyzed</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-3">
                  <p className="text-lg font-semibold text-renaissance">90%</p>
                  <p>CSAT Lift</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
