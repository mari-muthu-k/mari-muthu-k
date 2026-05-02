import { useEffect, useState } from 'react'

interface Props { visible: boolean; onDone: () => void }

export default function TARSToast({ visible, onDone }: Props) {
  const [phase, setPhase] = useState<'in'|'hold'|'out'|'hidden'>('hidden')

  useEffect(() => {
    if (!visible) return
    setPhase('in')
    const t1 = setTimeout(() => setPhase('hold'), 400)
    const t2 = setTimeout(() => setPhase('out'),  3200)
    const t3 = setTimeout(() => { setPhase('hidden'); onDone() }, 3800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [visible, onDone])

  if (phase === 'hidden') return null
  return (
    <div
      className="glass-amber"
      style={{
        position: 'fixed', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        zIndex: 9998, padding: '1rem 1.5rem', minWidth: '280px', borderRadius: '2px',
        animation: phase === 'out' ? 'toast-out 0.5s ease forwards' : 'toast-in 0.4s ease forwards',
      }}
    >
      <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
        <div style={{ width:32, height:32, border:'1px solid #d4a857', borderRadius:2, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#d4a857', fontWeight:'bold' }}>T</span>
        </div>
        <div>
          <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'11px', color:'#7abcdc', letterSpacing:'0.15em', marginBottom:'2px' }}>TARS - ONLINE</p>
          <p style={{ fontSize:'14px', color:'#e8e6e1' }}>
            Humor setting: <span style={{ color:'#d4a857', fontWeight:600 }}>75%</span>
          </p>
        </div>
      </div>
      <div style={{ marginTop:'0.5rem', height:2, background:'#1a3a5c', borderRadius:1, overflow:'hidden' }}>
        <div style={{ height:'100%', background:'#d4a857', animation:'tars-progress 3s linear forwards' }} />
      </div>
    </div>
  )
}