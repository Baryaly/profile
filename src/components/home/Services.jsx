import { useState, useRef, useCallback } from 'react'
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import AnimatedSection from '../common/AnimatedSection'
import aiImg from '../../assets/images/Skills/ai.jpg'
import cyberImg from '../../assets/images/Skills/cyber security.jpg'
import softwareImg from '../../assets/images/Skills/Software.jpg'
import webImg from '../../assets/images/Skills/Web.jpg'
import devImg from '../../assets/images/Skills/softwre development.jpg'
import computerImg from '../../assets/images/Skills/computer.jpg'
import uiuxImg from '../../assets/images/Skills/uiux.jpg'
import domainImg from '../../assets/images/Skills/domain.png'
import hostingImg from '../../assets/images/Skills/webhosting.jpg'

const EXPERTISE = [
  { title: 'AI and Data Science', subtitle: 'Intelligent systems, machine learning, and data engineering to unlock business value and automation.', image: aiImg },
  { title: 'Cybersecurity', subtitle: 'Security-first design, compliance, secure coding, and hardening to protect your systems and data.', image: cyberImg },
  { title: 'Custom Software Development', subtitle: 'Custom software tailored for your needs—front-end, back-end, and full-stack technology.', image: softwareImg },
  { title: 'Full Stack Web Development', subtitle: 'End-to-end web applications—React, Node.js, APIs, and cloud deployment for scalable, modern solutions.', image: webImg },
  { title: 'Mobile App Development', subtitle: 'Performant, scalable, and secure mobile applications for iOS and Android.', image: devImg },
  { title: 'Desktop Application', subtitle: 'Cross-platform desktop software for Windows, macOS, and Linux—native performance and modern UX.', image: computerImg },
  { title: 'UX/UI Design', subtitle: 'Beautiful, pixel-perfect, and easy-to-use designs that delight your users.', image: uiuxImg },
  { title: 'Domain Names', subtitle: '"Strategic domain acquisition, brand protection, and DNS management to anchor your online identity."', image: domainImg },
  { title: 'Web Hosting', subtitle: 'Enterprise-grade hosting solutions featuring, rapid loading speeds, and localized server optimization.', image: hostingImg }
]
const BTN_STYLE = 'bg-white/95 border-white/50 text-zinc-900 hover:bg-white'
const getImageGradient = (img, callback) => {
  try {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    const w = img.naturalWidth
    const h = img.naturalHeight
    const bottomH = Math.floor(h * 0.5)
    const sampleW = Math.floor(w / 3)
    const darken = 0.55
    const sampleRegion = (sx, sw) => {
      const size = 24
      canvas.width = size
      canvas.height = size
      ctx.drawImage(img, sx, h - bottomH, sw, bottomH, 0, 0, size, size)
      const data = ctx.getImageData(0, 0, size, size).data
      let r = 0, g = 0, b = 0, count = 0
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] > 128) { r += data[i]; g += data[i + 1]; b += data[i + 2]; count++ }
      }
      if (count > 0) return `rgb(${Math.floor(r / count * darken)},${Math.floor(g / count * darken)},${Math.floor(b / count * darken)})`
      return 'rgb(20,20,30)'
    }
    const left = sampleRegion(0, sampleW)
    const center = sampleRegion(sampleW, sampleW)
    const right = sampleRegion(sampleW * 2, sampleW)
    callback(`linear-gradient(to right, ${left}, ${center}, ${right})`)
  } catch {
    callback('linear-gradient(to right, rgb(0,0,0), rgb(20,20,30), rgb(0,0,0))')
  }
}

export default function Services() {
  const scrollRef = useRef(null)
  const [scrollIndex, setScrollIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState({})
  const [barColors, setBarColors] = useState({})
  const cardCount = EXPERTISE.length

  const handleImageError = useCallback((i) => setLoadedImages((prev) => ({ ...prev, [i]: false })), [])
  const scrollTo = useCallback((index) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const cardWidth = card?.offsetWidth ?? 360
    const gap = 28
    const target = Math.min(Math.max(0, index), cardCount - 1)
    el.scrollTo({ left: target * (cardWidth + gap), behavior: 'smooth' })
    setScrollIndex(target)
  }, [cardCount])
  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const cardWidth = card?.offsetWidth ?? 360
    const gap = 28
    const index = Math.round(el.scrollLeft / (cardWidth + gap))
    setScrollIndex(Math.min(Math.max(0, index), cardCount - 1))
  }, [cardCount])
  const handleImageLoad = useCallback((e, i) => {
    setLoadedImages((prev) => ({ ...prev, [i]: true }))
    getImageGradient(e.target, (gradient) => setBarColors((prev) => ({ ...prev, [i]: gradient })))
  }, [])

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 pointer-events-none" aria-hidden />
      <div className="container-main relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-200/60 mb-4">
            Everything we do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-zinc-900 tracking-tight leading-tight">
            From Concept to Completion: Our Full-Stack Expertise.
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-400 mx-auto" />
          <p className="mt-6 text-base md:text-lg text-zinc-600">
            Seven pillars of expertise that power your product from idea to launch and beyond.
          </p>
        </div>

        <div className="relative mt-8 md:mt-12">
          <div 
            className="flex gap-5 md:gap-7 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth scrollbar-hide" 
            ref={scrollRef} 
            onScroll={handleScroll}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {EXPERTISE.map((item, i) => {
              const imageFailed = loadedImages[i] === false
              return (
                <article key={item.title} data-card className="shrink-0 w-[290px] sm:w-[360px] md:w-[420px] snap-center group">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-zinc-300/80 relative h-[480px] md:h-[520px] bg-zinc-100">
                    {!imageFailed ? (
                      <>
                        <div className="absolute top-0 left-0 right-0 h-[280px] md:h-[320px] z-0">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover" 
                            onError={() => handleImageError(i)} 
                            onLoad={(e) => handleImageLoad(e, i)} 
                          />
                        </div>
                        <div 
                          className="absolute bottom-0 left-0 right-0 top-[280px] md:top-[320px] z-[1]" 
                          style={{ background: barColors[i] ?? '#000000' }} 
                          aria-hidden 
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex flex-col text-white z-[2]">
                          <h3 className="text-lg md:text-xl font-bold leading-tight tracking-tight">
                            {item.title}
                          </h3>
                          <p className="mt-2 md:mt-3 text-xs md:text-sm text-white/90 line-clamp-3 leading-relaxed">
                            {item.subtitle}
                          </p>
                          <a href="#contact" className={`mt-4 md:mt-5 inline-flex items-center gap-1.5 self-start px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold border-2 transition-all duration-200 ${BTN_STYLE}`}>
                            Read more
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 z-0 bg-zinc-200 rounded-2xl p-6 flex flex-col text-zinc-900 justify-end">
                        <h3 className="text-xl font-bold leading-tight tracking-tight">{item.title}</h3>
                        <p className="mt-3 text-sm line-clamp-3 leading-relaxed">{item.subtitle}</p>
                        <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 self-start px-4 py-2.5 rounded-xl text-sm font-semibold border-2 border-zinc-400 text-zinc-800 hover:bg-zinc-300">
                          Read more 
                          <FiArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>

          <button 
            type="button" 
            onClick={() => scrollTo(scrollIndex - 1)} 
            aria-label="Previous cards" 
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-lg items-center justify-center text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all z-10"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button 
            type="button" 
            onClick={() => scrollTo(scrollIndex + 1)} 
            aria-label="Next cards" 
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-lg items-center justify-center text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all z-10"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
