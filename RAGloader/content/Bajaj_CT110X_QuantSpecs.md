---
brand: Bajaj
model_family: CT
model_name: CT 110X
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# CT 110X — Quantitative Specifications (Bajaj)

This document is the structured, numeric-spec companion to the qualitative narrative document for the CT 110X. Every field below is drawn directly from the Bajaj master dataset (all 1 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (1)

- Single trim (an implausible lower on-road figure also appears)

## Shared Specifications (identical across all trims above)

- **Segment:** 110cc rugged/rural commuter
- **Ex-Showroom Price (INR):** 74930
- **Price City Reference:** Delhi
- **Price Source Tier:** T1 (bajajauto.com master price listing)
- **Price Conflict Note:** CONFLICT/IMPLAUSIBLE: page separately showed an anomalous 'on-road starting from 67,885' which is lower than the ex-showroom price of 74,930 — this on-road figure is flagged as implausible and should NOT be used without verifying on the live site. Ex-showroom master-listing figure 74,930 used as primary.
- **Colours:** Matte Wild Green, Ebony Black-Red, Ebony Black-Blue [T1]
- **Displacement (cc):** 115.45 [T1]
- **Engine Type:** 4-stroke, single cylinder, DTS-i [T1]
- **Cooling:** Not verified
- **Fuel System:** Not verified
- **Max Power:** 9.5 PS (6.99 kW) @ 7,500 rpm [T1]
- **Max Torque:** 9.9 Nm @ 5,500 rpm [T1]
- **Transmission:** 4-speed manual [T3]
- **Clutch:** Wet multi-plate [T3]
- **Starting:** Electric start [T1]
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** Not verified
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** 70 kmpl (ARAI, per Tier-3 citation) [T3]
- **Mileage (independent sources):** ~75 kmpl in a '100ml fuel' video test [T3, IndianAutosBlog/ZigWheels]
- **Length (mm):** 1,998 mm [T3]
- **Width (mm):** 788 mm [T3]
- **Height (mm):** 1,098 mm [T3]
- **Wheelbase (mm):** 1,285 mm [T3]
- **Ground Clearance (mm):** 170 mm [T3]
- **Seat Height (mm):** 810 mm [T3]
- **Kerb Weight (kg):** 124 kg [T3]
- **Fuel Tank Capacity (L):** 11 L [T1]
- **Frame/Chassis:** Square-tube, single down-tube with lower cradle [T3]
- **Front Suspension:** Hydraulic telescopic, 125 mm travel [T3]
- **Rear Suspension:** Spring-in-Spring (SNS), 100 mm wheel travel [T1]
- **Front Brake:** 130 mm drum [T3]
- **Rear Brake:** 110 mm drum [T3]
- **ABS Configuration:** Not verified (not published by Bajaj)
- **Front Tyre:** Semi-knobby, 2.75-17 [T3]
- **Rear Tyre:** Semi-knobby, 3.00-17 [T3]
- **Wheel Type:** Alloy, 17 in [T3]
- **Instrument Cluster:** Analogue [T3]
- **Ride Modes:** Not verified
- **Connectivity Features:** USB charging port — no Bluetooth/navigation found [T3]
- **Warranty (years/km):** Likely 5 yrs / 75,000 km per company-wide policy
- **Warranty Note:** Not individually confirmed for this model [T1, inferred]
- **First Service:** 500-750 km (free) [T1, applied from N160/Dominar 250 manuals]
- **Service Interval:** 10,000 km oil change / 5,000 km check [T1, applied from N160/Dominar 250 manuals]
- **Engine Oil:** Bajaj 10000-series oil (exact grade varies by model; not individually confirmed) [T1, inferred]

## Data Notes

- **Single trim (an implausible lower on-road figure also appears) — unresolved conflict:** Implausible on-road figure (67,885, lower than ex-showroom 74,930) explicitly flagged by the source as not to be used.
- **Single trim (an implausible lower on-road figure also appears) — data completeness:** Cooling and ABS status not published by Bajaj; dimensions Tier-3 sourced.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Single trim (an implausible lower on-road figure also appears):** power-to-weight ratio ≈ 56.4 W/kg (0.077 PS/kg); estimated tank range ≈ 770.0 km (tank capacity × claimed mileage, petrol/liquid-fuel models only).

## Sources

- https://www.bajajauto.com/bikes/ct/ct-110x
- Structured data consolidated from the Bajaj master dataset (`Bajaj_master_dataset.csv`).
