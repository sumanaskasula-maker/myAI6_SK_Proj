---
brand: Bajaj
model_family: Pulsar
model_name: Pulsar 220F
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Pulsar 220F — Quantitative Specifications (Bajaj)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Pulsar 220F. Every field below is drawn directly from the Bajaj master dataset (all 1 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (1)

- Single trim (an implausible lower on-road figure also appears)

## Shared Specifications (identical across all trims above)

- **Segment:** 220cc fully-faired classic sport
- **Ex-Showroom Price (INR):** 135582
- **Price City Reference:** Delhi
- **Price Source Tier:** T1 (bajajauto.com master price listing)
- **Price Conflict Note:** CONFLICT: an on-road figure of 1,28,490 also appears on the page, which is lower than the ex-showroom price — likely a mislabeled/older figure; do not use without verifying on the live site. Ex-showroom master-listing figure 1,35,582 used as primary.
- **Colours:** Black Gold, Black Cherry Red, Black Ink Blue, Black Copper Beige [T1]
- **Displacement (cc):** 220 [T1]
- **Engine Type:** Not verified (not published by Bajaj)
- **Cooling:** Not verified
- **Fuel System:** Not verified
- **Max Power:** 20.9 PS (15.37 kW) @ 8,500 rpm [T1]
- **Max Torque:** 18.55 Nm @ 7,000 rpm [T1]
- **Transmission:** 5-speed manual [T3]
- **Clutch:** Wet multi-plate [T3]
- **Starting:** Self-start only [T3]
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** 131 km/h [T3, MotorBeam test ride review]
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** 11.31 sec [T3, MotorBeam test ride review]
- **Mileage (OEM/ARAI claimed):** Not verified (not published by Bajaj)
- **Mileage (independent sources):** 43 km/l owner-reported (one owner: 45 km/l after 15,000+ km) [T3, BikeWale]
- **Length (mm):** 2,035 mm [T3]
- **Width (mm):** 750 mm [T3]
- **Height (mm):** 1,165 mm [T3]
- **Wheelbase (mm):** 1,350 mm [T3]
- **Ground Clearance (mm):** 165 mm [T3]
- **Seat Height (mm):** 795 mm [T3]
- **Kerb Weight (kg):** 160 kg [T3]
- **Fuel Tank Capacity (L):** 15 L [T1]
- **Frame/Chassis:** Double cradle down-tube frame [T3]
- **Front Suspension:** Telescopic, 37 mm, with anti-friction bush (travel not found) [T3]
- **Rear Suspension:** Twin Hydraulic Suspension, 5-step adjustable Nitrox (travel not published by Bajaj) [T1]
- **Front Brake:** 280 mm disc [T3]
- **Rear Brake:** 230 mm disc [T3]
- **ABS Configuration:** Single-channel ABS [T1]
- **Front Tyre:** 90/90-17 [T3]
- **Rear Tyre:** 120/80-17 [T3]
- **Wheel Type:** Alloy, 17 in [T3]
- **Instrument Cluster:** Digital console w/ Bluetooth [T1]
- **Ride Modes:** Not verified
- **Connectivity Features:** Connected digital console, navigation [T1]
- **Warranty (years/km):** 5 yrs / 75,000 km
- **Warranty Note:** Applied from Pulsar N160 / Dominar 250 owner's manuals as company-wide policy — not individually confirmed for this model [T1, inferred]
- **First Service:** 500-750 km (free) [T1, applied from N160/Dominar 250 manuals]
- **Service Interval:** 10,000 km oil change / 5,000 km check [T1, applied from N160/Dominar 250 manuals]
- **Engine Oil:** Bajaj 10000-series oil (exact grade varies by model; not individually confirmed) [T1, inferred]

## Data Notes

- **Single trim (an implausible lower on-road figure also appears) — unresolved conflict:** On-road figure of 1,28,490 appears lower than ex-showroom price 1,35,582 — internally implausible, flagged not used as the primary value.
- **Single trim (an implausible lower on-road figure also appears) — data completeness:** Engine type/cooling and OEM mileage not published by Bajaj; dimensions Tier-3 sourced.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Single trim (an implausible lower on-road figure also appears):** power-to-weight ratio ≈ 96.1 W/kg (0.131 PS/kg).

## Sources

- https://www.bajajauto.com/bikes/pulsar/pulsar-220f
- Structured data consolidated from the Bajaj master dataset (`Bajaj_master_dataset.csv`).
