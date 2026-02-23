"use client";

import { Suspense, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Center } from "@react-three/drei";

/**
 * Minimal R3F model viewer: loads GLB with soft lighting.
 * Supports optional auto-rotation and optional orbit controls.
 */
interface ModelViewerProps {
  modelUrl: string;
  autoRotate?: boolean;
  enableControls?: boolean;
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

const MQ = "(prefers-reduced-motion: reduce)";
function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia(MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getReducedMotion() {
  return window.matchMedia(MQ).matches;
}

export default function ModelViewer({
  modelUrl,
  autoRotate = true,
  enableControls = false,
}: ModelViewerProps) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false
  );

  const shouldAutoRotate = autoRotate && !reducedMotion;

  return (
    <Canvas
      camera={{ position: [0, 150, 350], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 20, 10]} intensity={0.8} />
        <directionalLight position={[-5, 10, -10]} intensity={0.3} />
        <Model url={modelUrl} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={enableControls}
        enableRotate={enableControls}
        minDistance={100}
        maxDistance={600}
        autoRotate={shouldAutoRotate}
        autoRotateSpeed={0.4}
      />
    </Canvas>
  );
}
