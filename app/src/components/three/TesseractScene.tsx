import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

type V4 = [number, number, number, number]

function verts4D(): V4[] {
  const v: V4[] = []
  for (let i = 0; i < 16; i++) v.push([(i&1)?1:-1, (i&2)?1:-1, (i&4)?1:-1, (i&8)?1:-1])
  return v
}
function edges4D(): [number,number][] {
  const e: [number,number][] = []
  for (let i = 0; i < 16; i++) for (let j = i+1; j < 16; j++) { const d=i^j; if(d&&(d&(d-1))===0) e.push([i,j]) }
  return e
}
function rot4D(v: V4, a1: number, a2: number): V4 {
  const [x,y,z,w] = v
  const c1=Math.cos(a1), s1=Math.sin(a1); const x1=x*c1-w*s1, w1=x*s1+w*c1
  const c2=Math.cos(a2), s2=Math.sin(a2); const y2=y*c2-z*s2, z2=y*s2+z*c2
  return [x1, y2, z2, w1]
}
function proj(v: V4): THREE.Vector3 {
  const w = 2.5 / (2.5 - v[3]); return new THREE.Vector3(v[0]*w, v[1]*w, v[2]*w)
}

const BASE = verts4D()
const EDGES = edges4D()

function Tess({ scale, color, opacity }: { scale: number; color: string; opacity: number }) {
  const t = useRef(0)
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(EDGES.length * 6), 3))
    return g
  }, [])
  useFrame((_, dt) => {
    t.current += dt
    const projected = BASE.map(v => proj(rot4D(v, t.current * 0.35, t.current * 0.22)))
    const arr = geo.attributes.position.array as Float32Array
    EDGES.forEach(([a,b], i) => {
      const pa=projected[a], pb=projected[b]
      arr[i*6+0]=pa.x*scale; arr[i*6+1]=pa.y*scale; arr[i*6+2]=pa.z*scale
      arr[i*6+3]=pb.x*scale; arr[i*6+4]=pb.y*scale; arr[i*6+5]=pb.z*scale
    })
    geo.attributes.position.needsUpdate = true
  })
  return <lineSegments geometry={geo}><lineBasicMaterial color={color} transparent opacity={opacity} /></lineSegments>
}

export default function TesseractScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
      <Tess scale={1}   color="#d4a857" opacity={0.85} />
      <Tess scale={0.6} color="#7abcdc" opacity={0.35} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  )
}