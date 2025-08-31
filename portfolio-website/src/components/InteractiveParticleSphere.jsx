import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  uniform float u_time;
  uniform vec3 u_mouse;
  uniform float u_radius;
  attribute vec3 originalPosition;

  varying float vEffect;
  varying float vRim;

  void main() {
    // Calculate the distance to the mouse in 3D space.
    float dist = distance(originalPosition, u_mouse);
    float effect = 1.0 - smoothstep(0.0, u_radius, dist);

    // Send effect value to fragment shader
    vEffect = effect;

    // Apply the mouse influence to the particle's position.
    vec3 animatedPosition = originalPosition + (normalize(originalPosition - u_mouse) * effect * 0.8);

    vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 4.0;

    vec3 normal = normalize((modelViewMatrix * vec4(originalPosition, 0.0)).xyz); // w=0 -> ignores translation
    vec3 viewDir = vec3(0.0, 0.0, 1.0);

    float rim = 1.0 - abs(dot(normal, viewDir));
    vRim = pow(rim, 2.0);
  }
`;

const fragmentShader = `
  uniform float u_time;

  varying float vEffect;
  varying float vRim;

  void main() {
    vec3 baseColor = vec3(0.569, 0.369, 1.0);
    vec3 rimColor  = vec3(1.0, 1.0, 1.0);

    // Start with pure purple core
    vec3 color = baseColor;

    // Mouse influence
    color = mix(color, rimColor, vEffect);

    // Rim always controls the white silhouette
    float pulse = 0.3 + 0.2 * sin(u_time * 2.0);
    color = mix(color, rimColor, vRim);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function InteractiveParticleSphere(props) {
  const meshRef = useRef();
  const sphereRef = useRef();

  const { pointer } = useThree();
  const raycaster = new THREE.Raycaster();

  const radius = props.radius;
  const segments = props.segments;

  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_mouse: { value: new THREE.Vector3() },
    u_radius: { value: 1.0 },
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

    uniforms.u_radius.value = 1.0 + 0.2 * Math.sin(uniforms.u_time.value * 3.0);
  
    raycaster.setFromCamera(pointer, state.camera);
  
    if (sphereRef.current) {
        const intersects = raycaster.intersectObject(sphereRef.current);
        if (intersects.length > 0) {
          uniforms.u_mouse.value.copy(intersects[0].point);
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