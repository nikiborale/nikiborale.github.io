import SectionHeader from '../components/SectionHeader.jsx';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something memorable"
          description="Reach out for product leadership, strategy, or creative collaboration."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-white/85 p-6 shadow-soft">
            <h3 className="serif text-2xl text-ink">Connect</h3>
            <div className="mt-4 space-y-3 text-sm text-cocoa">
              <p>Email: <a className="text-renaissance" href="mailto:nikita.borale@gmail.com">nikita.borale@gmail.com</a></p>
              <p>LinkedIn: <a className="text-renaissance" href="https://www.linkedin.com/in/nikitaborale">linkedin.com/in/nikitaborale</a></p>
              <p>Resume: <a className="text-renaissance" href="/Nikita_Borale_Resume.pdf">Download PDF</a></p>
            </div>
          </div>
          <div className="rounded-3xl bg-white/85 p-6 shadow-soft">
            <h3 className="serif text-2xl text-ink">Send a note</h3>
            <form className="mt-4 grid gap-4 text-sm">
              <input
                type="text"
                placeholder="Name"
                className="rounded-2xl border border-renaissance/15 bg-ivory/70 px-4 py-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl border border-renaissance/15 bg-ivory/70 px-4 py-3"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="rounded-2xl border border-renaissance/15 bg-ivory/70 px-4 py-3"
              />
              <button
                type="button"
                className="rounded-full bg-renaissance px-5 py-3 text-sm font-semibold text-ivory shadow-bloom"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
