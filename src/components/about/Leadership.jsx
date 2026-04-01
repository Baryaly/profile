import AnimatedSection from '../common/AnimatedSection'
import meImg from '../../assets/images/me.png'
import ctoImg from '../../assets/images/cto.jpeg'

const LEADERSHIP = [
  {
    image: meImg,
    name: 'Baryalai Khushal',
    role: 'Founder & Chief Executive Officer',
    bio: "Directing the firm's global expansion and strategic vision. Baryalai is committed to positioning Infinya as a premier engineering partner for international enterprises, leveraging top-tier talent from Afghanistan to deliver world-class digital solutions.",
    tags: ['Strategic Vision', 'Corporate Governance', 'Growth'],
  },
  {
    image: ctoImg,
    name: 'Abdul Jalil Stanikzai',
    role: 'Founder & Chief Technology Officer',
    bio: 'Architecting high-performance systems and AI-driven roadmaps. Stanikzai leads our engineering standards, ensuring scalability and security are at the core of every product deployed across our 50+ technology stacks.',
    tags: ['System Architecture', 'AI Governance', 'Engineering'],
  },
]

export default function Leadership() {
  return (
    <section className="py-16 lg:py-32 px-4">
      <div className="container-main mx-auto max-w-7xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-zinc-900">Executive Leadership</h2>
          <p className="mt-2 text-zinc-600">Building the future of Afghan technology.</p>
        </div>
        <div className="grid gap-8">
          {LEADERSHIP.map((person, index) => (
            <AnimatedSection key={person.name} delay={index * 100}>
              <div className="group flex flex-col gap-6 rounded-[2rem] border border-zinc-200/60 bg-white p-6 sm:p-8 md:flex-row md:items-start hover:border-blue-200 transition-all">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="h-32 w-32 md:h-40 md:w-40 mx-auto md:mx-0 rounded-2xl object-cover shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500" 
                  onError={(e) => { e.target.src = 'https://placehold.co/400x400/2563eb/white?text=Leadership'; }} 
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-zinc-900">{person.name}</h3>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mt-1">{person.role}</p>
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-zinc-600">{person.bio}</p>
                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                    {person.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-tight text-zinc-400 border-b border-zinc-200 pb-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
