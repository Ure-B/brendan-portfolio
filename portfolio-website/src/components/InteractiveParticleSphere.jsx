import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function InteractiveParticleSphere(props) {
  const meshRef = useRef();
  const radius = props.radius;
  const segments = props.segments;

  const geometry = useMemo(() => {
    return new THREE.SphereGeometry(radius, segments, segments/2);
  }, []);

  return (
    <points {...props} ref={meshRef}>
        <bufferGeometry {...geometry} />
        <pointsMaterial size={0.02} color={"#915EFF"} sizeAttenuation={true}/>  
    </points>
  );
}

export default InteractiveParticleSphere;