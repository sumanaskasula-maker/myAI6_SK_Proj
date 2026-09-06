// components/brand/ridewise-logo.tsx
//
// Icon + wordmark lockup, for anywhere the full brand mark (not just the bare
// icon) belongs — e.g. a taller welcome screen, the sidebar header, or the
// /terms page. Uses AI_NAME from config.ts rather than a hardcoded string,
// so renaming the assistant in config.ts still shows correctly here.

import { RideWiseIcon } from "./ridewise-icon";
import { AI_NAME } from "@/config";

export function RideWiseLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <RideWiseIcon className="size-4" />
      </span>
      <span className="text-lg font-semibold tracking-tight">{AI_NAME}</span>
    </div>
  );
}
