import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/chat", label: "Chat" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <header className="border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5" aria-label="Main navigation">
        <Link href="/" className="text-sm font-bold tracking-[0.2em] text-cyan-300">
          AI LEARNING
        </Link>
        <ul className="flex items-center gap-2 sm:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
