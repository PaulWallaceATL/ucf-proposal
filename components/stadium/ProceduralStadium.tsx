"use client";

import { useMemo } from "react";
import * as THREE from "three";

const UCF_GOLD = "#FFC904";
const DARK_GREY = "#1a1a1a";
const BLACK = "#0a0a0a";
const FIELD_GREEN = "#2d5a27";

const FIELD_RADIUS = 48;
const INNER_TIER_RADIUS = 58;
const OUTER_TIER_RADIUS = 78;
const TIER_HEIGHT = 4;
const TIER_DEPTH = 8;
const SEGMENTS = 64;
const COLUMN_COUNT = 24;
const COLUMN_RADIUS = 1.5;
const COLUMN_HEIGHT = 18;

/**
 * Procedural stadium built from Three.js primitives: two seating tiers,
 * playing field, perimeter columns, and UCF gold accent lighting.
 */
export default function ProceduralStadium() {
  const innerTierSegments = useMemo(() => {
    const boxes: { angle: number }[] = [];
    for (let i = 0; i < SEGMENTS; i++) {
      boxes.push({ angle: (i / SEGMENTS) * Math.PI * 2 });
    }
    return boxes;
  }, []);

  const outerTierSegments = useMemo(() => {
    const boxes: { angle: number }[] = [];
    for (let i = 0; i < SEGMENTS; i++) {
      boxes.push({ angle: (i / SEGMENTS) * Math.PI * 2 });
    }
    return boxes;
  }, []);

  const columnPositions = useMemo(() => {
    const positions: { angle: number }[] = [];
    const r = OUTER_TIER_RADIUS + 6;
    for (let i = 0; i < COLUMN_COUNT; i++) {
      positions.push({ angle: (i / COLUMN_COUNT) * Math.PI * 2 });
    }
    return positions;
  }, []);

  return (
    <group>
      {/* Playing field: flat green cylinder */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <cylinderGeometry args={[FIELD_RADIUS, FIELD_RADIUS, 0.5, 64]} />
        <meshStandardMaterial color={FIELD_GREEN} />
      </mesh>

      {/* Inner seating tier: ring of box segments */}
      <group position={[0, TIER_HEIGHT / 2, 0]}>
        {innerTierSegments.map(({ angle }, i) => (
          <mesh
            key={`inner-${i}`}
            position={[
              Math.cos(angle) * INNER_TIER_RADIUS,
              0,
              Math.sin(angle) * INNER_TIER_RADIUS,
            ]}
            rotation={[0, -angle, 0]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[TIER_DEPTH * 0.9, TIER_HEIGHT, 3]} />
            <meshStandardMaterial color={DARK_GREY} />
          </mesh>
        ))}
      </group>

      {/* Outer seating tier: larger ring */}
      <group position={[0, TIER_HEIGHT * 1.2, 0]}>
        {outerTierSegments.map(({ angle }, i) => (
          <mesh
            key={`outer-${i}`}
            position={[
              Math.cos(angle) * OUTER_TIER_RADIUS,
              0,
              Math.sin(angle) * OUTER_TIER_RADIUS,
            ]}
            rotation={[0, -angle, 0]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[TIER_DEPTH * 1.2, TIER_HEIGHT * 1.5, 4]} />
            <meshStandardMaterial color={BLACK} />
          </mesh>
        ))}
      </group>

      {/* Perimeter structural columns */}
      {columnPositions.map(({ angle }, i) => (
        <mesh
          key={`col-${i}`}
          position={[
            Math.cos(angle) * (OUTER_TIER_RADIUS + 6),
            COLUMN_HEIGHT / 2,
            Math.sin(angle) * (OUTER_TIER_RADIUS + 6),
          ]}
          castShadow
          receiveShadow
        >
          <cylinderGeometry args={[COLUMN_RADIUS, COLUMN_RADIUS, COLUMN_HEIGHT, 8]} />
          <meshStandardMaterial color={DARK_GREY} />
        </mesh>
      ))}

      {/* UCF gold accent floodlights inside stadium */}
      <pointLight
        color={UCF_GOLD}
        intensity={80}
        distance={120}
        position={[FIELD_RADIUS * 0.5, 12, 0]}
        castShadow={false}
      />
      <pointLight
        color={UCF_GOLD}
        intensity={80}
        distance={120}
        position={[-FIELD_RADIUS * 0.5, 12, 0]}
        castShadow={false}
      />
      <pointLight
        color={UCF_GOLD}
        intensity={80}
        distance={120}
        position={[0, 12, FIELD_RADIUS * 0.5]}
        castShadow={false}
      />
      <pointLight
        color={UCF_GOLD}
        intensity={80}
        distance={120}
        position={[0, 12, -FIELD_RADIUS * 0.5]}
        castShadow={false}
      />
      <pointLight
        color={UCF_GOLD}
        intensity={40}
        distance={100}
        position={[0, 8, 0]}
        castShadow={false}
      />
    </group>
  );
}
