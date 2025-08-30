import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Cube(props) {
  const meshRef = useRef();

  // Use useFrame to animate the cube
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[props.size, props.size, props.size]} />
      <meshToonMaterial color={"#915EFF"} shininess={30} transparent={props.transparent} opacity={props.opacity}/>
    </mesh>
  );
}

export default Cube;