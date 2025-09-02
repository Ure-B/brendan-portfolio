import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import noise from "../shaders/noise.glsl?raw";
import vertexSource from "../shaders/particleVertex.glsl?raw";
import fragmentSource from "../shaders/particleFragment.glsl?raw";

const vertexShader = noise + "\n" + vertexSource;
const fragmentShader = fragmentSource;

function easeOutElastic(t) {
    const c4 = (2 * Math.PI) / 3;
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
}

function InteractiveParticleSphere(props) {
  const meshRef = useRef();
  const sphereRef = useRef();

  const { pointer } = useThree();
  const raycaster = new THREE.Raycaster();

  const radius = props.radius;
  const segments = props.segments;

  const targetScale = 1;
  const scaleRef = useRef(0.01);

  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_mouse: { value: new THREE.Vector3() },
    u_radius: { value: 1.0 },
    u_mouseActive: { value: 0.0 },
  }), []);

  // Set up the geometry with original positions.
  const geometry = useMemo(() => {
    const geometry = new THREE.IcosahedronGeometry(radius, segments);
    const nonIndexedGeometry = geometry;
    const positions = nonIndexedGeometry.attributes.position.array;

    // Create an attribute to store the particle's original position.
    const originalPositions = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i += 3) {
      originalPositions[i] = positions[i];
      originalPositions[i + 1] = positions[i + 1];
      originalPositions[i + 2] = positions[i + 2];
    }
    nonIndexedGeometry.setAttribute('originalPosition', new THREE.BufferAttribute(originalPositions, 3));

    return nonIndexedGeometry;
  }, []);

  useFrame((state) => {
    uniforms.u_time.value = state.clock.getElapsedTime();

    uniforms.u_radius.value = 2.0;

    const duration = 5.0; // seconds
    const t = Math.min(state.clock.elapsedTime / duration, 1.0);
    const eased = 1 + (easeOutElastic(t) - 1) * 0.5;
    meshRef.current.scale.setScalar(eased);

  
    raycaster.setFromCamera(pointer, state.camera);
    if (sphereRef.current) {
        const intersects = raycaster.intersectObject(sphereRef.current);
        if (intersects.length > 0) {
            uniforms.u_mouse.value.copy(intersects[0].point);
            uniforms.u_mouseActive.value = THREE.MathUtils.lerp(uniforms.u_mouseActive.value, 1.0, 0.05);
          } else {
            uniforms.u_mouseActive.value = THREE.MathUtils.lerp(uniforms.u_mouseActive.value, 0.0, 0.01);
          }
      }
  });

  return (
    <points {...props} ref={meshRef}>
        {/* Hidden sphere mesh for raycasting */}
        <mesh ref={sphereRef} visible={false}>
            <sphereGeometry args={[radius, segments, segments / 2]} />
            <meshBasicMaterial />
        </mesh>

        {/* Actual particle sphere */}
        <primitive object={geometry} attach="geometry" />
        <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms}
        />
    </points>
  );
}

export default InteractiveParticleSphere;