---
brand: Honda
model_family: Hornet 2.0
model_name: Hornet 2.0
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Hornet 2.0 — Quantitative Specifications (Honda)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Hornet 2.0. Every field below is drawn directly from the Honda master dataset (all 2 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (2)

- Repsol Edition
- Standard

## Shared Specifications (identical across all trims above)

- **Segment:** 184cc naked streetfighter
- **Ex-Showroom Price (INR):** Not verified
- **Price City Reference:** Not verified
- **Price Source Tier:** Not applicable (ex-showroom price not published in source brochures)
- **Price Conflict Note:** None
- **Displacement (cc):** 184.40
- **Engine Type:** 4-Stroke, SI Engine
- **Cooling:** Air cooled
- **Fuel System:** PGM-FI
- **Transmission:** 5-speed
- **Clutch:** Assist/Slipper clutch, multiplate wet
- **Starting:** Self start
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** Not verified
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** Not verified
- **Mileage (independent sources):** Not verified
- **Seat Height (mm):** Not verified
- **Fuel Tank Capacity (L):** 12
- **Frame/Chassis:** Diamond frame [T1]
- **Rear Suspension:** Monoshock
- **ABS Configuration:** Dual Channel ABS
- **Front Tyre:** 110/70-17, Tubeless
- **Rear Tyre:** 140/70-17, Tubeless
- **Wheel Type:** Alloy
- **Ride Modes:** Not verified
- **Warranty Note:** Honda Extended Warranty: 3 years standard + 7 years optional service warranty, per brochure [T1].
- **First Service:** Not verified
- **Service Interval:** Not verified
- **Engine Oil:** Not verified

## Per-Trim Specifications (differ by trim)

| Trim | Colours | Max Power | Max Torque | Length (mm) | Width (mm) | Height (mm) | Wheelbase (mm) | Ground Clearance (mm) | Kerb Weight (kg) | Front Suspension | Front Brake | Rear Brake | Instrument Cluster | Connectivity Features | Warranty (years/km) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Repsol Edition | Repsol livery (red/white/blue Repsol Honda racing colourway) | 12.7 kW @ 8500 rpm | 15.9 Nm @ 6000 rpm | Not verified | Not verified | Not verified | 1355 | Not verified | Not verified | Upside Down Fork (USD) — first in sub-200cc segment | Disc 276 mm | Disc 220 mm | TFT meter (ECO indicator, tachometer, range, side-stand indicator w/ engine inhibitor), Honda RoadSync | Honda RoadSync, Honda Selectable Torque Control (HSTC), USB-C charging, hazard switch | 3 years standard + 7 years optional (10-year extended warranty package) |
| Standard | Athletic Blue Metallic, Radiant Red Metallic, Matte Axis Grey Metallic, Pearl Igneous Black | 12.5 kW @ 8500 rpm | 15.7 Nm @ 6000 rpm | 2034 | 783 | 1064 | 1356 | 168 | 142 | Upside Down Fork (USD) — first in sub-200cc segment (Golden USD fork) | Disc 276 mm (Dual Petal Disc) | Disc 220 mm (Dual Petal Disc) | TFT meter (ECO indicator, tachometer, range, side-stand indicator w/ engine inhibitor) | Honda RoadSync, Honda Selectable Torque Control (HSTC), Engine Stop Switch, USB-C charging, hazard switch | 3 years / 50,000 km (whichever comes first) — separately, brochure references a 3+7 year extended warranty package |

## Data Notes

- **Repsol Edition — unresolved conflict:** Max power/torque and wheelbase differ slightly from the standard (non-Repsol) Hornet 2.0 brochure (12.7 kW @ 8500 rpm / 15.9 Nm @ 6000 rpm / 1355mm wheelbase here vs 12.5 kW @ 8500 rpm / 15.7 Nm @ 6000 rpm / 1356mm wheelbase in the standalone Hornet 2.0 brochure) despite identical 184.40cc displacement — both figures preserved rather than merged; likely brochure-revision/rounding variance rather than a true mechanical difference, but not confirmed.
- **Repsol Edition — data completeness:** Limited-edition Repsol livery variant of the Hornet 2.0, detailed in the same 2-page brochure as the Dio 125 Repsol Edition. Full dimension table (length/width/height/ground clearance/kerb weight) not repeated in this edition-specific brochure — see standard Hornet 2.0 row for those figures (same base platform).
- **Standard — data completeness:** ARAI mileage, top speed, acceleration figures, and seat height not published in brochure. Battery 12V, 5.0Ah.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Repsol Edition:** Not computable — insufficient numeric data (power, weight, tank size, or mileage not verified).
- **Standard:** power-to-weight ratio ≈ 88.0 W/kg (0.12 PS/kg).

## Sources

- Not verified (per-model page not confirmed; brand site: https://www.honda2wheelersindia.com)
- Structured data consolidated from the Honda master dataset (`Honda_master_dataset.csv`).
