"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Center } from "@react-three/drei";

/**
 * Minimal R3F model viewer: loads GLB, basic lighting, orbit controls.
 */
interface ModelViewerProps {
  modelUrl: string;
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

export default function ModelViewer({ modelUrl }: ModelViewerProps) {
  return (
    <Canvas
      camera={{ position: [0, 150, 350], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 10]} intensity={1} />
        <Model url={modelUrl} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        enablePan={false}
        minDistance={100}
        maxDistance={600}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
