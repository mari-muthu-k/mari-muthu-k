import { motion } from 'framer-motion'
import { EXPERIENCE } from '../../lib/data'

export default function Experience() {
  return (
    <section id="experience" className="snap-section" style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'5rem 1.5rem' }}>
      <div style={{ maxWidth:'56rem', width:'100%', margin:'0 auto' }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.2 }} style={{ textAlign:'center', marginBottom:'4rem' }}>
          <p className="eyebrow" style={{ marginBottom:'0.75rem' }}>Time Dilation - Mission Log</p>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.75rem,4vw,3rem)', lineHeight:1.2 }}>
            Flight <span style={{ color:'#d4a857' }}>Record</span>
          </h2>
        </motion.div>

        <div style={{ position:'relative' }}>
          <div className="timeline-line" />
          <div style={{ display:'flex', flexDirection:'column', gap:'3rem' }}>
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, x: i%2===0 ? -30 : 30 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true, amount:0.3 }}
                transition={{ duration:0.6, delay:i*0.1 }}
                style={{ position:'relative', width:'calc(50% - 2rem)', marginLeft: i%2===0 ? 0 : 'auto' }}
              >
                <div style={{ position:'absolute', top:'1.5rem', width:'12px', height:'12px', borderRadius:'50%', background:'#d4a857', boxShadow:'0 0 8px #d4a857', [i%2===0?'right':'left']:'-2.35rem' }} />
                <div className="glass-amber" style={{ padding:'1.5rem', borderRadius:'2px' }}>
                  <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'0.5rem', flexWrap:'wrap', gap:'0.5rem' }}>
                    <div>
                      <h3 style={{ fontFamily:"'Cinzel',serif", fontSize:'13px', fontWeight:600, color:'#e8e6e1', lineHeight:1.4, letterSpacing:'0.04em' }}>{exp.role}</h3>
                      <p style={{ color:'#d4a857', fontWeight:600, fontSize:'14px', marginTop:'2px' }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign:'right' }}>
                      <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'11px', color:'#7abcdc', letterSpacing:'0.1em' }}>{exp.period}</p>
                      <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'rgba(232,230,225,0.4)', marginTop:'2px' }}>{exp.location}</p>
                    </div>
                  </div>
                  <ul style={{ marginTop:'0.75rem', display:'flex', flexDirection:'column', gap:'0.375rem', listStyle:'none', padding:0 }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ fontSize:'12px', color:'rgba(232,230,225,0.7)', lineHeight:1.6, display:'flex', gap:'0.5rem' }}>
                        <span style={{ color:'#d4a857', flexShrink:0, marginTop:'2px' }}>&#9658;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}