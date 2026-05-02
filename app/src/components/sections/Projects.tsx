import { motion } from 'framer-motion'
import { PROJECTS } from '../../lib/data'

const STATUS_COLOR: Record<string,string> = { ACTIVE:'#7abcdc', COMPLETE:'#d4a857', ARCHIVED:'#888' }

export default function Projects() {
  return (
    <section id="projects" className="snap-section" style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'5rem 1.5rem' }}>
      <div style={{ maxWidth:'72rem', width:'100%', margin:'0 auto' }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.2 }} style={{ marginBottom:'3rem' }}>
          <p className="eyebrow" style={{ marginBottom:'0.75rem' }}>Mission Logs - Intel Archive</p>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.75rem,4vw,3rem)', lineHeight:1.2 }}>
            Active <span style={{ color:'#d4a857' }}>Missions</span>
          </h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1.25rem' }}>
          {PROJECTS.map((p, i) => {
            const col = STATUS_COLOR[p.status] || '#888'
            return (
              <motion.div key={p.id} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.1 }} transition={{ delay:i*0.08, duration:0.5 }} className="hud-card" style={{ padding:'1.5rem', borderRadius:'2px', display:'flex', flexDirection:'column' }}>
                <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'0.75rem' }}>
                  <span className="mission-badge" style={{ color:col, border:'1px solid ' + col + '44' }}>
                    <span style={{ width:6, height:6, borderRadius:'50%', background:col, boxShadow:'0 0 6px ' + col, display:'inline-block', animation:p.status==='ACTIVE'?'blink-dot 2s infinite':'none' }} />
                    {p.status}
                  </span>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'rgba(232,230,225,0.3)' }}>{p.year}</span>
                </div>
                <h3 style={{ fontFamily:"'Cinzel',serif", fontSize:'14px', fontWeight:600, color:'#e8e6e1', marginBottom:'0.25rem', letterSpacing:'0.05em' }}>{p.title}</h3>
                <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#7abcdc', letterSpacing:'0.1em', marginBottom:'0.75rem' }}>{p.tagline}</p>
                <p style={{ fontSize:'12px', color:'rgba(232,230,225,0.6)', lineHeight:1.6, marginBottom:'1rem', flex:1 }}>{p.description}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.375rem', marginBottom:'1rem' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ padding:'2px 8px', border:'1px solid rgba(122,188,220,0.2)', color:'#7abcdc', borderRadius:'2px', fontFamily:"'Space Mono',monospace", fontSize:'10px' }}>{t}</span>
                  ))}
                </div>
                <a href={p.repo} target="_blank" rel="noreferrer" style={{ fontFamily:"'Space Mono',monospace", fontSize:'11px', color:'#d4a857', letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none', display:'flex', alignItems:'center', gap:'0.5rem' }}>
                  View Mission <span>&#8594;</span>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}