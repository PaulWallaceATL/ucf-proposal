"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProceduralStadium from "./ProceduralStadium";

gsap.registerPlugin(ScrollTrigger);

const UCF_GOLD = "#FFC904";

/** Shared scroll progress (0–1) for camera and stadium scale */
const scrollProgressRef = { value: 0 };

/**
 * Camera path: outside -> approach -> lower bowl -> upper deck -> bird's eye.
 * Oval stadium at origin; path keeps bowl in view.
 */
function getCameraPath(): THREE.CatmullRomCurve3 {
  return new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(95, 28, 95),
      new THREE.Vector3(65, 18, 65),
      new THREE.Vector3(0, 12, 48),
      new THREE.Vector3(40, 8, 0),
      new THREE.Vector3(0, 7, -42),
      new THREE.Vector3(-40, 11, 0),
      new THREE.Vector3(35, 20, 35),
      new THREE.Vector3(0, 30, 0),
      new THREE.Vector3(0, 52, 0),
    ],
    true
  );
}

function ScrollDrivenCamera() {
  const { camera } = useThree();
  const curveRef = useRef<THREE.CatmullRomCurve3>(getCameraPath());

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#stadium-scroll-root",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        scrollProgressRef.value = self.progress;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    const curve = curveRef.current;

    const onUpdate = () => {
      const p = scrollProgressRef.value;
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

/** Wraps stadium with scroll-linked scale and hover scale */
function StadiumWithInteractivity() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const scaleRef = useRef(1);

  useFrame(() => {
    if (!groupRef.current) return;
    const scrollScale = 0.97 + scrollProgressRef.value * 0.06;
    const targetScale = hovered ? scrollScale * 1.02 : scrollScale;
    scaleRef.current += (targetScale - scaleRef.current) * 0.08;
    groupRef.current.scale.setScalar(scaleRef.current);
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <ProceduralStadium />
    </group>
  );
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
      <StadiumWithInteractivity />
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
        camera={{ fov: 60, near: 0.1, far: 2000, position: [95, 28, 95] }}
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
