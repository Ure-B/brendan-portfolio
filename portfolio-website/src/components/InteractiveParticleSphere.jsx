import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  uniform float u_time;
  uniform vec3 u_mouse;
  attribute vec3 originalPosition;

  void main() {
    // Calculate the distance to the mouse in 3D space.
    float dist = distance(originalPosition, u_mouse);
    float effect = 1.0 - smoothstep(0.2, 1.0, dist);

    // Apply the mouse influence to the particle's position.
    vec3 animatedPosition = originalPosition + (normalize(originalPosition - u_mouse) * effect * 0.8);

    // Standard three.js boilerplate for vertex shaders.
    gl_Position = projectionMatrix * modelViewMatrix * vec4(animatedPosition, 1.0);
    gl_PointSize = 3.0;
  }
`;

const fragmentShader = `
  void main() {
    gl_FragColor = vec4(0.569, 0.369, 1.0, 1.0);
  }
`;

function InteractiveParticleSphere(props) {
  const meshRef = useRef();
  const { pointer } = useThree();
  const raycaster = new THREE.Raycaster();

  const radius = props.radius;
  const segments = props.segments;

  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_mouse: { value: new THREE.Vector3() },
  }), []);

  // Set up the geometry with original positions.
  const geometry = useMemo(() => {
    const geometry = new THREE.SphereGeometry(radius, segments, segments/2);
    const nonIndexedGeometry = geometry.toNonIndexed();
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
  
    raycaster.setFromCamera(pointer, state.camera);
  
    const sphere = meshRef.current; // your <points> mesh
    const intersects = raycaster.intersectObject(sphere);
  
    if (intersects.length > 0) {
      uniforms.u_mouse.value.copy(intersects[0].point);
    } else {
      // fallback: put mouse far away so it has no effect
      uniforms.u_mouse.value.set(999, 999, 999);
    }
  });

  return (
    <points {...props} ref={meshRef}>
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