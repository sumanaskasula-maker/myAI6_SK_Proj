---
brand: Bajaj
model_family: Platina
model_name: Platina 100
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Platina 100 — Quantitative Specifications (Bajaj)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Platina 100. Every field below is drawn directly from the Bajaj master dataset (all 1 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (1)

- Single trim (as listed)

## Shared Specifications (identical across all trims above)

- **Segment:** 100cc entry commuter
- **Ex-Showroom Price (INR):** 72942
- **Price City Reference:** Delhi
- **Price Source Tier:** T1 (bajajauto.com master price listing)
- **Price Conflict Note:** No price discrepancy noted for this model in the source.
- **Colours:** Black & White, Black & Red, Blue, Red [T1]
- **Displacement (cc):** 99.59 [T1]
- **Engine Type:** 4-stroke, DTS-i, single cylinder [T1]
- **Cooling:** Not verified
- **Fuel System:** Not verified
- **Max Power:** 8.2 PS (6.03 kW) @ 7,500 rpm [T1]
- **Max Torque:** Not verified (not published by Bajaj)
- **Transmission:** 4-speed manual [T3]
- **Clutch:** Wet multi-plate [T3]
- **Starting:** Electric start [T1]
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** 80 km/h actually achieved on test, vs Bajaj's claimed 90 km/h [T3, MotorBeam]
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** 70 km/l (ARAI) [T3, BikeDekho]
- **Mileage (independent sources):** 65-88 kmpl typical; one owner as low as 56 kmpl vs an expected ~85 kmpl [T3, BikeWale]
- **Length (mm):** 2,003 mm [T3]
- **Width (mm):** 704 mm [T3]
- **Height (mm):** 1,069 mm [T3]
- **Wheelbase (mm):** 1,255 mm [T3]
- **Ground Clearance (mm):** 200 mm [T3]
- **Seat Height (mm):** 807 mm [T3]
- **Kerb Weight (kg):** 117 kg [T3]
- **Fuel Tank Capacity (L):** 11 L [T1]
- **Frame/Chassis:** Tubular single down-tube with lower cradle [T3]
- **Front Suspension:** Hydraulic telescopic, 135 mm travel [T3]
- **Rear Suspension:** 110 mm, Spring-in-Spring suspension [T1]
- **Front Brake:** 130 mm drum [T3]
- **Rear Brake:** 110 mm drum [T3]
- **ABS Configuration:** Not applicable (drum brakes only) — one Tier-3 listing shows an ABS field that appears to be a template artifact, not confirmed [T3]
- **Front Tyre:** 2.75-17 [T3]
- **Rear Tyre:** 3.00-17 [T3]
- **Wheel Type:** Alloy, 17 in [T3]
- **Instrument Cluster:** Analogue (2 of 3 Tier-3 sources; one source states digital — flagged) [T3]
- **Ride Modes:** Not verified
- **Connectivity Features:** LED DRL only — no Bluetooth/navigation/USB found [T3]
- **Warranty (years/km):** Likely 5 yrs / 75,000 km per company-wide policy
- **Warranty Note:** Platina-specific owner's manual PDF was a non-machine-readable scan and could not be individually confirmed [T1, inferred]
- **First Service:** 500-750 km (free) [T1, applied from N160/Dominar 250 manuals]
- **Service Interval:** 10,000 km oil change / 5,000 km check [T1, applied from N160/Dominar 250 manuals]
- **Engine Oil:** Bajaj 10000-series oil (exact grade varies by model; not individually confirmed) [T1, inferred]

## Data Notes

- **Single trim (as listed) — unresolved conflict:** Instrument cluster type disagreement: analogue (2 of 3 Tier-3 sources) vs digital (1 Tier-3 source). ABS field is possibly a template artifact on one Tier-3 listing, not confirmed as real.
- **Single trim (as listed) — data completeness:** Max torque, cooling and warranty not individually confirmed by Bajaj for this model (Platina manual PDF non-machine-readable); dimensions Tier-3 sourced.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Single trim (as listed):** power-to-weight ratio ≈ 51.5 W/kg (0.07 PS/kg); estimated tank range ≈ 770.0 km (tank capacity × claimed mileage, petrol/liquid-fuel models only).

## Sources

- https://www.bajajauto.com/bikes/platina/platina-100
- Structured data consolidated from the Bajaj master dataset (`Bajaj_master_dataset.csv`).
