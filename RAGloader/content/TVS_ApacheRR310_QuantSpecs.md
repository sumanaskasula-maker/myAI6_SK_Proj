---
brand: TVS
model_family: Apache RR
model_name: Apache RR 310
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Apache RR 310 — Quantitative Specifications (TVS)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Apache RR 310. Every field below is drawn directly from the TVS master dataset (all 2 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (2)

- Base (Red)
- Top variant

## Shared Specifications (identical across all trims above)

- **Segment:** Supersport / performance — Apache flagship faired sportbike (310cc)
- **Price City Reference:** Not verified
- **Price Source Tier:** T3, 91Wheels
- **Price Conflict Note:** Not verified
- **Colours:** Red (base variant) and an Anniversary Edition livery confirmed; TVS's own full colour palette not separately re-confirmed [T3, 91Wheels]
- **Displacement (cc):** 312.2
- **Engine Type:** Reverse-inclined DOHC, liquid-cooled with oil-coolant technology
- **Cooling:** Liquid-cooled with oil-coolant technology
- **Fuel System:** Electronic fuel injection with throttle-by-wire
- **Max Power:** 38 PS @ 9800 rpm
- **Max Torque:** 29 Nm @ 7,900 rpm [T3, 91Wheels; consistent with TVS's own 38 PS @ 9,800 rpm power figure]
- **Transmission:** 6-speed with bi-directional quickshifter
- **Clutch:** Race-tuned slipper clutch
- **Starting:** Electric start
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** 160 km/h [T3, 91Wheels]
- **0-60 km/h Acceleration:** 2.82 seconds (as given in source under the '0-60 km/h (claimed)' column -- unusually low for this class; carried forward as-is, not corrected or verified)
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** Not verified
- **Mileage (independent sources):** Not verified
- **Length (mm):** Not verified
- **Width (mm):** Not verified
- **Height (mm):** Not verified
- **Wheelbase (mm):** 1365 [T3, BikeWale, cross-checked with 91Wheels]
- **Ground Clearance (mm):** 180 [T3, BikeWale, cross-checked with 91Wheels]
- **Seat Height (mm):** 810 [T3, BikeWale, cross-checked with 91Wheels]
- **Kerb Weight (kg):** 174 [T3, BikeWale, cross-checked with 91Wheels]
- **Fuel Tank Capacity (L):** 11 [T3, BikeWale, cross-checked with 91Wheels]
- **Frame/Chassis:** Lightweight trellis frame (race-derived design)
- **Front Suspension:** Inverted (upside-down) cartridge telescopic fork [T3, BikeWale]
- **Rear Suspension:** KYB race-tuned monoshock (monotube floating piston)
- **Front Brake:** Disc, dual-channel/switchable ABS (exact disc diameter not published)
- **Rear Brake:** Disc, dual-channel ABS (exact disc diameter not published)
- **ABS Configuration:** Dual-channel ABS with rear-wheel lift-off protection
- **Front Tyre:** 17-inch, tubeless, alloy wheel [T3, BikeWale/91Wheels]
- **Rear Tyre:** 17-inch, tubeless, alloy wheel [T3, BikeWale/91Wheels]
- **Wheel Type:** Alloy, 17" front and rear [T3, BikeWale]
- **Instrument Cluster:** SmartXonnect-enabled Multi-Information Race Computer
- **Ride Modes:** 4: Urban, Rain, Sport, Track
- **Connectivity Features:** TVS SmartXonnect with race analytics
- **Warranty (years/km):** 5 years or 50,000 km
- **Warranty Note:** Called out specifically by TVS for the RR 310 on its official Warranty Policy page -- differs from the general motorcycle policy of 5 yrs/60,000 km; the 5-year cover applies to BSVI variants only
- **First Service:** Not verified
- **Service Interval:** Not confirmed by TVS or by the secondary sources checked
- **Engine Oil:** Not verified

## Per-Trim Specifications (differ by trim)

| Trim | Ex-Showroom Price (INR) |
| --- | --- |
| Base (Red) | ₹2,62,000 (approx.) [T3, 91Wheels] |
| Top variant | ₹3,15,000 (approx.) [T3, 91Wheels] |

## Data Notes

- **Base (Red) — unresolved conflict:** Pricing not reconciled: TVS's own page metadata shows two inconsistent figures -- a 'Premium' variant at ₹2,59,990 vs. the main listed starting price of ₹2,62,240 onwards. 91Wheels' 'Base (Red)' figure of ~₹2,62,000 corroborates the ₹2,62,240 'onwards' figure but conflicts with the 'Premium' figure. Neither is reconciled in the source content; re-verify directly with TVS or a dealer.
- **Base (Red) — data completeness:** Length/width/height, bore/stroke, ARAI mileage, engine oil, service schedule not published; the 2.82-second 0-60 figure looks anomalous and should be flagged for verification
- **Top variant — unresolved conflict:** Pricing not reconciled: TVS's own page metadata shows two inconsistent figures -- a 'Premium' variant at ₹2,59,990 vs. the main listed starting price of ₹2,62,240 onwards. 91Wheels' 'Base (Red)' figure of ~₹2,62,000 corroborates the ₹2,62,240 'onwards' figure but conflicts with the 'Premium' figure. Neither is reconciled in the source content; re-verify directly with TVS or a dealer.
- **Top variant — data completeness:** Length/width/height, bore/stroke, ARAI mileage, engine oil, service schedule not published; the 2.82-second 0-60 figure looks anomalous and should be flagged for verification

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Base (Red):** power-to-weight ratio ≈ 160.6 W/kg (0.218 PS/kg).
- **Top variant:** power-to-weight ratio ≈ 160.6 W/kg (0.218 PS/kg).

## Sources

- https://www.tvsmotor.com/tvs-apache/rr-310
- Structured data consolidated from the TVS master dataset (`TVS_master_dataset.csv`).
