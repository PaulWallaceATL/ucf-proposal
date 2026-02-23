import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "UCF Stadium Digital Experience — Antimatter × UCF";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generates the OpenGraph share image for all pages.
 * Black background with UCF gold text and branding.
 */
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#FFC904",
              letterSpacing: "0.05em",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            UCF KNIGHTS
          </div>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.3,
              maxWidth: "900px",
            }}
          >
            Stadium Digital Experience
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.6)",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            Three premium web experience options to showcase luxury seating,
            suites, and event spaces — built inside UCFKnights.com.
          </div>
          <div
            style={{
              marginTop: "16px",
              fontSize: "16px",
              color: "rgba(255,201,4,0.7)",
              letterSpacing: "0.1em",
            }}
          >
            ANTIMATTER × UCF
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
