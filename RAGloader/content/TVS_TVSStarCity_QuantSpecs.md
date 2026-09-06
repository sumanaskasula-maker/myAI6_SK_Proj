---
brand: TVS
model_family: Star City+
model_name: TVS Star City+
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# TVS Star City+ — Quantitative Specifications (TVS)

This document is the structured, numeric-spec companion to the qualitative narrative document for the TVS Star City+. Every field below is drawn directly from the TVS master dataset (all 2 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (2)

- Drum
- Disc

## Shared Specifications (identical across all trims above)

- **Segment:** Commuter (premium 110cc)
- **Price City Reference:** Not verified
- **Price Source Tier:** T3, BikeWale
- **Price Conflict Note:** None
- **Colours:** Black Red, Grey Black, Black Green, Black Blue
- **Displacement (cc):** 109.7
- **Engine Type:** Single-cylinder, 4-stroke, air-cooled
- **Cooling:** Air-cooled
- **Fuel System:** ET-Fi (Eco Thrust Fuel Injection)
- **Max Power:** 8.08 bhp (6.03 kW) @ 7350 rpm
- **Max Torque:** 8.7 Nm @ 4500 rpm
- **Transmission:** 4-speed constant mesh, all-up shift pattern
- **Clutch:** Wet, multiple-disc
- **Starting:** Self-start only, no kick-start [T3, BikeWale]
- **Top Speed (OEM claimed):** 90 km/h
- **Top Speed (independent sources):** Not verified
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** Not verified
- **Mileage (independent sources):** Not verified
- **Length (mm):** 1984
- **Width (mm):** 750 (across handlebar)
- **Height (mm):** 1080
- **Wheelbase (mm):** 1260
- **Ground Clearance (mm):** 172
- **Seat Height (mm):** 785 [T3, BikeWale]
- **Fuel Tank Capacity (L):** 10
- **Frame/Chassis:** Single Cradle Tubular Frame [T3, BikeWale — pending T1 confirmation]
- **Front Suspension:** Telescopic, oil-damped
- **Rear Suspension:** 5-step adjustable hydraulic shock absorber
- **Rear Brake:** 110 mm drum
- **ABS Configuration:** No ABS; Synchro (simultaneous) braking technology
- **Front Tyre:** 2.75 x 17 41P 4PR, tubeless
- **Rear Tyre:** 3.0 x 17 50P 6PR, tubeless
- **Wheel Type:** Alloy, 17" front and rear [T3, BikeWale]
- **Instrument Cluster:** Multi-function cluster with econometer, service reminder, malfunction indicator
- **Ride Modes:** Not verified
- **Connectivity Features:** USB mobile charger available; no app connectivity mentioned
- **Warranty (years/km):** TVS states "5 years warranty at no additional cost"
- **Warranty Note:** Consistent with brand's 5-year/60,000 km motorcycle policy
- **First Service:** 500-750 km / 30 days [T3, BikeWale]
- **Service Interval:** 5 free services; exact km/month intervals beyond first service not published
- **Engine Oil:** Engine oil capacity 1 L; grade not published

## Per-Trim Specifications (differ by trim)

| Trim | Ex-Showroom Price (INR) | Kerb Weight (kg) | Front Brake |
| --- | --- | --- | --- |
| Drum | ₹72,022 [T3, BikeWale] | 115 | 130 mm drum |
| Disc | ₹75,544 [T3, BikeWale] | 116 | 240 mm disc (roto petal design) |

## Data Notes

- **Drum — data completeness:** Ride modes, frame type, engine oil grade, ARAI mileage not published; price sourced from BikeWale as official page price widget was not resolvable
- **Disc — data completeness:** Ride modes, frame type, engine oil grade, ARAI mileage not published; price sourced from BikeWale as official page price widget was not resolvable

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Drum:** power-to-weight ratio ≈ 52.4 W/kg (0.071 PS/kg).
- **Disc:** power-to-weight ratio ≈ 52.0 W/kg (0.071 PS/kg).

## Sources

- https://www.tvsmotor.com/tvs-star-city-plus
- Structured data consolidated from the TVS master dataset (`TVS_master_dataset.csv`).
