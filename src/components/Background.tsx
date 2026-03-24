import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export function Background() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => new THREE.TorusKnotGeometry(1.8, 0.6, 128, 32), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.08;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.12;
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.1} color="#888888" />
      <mesh ref={meshRef} geometry={geometry} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#1a1a1a"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </>
  );
}
