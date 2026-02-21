"use client";

import dynamic from "next/dynamic";

const StadiumScene = dynamic(
  () => import("@/components/stadium/StadiumScene"),
  { ssr: false }
);

/**
 * Client wrapper that lazy-loads StadiumScene with SSR disabled for WebGL.
 */
export default function StadiumSceneDynamic() {
  return <StadiumScene />;
}
