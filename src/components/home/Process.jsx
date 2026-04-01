const STEPS = [
  { step: 'Step 1', title: 'Join exploration call.', desc: "Tell us more about your business on a discovery call. We'll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help." },
  { step: 'Step 2', title: 'Discuss solution and team structure.', desc: 'In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.' },
  { step: 'Step 3', title: 'Get started and track performance.', desc: "Once we've agreed on milestones, we'll immediately get to work. We'll track progress, report updates, and continuously adapt to your needs." },
]

export default function Process() {
  return (
    <section className="section-normal bg-section-muted">
      <div className="container-main">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-zinc-900 text-center tracking-tight">Our process. Simple, seamless, streamlined.</h2>
        <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
          {STEPS.map((s, i) => (
            <div key={s.step} className="relative rounded-2xl border-2 border-zinc-200/80 bg-white p-5 md:p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-blue-200/50 transition-all">
              <span className="inline-flex w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-600 font-bold text-lg items-center justify-center">{i + 1}</span>
              <p className="mt-3 text-xs font-semibold text-blue-600 uppercase tracking-wider">{s.step}</p>
              <h3 className="mt-1 text-xl font-bold text-zinc-900">{s.title}</h3>
              <p className="mt-3 text-zinc-600 leading-relaxed">{s.desc}</p>
              {s.step !== 'Step 3' && <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-6 h-0.5 bg-gradient-to-r from-blue-200 to-transparent rounded-full" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
