"use client";

import { useMemo } from "react";
import * as THREE from "three";

/** UCF official colors */
const UCF_GOLD = "#FFC904";
const UCF_GOLD_ALT = "#FFCC00";
const UCF_BLACK = "#000000";
const DARK_GREY = "#1a1a1a";
const SEATING_GREY = "#252525";
const FIELD_GREEN = "#2e6b27";

/** Oval stadium: longer X (length), shorter Z (width) like a football field */
const FIELD_RX = 52;
const FIELD_RZ = 40;
const TIER_SEGMENTS = 48;

const TIERS = [
  { rxInner: 48, rzInner: 36, rxOuter: 58, rzOuter: 44, yStart: 0, yEnd: 4, rows: 4 },
  { rxInner: 58, rzInner: 44, rxOuter: 72, rzOuter: 54, yStart: 4, yEnd: 10, rows: 4 },
  { rxInner: 72, rzInner: 54, rxOuter: 86, rzOuter: 62, yStart: 10, yEnd: 18, rows: 5 },
];

/**
 * Oval bowl-shaped stadium with UCF colors. Three tiers of seating around
 * an elliptical field; gold trim and floodlights.
 */
export default function ProceduralStadium() {
  const goldTrimPositions = useMemo(() => {
    const positions: { angle: number; rx: number; rz: number; y: number }[] = [];
    const tiers = [
      { rx: 58, rz: 44, y: 4 },
      { rx: 72, rz: 54, y: 10 },
      { rx: 86, rz: 62, y: 18 },
    ];
    tiers.forEach(({ rx, rz, y }) => {
      for (let j = 0; j < 24; j++) {
        const angle = (j / 24) * Math.PI * 2;
        positions.push({ angle, rx, rz, y });
      }
    });
    return positions;
  }, []);

  return (
    <group>
      {/* Oval playing field (scaled circle for ellipse) */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        scale={[FIELD_RX, 1, FIELD_RZ]}
        receiveShadow
      >
        <circleGeometry args={[1, 64]} />
        <meshStandardMaterial color={FIELD_GREEN} />
      </mesh>

      {/* Seating bowl: three tiers, oval */}
      {TIERS.map((tier, tierIdx) => {
        const colors = [SEATING_GREY, DARK_GREY, UCF_BLACK];
        const color = colors[tierIdx];
        const { rxInner, rzInner, rxOuter, rzOuter, yStart, yEnd, rows } = tier;
        return Array.from({ length: rows }).map((_, rowIdx) => {
          const t = (rowIdx + 0.5) / rows;
          const rx = rxInner + (rxOuter - rxInner) * t;
          const rz = rzInner + (rzOuter - rzInner) * t;
          const y = yStart + (yEnd - yStart) * t;
          const stepW = 2.2;
          const stepD = 0.8;
          return Array.from({ length: TIER_SEGMENTS }).map((_, i) => {
            const angle = (i / TIER_SEGMENTS) * Math.PI * 2;
            const x = Math.cos(angle) * rx;
            const z = Math.sin(angle) * rz;
            return (
              <mesh
                key={`t${tierIdx}-r${rowIdx}-${i}`}
                position={[x, y, z]}
                rotation={[0, -angle, 0]}
                castShadow
                receiveShadow
              >
                <boxGeometry args={[stepW, stepD, 1.2]} />
                <meshStandardMaterial color={color} />
              </mesh>
            );
          });
        });
      }).flat(2)}

      {/* Gold trim at tier edges (oval) */}
      {goldTrimPositions.map(({ angle, rx, rz, y }, i) => (
        <mesh
          key={`trim-${i}`}
          position={[Math.cos(angle) * rx, y + 0.2, Math.sin(angle) * rz]}
          rotation={[0, -angle, 0]}
        >
          <boxGeometry args={[1.5, 0.15, 0.4]} />
          <meshStandardMaterial color={UCF_GOLD} />
        </mesh>
      ))}

      {/* Light towers at corners - UCF black with gold caps */}
      {[
        [1, 1], [1, -1], [-1, 1], [-1, -1],
      ].map(([sx, sz], i) => (
        <group key={i} position={[80 * sx, 14, 56 * sz]}>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[1.2, 1.2, 24, 8]} />
            <meshStandardMaterial color={UCF_BLACK} />
          </mesh>
          <mesh position={[0, 12.2, 0]}>
            <cylinderGeometry args={[1.8, 2, 1.5, 8]} />
            <meshStandardMaterial color={UCF_GOLD} />
          </mesh>
        </group>
      ))}

      {/* UCF gold floodlights */}
      <pointLight color={UCF_GOLD} intensity={180} distance={140} position={[38, 16, 0]} />
      <pointLight color={UCF_GOLD} intensity={180} distance={140} position={[-38, 16, 0]} />
      <pointLight color={UCF_GOLD} intensity={180} distance={140} position={[0, 16, 30]} />
      <pointLight color={UCF_GOLD} intensity={180} distance={140} position={[0, 16, -30]} />
      <pointLight color={UCF_GOLD_ALT} intensity={80} distance={100} position={[0, 8, 0]} />
    </group>
  );
}
