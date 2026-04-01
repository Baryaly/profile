import { useState } from 'react'
import hmsDesktop from '../../assets/images/hms-desktop.png'
import hmsMobile from '../../assets/images/hms-mobile.jpeg'
import mandiDesktop from '../../assets/images/mandi-hospital-desktop.png'
import mandiMobile from '../../assets/images/mandi-hospital-mobile.jpeg'
import docwriterDesktop from '../../assets/images/docwriter-desktop.png'

const PROJECTS = [
  {
    id: 'hms',
    name: 'HMS',
    subtitle: 'Hostel Management System',
    badge: 'Featured Project',
    description: 'Complete hostel management platform with booking, inventory, and resident management. One platform serves multiple hostels—each with its own dashboard, students, staff, rooms, leave requests, and payments.',
    tech: ['Django', 'React', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
    capabilities: [
      'Student & staff registration, room allocation, leave tracking',
      'Automated fee and salary calculations',
      'Per-hostel dashboards, PostgreSQL multi-tenancy',
      'Support three different languages (English, Dari, Pashto)'
    ],
    desktopImg: hmsDesktop,
    mobileImg: hmsMobile,
    color: 'from-blue-600 to-indigo-600',
    deviceType: 'macbook' // MacBook Pro frame
  },
  {
    id: 'mandi',
    name: 'Mandi Specialty Hospital',
    subtitle: 'Healthcare Web Platform',
    badge: 'Production',
    description: 'Modern healthcare platform for patient management, appointments, and medical records. Comprehensive solution for managing patient flow, medical history, and hospital operations.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'JWT Auth'],
    capabilities: [
      'Patient appointment booking system',
      'Medical records and history management',
      'Prescription and lab reports generation',
      'Multi-specialty doctor directory'
    ],
    desktopImg: mandiDesktop,
    mobileImg: mandiMobile,
    color: 'from-emerald-600 to-teal-600',
    deviceType: 'macbook'
  },
  {
    id: 'docwriter',
    name: 'DocWriter',
    subtitle: 'Desktop Prescription Application',
    badge: 'Cross-Platform',
    description: 'Professional desktop application for writing and managing medical prescriptions with smart templates. Offline-first architecture ensuring uninterrupted workflow in clinics and hospitals.',
    tech: ['Electron', 'Vite', 'React', 'Tailwind CSS', 'SQLite'],
    capabilities: [
      'Smart prescription templates with auto-completion',
      'Offline-first architecture for reliability',
      'PDF export and print functionality',
      'Integrated medicine database and dosage guide'
    ],
    desktopImg: docwriterDesktop,
    mobileImg: null,
    color: 'from-purple-600 to-pink-600',
    deviceType: 'imac' // iMac frame for desktop app
  }
]

function DeviceFrame({ imageUrl, mobileImg, deviceType, projectColor, onError, isMobile }) {
  if (isMobile) {
    // Direct mobile image display
    return (
      <div className="flex-[1.2] w-full">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-white">
          <div className="aspect-[9/19]">
            <img 
              src={mobileImg} 
              alt="Mobile view"
              className="w-full h-full object-cover"
              onError={onError}
            />
          </div>
        </div>
      </div>
    )
  }

  // Direct desktop image display
  return (
    <div className="flex-[2.5] w-full">
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-white">
        <div className="aspect-[16/10]">
          <img 
            src={imageUrl} 
            alt="Desktop view"
            className="w-full h-full object-cover"
            onError={onError}
          />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const [desktopError, setDesktopError] = useState(false)
  const [mobileError, setMobileError] = useState(false)

  const isElectron = project.id === 'docwriter'

  return (
    <article className="rounded-3xl overflow-hidden bg-white shadow-2xl shadow-black/10 border border-zinc-100 hover:shadow-3xl transition-shadow duration-300">
      {/* Project Header with Color Accent */}
      <div className={`px-6 sm:px-10 lg:px-12 py-8 border-b border-zinc-100 bg-gradient-to-r ${project.color} bg-opacity-5`}>
        <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">{project.badge}</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          {project.name} <span className="font-normal text-zinc-400 text-lg sm:text-2xl">· {project.subtitle}</span>
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-0">
        
        {/* LEFT SIDE - Device Frames (66.6% on desktop) */}
        <div className="lg:col-span-2 bg-gradient-to-br from-zinc-50 to-zinc-100 p-6 sm:p-10 lg:p-14 flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-200">
          
          {/* Devices Container */}
          <div className={`flex ${isElectron ? 'flex-col items-center justify-center' : 'flex-col md:flex-row items-center justify-between'} gap-8 lg:gap-12 flex-grow mb-12`}>
            
            {/* Desktop Device Frame */}
            <DeviceFrame 
              imageUrl={project.desktopImg} 
              deviceType={project.deviceType}
              projectColor={project.color}
              onError={() => setDesktopError(true)}
              isMobile={false}
            />

            {/* Mobile Device Frame - Only for web apps */}
            {!isElectron && project.mobileImg && (
              <DeviceFrame 
                mobileImg={project.mobileImg} 
                deviceType="iphone"
                projectColor={project.color}
                onError={() => setMobileError(true)}
                isMobile={true}
              />
            )}
          </div>

          {/* Tech Stack */}
          <div className="pt-8 border-t-2 border-zinc-300">
            <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span key={tech} className={`px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r ${project.color} text-white shadow-md hover:shadow-lg transition-all`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Description (33.3% on desktop) */}
        <div className="p-8 sm:p-10 lg:p-12 bg-white flex flex-col justify-between">
          
          {/* Description */}
          <div>
            <p className="text-zinc-600 leading-relaxed mb-8 text-sm sm:text-base">
              {project.description}
            </p>

            {/* Core Capabilities */}
            <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-4">Core Capabilities</p>
            <ul className="space-y-4">
              {project.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700">
                  <span className={`inline-block w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 bg-gradient-to-br ${project.color}`} />
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-8 border-t-2 border-zinc-200 mt-8">
            <a href="#contact" className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm text-white bg-gradient-to-r ${project.color} hover:shadow-lg hover:scale-105 transition-all duration-200`}>
              Get Started
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ProjectShowcase() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-900" />
        <div className="container-main relative py-20 sm:py-24 md:py-32 lg:py-40 px-4">
          <p className="text-blue-300/90 text-sm font-medium uppercase tracking-[0.2em] mb-4">Our Portfolio</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
            What we build.
            <br />
            <span className="text-blue-200/90">Real solutions for real needs.</span>
          </h1>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="relative -mt-12 md:-mt-20 z-10 pb-20 px-4">
        <div className="container-main max-w-[1400px] mx-auto space-y-16">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
