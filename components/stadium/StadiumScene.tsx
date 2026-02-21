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
 * Stadium at origin; field radius ~48, outer ~84. Path keeps stadium in view.
 */
function getCameraPath(): THREE.CatmullRomCurve3 {
  const r = 90;
  const rInner = 52;
  return new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(85, 25, 85),
      new THREE.Vector3(55, 15, 55),
      new THREE.Vector3(0, 10, 45),
      new THREE.Vector3(35, 8, 0),
      new THREE.Vector3(0, 6, -38),
      new THREE.Vector3(-35, 10, 0),
      new THREE.Vector3(30, 18, 30),
      new THREE.Vector3(0, 28, 0),
      new THREE.Vector3(0, 50, 0),
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
          angle={0.6}
          penumbra={0.5}
          intensity={280}
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
      <ambientLight intensity={0.65} />
      <directionalLight
        position={[40, 60, 40]}
        intensity={0.8}
        color="#ffffff"
        castShadow={false}
      />
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
        camera={{ fov: 60, near: 0.1, far: 2000, position: [85, 25, 85] }}
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
