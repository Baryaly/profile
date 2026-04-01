import AnimatedSection from '../common/AnimatedSection'

const VALUES = [
  { title: 'Global Delivery Hub', subtitle: 'Strategically headquartered in Afghanistan, providing 24/7 delivery and support across multiple timezones.' },
  { title: 'Absolute Transparency', subtitle: 'We maintain open communication lines throughout the development lifecycle to ensure project alignment.' },
  { title: 'Modern Engineering', subtitle: 'Founded in 2025, we utilize the latest AI and software frameworks to build future-proof solutions.' },
  { title: 'Strategic Partnership', subtitle: "We don't just build software; we integrate with your team to drive long-term business value." },
  { title: 'Industry Versatility', subtitle: 'With expertise in 15+ industries, we understand the specific compliance and logic of your sector.' },
  { title: 'Reliability Guarantee', subtitle: 'A fresh approach backed by rigorous QA standards ensures we deliver exactly what we promise.' },
]

export default function Values() {
  return (
    <section className="relative py-16 lg:py-24 px-4 bg-zinc-50/50">
      <div className="container-main mx-auto max-w-7xl">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900">What We Stand For</h2>
          <p className="mt-4 text-zinc-600">The core principles that drive every Infinya project.</p>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <AnimatedSection key={i} delay={i * 50}>
              <div className="h-full rounded-3xl border border-zinc-200/60 bg-white p-8 transition-all hover:border-blue-300 hover:shadow-xl group">
                <div className="mb-4 text-xs font-black text-blue-600/30 italic group-hover:text-blue-600 transition-colors">0{i + 1}</div>
                <h3 className="text-lg font-bold text-zinc-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{v.subtitle}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
