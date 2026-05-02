import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const EnduranceScene = lazy(() => import('../three/EnduranceScene'))

const up = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.7}} }
const stagger = { hidden:{}, show:{ transition:{staggerChildren:0.15} } }

export default function About() {
  return (
    <section id="about" className="snap-section" style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'5rem 1.5rem' }}>
      <div style={{ maxWidth:'72rem', width:'100%', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'3rem', alignItems:'center' }}>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.3 }}>
          <motion.p variants={up} className="eyebrow" style={{ marginBottom:'0.75rem' }}>The Endurance - Crew Manifest</motion.p>
          <motion.h2 variants={up} style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.75rem,4vw,3rem)', marginBottom:'1.5rem', lineHeight:1.2 }}>
            Pilot <span style={{ color:'#d4a857' }}>Profile</span>
          </motion.h2>

          <motion.p variants={up} style={{ color:'rgba(232,230,225,0.8)', lineHeight:1.7, marginBottom:'1rem' }}>
            Research-driven software engineer with <span style={{ color:'#d4a857', fontWeight:600 }}>4+ years</span> in backend infrastructure, machine learning, and systems design.
          </motion.p>
          <motion.p variants={up} style={{ color:'rgba(232,230,225,0.8)', lineHeight:1.7, marginBottom:'1rem' }}>
            Led projects saving <span style={{ color:'#d4a857', fontWeight:600 }}>$60K+ annually at Comcast</span> through automation pipelines and AI-assisted tooling.
          </motion.p>
          <motion.p variants={up} style={{ color:'rgba(232,230,225,0.8)', lineHeight:1.7, marginBottom:'2rem' }}>
            Holds a post-graduate certificate in <span style={{ color:'#7abcdc', fontWeight:600 }}>ML &amp; AI from IIT Jodhpur</span>.
          </motion.p>

          <motion.div variants={up} style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1rem' }}>
            {[{ val:'4+', key:'Years in Field' },{ val:'$60K+', key:'Annual Savings' },{ val:'IIT', key:'Jodhpur Cert.' }].map(({ val, key }) => (
              <div key={key} className="glass" style={{ padding:'1rem', textAlign:'center', borderRadius:'2px' }}>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:'1.5rem', fontWeight:'bold', color:'#d4a857', marginBottom:'0.25rem' }}>{val}</div>
                <div className="eyebrow" style={{ fontSize:'9px' }}>{key}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true, amount:0.3 }} transition={{ duration:1 }} style={{ height:'420px', minHeight:'320px' }}>
          <Suspense fallback={<div style={{ height:'100%', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(122,188,220,0.4)', fontFamily:"'Space Mono',monospace", fontSize:'11px' }}>Loading...</div>}>
            <EnduranceScene />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}