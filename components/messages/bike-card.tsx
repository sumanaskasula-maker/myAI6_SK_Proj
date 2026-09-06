"use client";

// components/messages/bike-card.tsx
//
// Renders the output of the showBikeCard tool (app/api/chat/tools/bike-card.ts).
// 1 bike -> one wide card. 2-4 bikes -> a responsive comparison grid.
//
// Product decision: the image is shown standalone — no caption, no visible
// source link underneath, ever. `sourceUrl` on each bike is intentionally
// unused here; it exists only so the MODEL can answer an explicit "where's
// that photo from?" follow-up in its own text, not for the UI to display.

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bike } from "lucide-react";
import type { BikeCard as BikeCardData } from "@/types/bike";

function ImageOrFallback({ bike }: { bike: BikeCardData }) {
  if (bike.imageUrl) {
    return (
      // Plain <img>, not next/image: OEM photos come from a different
      // domain per brand, and next/image requires each one allow-listed in
      // next.config.ts up front. A plain tag keeps this tool working for any
      // OEM domain without a config change every time a new brand is added.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={bike.imageUrl}
        alt={`${bike.brand} ${bike.modelName}`}
        className="w-full h-40 object-cover rounded-t-xl bg-muted"
        loading="lazy"
        onError={(e) => {
          // Broken/expired OEM image URL: hide it rather than show a broken-image icon.
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    );
  }
  return (
    <div className="w-full h-40 rounded-t-xl bg-primary/10 flex items-center justify-center">
      <Bike className="size-10 text-primary/50" strokeWidth={1.5} />
    </div>
  );
}

function SingleBikeCard({ bike }: { bike: BikeCardData }) {
  return (
    <Card className="overflow-hidden py-0 gap-0 max-w-md">
      <ImageOrFallback bike={bike} />
      <CardContent className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-xs text-muted-foreground">{bike.brand}</div>
            <div className="font-semibold leading-tight">{bike.modelName}</div>
          </div>
          <Badge variant="secondary" className="shrink-0 whitespace-nowrap">
            {bike.priceRange}
          </Badge>
        </div>
        {bike.highlight && (
          <p className="text-sm text-muted-foreground">{bike.highlight}</p>
        )}
        {bike.keySpecs.length > 0 && (
          <ul className="text-sm grid grid-cols-1 gap-1 mt-1">
            {bike.keySpecs.map((spec, i) => (
              <li key={i} className="flex items-center gap-2 text-foreground/90">
                <span className="size-1 rounded-full bg-primary shrink-0" />
                {spec}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export function BikeCardGroup({ bikes }: { bikes: BikeCardData[] }) {
  if (!bikes || bikes.length === 0) return null;

  if (bikes.length === 1) {
    return <SingleBikeCard bike={bikes[0]} />;
  }

  // 2-4 bikes: comparison grid, one compact card per bike, wraps on mobile.
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-3xl">
      {bikes.map((bike, i) => (
        <SingleBikeCard key={`${bike.brand}-${bike.modelName}-${i}`} bike={bike} />
      ))}
    </div>
  );
}
