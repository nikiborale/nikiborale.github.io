import SectionHeader from '../components/SectionHeader.jsx';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let&apos;s collaborate"
          description="Open to product strategy conversations, fintech explorations, and creative collabs."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-5 text-fog">
            <p className="text-ivory font-semibold">Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-gold" href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
              <li><a className="text-gold" href="mailto:nikita@example.com">Email</a></li>
              <li><a className="text-gold" href="https://www.instagram.com" target="_blank">Instagram</a></li>
            </ul>
            <p className="mt-4 text-sm">Prefer a quick note? Use the form.</p>
          </div>
          <form className="glass-card rounded-2xl p-5 text-sm text-fog space-y-3">
            <div>
              <label className="block text-ivory">Name</label>
              <input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-ivory" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-ivory">Email</label>
              <input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-ivory" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-ivory">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-ivory" placeholder="Project idea or hello" />
            </div>
            <button type="button" className="w-full rounded-full bg-gold px-4 py-3 font-semibold text-charcoal shadow-glow">
              Send note
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
