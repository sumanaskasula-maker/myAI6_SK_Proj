---
brand: Bajaj
model_family: Pulsar
model_name: Pulsar 150
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Pulsar 150 — Quantitative Specifications (Bajaj)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Pulsar 150. Every field below is drawn directly from the Bajaj master dataset (all 1 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (1)

- Not verified (SD/TD trim-price mapping ambiguous — see price_conflict_note)

## Shared Specifications (identical across all trims above)

- **Segment:** 150cc classic-styled commuter-sport
- **Ex-Showroom Price (INR):** 111197
- **Price City Reference:** Delhi
- **Price Source Tier:** T1 (bajajauto.com master price listing)
- **Price Conflict Note:** CONFLICT: 2 variants referenced — SD 1,11,669 / TD 1,15,481 — but the master listing shows a base price of 1,11,197 that matches neither named trim exactly; verify exact trim before quoting. Master-listing figure 1,11,197 used as primary.
- **Colours:** Black Gold, Ebony Black Cherry Red, Ebony Black Ink Blue, Ebony Black Dark Grey [T1]
- **Displacement (cc):** 149.5 [T1]
- **Engine Type:** 4-stroke, 2-valve, twin spark [T1]
- **Cooling:** Not verified (not published by Bajaj)
- **Fuel System:** FI [T1]
- **Max Power:** 14 PS (10.3 kW) @ 8,500 rpm [T1]
- **Max Torque:** 13.25 Nm @ 6,500 rpm [T1]
- **Transmission:** 5-speed, 1-down-5-up [T3]
- **Clutch:** Wet multi-plate [T3]
- **Starting:** Kick and self-start [T3]
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** Not verified
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** 47.5 km/l (ARAI) [T3, BikeDekho]
- **Mileage (independent sources):** 45-52 km/l city, 50-65 km/l highway (owner range 33-60 km/l) [T3, BikeWale]
- **Length (mm):** 2,055 mm [T3]
- **Width (mm):** 765 mm [T3]
- **Height (mm):** 1,060 mm [T3]
- **Wheelbase (mm):** 1,320 mm [T1]
- **Ground Clearance (mm):** 165 mm [T3]
- **Seat Height (mm):** 785 mm [T3]
- **Kerb Weight (kg):** 148-150 kg [T3] (matches page meta description of 150 kg)
- **Fuel Tank Capacity (L):** 15 L [T1]
- **Frame/Chassis:** Double cradle frame [T3]
- **Front Suspension:** Telescopic, 33 mm, 125 mm travel [T3]
- **Rear Suspension:** Twin Hydraulic / adjustable Nitrox rear suspension, ~110 mm travel [T3]
- **Front Brake:** 260 mm disc, 2-piston caliper [T3]
- **Rear Brake:** 130 mm drum [T3] (CONFLICT: conflicts with 'dual disc' framing on Bajaj's own official page — likely variant-dependent)
- **ABS Configuration:** Single-channel ABS on ABS-equipped variant [T3]
- **Front Tyre:** 80/100-17 [T3]
- **Rear Tyre:** 100/90-17 [T3]
- **Wheel Type:** Alloy, 17 in [T3]
- **Instrument Cluster:** Digital console w/ Bluetooth (select variant); analogue on base SD [T1]
- **Ride Modes:** Not verified
- **Connectivity Features:** USB charging, all-LED lighting [T1]
- **Warranty (years/km):** 5 yrs / 75,000 km
- **Warranty Note:** Applied from Pulsar N160 / Dominar 250 owner's manuals as company-wide policy — not individually confirmed for this model [T1, inferred]
- **First Service:** 500-750 km (free) [T1, applied from N160/Dominar 250 manuals]
- **Service Interval:** 10,000 km oil change / 5,000 km check [T1, applied from N160/Dominar 250 manuals]
- **Engine Oil:** Bajaj 10000-series oil (exact grade varies by model; not individually confirmed) [T1, inferred]

## Data Notes

- **Not verified (SD/TD trim-price mapping ambiguous — see price_conflict_note) — unresolved conflict:** Price ambiguity across SD (1,11,669) / TD (1,15,481) / master listing (1,11,197). Rear brake conflict: 130 mm drum (Tier-3) vs 'dual disc' framing on Bajaj's own official page — likely variant-dependent, not resolved to one figure.
- **Not verified (SD/TD trim-price mapping ambiguous — see price_conflict_note) — data completeness:** Cooling type not published by Bajaj; single row used since SD/TD prices don't cleanly match the master listing.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Not verified (SD/TD trim-price mapping ambiguous — see price_conflict_note):** power-to-weight ratio ≈ 69.6 W/kg (0.095 PS/kg); estimated tank range ≈ 712.5 km (tank capacity × claimed mileage, petrol/liquid-fuel models only).

## Sources

- https://www.bajajauto.com/bikes/pulsar/pulsar-150
- Structured data consolidated from the Bajaj master dataset (`Bajaj_master_dataset.csv`).
