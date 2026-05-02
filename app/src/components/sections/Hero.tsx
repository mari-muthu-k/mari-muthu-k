import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import MorseCode from '../ui/MorseCode'

const QUOTE = 'Do not go gentle into that good night - rage, rage against the dying of the light.'

const up = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.18 } } }

export default function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number, tick = 0
    function draw() {
      const W = canvas!.width = canvas!.offsetWidth
      const H = canvas!.height = canvas!.offsetHeight
      ctx.clearRect(0, 0, W, H)
      const a1 = 0.18 + 0.04 * Math.sin(tick * 0.015)
      const a2 = 0.30 + 0.06 * Math.sin(tick * 0.01)
      const g = ctx.createLinearGradient(0, H * 0.6, 0, H)
      g.addColorStop(0, 'rgba(0,0,10,0)')
      g.addColorStop(0.5, 'rgba(30,20,5,' + a1 + ')')
      g.addColorStop(1, 'rgba(40,25,5,' + a2 + ')')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, W, H)
      tick++
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="hero" className="snap-section relative flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' }} />
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(26,58,92,0.25) 0%, transparent 70%)', pointerEvents:'none' }} />

      <motion.div variants={stagger} initial="hidden" animate="show" style={{ position:'relative', zIndex:10, textAlign:'center', padding:'0 1.5rem', maxWidth:'56rem', margin:'0 auto' }}>
        <motion.div variants={up} style={{ display:'flex', justifyContent:'center', marginBottom:'2rem' }}>
          <MorseCode />
        </motion.div>
        <motion.p variants={up} className="eyebrow" style={{ marginBottom:'1rem' }}>Mission Manifest - Crew Member</motion.p>
        <motion.h1 variants={up} style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(2.5rem,8vw,5rem)', letterSpacing:'-0.02em', lineHeight:1, marginBottom:'0.25rem', color:'#e8e6e1' }}>
          Mari
        </motion.h1>
        <motion.p variants={up} style={{ fontFamily:"'Space Mono',monospace", fontSize:'clamp(11px,1.5vw,14px)', letterSpacing:'0.25em', color:'#7abcdc', textTransform:'uppercase', marginBottom:'2.5rem' }}>
          Software Engineer &amp; AI Researcher
        </motion.p>
        <motion.div variants={up} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'2rem', marginBottom:'3rem', flexWrap:'wrap' }}>
          {[{ val:'4+', key:'Yrs Experience' },{ val:'15+', key:'Projects' },{ val:'IIT', key:'ML/AI Certified' }].map(({ val, key }) => (
            <div key={key} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.25rem,3vw,1.75rem)', fontWeight:'bold', color:'#d4a857' }}>{val}</div>
              <div className="eyebrow" style={{ marginTop:'0.25rem' }}>{key}</div>
            </div>
          ))}
        </motion.div>
        <motion.div variants={up} style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
          <button onClick={() => scrollTo('projects')} style={{ padding:'0.75rem 2rem', background:'#d4a857', color:'#00000a', fontFamily:"'Space Mono',monospace", fontSize:'11px', letterSpacing:'0.15em', textTransform:'uppercase', fontWeight:'bold', border:'none', cursor:'pointer' }}>
            View Missions
          </button>
          <button onClick={() => scrollTo('about')} style={{ padding:'0.75rem 2rem', border:'1px solid #7abcdc', color:'#7abcdc', background:'none', fontFamily:"'Space Mono',monospace", fontSize:'11px', letterSpacing:'0.15em', textTransform:'uppercase', cursor:'pointer' }}>
            Crew Profile
          </button>
        </motion.div>
      </motion.div>

      <div style={{ position:'absolute', bottom:'4rem', left:0, right:0, textAlign:'center', padding:'0 1.5rem', pointerEvents:'none' }}>
        <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'11px', fontStyle:'italic', color:'rgba(232,230,225,0.2)', letterSpacing:'0.05em', maxWidth:'40rem', margin:'0 auto' }}>
          &quot;{QUOTE}&quot;
        </p>
        <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'rgba(212,168,87,0.2)', marginTop:'0.25rem', letterSpacing:'0.2em' }}>
          - Dylan Thomas - Interstellar, 2014
        </p>
      </div>

      <div className="scroll-cue">
        <span className="eyebrow" style={{ fontSize:'9px' }}>Scroll</span>
        <div className="scroll-cue-line" />
      </div>
    </section>
  )
}