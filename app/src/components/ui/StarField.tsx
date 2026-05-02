import { useEffect, useRef } from 'react'

interface Star { x:number; y:number; r:number; op:number; dOp:number; col:string }
const COLS = ['#c8dcff','#ffffff','#ffeebb','#aaccff']

export default function StarField() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0
    const stars: Star[] = []

    function resize() {
      W = canvas!.width  = window.innerWidth
      H = canvas!.height = window.innerHeight
    }
    function build() {
      stars.length = 0
      const n = Math.min(Math.floor((W * H) / 3000), 280)
      for (let i = 0; i < n; i++) {
        const t = Math.random()
        stars.push({
          x: Math.random() * W, y: Math.random() * H,
          r: t < 0.6 ? Math.random() * 0.9 + 0.3 : t < 0.88 ? Math.random() * 1.2 + 0.7 : Math.random() * 1.8 + 1,
          op: Math.random(),
          dOp: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
          col: COLS[Math.floor(Math.random() * COLS.length)],
        })
      }
    }
    resize(); build()

    let raf: number
    function frame() {
      ctx.clearRect(0, 0, W, H)
      for (const s of stars) {
        s.op += s.dOp
        if (s.op > 1)    { s.op = 1;    s.dOp = -Math.abs(s.dOp) }
        if (s.op < 0.05) { s.op = 0.05; s.dOp =  Math.abs(s.dOp) }
        ctx.globalAlpha = s.op
        ctx.fillStyle   = s.col
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(frame)
    }
    frame()

    function onResize() { resize(); build() }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas ref={ref} style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:0 }} aria-hidden />
}