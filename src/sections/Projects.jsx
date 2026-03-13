import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { caseStudies } from '../data/portfolio.js';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const project = caseStudies[activeProject];

  const handleProjectChange = (index) => {
    setActiveProject(index);
    setActiveStep(0);
  };

  return (
    <section id="projects" className="scroll-mt">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeader
          eyebrow="Projects"
          title="Interactive product case study viewer"
          description="Click a project to move through a product narrative: problem, insight, hypothesis, experiment, decision, outcome."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            {caseStudies.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => handleProjectChange(index)}
                className={`w-full rounded-3xl border px-5 py-4 text-left transition ${
                  index === activeProject
                    ? 'border-renaissance bg-white/90 shadow-soft'
                    : 'border-renaissance/10 bg-white/70 hover:border-renaissance/40'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="serif text-xl text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-cocoa">{item.summary}</p>
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-ivory px-3 py-1 text-xs text-renaissance">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex gap-3 text-xs text-cocoa">
                  {item.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl bg-ivory/80 px-3 py-2">
                      <p className="text-sm font-semibold text-renaissance">{metric.value}</p>
                      <p>{metric.label}</p>
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
          <div className="rounded-3xl bg-white/85 p-6 shadow-soft">
            <div className="flex flex-wrap gap-3">
              {project.steps.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    index === activeStep
                      ? 'border-renaissance bg-renaissance text-ivory'
                      : 'border-renaissance/20 text-renaissance hover:border-renaissance'
                  }`}
                >
                  {index + 1}. {step.title}
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-ivory/70 p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.steps[activeStep].title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="serif text-2xl text-ink">{project.steps[activeStep].title}</h4>
                  <p className="mt-3 text-cocoa">{project.steps[activeStep].detail}</p>
                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl bg-white/70 p-4 text-center">
                        <p className="text-lg font-semibold text-renaissance">{metric.value}</p>
                        <p className="text-xs text-cocoa">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-xs text-cocoa">
                    <span className="rounded-full bg-renaissance/10 px-3 py-1">Narrative step {activeStep + 1} of {project.steps.length}</span>
                    <span className="rounded-full bg-ochre/10 px-3 py-1">Interactive walkthrough</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
