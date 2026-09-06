---
brand: Bajaj
model_family: Pulsar
model_name: Pulsar N250
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Pulsar N250 — Quantitative Specifications (Bajaj)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Pulsar N250. Every field below is drawn directly from the Bajaj master dataset (all 1 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (1)

- Single trim (as listed)

## Shared Specifications (identical across all trims above)

- **Segment:** 250cc naked street
- **Ex-Showroom Price (INR):** 142202
- **Price City Reference:** Delhi
- **Price Source Tier:** T1 (bajajauto.com master price listing)
- **Price Conflict Note:** CONFLICT: master listing shows 1,42,202; detail page separately showed 1,34,166. Primary value used here is the master-listing figure (1,42,202); both figures verified before quoting.
- **Colours:** Brooklyn Black, Pearl Metallic White, Glossy Racing Red [T1]
- **Displacement (cc):** 249.07 [T1]
- **Engine Type:** Single cylinder, 4-stroke, SOHC, 2-valve [T1]
- **Cooling:** Oil-cooled [T1]
- **Fuel System:** FI [T1]
- **Max Power:** 24.5 PS (18 kW) @ 8,750 rpm [T1]
- **Max Torque:** 21.5 Nm @ 6,500 rpm [T1]
- **Transmission:** 5-speed manual, chain drive [T3]
- **Clutch:** Assist & slipper [T1]
- **Starting:** Self-start [T3]
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** Not verified
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** 44 km/l (ARAI, per Tier-3 citation) [T3]
- **Mileage (independent sources):** 40 km/l aggregate [T3, BikeWale]; 30-37 km/l avg, peak 49 km/l over 3,395 km long-term test [T3, MotorBeam]
- **Length (mm):** 1,989 mm [T3]
- **Width (mm):** 743 mm [T3]
- **Height (mm):** 1,050 mm [T3]
- **Wheelbase (mm):** 1,342-1,351 mm (sources vary) [T3]
- **Ground Clearance (mm):** 165 mm [T3]
- **Seat Height (mm):** 795-800 mm (sources vary) [T3]
- **Kerb Weight (kg):** 162-164 kg (sources vary) [T3]
- **Fuel Tank Capacity (L):** 14 L [T1]
- **Frame/Chassis:** Tubular frame [T3]
- **Front Suspension:** Golden USD forks (travel not published by Bajaj) [T1]
- **Rear Suspension:** Nitrox Monoshock (travel not published by Bajaj) [T1]
- **Front Brake:** Disc (size not published by Bajaj) [T1]
- **Rear Brake:** Disc (size not found) [T3]
- **ABS Configuration:** Dual-channel (standard) [T1]
- **Front Tyre:** 110/70-R17 [T3]
- **Rear Tyre:** 140/70-R17 [T3]
- **Wheel Type:** Alloy, 17 in [T3]
- **Instrument Cluster:** Connected digital console [T1]
- **Ride Modes:** Ride modes offered (unspecified count/names in source) [T1]
- **Connectivity Features:** Bluetooth, navigation, ride modes, traction control [T1]
- **Warranty (years/km):** 5 yrs / 75,000 km
- **Warranty Note:** Applied from Pulsar N160 / Dominar 250 owner's manuals as company-wide policy — not individually confirmed for this model [T1, inferred]
- **First Service:** 500-750 km (free) [T1, applied from N160/Dominar 250 manuals]
- **Service Interval:** 10,000 km oil change / 5,000 km check [T1, applied from N160/Dominar 250 manuals]
- **Engine Oil:** Bajaj 10000-series oil (exact grade varies by model; not individually confirmed) [T1, inferred]

## Data Notes

- **Single trim (as listed) — unresolved conflict:** Price discrepancy: master listing 1,42,202 vs detail page 1,34,166 (see price_conflict_note). Wheelbase, seat height and kerb weight vary across Tier-3 sources.
- **Single trim (as listed) — data completeness:** L/W/H, brake sizes and suspension travel not published by Bajaj; dimensions Tier-3 sourced.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Single trim (as listed):** power-to-weight ratio ≈ 111.1 W/kg (0.151 PS/kg); estimated tank range ≈ 616.0 km (tank capacity × claimed mileage, petrol/liquid-fuel models only).

## Sources

- https://www.bajajauto.com/bikes/pulsar/pulsar-n250
- Structured data consolidated from the Bajaj master dataset (`Bajaj_master_dataset.csv`).
