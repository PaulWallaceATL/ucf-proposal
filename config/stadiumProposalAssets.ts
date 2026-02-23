/**
 * Centralized asset URL map for the UCF Stadium Proposal.
 * Swap these paths when moving from dev assets to production CDN URLs.
 */

export const stadiumMapImage = "/assets/stadium-map.png";
export const stadiumModelGlb = "/assets/fab_mc_mahon_stadium.glb";
export const droneVideo = "/assets/drone-footage.mp4";
export const luxuryAreaVideo = "/assets/luxury-area-video.mp4";
export const bounceHouseRender = "/assets/bounce-house-render.png";

export interface VeoClip {
  id: string;
  title: string;
  duration: string;
  status: "coming_soon" | "available";
  thumbnailUrl: string | null;
  videoUrl: string | null;
}

export const veoClips: VeoClip[] = [
  {
    id: "premium-clubs",
    title: "Premium Clubs Overview",
    duration: "0:45",
    status: "coming_soon",
    thumbnailUrl: null,
    videoUrl: null,
  },
  {
    id: "luxury-suites",
    title: "Luxury Suites Walkthrough",
    duration: "1:00",
    status: "coming_soon",
    thumbnailUrl: null,
    videoUrl: null,
  },
  {
    id: "event-spaces",
    title: "Event Spaces & Hosting",
    duration: "0:50",
    status: "coming_soon",
    thumbnailUrl: null,
    videoUrl: null,
  },
];
