---
brand: Bajaj
model_family: Pulsar
model_name: Pulsar NS160
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Pulsar NS160 — Quantitative Specifications (Bajaj)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Pulsar NS160. Every field below is drawn directly from the Bajaj master dataset (all 1 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (1)

- Not verified (SC vs DC USD trim/price mapping ambiguous — see price_conflict_note)

## Shared Specifications (identical across all trims above)

- **Segment:** 160cc naked street
- **Ex-Showroom Price (INR):** 126301
- **Price City Reference:** Delhi
- **Price Source Tier:** T1 (bajajauto.com master price listing)
- **Price Conflict Note:** CONFLICT: page shows two prices, 1,20,171 and 1,26,301, without clearly attached variant names — likely SC vs DC USD trims, not confirmed. Master-listing figure 1,26,301 used as primary; both figures verified before quoting.
- **Colours:** Ebony Black, Pearl Metallic White, Cocktail Wine Red, Pewter Grey [T1]
- **Displacement (cc):** 160.3 [T1]
- **Engine Type:** Twin spark, 4-valve [T1]
- **Cooling:** Oil-cooled [T1]
- **Fuel System:** FI [T1]
- **Max Power:** 17 PS (12.5 kW) @ 9,000 rpm [T1]
- **Max Torque:** 14.6 Nm @ 7,250 rpm [T1]
- **Transmission:** 5-speed manual, 1-down-4-up [T3]
- **Clutch:** Wet multi-plate [T3]
- **Starting:** Kick and self-start [T3]
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** Not verified
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** 52.2 km/l (ARAI, per Tier-3 citation) [T3]
- **Mileage (independent sources):** 44 km/l owner-reported [T3, BikeWale]
- **Length (mm):** 2,017 mm [T3]
- **Width (mm):** 804 mm [T3]
- **Height (mm):** 1,060 mm [T3]
- **Wheelbase (mm):** 1,372 mm [T3]
- **Ground Clearance (mm):** 170-176 mm [T3]
- **Seat Height (mm):** 805 mm [T3]
- **Kerb Weight (kg):** 152 kg [T3]
- **Fuel Tank Capacity (L):** 12 L [T1]
- **Frame/Chassis:** Perimeter frame [T1]
- **Front Suspension:** USD forks (travel not published by Bajaj) [T1]
- **Rear Suspension:** Nitrox monoshock w/ canister (travel not published by Bajaj) [T1]
- **Front Brake:** Disc (size not published by Bajaj) [T1]
- **Rear Brake:** Disc (size not published by Bajaj) [T1]
- **ABS Configuration:** Dual-channel (standard) [T1]
- **Front Tyre:** 17 in wheel; exact tyre spec not found [T3]
- **Rear Tyre:** 17 in wheel; exact tyre spec not found [T3]
- **Wheel Type:** Alloy, 17 in front & rear [T3]
- **Instrument Cluster:** Bluetooth-connected digital console [T1]
- **Ride Modes:** ABS ride modes referenced (names not specified) [T1]
- **Connectivity Features:** Navigation, ABS ride modes, USB charging, all-LED lighting [T1]
- **Warranty (years/km):** 5 yrs / 75,000 km
- **Warranty Note:** Applied from Pulsar N160 / Dominar 250 owner's manuals as company-wide policy — not individually confirmed for this model [T1, inferred]
- **First Service:** 500-750 km (free) [T1, applied from N160/Dominar 250 manuals]
- **Service Interval:** 10,000 km oil change / 5,000 km check [T1, applied from N160/Dominar 250 manuals]
- **Engine Oil:** Bajaj 10000-series oil (exact grade varies by model; not individually confirmed) [T1, inferred]

## Data Notes

- **Not verified (SC vs DC USD trim/price mapping ambiguous — see price_conflict_note) — unresolved conflict:** Price ambiguity: 1,20,171 vs 1,26,301 not clearly attached to named variants (likely SC vs DC USD).
- **Not verified (SC vs DC USD trim/price mapping ambiguous — see price_conflict_note) — data completeness:** L/W/H, brake sizes and suspension travel Tier-3 sourced or not published by Bajaj; only one row used since the two price points could not be matched to confirmed trim names.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Not verified (SC vs DC USD trim/price mapping ambiguous — see price_conflict_note):** power-to-weight ratio ≈ 82.2 W/kg (0.112 PS/kg); estimated tank range ≈ 626.4 km (tank capacity × claimed mileage, petrol/liquid-fuel models only).

## Sources

- https://www.bajajauto.com/bikes/pulsar/pulsar-ns160
- Structured data consolidated from the Bajaj master dataset (`Bajaj_master_dataset.csv`).
