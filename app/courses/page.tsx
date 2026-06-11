const courses = ["AI Foundations", "Prompt Design", "Building with Language Models"];

export default function CoursesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Courses</p>
      <h1 className="mt-4 text-4xl font-black sm:text-5xl">Choose your learning path</h1>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {courses.map((course, index) => (
          <article key={course} className="rounded-3xl border border-white/10 bg-slate-900 p-7">
            <span className="text-sm text-slate-500">Course {index + 1}</span>
            <h2 className="mt-5 text-xl font-bold">{course}</h2>
            <p className="mt-3 leading-7 text-slate-400">A focused, practical introduction designed to help you learn by doing.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
