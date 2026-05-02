import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'5rem 1.5rem', minHeight:'30vh', borderTop:'1px solid rgba(122,188,220,0.08)', position:'relative', scrollSnapAlign:'start' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(26,58,92,0.15) 0%, transparent 70%)', pointerEvents:'none' }} />
      <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.5 }} transition={{ duration:0.8 }} style={{ textAlign:'center', position:'relative' }}>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.5rem,4vw,2.25rem)', marginBottom:'1rem', letterSpacing:'-0.02em' }}>
          MARI
        </div>
        <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'11px', letterSpacing:'0.3em', color:'#7abcdc', textTransform:'uppercase', opacity:0.6, marginBottom:'2rem' }}>
          Software Engineer 3 - AI Researcher 
        </p>
        <div style={{ marginBottom:'2rem' }}>
          <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'rgba(232,230,225,0.2)', letterSpacing:'0.25em', marginBottom:'0.25rem' }}>DESIGNED IN THE COSMOS</p>
        </div>
        <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'11px', color:'rgba(232,230,225,0.3)', letterSpacing:'0.15em' }}>
          &copy; {new Date().getFullYear()} Marimuthu Kaliraj
        </p>
      </motion.div>
    </footer>
  )
}