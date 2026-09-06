---
brand: TVS
model_family: Apache RTR
model_name: Apache RTR 160 4V
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Apache RTR 160 4V — Quantitative Specifications (TVS)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Apache RTR 160 4V. Every field below is drawn directly from the TVS master dataset (all 3 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (3)

- Single Channel ABS
- Dual Channel ABS with USD
- USD with TFT

## Shared Specifications (identical across all trims above)

- **Segment:** Naked sports — Apache (160cc, 4-valve)
- **Ex-Showroom Price (INR):** ₹1,24,870
- **Price City Reference:** Delhi
- **Price Source Tier:** T1 (TVS official page, Ex-showroom Delhi) -- see unresolved_conflicts
- **Price Conflict Note:** Identical to the other two variants on the fetched TVS page -- likely only the default/lowest variant's price was captured; per-variant pricing not confirmed. On-road Delhi price stated by TVS for the line: ₹1,47,982.
- **Colours:** Marine Blue (USD with TFT), Racing Red, Matte Black, Granite Grey, Pearl White
- **Displacement (cc):** 159.7
- **Engine Type:** SI, 4-stroke, oil-cooled, SOHC, fuel injection
- **Cooling:** Oil-cooled
- **Fuel System:** Bosch closed-loop fuel injection
- **Max Power:** Sport: 17.55 PS @ 9250 rpm | Urban/Rain: 15.64 PS @ 8650 rpm
- **Max Torque:** Sport: 14.73 Nm @ 7500 rpm | Urban/Rain: 14.14 Nm @ 7250 rpm
- **Transmission:** 5-speed manual
- **Clutch:** Assist & slipper clutch
- **Starting:** Electric start
- **Top Speed (OEM claimed):** Sport 114 km/h | Urban/Rain 103 km/h
- **Top Speed (independent sources):** Not verified
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** 15.93 sec [T3, Autocar India test]
- **Mileage (OEM/ARAI claimed):** Not verified
- **Mileage (independent sources):** Not verified
- **Length (mm):** 2035
- **Width (mm):** 790
- **Height (mm):** 1050 (no visor) / 1111 (with visor)
- **Wheelbase (mm):** 1357
- **Ground Clearance (mm):** 180
- **Seat Height (mm):** 800
- **Fuel Tank Capacity (L):** 12
- **Frame/Chassis:** Double cradle Synchro Stiff
- **Rear Suspension:** Monoshock
- **Front Brake:** 270 mm petal disc
- **Rear Brake:** 240 mm petal disc
- **ABS Configuration:** Dual-Channel ABS with Rear-wheel Lift-off Protection (RLP) -- NOTE: this overall spec conflicts with the 'Single Channel ABS' variant name below; not reconciled in source
- **Front Tyre:** 90/90-17 49P, tubeless
- **Rear Tyre:** 130/70 R17 62P, radial, tubeless
- **Wheel Type:** Alloy, 17" front and rear [T3, BikeWale]
- **Ride Modes:** 3: Sport, Urban, Rain
- **Warranty (years/km):** 5 years or 60,000 km
- **Warranty Note:** TVS brand-level motorcycle warranty
- **First Service:** Not verified
- **Service Interval:** 3 free services (exact intervals not published) [T3, BikeWale]
- **Engine Oil:** Not verified

## Per-Trim Specifications (differ by trim)

| Trim | Kerb Weight (kg) | Front Suspension | Instrument Cluster | Connectivity Features |
| --- | --- | --- | --- | --- |
| Single Channel ABS | 143 | Telescopic fork (Single-Channel ABS variant) | Analog meter (base) | TVS SmartXonnect (Bluetooth) |
| Dual Channel ABS with USD | 146 | 37 mm upside-down (USD) fork (top variant) | Analog meter (base) | TVS SmartXonnect (Bluetooth) |
| USD with TFT | 146 | 37 mm upside-down (USD) fork (top variant) | 5-inch TFT with ride telemetry, turn-by-turn navigation, ride analytics | TVS SmartXonnect (Bluetooth); traction control on the USD-with-TFT variant |

## Data Notes

- **Single Channel ABS — unresolved conflict:** All 3 variants showed an identical ex-showroom price (₹1,24,870) on the TVS page fetched -- likely reflects only the default/lowest variant, not confirmed per-variant pricing; re-verify on tvsmotor.com. Also, ABS spec text says 'Dual-Channel ABS with RLP' overall while one variant is explicitly named 'Single Channel ABS' -- inconsistency not reconciled in source.
- **Single Channel ABS — data completeness:** Confirmed per-variant pricing, bore/stroke, engine oil, ARAI mileage not published
- **Dual Channel ABS with USD — unresolved conflict:** All 3 variants showed an identical ex-showroom price (₹1,24,870) on the TVS page fetched -- likely reflects only the default/lowest variant, not confirmed per-variant pricing; re-verify on tvsmotor.com. Also, ABS spec text says 'Dual-Channel ABS with RLP' overall while one variant is explicitly named 'Single Channel ABS' -- inconsistency not reconciled in source.
- **Dual Channel ABS with USD — data completeness:** Confirmed per-variant pricing, bore/stroke, engine oil, ARAI mileage not published
- **USD with TFT — unresolved conflict:** All 3 variants showed an identical ex-showroom price (₹1,24,870) on the TVS page fetched -- likely reflects only the default/lowest variant, not confirmed per-variant pricing; re-verify on tvsmotor.com. Also, ABS spec text says 'Dual-Channel ABS with RLP' overall while one variant is explicitly named 'Single Channel ABS' -- inconsistency not reconciled in source.
- **USD with TFT — data completeness:** Confirmed per-variant pricing, bore/stroke, engine oil, ARAI mileage not published

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Single Channel ABS:** power-to-weight ratio ≈ 90.3 W/kg (0.123 PS/kg).
- **Dual Channel ABS with USD:** power-to-weight ratio ≈ 88.4 W/kg (0.12 PS/kg).
- **USD with TFT:** power-to-weight ratio ≈ 88.4 W/kg (0.12 PS/kg).

## Sources

- https://www.tvsmotor.com/tvs-apache/apache-rtr-160-4v
- Structured data consolidated from the TVS master dataset (`TVS_master_dataset.csv`).
