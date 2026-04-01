import AnimatedSection from '../common/AnimatedSection'

export default function Vision() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 px-4">
      <div className="container-main mx-auto max-w-7xl">
        <AnimatedSection className="max-w-4xl">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-blue-600"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">The Infinya Standard</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-7xl leading-tight">
            Scaling Businesses through <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">Digital Intelligence.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-zinc-600 max-w-2xl">
            Infinya is a full-cycle technology firm. We bridge the gap between complex requirements and high-performance execution, helping global partners innovate with confidence.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
