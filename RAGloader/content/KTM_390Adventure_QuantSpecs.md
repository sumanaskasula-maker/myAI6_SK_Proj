---
brand: KTM
model_family: Adventure
model_name: 390 Adventure
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# 390 Adventure — Quantitative Specifications (KTM)

This document is the structured, numeric-spec companion to the qualitative narrative document for the 390 Adventure. Every field below is drawn directly from the KTM master dataset (all 1 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (1)

- Single trim (as listed)

## Shared Specifications (identical across all trims above)

- **Segment:** 390cc adventure-touring (standard/base trim)
- **Ex-Showroom Price (INR):** Not verified
- **Price City Reference:** Not verified
- **Price Source Tier:** Not applicable (ex-showroom price not published in source brochures)
- **Price Conflict Note:** Two source brochures give materially different engine and geometry figures for the 'KTM 390 Adventure' (see displacement_cc, max_power, max_torque, ground_clearance_mm, seat_height_mm, kerb_weight_kg, wheel_type). Most likely a 2024-vs-2025 model-year update, but brochures are not date-stamped. Do not silently merge — verify current model-year spec directly with KTM India.
- **Colours:** Ceramic White
- **Displacement (cc):** 349.32 [comparison-table brochure] / ~399 LC4c-class [2025 'All-New Platform' brochure — CONFLICT, see note]
- **Engine Type:** 4-stroke, single cylinder, DOHC, liquid cooled
- **Cooling:** Liquid cooled
- **Fuel System:** Electronic Fuel Injection
- **Max Power:** 41.5 PS @ 8600 rpm [comparison-table brochure] / 46 PS @ 8500 rpm [2025 brochure — CONFLICT]
- **Max Torque:** 33.5 Nm @ 7000 rpm [comparison-table brochure] / 39 Nm @ 6500 rpm [2025 brochure — CONFLICT]
- **Transmission:** 6-speed (per range spec)
- **Clutch:** Not verified
- **Starting:** Electric start
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** Not verified
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** Not verified
- **Mileage (independent sources):** Not verified
- **Length (mm):** Not verified
- **Width (mm):** Not verified
- **Height (mm):** Not verified
- **Wheelbase (mm):** Not verified
- **Ground Clearance (mm):** 228 [comparison-table brochure] / 237 [2025 brochure]
- **Seat Height (mm):** 825 [comparison-table brochure] / 830 [2025 brochure]
- **Kerb Weight (kg):** 181 [comparison-table brochure] / 182 [2025 brochure]
- **Fuel Tank Capacity (L):** 14.5
- **Frame/Chassis:** Split trellis frame, bolt-on sub-frame [T1, KTM India brochure]
- **Front Suspension:** WP APEX USD forks, 43mm, 200mm travel (30-click adjustability per 2025 brochure)
- **Rear Suspension:** WP APEX monoshock, 205mm travel, adjustable preload 10 steps (20-click rebound per 2025 brochure)
- **Front Brake:** 320 mm disc, floating caliper
- **Rear Brake:** 240 mm disc, floating caliper
- **ABS Configuration:** Not verified
- **Front Tyre:** Not verified
- **Rear Tyre:** Not verified
- **Wheel Type:** 19"/17" tubeless casted wheel [comparison-table brochure] / 21"/17" tubeless spoke [2025 brochure — CONFLICT]
- **Instrument Cluster:** 5" TFT with KTM Connect
- **Ride Modes:** 3 Ride Modes
- **Connectivity Features:** Bluetooth connectivity with turn-by-turn navigation, calls, music (KTM Connect)
- **Warranty (years/km):** Not verified
- **Warranty Note:** KTM standard new-vehicle warranty terms not published in source brochures; KTM Assure is a separate paid AMC program — see KTM_AssureAMC.md
- **First Service:** Not verified
- **Service Interval:** Not verified
- **Engine Oil:** Not verified

## Data Notes

- **Single trim (as listed) — unresolved conflict:** Engine output (41.5PS/33.5Nm vs 46PS/39Nm), ground clearance (228mm vs 237mm), seat height (825mm vs 830mm), kerb weight (181kg vs 182kg), and wheel type (cast alloy vs spoked) all differ between two source brochures both labeled 'KTM 390 Adventure' — see price_conflict_note.
- **Single trim (as listed) — data completeness:** Length/width/height, tyre section sizes, ARAI mileage, top speed, and acceleration not published in source brochures. Model-year conflict unresolved — see unresolved_conflicts.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Single trim (as listed):** power-to-weight ratio ≈ 168.6 W/kg (0.229 PS/kg).

## Sources

- Not verified (per-model page not confirmed; brand site: https://www.ktmindia.com)
- Structured data consolidated from the KTM master dataset (`KTM_master_dataset.csv`).
