"use client";

import { useRef, useEffect, useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProceduralStadium from "./ProceduralStadium";

gsap.registerPlugin(ScrollTrigger);

const UCF_GOLD = "#FFC904";

/**
 * Camera path: outside -> tunnel -> lower bowl -> upper deck -> bird's eye.
 * Stadium is roughly centered at origin; field radius ~48, outer ~84.
 */
function getCameraPath(): THREE.CatmullRomCurve3 {
  const r = 90;
  const rInner = 50;
  return new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(r * 1.2, r * 0.4, r * 1.2),
      new THREE.Vector3(r * 0.6, r * 0.2, r * 0.6),
      new THREE.Vector3(0, 8, r * 0.5),
      new THREE.Vector3(rInner * 0.7, 6, 0),
      new THREE.Vector3(0, 5, -rInner * 0.6),
      new THREE.Vector3(-rInner * 0.6, 8, 0),
      new THREE.Vector3(rInner * 0.5, 15, rInner * 0.5),
      new THREE.Vector3(0, 25, 0),
      new THREE.Vector3(0, 55, 0),
    ],
    true
  );
}

function ScrollDrivenCamera() {
  const { camera } = useThree();
  const progressRef = useRef({ value: 0 });
  const curveRef = useRef<THREE.CatmullRomCurve3>(getCameraPath());

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#stadium-scroll-root",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        progressRef.current.value = self.progress;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    const curve = curveRef.current;

    const onUpdate = () => {
      const p = progressRef.current.value;
      const point = curve.getPoint(p);
      camera.position.copy(point);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    };

    gsap.ticker.add(onUpdate);
    return () => {
      gsap.ticker.remove(onUpdate);
    };
  }, [camera]);

  return null;
}

function SpotLights() {
  const target = useMemo(() => new THREE.Object3D(), []);
  const positions: [number, number, number][] = [
    [60, 40, 60],
    [-60, 40, 60],
    [60, 40, -60],
    [-60, 40, -60],
  ];

  return (
    <>
      <primitive object={target} position={[0, 0, 0]} />
      {positions.map((pos, i) => (
        <spotLight
          key={i}
          position={pos}
          angle={0.5}
          penumbra={1}
          intensity={120}
          color={UCF_GOLD}
          castShadow
          target={target}
        />
      ))}
    </>
  );
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <SpotLights />
      <ProceduralStadium />
      <ScrollDrivenCamera />
    </>
  );
}

/**
 * Main R3F canvas for the stadium 3D walkthrough. Fixed full-viewport,
 * black background, scroll-driven camera flythrough.
 */
export default function StadiumScene() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-screen bg-ucf-black">
      <Canvas
        gl={{ antialias: true, alpha: false }}
        camera={{ fov: 60, near: 0.1, far: 2000, position: [120, 40, 120] }}
        shadows
        onCreated={({ scene }) => {
          scene.background = new THREE.Color(0x000000);
        }}
      >
        <SceneContents />
      </Canvas>
    </div>
  );
}
