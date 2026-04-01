import { FiArrowUp } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative min-h-[750px] flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50 120H200L250 70H450" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="6 4" />
          <path d="M-50 180H150L200 230H400" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M300 0V100L350 150H550" stroke="#1d4ed8" strokeWidth="1" opacity="0.5" />
          <circle cx="200" cy="120" r="3" fill="#60a5fa" className="animate-pulse" />
          <circle cx="250" cy="70" r="3" fill="#3b82f6" />
          <circle cx="200" cy="230" r="3" fill="#60a5fa" />
        </svg>
      </div>
      <div className="absolute right-[-10%] top-[-5%] w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-20 border border-blue-400/20 rounded-full flex items-center justify-center rotate-[25deg] animate-[spin_20s_linear_infinite]">
          <div className="w-full h-px bg-blue-400/20 absolute top-1/2" />
          <div className="h-full w-px bg-blue-400/20 absolute left-1/2" />
          <div className="w-[85%] h-[85%] border border-blue-400/10 rounded-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white via-white/90 to-transparent z-10" />
      </div>
      <div className="container-main relative z-20 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-10">
          <span className="inline-flex items-center px-5 py-2 rounded-full text-xs font-bold bg-zinc-100 backdrop-blur-xl border border-zinc-200 text-blue-600 tracking-[0.15em] uppercase">Founded 2025 · Afghanistan</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 mb-6 leading-[1.05]">
          Accelerate Your Roadmap With
          <span className="block mt-4 text-blue-400">Software & Technology</span>
        </h1>
        <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mb-10 shadow-[0_0_25px_rgba(59,130,246,0.9)]" />
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 leading-relaxed font-light mb-16">
          Based in Afghanistan, we deliver software development with a focus on AI and cybersecurity—and expertise across 50+ technologies.
        </p>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center animate-bounce"><FiArrowUp className="w-12 h-12 text-blue-400 opacity-80" strokeWidth={3} /></div>
          <div className="flex flex-col items-center animate-bounce [animation-delay:0.2s]"><FiArrowUp className="w-12 h-12 text-indigo-400 opacity-80" strokeWidth={3} /></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-100 to-transparent" />
    </section>
  )
}
