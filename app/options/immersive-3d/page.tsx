import type { Metadata } from "next";
import { getOptionBySlug } from "@/config/stadiumOptions";
import OptionPageLayout from "@/components/options/OptionPageLayout";

const option = getOptionBySlug("immersive-3d")!;

export const metadata: Metadata = {
  title: `${option.title} | UCF Stadium Experience`,
  description: option.positioning,
};

/**
 * Detail page for the Immersive 3D Scroll Experience option.
 */
export default function Immersive3DPage() {
  return <OptionPageLayout option={option} />;
}
