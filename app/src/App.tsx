import { useCallback, useState } from 'react'
import StarField from './components/ui/StarField'
import TARSToast from './components/ui/TARSToast'
import Navbar from './components/layout/Navbar'
import MissionNav from './components/layout/MissionNav'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import { useKonamiCode } from './hooks/useKonamiCode'
import { useScrollSection } from './hooks/useScrollSection'
import { NAV_SECTIONS } from './lib/data'

const SECTION_IDS = NAV_SECTIONS.map(s => s.id)

// Console easter egg (runs once)
if (typeof window !== 'undefined' && !(window as any).__mariLoaded) {
  console.log(
    '%c INTERSTELLAR PORTFOLIO INITIALIZED ',
    'background:#00000a;color:#d4a857;font-size:14px;font-weight:bold;padding:8px;'
  )
  console.log('%c Stack: React + Vite + Three.js + Framer Motion', 'color:#7abcdc')
  ;(window as any).__mariLoaded = true
}

export default function App() {
  const [tarsVisible, setTarsVisible] = useState(false)
  const activeSection = useScrollSection(SECTION_IDS)

  useKonamiCode(useCallback(() => setTarsVisible(true), []))

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    const main = document.getElementById('snap-main')
    if (main) {
      main.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    } else {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <StarField />
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      <MissionNav activeSection={activeSection} scrollTo={scrollTo} />
      <main id="snap-main" className="snap-container relative z-10">
        <Hero scrollTo={scrollTo} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
      <TARSToast visible={tarsVisible} onDone={() => setTarsVisible(false)} />
    </>
  )
}