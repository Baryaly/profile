import AnimatedSection from '../common/AnimatedSection'

export default function Mission() {
  return (
    <section className="py-16 lg:py-24 px-4">
      <div className="container-main mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-zinc-900">Our Strategic Mission</h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Established to provide technical excellence with absolute integrity, Infinya specializes in deploying intelligent software. From our headquarters in Afghanistan, we manage a worldwide delivery network that operates with precision and speed.
            </p>
            <div className="mt-10 space-y-4">
              {['Agile Development Cycle', 'AI-Enhanced Workflows', 'Enterprise Security Standards'].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-sm font-semibold text-zinc-700">{point}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-900 p-6 sm:p-8 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="min-w-0">
                    <h4 className="font-bold text-white truncate text-sm sm:text-base">Global Delivery Network</h4>
                    <p className="text-[10px] sm:text-xs text-zinc-400">Real-time Operations</p>
                  </div>
                  <div className="rounded-full bg-green-500/10 px-2 py-1 text-[9px] font-bold text-green-500 border border-green-500/20 whitespace-nowrap">LIVE SYSTEM</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                    <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-50" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-6">
                  <div><p className="text-[10px] uppercase tracking-tighter text-zinc-500">Industry Reach</p><p className="text-xl font-bold text-white">15+</p></div>
                  <div><p className="text-[10px] uppercase tracking-tighter text-zinc-500">Tech Expertise</p><p className="text-xl font-bold text-white">50+</p></div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
