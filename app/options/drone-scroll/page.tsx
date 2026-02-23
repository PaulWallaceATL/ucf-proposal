import type { Metadata } from "next";
import { getOptionBySlug } from "@/config/stadiumOptions";
import OptionPageLayout from "@/components/options/OptionPageLayout";

const option = getOptionBySlug("drone-scroll")!;

export const metadata: Metadata = {
  title: `${option.title} | UCF Stadium Experience`,
  description: option.positioning,
};

/**
 * Detail page for the Cinematic Drone Scroll Experience option.
 */
export default function DroneScrollPage() {
  return <OptionPageLayout option={option} />;
}
