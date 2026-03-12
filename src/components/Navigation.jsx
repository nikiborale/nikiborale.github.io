const links = [
  { href: '#work', label: 'Work' },
  { href: '#thinking', label: 'How I Think' },
  { href: '#finance', label: 'Finance' },
  { href: '#creative', label: 'Creative' },
  { href: '#writing', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-lg bg-[#0f1722cc] border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold to-blush text-charcoal font-semibold grid place-items-center">
            NB
          </div>
          <div>
            <p className="text-ivory font-semibold">Nikita Borale</p>
            <p className="text-sm text-fog">Product · Tech · Finance · Creative</p>
          </div>
        </div>
        <nav className="hidden items-center gap-5 text-sm text-fog md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ivory transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-gold/60 px-4 py-2 text-ivory shadow-glow hover:shadow-[0_0_0_2px_rgba(212,175,55,0.35)]"
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
