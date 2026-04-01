import Hero from '../components/home/Hero'
import ValueProposal from '../components/home/ValueProposal'
import Services from '../components/home/Services'
import Process from '../components/home/Process'
import FAQ from '../components/home/FAQ'
import Contact from '../components/sections/Contact'

export default function Landing() {
  return (
    <>
      <Hero />
      <ValueProposal />
      <Services />
      <Process />
      <FAQ />
      <Contact />
    </>
  )
}
