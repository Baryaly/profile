import AnimatedSection from '../common/AnimatedSection'

const VALUES = [
  { title: 'Quality first', description: 'We focus on clean code, clear communication, and delivery you can count on. New to the market, built on high standards.' },
  { title: 'Expertise you need', description: 'Software development with a focus on AI and cybersecurity—web, mobile, and full stack. We bring the skills your project requires.' },
  { title: 'Partnership mindset', description: 'We work with you as a partner—transparent, responsive, and invested in your success from day one.' },
]

export default function ValueProposal() {
  return (
    <section id="industries" className="section-normal bg-section-light">
      <div className="container-main">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-zinc-900 text-center max-w-2xl mx-auto tracking-tight">Why Infinya</h2>
          <p className="mt-4 text-lg text-zinc-600 text-center max-w-xl mx-auto">A new company in the market—founded in 2025—ready to deliver software and technology solutions with integrity and skill.</p>
        </AnimatedSection>
        <AnimatedSection stagger delay={150}>
          <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="group rounded-2xl border border-zinc-200/80 bg-white p-5 md:p-6 lg:p-8 pl-6 md:pl-8 lg:pl-10 border-l-4 border-l-blue-500 shadow-sm hover-lift hover:shadow-xl hover:border-zinc-300/80 transition-all duration-300">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{v.title}</p>
                <p className="mt-3 text-zinc-900 font-medium leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
