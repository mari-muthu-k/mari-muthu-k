import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { CONTACT_CHANNELS } from '../../lib/data'

const TesseractScene = lazy(() => import('../three/TesseractScene'))

export default function Contact() {
  return (
    <section id="contact" className="snap-section" style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'5rem 1.5rem' }}>
      <div style={{ maxWidth:'72rem', width:'100%', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'3rem', alignItems:'center' }}>

        <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:0.3 }} variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.12 } } }}>
          <motion.p variants={{ hidden:{opacity:0,y:20}, show:{opacity:1,y:0} }} className="eyebrow" style={{ marginBottom:'0.75rem' }}>The Tesseract - Dimensional Reach</motion.p>
          <motion.h2 variants={{ hidden:{opacity:0,y:20}, show:{opacity:1,y:0} }} style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.75rem,4vw,3rem)', marginBottom:'1rem', lineHeight:1.2 }}>
            Establish <span style={{ color:'#d4a857' }}>Contact</span>
          </motion.h2>
          <motion.p variants={{ hidden:{opacity:0,y:20}, show:{opacity:1,y:0} }} style={{ fontSize:'14px', color:'rgba(232,230,225,0.7)', lineHeight:1.7, marginBottom:'2.5rem', maxWidth:'28rem' }}>
            Reach across dimensions. Whether a mission proposal, a collaboration, or just a gravitational ping - transmit whenever.
          </motion.p>
          <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
            {CONTACT_CHANNELS.map(({ label, value, href }) => (
              <motion.a key={label} href={href} target="_blank" rel="noreferrer" variants={{ hidden:{opacity:0,x:-20}, show:{opacity:1,x:0} }} className="glass" style={{ display:'flex', alignItems:'center', gap:'1rem', padding:'1rem', borderRadius:'2px', textDecoration:'none', transition:'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(212,168,87,0.45)'; (e.currentTarget as HTMLElement).style.transform='translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor=''; (e.currentTarget as HTMLElement).style.transform='' }}
              >
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', letterSpacing:'0.15em', textTransform:'uppercase', color:'#7abcdc', width:'5rem', flexShrink:0 }}>{label}</span>
                <span style={{ fontSize:'13px', color:'rgba(232,230,225,0.7)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', flex:1 }}>{value}</span>
                <span style={{ color:'#d4a857', marginLeft:'auto', flexShrink:0 }}>-&gt;</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity:0, scale:0.7 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true, amount:0.3 }} transition={{ duration:1.2 }} style={{ height:'380px', minHeight:'300px' }}>
          <Suspense fallback={<div style={{ height:'100%', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(122,188,220,0.4)', fontFamily:"'Space Mono',monospace", fontSize:'11px' }}>Loading Tesseract...</div>}>
            <TesseractScene />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}