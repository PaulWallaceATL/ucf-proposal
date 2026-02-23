/**
 * Centralized data for the three UCF Stadium experience options.
 * All copy lives here so future edits are easy and pages stay DRY.
 */

import {
  stadiumMapImage,
  stadiumModelGlb,
  droneVideo,
} from "./stadiumProposalAssets";

export type MediaType = "image" | "video" | "3d";

export interface HowItWorksStep {
  step: number;
  label: string;
}

export interface StadiumOption {
  slug: string;
  route: string;
  title: string;
  price: string;
  summary: string;
  positioning: string;
  bullets: string[];
  mediaType: MediaType;
  mediaSrc: string;
  posterSrc: string | null;
  howItWorksSteps: HowItWorksStep[];
  requirements: string[];
  deliverables: string[];
  includedPages: string[];
}

const INCLUDED_PAGES = [
  "Luxury Suites",
  "Club Level",
  "VIP Hospitality",
  "Event Spaces",
  "Premium Seating / Sideline",
];

const SHARED_DELIVERABLES = [
  "Integrated within UCFKnights.com (navigation + sitemap alignment + CMS-ready)",
  "One premium stadium landing experience",
  "Up to five (5) luxury/suite/event detail pages",
  "Responsive (mobile-first) and performance optimized",
  'Lead capture / "Speak to a Representative" CTA integration',
];

export const stadiumOptions: StadiumOption[] = [
  {
    slug: "interactive-2d",
    route: "/options/interactive-2d",
    title: "Interactive 2D Stadium Experience",
    price: "$28,000",
    summary:
      "A fast, high-end interactive map with clickable pins that routes fans and buyers into premium areas.",
    positioning:
      "A premium interactive map experience with pin-based navigation that routes users into luxury seating, suites, and event spaces\u2014fully integrated within UCFKnights.com.",
    bullets: [
      "Interactive 2D map with pin navigation",
      "Up to 5 luxury/suite/event pages included",
      "Built inside UCFKnights.com (CMS + sitemap integration)",
    ],
    mediaType: "image",
    mediaSrc: stadiumMapImage,
    posterSrc: null,
    howItWorksSteps: [
      { step: 1, label: "UCF provides a 2D stadium render/map" },
      {
        step: 2,
        label:
          "We design a premium landing experience with interactive pins",
      },
      {
        step: 3,
        label:
          "Pins route to up to 5 luxury/suite/event detail pages (included)",
      },
      { step: 4, label: "Optional: embed Matterport tours per space" },
      {
        step: 5,
        label:
          "Publish within UCFKnights.com with CMS-ready structure",
      },
    ],
    requirements: [
      "2D architectural render or stadium map provided by UCF",
      "Brand guidelines confirmation (aligned with existing UCFKnights.com styles)",
    ],
    deliverables: SHARED_DELIVERABLES,
    includedPages: INCLUDED_PAGES,
  },
  {
    slug: "immersive-3d",
    route: "/options/immersive-3d",
    title: "Immersive 3D Scroll Experience",
    price: "$55,000",
    summary:
      "A cinematic 3D model-driven landing page that moves through the stadium as you scroll.",
    positioning:
      "A cinematic 3D model-driven landing page that moves through the stadium as users scroll, highlighting premium zones and routing into detail pages\u2014built within UCFKnights.com.",
    bullets: [
      "3D model camera path + interactive hotspots",
      "Up to 5 luxury/suite/event pages included",
      "Built inside UCFKnights.com (CMS + sitemap integration)",
    ],
    mediaType: "3d",
    mediaSrc: stadiumModelGlb,
    posterSrc: "/assets/bounce-house-render.png",
    howItWorksSteps: [
      { step: 1, label: "UCF provides CAD / existing 3D model" },
      {
        step: 2,
        label: "We optimize and stage the model for web performance",
      },
      {
        step: 3,
        label: "We choreograph camera movement and hotspots",
      },
      {
        step: 4,
        label: "Hotspots route to up to 5 detail pages (included)",
      },
      {
        step: 5,
        label:
          "Publish within UCFKnights.com with performance optimization",
      },
    ],
    requirements: [
      "CAD file or existing 3D model (or GLB) provided by UCF",
      "Access to existing stadium render references for material accuracy",
    ],
    deliverables: SHARED_DELIVERABLES,
    includedPages: INCLUDED_PAGES,
  },
  {
    slug: "drone-scroll",
    route: "/options/drone-scroll",
    title: "Cinematic Drone Scroll Experience",
    price: "$58,000 (base)",
    summary:
      "A real-world, drone-driven scroll experience with premium navigation to VIP spaces.",
    positioning:
      "A real-world drone-driven scroll experience that showcases the stadium with cinematic motion and premium navigation\u2014paired with up to 5 detail pages\u2014built within UCFKnights.com.",
    bullets: [
      "Drone production + scroll-tied video editing",
      "Raw drone footage delivered to UCF",
      "Up to 5 luxury/suite/event pages included",
    ],
    mediaType: "video",
    mediaSrc: droneVideo,
    posterSrc: "/assets/bounce-house-render.png",
    howItWorksSteps: [
      {
        step: 1,
        label: "Coordinate an on-site drone production day",
      },
      {
        step: 2,
        label: "Capture cinematic sequences across premium zones",
      },
      {
        step: 3,
        label: "Edit a continuous scroll-tied video sequence",
      },
      {
        step: 4,
        label:
          "Overlay navigation to up to 5 detail pages (included)",
      },
      {
        step: 5,
        label:
          "Deliver raw footage files to UCF + publish within UCFKnights.com",
      },
    ],
    requirements: [
      "On-site filming access + scheduling coordination",
      "Weather contingency planning",
      "Stadium operations alignment for filming windows",
    ],
    deliverables: [
      ...SHARED_DELIVERABLES,
      "Raw drone footage delivered to UCF",
    ],
    includedPages: INCLUDED_PAGES,
  },
];

export function getOptionBySlug(slug: string): StadiumOption | undefined {
  return stadiumOptions.find((o) => o.slug === slug);
}

export const CONTACT_EMAIL = "hello@antimatter.io";
