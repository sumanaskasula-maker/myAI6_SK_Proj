---
brand: Bajaj
model_family: Pulsar
model_name: Pulsar 125
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Pulsar 125 — Quantitative Specifications (Bajaj)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Pulsar 125. Every field below is drawn directly from the Bajaj master dataset (all 1 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (1)

- Single trim (as listed)

## Shared Specifications (identical across all trims above)

- **Segment:** 125cc classic-styled commuter
- **Ex-Showroom Price (INR):** 104318
- **Price City Reference:** Delhi
- **Price Source Tier:** T1 (bajajauto.com master price listing)
- **Price Conflict Note:** No price discrepancy noted for this model in the source.
- **Colours:** Ebony Black+Cyan Blue, Sapphire Blue+Blue Silver, Ebony Black+Magenta Red, Fury Red+Light Orange, Dark Silver+Aqua Blue [T1]
- **Displacement (cc):** 124.38 [T1]
- **Engine Type:** Not verified (not published by Bajaj)
- **Cooling:** Not verified
- **Fuel System:** Not verified
- **Max Power:** 11.8 PS (8.68 kW) @ 8,500 rpm [T1]
- **Max Torque:** 10.8 Nm @ 6,500 rpm [T1]
- **Transmission:** 5-speed manual [T3]
- **Clutch:** Wet multi-plate [T3]
- **Starting:** Kick and self-start [T3]
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** Not verified
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** ARAI range ~50-55 km/l [T3, BikeDekho]
- **Mileage (independent sources):** ~30-60 km/l range cited; ~50 km/l 'optimistic middle' [T3, BikeWale]
- **Length (mm):** 2,055 mm [T3]
- **Width (mm):** 755 mm [T3]
- **Height (mm):** 1,060 mm [T3]
- **Wheelbase (mm):** 1,320 mm [T3]
- **Ground Clearance (mm):** 184 mm [T3]
- **Seat Height (mm):** 795 mm [T3]
- **Kerb Weight (kg):** 150 kg (twin-disc variant) / 148 kg (single-disc variant) [T1, bajajauto.com] — this dataset row does not distinguish which disc configuration it represents
- **Fuel Tank Capacity (L):** 15 L [T1]
- **Frame/Chassis:** Double-cradle frame [T3]
- **Front Suspension:** Telescopic, 31 mm, 125 mm travel [T3]
- **Rear Suspension:** Monoshock, 110 mm travel [T3]
- **Front Brake:** 260 mm disc [T3]
- **Rear Brake:** 130 mm drum [T3]
- **ABS Configuration:** Not verified (not published by Bajaj)
- **Front Tyre:** 80/100-17 [T3]
- **Rear Tyre:** 100/90-17 [T3]
- **Wheel Type:** Alloy, ~17 in [T3]
- **Instrument Cluster:** TFT display [T1]
- **Ride Modes:** Not verified
- **Connectivity Features:** Bluetooth connectivity, turn-by-turn navigation, USB Type-C charging (optional), low-battery alert via app [T3]
- **Warranty (years/km):** 5 yrs / 75,000 km
- **Warranty Note:** Applied from Pulsar N160 / Dominar 250 owner's manuals as company-wide policy — not individually confirmed for this model [T1, inferred]
- **First Service:** 500-750 km (free) [T1, applied from N160/Dominar 250 manuals]
- **Service Interval:** 10,000 km oil change / 5,000 km check [T1, applied from N160/Dominar 250 manuals]
- **Engine Oil:** Bajaj 10000-series oil (exact grade varies by model; not individually confirmed) [T1, inferred]

## Data Notes

- **Single trim (as listed) — unresolved conflict:** Kerb weight conflict: 131 kg (Tier-3 spec aggregators) vs 150 kg (Bajaj's own page meta description) — never silently resolved to one figure. | kerb_weight_kg: BikeDekho (Tier 3) states 131 kg, conflicting with Bajaj's own official spec page (150 kg twin-disc / 148 kg single-disc). Tier-1 value used as primary per conflict rule; 131 kg retained here as a superseded/conflicting figure, not discarded. ZigWheels' own crowd-FAQ additionally shows unofficial user-submitted values of 142/144 kg (low confidence, not used).
- **Single trim (as listed) — data completeness:** Engine type/cooling not published by Bajaj; ABS availability not published; dimensions and brakes Tier-3 sourced.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Single trim (as listed):** power-to-weight ratio ≈ 57.9 W/kg (0.079 PS/kg); estimated tank range ≈ 750.0 km (tank capacity × claimed mileage, petrol/liquid-fuel models only).

## Sources

- https://www.bajajauto.com/bikes/pulsar/pulsar-125
- Structured data consolidated from the Bajaj master dataset (`Bajaj_master_dataset.csv`).
