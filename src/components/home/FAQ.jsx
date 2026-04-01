import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import AnimatedSection from '../common/AnimatedSection'

const FAQ_ITEMS = [
  { q: 'Where is Infinya based?', a: 'We are based in Afghanistan and work with clients globally. We communicate in English and use modern collaboration tools.' },
  { q: 'What technologies do you use?', a: 'We work with 50+ popular technologies including JavaScript, TypeScript, React, Node.js, Python, Java, .NET, cloud (e.g. AWS), and databases. We match your stack.' },
  { q: 'How do we start a project?', a: 'Reach out via email or phone. We schedule a short call to understand your needs, then propose a plan, timeline, and next steps. No long sales process.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. We can support maintenance, updates, and new features after delivery, depending on your needs.' },
]

export default function FAQ() {
  const [faqOpen, setFaqOpen] = useState(0)

  return (
    <section id="blog" className="section-normal bg-section-light">
      <div className="container-main max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">Frequently asked questions</h2>
          <p className="mt-3 text-base md:text-lg text-zinc-600">Quick answers to common questions.</p>
        </AnimatedSection>
        <AnimatedSection stagger>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${faqOpen === i ? 'border-blue-300 bg-blue-50/30 shadow-md' : 'border-zinc-200/80 bg-white hover:border-zinc-300'}`}>
                <button type="button" onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-4 md:px-6 py-4 md:py-5 text-left">
                  <span className="font-semibold text-zinc-900 text-sm md:text-base">{item.q}</span>
                  <FiPlus className={`text-2xl text-zinc-400 transition-transform duration-300 shrink-0 ${faqOpen === i ? 'rotate-45' : ''}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${faqOpen === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-4 md:px-6 pb-5 pt-0 text-zinc-600 leading-relaxed text-sm md:text-base">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
