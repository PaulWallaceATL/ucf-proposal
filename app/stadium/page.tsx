import type { Metadata } from "next";
import StadiumOverlay from "@/components/stadium/StadiumOverlay";
import StadiumSceneDynamic from "@/components/stadium/StadiumSceneDynamic";

export const metadata: Metadata = {
  title: "3D Stadium Experience | UCF Athletics Proposal",
  description: "An immersive 3D walkthrough of the Acrisure Bounce House.",
};

/**
 * Stadium 3D walkthrough page. Full-viewport fixed canvas with scroll-driven
 * camera flythrough and overlay copy; 500vh scroll space.
 */
export default function StadiumPage() {
  return (
    <div className="relative">
      <div id="stadium-scroll-root" className="relative h-[500vh] w-full" />
      <div className="fixed inset-0 z-0 h-screen w-screen">
        <StadiumSceneDynamic />
      </div>
      <div className="absolute inset-0 z-10 h-[500vh] w-full">
        <StadiumOverlay />
      </div>
    </div>
  );
}
