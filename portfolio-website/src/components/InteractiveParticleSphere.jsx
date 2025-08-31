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

    // Simple 3D noise
    float hash(float n) { return fract(sin(n) * 43758.5453123); }

    float noise3d(vec3 x){
        vec3 p = floor(x);
        vec3 f = fract(x);
        f = f*f*(3.0-2.0*f);
    
        float n = p.x + p.y*57.0 + 113.0*p.z;
        return mix(
            mix(
                mix(hash(n+0.0), hash(n+1.0),f.x),
                mix(hash(n+57.0), hash(n+58.0),f.x),f.y
            ),
            mix(
                mix(hash(n+113.0), hash(n+114.0),f.x),
                mix(hash(n+170.0), hash(n+171.0),f.x),f.y
            ),f.z
        );
    }

    void main() {
        float dist = distance(originalPosition, u_mouse);
        float pulseRadius = u_radius * (0.7 + 0.3 * sin(u_time * 3.0));
        float effect = 1.0 - smoothstep(0.0, pulseRadius, dist);
        vEffect = effect;

        vec3 sphereNoise = vec3(
            noise3d(originalPosition + vec3(u_time, 0.0, 0.0)),
            noise3d(originalPosition + vec3(0.0, u_time, 0.0)),
            noise3d(originalPosition + vec3(0.0, 0.0, u_time))
        ) * 0.3;

        vec3 mouseNoise = vec3(
            noise3d(originalPosition + vec3(u_time, 0.0, 0.0)),
            noise3d(originalPosition + vec3(0.0, u_time, 0.0)),
            noise3d(originalPosition + vec3(0.0, 0.0, u_time))
        ) * effect * 0.6;

        vec3 animatedPosition = originalPosition + sphereNoise + (normalize(originalPosition - u_mouse) * effect * 0.8);

        vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = 4.0;

        vec3 normal = normalize((modelViewMatrix * vec4(originalPosition, 0.0)).xyz);
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
        vec3 finalColor = baseColor;

        // Mouse influence
        finalColor = mix(finalColor, rimColor, vEffect);

        // Rim always controls the white silhouette
        float pulse = 0.3 + 0.2 * sin(u_time * 2.0);
        //finalColor = mix(finalColor, rimColor, vRim);

        gl_FragColor = vec4(finalColor, 1.0);
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