// app/api/chat/tools/bike-card.ts
//
// Renders a visual bike card (or 2-4 side-by-side, for comparisons) in the
// chat UI. The model supplies the facts it already retrieved from
// vectorDatabaseSearch/webSearch (brand, model name, price, key specs) —
// this tool does not re-look-up specs. Its only real job is fetching one
// real product photo per bike from the manufacturer's OWN official domain
// via Exa, so the card shows an authentic image rather than a random scraped
// one. If no clean OEM photo is found, the card renders without an image
// rather than guessing.
//
// IMPORTANT product decision (do not change without checking with the team):
// the source URL for the image is returned to the model but must NOT be
// auto-rendered under the image or added to the Sources box — the UI shows
// the photo standalone. It exists only so the model can answer a direct
// "where's that photo from?" follow-up honestly. See bikeCardSchema in
// types/bike.ts for the field-level contract.

import { tool } from "ai";
import { z } from "zod";
import { getExa, domainOf } from "./web-search";
import { OEM_IMAGE_DOMAINS, OEM_IMAGE_SEARCH_TYPE } from "@/config";
import { bikeCardSchema, type BikeCard } from "@/types/bike";

const bikeInputSchema = bikeCardSchema.omit({ imageUrl: true, sourceUrl: true });

/**
 * Best-effort: search Exa restricted to official OEM domains for a product
 * photo of this exact bike. Returns undefined on any failure or empty
 * result — the caller renders the card without an image rather than risk
 * showing an unrelated photo.
 */
async function findOemImage(brand: string, modelName: string): Promise<{ url: string; source: string } | undefined> {
  try {
    const query = `${brand} ${modelName} official photo India`;
    const response = await getExa().search(query, {
      type: OEM_IMAGE_SEARCH_TYPE,
      numResults: 3,
      includeDomains: OEM_IMAGE_DOMAINS,
    } as any); // cast: exa-js types lag behind API features (same pattern as web-search.ts)

    const results = (response as any)?.results || [];
    for (const r of results) {
      // Exa's search results can carry a representative page image in
      // `image` (naming has varied across API versions — check the common
      // spellings defensively rather than assuming one).
      const img = r?.image || r?.imageUrl || r?.image_url;
      if (typeof img === "string" && img.startsWith("http")) {
        return { url: img, source: r.url || "" };
      }
    }
    return undefined;
  } catch (error) {
    console.error("bike-card: OEM image search failed:", error);
    return undefined;
  }
}

export function createShowBikeCard() {
  return tool({
    description:
      "Render one visual bike card, or 2-4 side-by-side for a comparison, in the chat UI. " +
      "Call this AFTER you have already found the facts via vectorDatabaseSearch (and webSearch if used) — " +
      "pass the brand, model name, price, and up to 6 key specs exactly as you already know them. " +
      "Use it whenever you recommend a specific model worth showing visually, or whenever the user asks to " +
      "compare 2-4 named models. Do NOT call this for a generic/vague question with no specific model(s) yet. " +
      "Do NOT fabricate a price or spec just to fill the card — use 'Not verified' if that is genuinely what the KB says. " +
      "This tool fetches a real product photo from the manufacturer's own official site; it does not need one from you.",
    inputSchema: z.object({
      bikes: z.array(bikeInputSchema).min(1).max(4).describe(
        "1 bike for a single recommendation, 2-4 for a side-by-side comparison."
      ),
    }),
    execute: async ({ bikes }) => {
      const enriched: BikeCard[] = await Promise.all(
        bikes.map(async (b) => {
          const image = await findOemImage(b.brand, b.modelName);
          return {
            ...b,
            ...(image ? { imageUrl: image.url, sourceUrl: image.source || undefined } : {}),
          };
        })
      );
      return { bikes: enriched };
    },
  });
}
