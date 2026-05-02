import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Ship() {
  const g = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (!g.current) return
    const t = clock.getElapsedTime()
    g.current.rotation.y = t * 0.18
    g.current.rotation.x = 0.12 * Math.sin(t * 0.35)
  })
  return (
    <group ref={g}>
      <mesh rotation={[Math.PI/2,0,0]}>
        <torusGeometry args={[1.6,0.06,10,80]} />
        <meshBasicMaterial color="#e8e6e1" wireframe />
      </mesh>
      <mesh rotation={[Math.PI/2,0,0]}>
        <torusGeometry args={[0.9,0.04,8,60]} />
        <meshBasicMaterial color="#7abcdc" transparent opacity={0.6} wireframe />
      </mesh>
      {[0,1,2].map(i => (
        <mesh key={i} rotation={[0,(i*Math.PI*2)/3,0]}>
          <cylinderGeometry args={[0.012,0.012,1.4,6]} />
          <meshBasicMaterial color="#d4a857" transparent opacity={0.7} />
        </mesh>
      ))}
      <mesh rotation={[Math.PI/2,0,0]}>
        <cylinderGeometry args={[0.22,0.22,0.45,12]} />
        <meshBasicMaterial color="#e8e6e1" wireframe />
      </mesh>
      {[0,1,2,3,4,5].map(i => {
        const a = (i*Math.PI*2)/6
        return (
          <mesh key={i} position={[Math.cos(a)*1.6, 0, Math.sin(a)*1.6]} rotation={[0,-a,0]}>
            <boxGeometry args={[0.28,0.28,0.55]} />
            <meshBasicMaterial color="#e8e6e1" wireframe />
          </mesh>
        )
      })}
    </group>
  )
}

export default function EnduranceScene() {
  return (
    <Canvas camera={{ position:[0,2.5,5], fov:45 }} gl={{ antialias:true, alpha:true }} style={{ background:'transparent' }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[5,5,5]} intensity={0.5} color="#7abcdc" />
      <Ship />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  )
}