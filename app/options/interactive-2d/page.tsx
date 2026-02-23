import type { Metadata } from "next";
import { getOptionBySlug } from "@/config/stadiumOptions";
import OptionPageLayout from "@/components/options/OptionPageLayout";

const option = getOptionBySlug("interactive-2d")!;

export const metadata: Metadata = {
  title: `${option.title} | UCF Stadium Experience`,
  description: option.positioning,
};

/**
 * Detail page for the Interactive 2D Stadium Experience option.
 */
export default function Interactive2DPage() {
  return <OptionPageLayout option={option} />;
}
