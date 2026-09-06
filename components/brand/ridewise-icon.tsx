// components/brand/ridewise-icon.tsx
//
// Sports-bike-brand mark: a wheel (with spokes + hub) trailed by three speed
// streaks — signals "wheels + speed" cleanly at any size, including as a
// favicon. Replaces the generic lucide `Bike` icon used today (which is
// actually a bicycle, not a motorcycle — a mismatch for a two-wheeler
// advisor). Drawn as a stroke icon in the same style/API as lucide-react
// (currentColor, sized via className) so it drops in anywhere
// `<Bike className="size-4" />` is used — chat-header.tsx,
// assistant-message.tsx's avatar bubble, and page.tsx's empty-state icon.

import { type SVGProps } from "react";

export function RideWiseIcon({
  strokeWidth = 1.6,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Wheel */}
      <circle cx="10.5" cy="13" r="6" />
      <circle cx="10.5" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <line x1="10.5" y1="13" x2="10.5" y2="7.3" />
      <line x1="10.5" y1="13" x2="15.4" y2="15.8" />
      <line x1="10.5" y1="13" x2="5.6" y2="15.8" />
      {/* Speed streaks */}
      <g strokeLinecap="round">
        <line x1="16.5" y1="6.7" x2="20.5" y2="4.5" />
        <line x1="17.6" y1="9.2" x2="21.6" y2="7.2" />
        <line x1="18.3" y1="11.8" x2="22.3" y2="10.3" />
      </g>
    </svg>
  );
}
