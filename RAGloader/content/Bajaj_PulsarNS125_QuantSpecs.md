---
brand: Bajaj
model_family: Pulsar
model_name: Pulsar NS125
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Pulsar NS125 — Quantitative Specifications (Bajaj)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Pulsar NS125. Every field below is drawn directly from the Bajaj master dataset (all 2 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (2)

- LED BT
- LED BT ABS

## Shared Specifications (identical across all trims above)

- **Segment:** 125cc naked street
- **Price City Reference:** Delhi
- **Price Source Tier:** T1 (bajajauto.com master price listing)
- **Displacement (cc):** 124.45 [T1]
- **Engine Type:** 4-stroke, SOHC, 4-valve [T1]
- **Cooling:** Air-cooled [T1]
- **Fuel System:** Not verified
- **Max Power:** 12 PS (8.83 kW) @ 8,500 rpm [T1]
- **Max Torque:** 11 Nm @ 7,000 rpm [T1]
- **Transmission:** 5-speed manual [T3]
- **Clutch:** Slipper (91Wheels) / wet multi-plate (BikeWale) — sources disagree [T3]
- **Starting:** Kick and self-start [T3]
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** 110-112 km/h across 3 timed runs [T3, IndianAutosBlog]
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** ~34 sec total (0-80 in ~14s + ~20s to 100) [T3, IndianAutosBlog]
- **Mileage (OEM/ARAI claimed):** 46.9 km/l (ARAI, per Tier-3 citation) [T3]
- **Mileage (independent sources):** Not verified (91Wheels flags 'insufficient data' — no reliable figure)
- **Length (mm):** 2,018 mm [T3]
- **Width (mm):** 810 mm [T3]
- **Height (mm):** 1,078 mm [T3]
- **Wheelbase (mm):** 1,353-1,370 mm (sources vary) [T3]
- **Ground Clearance (mm):** 178-179 mm [T3]
- **Seat Height (mm):** 805 mm [T3]
- **Kerb Weight (kg):** 144-146 kg [T3]
- **Fuel Tank Capacity (L):** 12 L [T1]
- **Frame/Chassis:** Perimeter frame [T1]
- **Front Suspension:** Telescopic (travel not found) [T3]
- **Rear Suspension:** Monoshock (type/travel not published by Bajaj) [T1]
- **Front Brake:** Disc (size not published by Bajaj) [T1]
- **Rear Brake:** Drum (size not found) [T3]
- **Front Tyre:** 17 in wheel; exact tyre spec not found [T3]
- **Rear Tyre:** 17 in wheel; exact tyre spec not found [T3]
- **Wheel Type:** Alloy, 17 in front & rear [T3]
- **Instrument Cluster:** Bluetooth-enabled digital console [T1]
- **Connectivity Features:** Navigation & smart connectivity [T1]
- **Warranty (years/km):** 5 yrs / 75,000 km
- **Warranty Note:** Applied from Pulsar N160 / Dominar 250 owner's manuals as company-wide policy — not individually confirmed for this model [T1, inferred]
- **First Service:** 500-750 km (free) [T1, applied from N160/Dominar 250 manuals]
- **Service Interval:** 10,000 km oil change / 5,000 km check [T1, applied from N160/Dominar 250 manuals]
- **Engine Oil:** Bajaj 10000-series oil (exact grade varies by model; not individually confirmed) [T1, inferred]

## Per-Trim Specifications (differ by trim)

| Trim | Ex-Showroom Price (INR) | Price Conflict Note | Colours | ABS Configuration | Ride Modes |
| --- | --- | --- | --- | --- | --- |
| LED BT | 92182 | One of 2 named trims: LED BT 92,182 / LED BT ABS 99,622 (ex-showroom Delhi). No discrepancy vs detail page found. | Fiery Orange, Burnt Red, Beach Blue, Pewter Grey [T1] | No ABS on this trim (non-ABS base variant) [T1] | Not applicable (ride modes are ABS-variant only, per Bajaj) [T1] |
| LED BT ABS | 99622 | One of 2 named trims (see LED BT row for full set). | Black, Pearl White, Blue, Orange, Red [T1] | Single-channel ABS with 3 ride modes [T1] | 3 ride modes (names not specified in source) [T1] |

## Data Notes

- **LED BT — unresolved conflict:** Clutch type disagreement: slipper (91Wheels) vs wet multi-plate (BikeWale).
- **LED BT — data completeness:** L/W/H, brake sizes, suspension travel and tyre specs Tier-3 sourced or not published by Bajaj.
- **LED BT ABS — unresolved conflict:** Clutch type disagreement: slipper (91Wheels) vs wet multi-plate (BikeWale).
- **LED BT ABS — data completeness:** L/W/H, brake sizes, suspension travel and tyre specs Tier-3 sourced or not published by Bajaj.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **LED BT:** power-to-weight ratio ≈ 61.3 W/kg (0.083 PS/kg); estimated tank range ≈ 562.8 km (tank capacity × claimed mileage, petrol/liquid-fuel models only).
- **LED BT ABS:** power-to-weight ratio ≈ 61.3 W/kg (0.083 PS/kg); estimated tank range ≈ 562.8 km (tank capacity × claimed mileage, petrol/liquid-fuel models only).

## Sources

- https://www.bajajauto.com/bikes/pulsar/pulsar-ns125
- Structured data consolidated from the Bajaj master dataset (`Bajaj_master_dataset.csv`).
