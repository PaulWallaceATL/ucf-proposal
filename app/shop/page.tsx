import type { Metadata } from "next";
import ProposalPageLayout from "@/components/proposal/ProposalPageLayout";
import {
  ShopHeroSample,
  CategoryPillsSample,
  ProductCardSample,
} from "@/components/shop/ShopSamples";

export const metadata: Metadata = {
  title: "Shop | UCF Athletics Proposal",
  description:
    "Shop redesign — Official store, Men, Women, Kids, Photos, Auctions — Antimatter proposal for UCF Athletics.",
};

const ENHANCEMENTS = [
  {
    id: "hero",
    title: "Shop Hero",
    component: <ShopHeroSample />,
    rationale:
      "The official online store (Nike-presented) deserves a clear hero and primary CTA so fans know where to buy gear without hunting through the main nav.",
    proRef: "React Bits Pro Hero",
  },
  {
    id: "categories",
    title: "Category Pills",
    component: <CategoryPillsSample />,
    rationale:
      "Men, Women, Kids, Photos, and Auctions as filterable pills or quick links keep the shop navigable and scalable as inventory grows.",
    proRef: "React Bits Pro Tabs / Pills",
  },
  {
    id: "product",
    title: "Product Card",
    component: <ProductCardSample />,
    rationale:
      "Consistent product cards with image, category, title, and price in UCF styling make the shop feel on-brand and easy to scan.",
    proRef: "React Bits Pro Card / Commerce",
  },
];

export default function ShopPage() {
  return (
    <ProposalPageLayout
      title="Shop Redesign"
      description={
        <>
          One storefront for official gear: Men, Women, Kids, Photos, and
          Auctions — with a clear hero and product experience that matches UCF
          branding.
        </>
      }
      sourceUrl="https://ucfknights.com"
      sourceLabel="Current Shop on ucfknights.com"
      enhancements={ENHANCEMENTS}
      closingTitle="One shop. Your gear."
      closingCtaLabel="See the full proposal"
    />
  );
}
