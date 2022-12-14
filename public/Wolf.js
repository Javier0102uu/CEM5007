/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/wolf.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature_0">
          <primitive object={nodes._rootJoint} />
          <skinnedMesh name="Wolf1_Material__wolf_col_tga_0" geometry={nodes.Wolf1_Material__wolf_col_tga_0.geometry} material={materials.Wolf_1} skeleton={nodes.Wolf1_Material__wolf_col_tga_0.skeleton} />
          <skinnedMesh name="Wolf2_fur__fella3_jpg_001_0" geometry={nodes.Wolf2_fur__fella3_jpg_001_0.geometry} material={materials.Wolf_Fur} skeleton={nodes.Wolf2_fur__fella3_jpg_001_0.skeleton} />
          <skinnedMesh name="Wolf3_claws_0" geometry={nodes.Wolf3_claws_0.geometry} material={materials.Wolf_claws} skeleton={nodes.Wolf3_claws_0.skeleton} />
          <skinnedMesh name="Wolf3_eyes_0" geometry={nodes.Wolf3_eyes_0.geometry} material={materials['Wolf Eyes']} skeleton={nodes.Wolf3_eyes_0.skeleton} />
          <skinnedMesh name="Wolf3_teeth" geometry={nodes.Wolf3_teeth.geometry} material={materials['Wolf Teeth']} skeleton={nodes.Wolf3_teeth.skeleton} />
        </group>
        <group name="Sun" position={[0.55, 1.18, 0.89]} rotation={[0.43, -0.32, -0.52]} />
        <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['Material.001']} position={[0, -0.01, 0]} scale={0.64} />
      </group>
    </group>
  )
}

useGLTF.preload('/wolf.gltf')
