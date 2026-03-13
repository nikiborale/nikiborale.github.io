import { navLinks } from '../data/portfolio.js';

export default function Navigation() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-ivory/85 border-b border-renaissance/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-gradient-to-br from-ochre via-blush to-lavender text-ink font-semibold grid place-items-center">
            NB
          </div>
          <div>
            <p className="font-semibold text-ink">Nikita Borale</p>
            <p className="text-sm text-cocoa">Product Manager · Analytics · Creative</p>
          </div>
        </div>
        <nav className="hidden items-center gap-5 text-sm text-cocoa lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-renaissance transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-renaissance/40 px-4 py-2 text-renaissance shadow-soft hover:bg-renaissance hover:text-ivory transition"
          >
            Let&apos;s Connect
          </a>
        </nav>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-renaissance/10 px-6 pb-3 text-xs text-cocoa lg:hidden">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="whitespace-nowrap py-2 hover:text-renaissance">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
