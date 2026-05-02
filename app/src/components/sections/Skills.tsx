import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '../../lib/data'

const WormholeScene = lazy(() => import('../three/WormholeScene'))

export default function Skills() {
  return (
    <section id="skills" className="snap-section" style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'5rem 1.5rem' }}>
      <div style={{ maxWidth:'72rem', width:'100%', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'3rem', alignItems:'center' }}>

        <motion.div initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true, amount:0.3 }} transition={{ duration:1.2 }} style={{ height:'420px', minHeight:'320px', order:2 }}>
          <Suspense fallback={<div style={{ height:'100%', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(122,188,220,0.4)', fontFamily:"'Space Mono',monospace", fontSize:'11px' }}>Loading Wormhole...</div>}>
            <WormholeScene />
          </Suspense>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:0.2 }} variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.1 } } }} style={{ order:1 }}>
          <motion.p variants={{ hidden:{opacity:0,y:20}, show:{opacity:1,y:0} }} className="eyebrow" style={{ marginBottom:'0.75rem' }}>The Wormhole - Systems Online</motion.p>
          <motion.h2 variants={{ hidden:{opacity:0,y:20}, show:{opacity:1,y:0} }} style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.75rem,4vw,3rem)', marginBottom:'2rem', lineHeight:1.2 }}>
            Crew <span style={{ color:'#d4a857' }}>Equipment</span>
          </motion.h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            {Object.entries(SKILLS).map(([cat, items]) => (
              <motion.div key={cat} variants={{ hidden:{opacity:0,x:20}, show:{opacity:1,x:0} }}>
                <p className="eyebrow" style={{ marginBottom:'0.5rem' }}>{cat}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                  {items.map(skill => (
                    <span key={skill} className="glass" style={{ padding:'0.25rem 0.75rem', borderRadius:'2px', fontFamily:"'Space Mono',monospace", fontSize:'11px', color:'#e8e6e1', letterSpacing:'0.05em' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}