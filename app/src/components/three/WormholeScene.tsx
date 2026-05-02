import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const vert = `
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vNormal = normalize(normalMatrix * normal);
  vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`

const frag = `
uniform float uTime;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 2.5);
  vec3 interior = vec3(0.0, 0.01, 0.05);
  float shimmer = 0.5 + 0.5 * sin(uTime * 0.8 + vWorldPos.x * 15.0 + vWorldPos.y * 12.0);
  interior += shimmer * 0.02 * vec3(0.5, 0.7, 1.0);
  vec3 rim = vec3(0.47, 0.74, 0.87) * (0.85 + 0.15 * sin(uTime * 1.4));
  gl_FragColor = vec4(mix(interior, rim, fresnel), mix(0.7, 1.0, fresnel));
}`

function WormholeSphere() {
  const matRef = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])
  useFrame(({ clock }) => { if (matRef.current) matRef.current.uniforms.uTime.value = clock.getElapsedTime() })
  return (
    <mesh>
      <sphereGeometry args={[1.8, 64, 64]} />
      <shaderMaterial ref={matRef} vertexShader={vert} fragmentShader={frag} uniforms={uniforms} transparent side={THREE.FrontSide} />
    </mesh>
  )
}

function Ring({ radius, incline, speed, color, opacity }: { radius:number; incline:number; speed:number; color:string; opacity:number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => { if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * speed })
  return (
    <mesh ref={ref} rotation={[incline, 0, 0]}>
      <torusGeometry args={[radius, 0.012, 8, 120]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  )
}

function Stars() {
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const pos: number[] = []
    for (let i = 0; i < 800; i++) {
      const r = 4 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi))
    }
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    return g
  }, [])
  return <points geometry={geo}><pointsMaterial color="#c8dcff" size={0.022} sizeAttenuation transparent opacity={0.7} /></points>
}

function Halo() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => { if (ref.current) ref.current.scale.setScalar(1 + 0.04 * Math.sin(clock.getElapsedTime() * 0.6)) })
  return <mesh ref={ref}><sphereGeometry args={[2.5, 32, 32]} /><meshBasicMaterial color="#7abcdc" transparent opacity={0.04} side={THREE.BackSide} /></mesh>
}

export default function WormholeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#7abcdc" />
      <Stars />
      <Halo />
      <WormholeSphere />
      <Ring radius={2.45} incline={0.14} speed={0.22} color="#ffd88a" opacity={0.65} />
      <Ring radius={2.90} incline={1.10} speed={0.12} color="#b4dcff" opacity={0.40} />
      <Ring radius={2.15} incline={0.64} speed={0.35} color="#fff5c8" opacity={0.50} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  )
}