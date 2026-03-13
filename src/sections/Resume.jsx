import SectionHeader from '../components/SectionHeader.jsx';

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeader
          eyebrow="Resume"
          title="Education and resume highlights"
          description="Dartmouth College — Master of Engineering Management · Mechanical Engineering — Bachelor’s Degree · Product Strategy · Data Analytics and AI."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl bg-white/85 p-6 shadow-soft">
            <h3 className="serif text-2xl text-ink">Highlights</h3>
            <ul className="mt-4 space-y-3 text-sm text-cocoa">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-ochre" />
                <span>Master of Engineering Management, Dartmouth College.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-ochre" />
                <span>Bachelor’s Degree in Mechanical Engineering.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-ochre" />
                <span>Product strategy, data analytics, AI products, and enterprise platforms.</span>
              </li>
            </ul>
            <a
              href="/Nikita_Borale_Resume.pdf"
              className="mt-6 inline-flex items-center rounded-full bg-renaissance px-5 py-3 text-sm font-semibold text-ivory shadow-bloom"
            >
              Download Resume
            </a>
          </div>
          <div className="rounded-3xl bg-white/85 p-4 shadow-soft">
            <iframe
              title="Nikita Borale Resume"
              src="/Nikita_Borale_Resume.pdf"
              className="h-96 w-full rounded-2xl border border-renaissance/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
