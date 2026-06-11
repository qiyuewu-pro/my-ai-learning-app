import Link from "next/link";

const features = [
  { number: "01", title: "Learn the foundations", text: "Understand the ideas that power modern AI systems." },
  { number: "02", title: "Build real projects", text: "Turn concepts into practical skills through hands-on work." },
  { number: "03", title: "Grow with confidence", text: "Follow clear learning paths at a pace that works for you." },
];

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Your path into artificial intelligence</p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-7xl">My AI Learning App</h1>
          <p className="mt-8 max-w-2xl text-2xl font-medium text-slate-200 sm:text-3xl">Welcome to AI Learning</p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">Explore approachable lessons, sharpen your skills, and learn how to create with AI—one practical step at a time.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/courses" className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">Explore courses</Link>
            <Link href="/about" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10">How it works</Link>
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.number} className="rounded-3xl border border-white/10 bg-slate-900/60 p-7">
              <span className="text-sm font-bold text-cyan-300">{feature.number}</span>
              <h2 className="mt-8 text-xl font-bold text-white">{feature.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
