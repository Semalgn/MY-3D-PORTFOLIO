
import { useGLTF } from '@react-three/drei'

export function Desk(props) {
  const { nodes, materials } = useGLTF('/models/computer-desk.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.016']} position={[0.062, 0, -0.621]} rotation={[0, 0, Math.PI]} scale={1.252} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.016']} position={[0, 0, -0.787]} />
    </group>
  )
}

useGLTF.preload('/models/computer-desk.glb')
