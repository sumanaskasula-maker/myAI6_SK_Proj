// types/bike.ts
//
// Structured shape for the visual "bike card" the showBikeCard tool returns.
// Mirrors the convention in types/data.ts (zod schema + inferred TS type).
// Rendered by components/messages/bike-card.tsx; the tool that produces this
// lives at app/api/chat/tools/bike-card.ts.

import { z } from "zod";

export const bikeCardSchema = z.object({
  brand: z.string(),
  modelName: z.string(),
  // Free-form price string as the model knows it, e.g. "₹1.15 - 1.20 Lakh
  // (ex-showroom, Delhi)" or "Not verified" — never fabricated by the tool,
  // passed through exactly as the model supplies it.
  priceRange: z.string(),
  // Up to ~6 short spec bullets, e.g. "124.6cc, air-cooled", "56 kmpl (ARAI)".
  keySpecs: z.array(z.string()).max(6),
  // One-line positioning/use-case sentence, optional.
  highlight: z.string().optional(),
  // Populated by the tool's execute() from an Exa image search restricted to
  // official OEM domains — never set by the model itself.
  imageUrl: z.string().optional(),
  // The OEM page the image came from. Intentionally NOT rendered by default
  // (per product decision: images render standalone, no visible link/caption).
  // Surfaced to the model only so it can answer an explicit "where's that
  // photo from?" / "link me the source" follow-up honestly.
  sourceUrl: z.string().optional(),
});
export type BikeCard = z.infer<typeof bikeCardSchema>;

export const showBikeCardOutputSchema = z.object({
  bikes: z.array(bikeCardSchema).min(1).max(4),
});
export type ShowBikeCardOutput = z.infer<typeof showBikeCardOutputSchema>;
