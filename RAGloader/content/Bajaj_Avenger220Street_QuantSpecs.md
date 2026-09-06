---
brand: Bajaj
model_family: Avenger
model_name: Avenger 220 Street
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Avenger 220 Street — Quantitative Specifications (Bajaj)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Avenger 220 Street. Every field below is drawn directly from the Bajaj master dataset (all 1 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (1)

- Single trim (as listed)

## Shared Specifications (identical across all trims above)

- **Segment:** 220cc cruiser (street variant)
- **Ex-Showroom Price (INR):** 133617
- **Price City Reference:** Delhi
- **Price Source Tier:** T1 (bajajauto.com master price listing)
- **Price Conflict Note:** CONFLICT: master listing 1,33,617; detail page separately showed 1,36,691 — discrepancy, verify before quoting. Master-listing figure 1,33,617 used as primary.
- **Colours:** Ebony Black, Cocktail Wine Red [T1]
- **Displacement (cc):** 220 [T1]
- **Engine Type:** Single cylinder, 4-stroke, SOHC, 2-valve, twin-spark DTS-i [T1]
- **Cooling:** Oil-cooled [T1]
- **Fuel System:** FI [T1]
- **Max Power:** 19.03 PS (13.99 kW) @ 8,500 rpm [T1]
- **Max Torque:** 17.55 Nm @ 7,000 rpm [T1]
- **Transmission:** 5-speed manual [T3]
- **Clutch:** Not verified (not published by Bajaj)
- **Starting:** Self-start only [T3]
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** Not verified
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** 40 km/l (ARAI) [T3]
- **Mileage (independent sources):** Not verified (no distinct figure found separate from the Cruise variant)
- **Length (mm):** 2,210 mm [T3]
- **Width (mm):** 806 mm [T3]
- **Height (mm):** 1,070 mm [T3]
- **Wheelbase (mm):** 1,490 mm [T3]
- **Ground Clearance (mm):** 169 mm [T3]
- **Seat Height (mm):** 737 mm [T3]
- **Kerb Weight (kg):** 163 kg [T3]
- **Fuel Tank Capacity (L):** 13 L [T1]
- **Frame/Chassis:** Not verified (not published by Bajaj)
- **Front Suspension:** Telescopic with double anti-friction bush (travel not found) [T3]
- **Rear Suspension:** 5-step adjustable twin shock absorber [T1]
- **Front Brake:** 280 mm disc [T1]
- **Rear Brake:** 130 mm drum [T3]
- **ABS Configuration:** Single-Channel ABS [T1 bajajauto.com; confirmed by T3 BikeWale + ZigWheels]
- **Front Tyre:** 90/90-17 [T3]
- **Rear Tyre:** 130/90-15 [T3]
- **Wheel Type:** Alloy — front 17 in, rear 15 in [T3]
- **Instrument Cluster:** Digital [T3]
- **Ride Modes:** Not verified
- **Connectivity Features:** AHO, hazard warning indicator, pillion grab rail, LED turn indicators, low-battery indicator, split-key shutter lock — no Bluetooth/navigation/USB found [T3]
- **Warranty (years/km):** 5 yrs / 75,000 km
- **Warranty Note:** Applied from Pulsar N160 / Dominar 250 owner's manuals as company-wide policy — not individually confirmed for this model [T1, inferred]
- **First Service:** 500-750 km (free) [T1, applied from N160/Dominar 250 manuals]
- **Service Interval:** 10,000 km oil change / 5,000 km check [T1, applied from N160/Dominar 250 manuals]
- **Engine Oil:** Bajaj 10000-series oil (exact grade varies by model; not individually confirmed) [T1, inferred]

## Data Notes

- **Single trim (as listed) — unresolved conflict:** Price discrepancy: master listing 1,33,617 vs detail page 1,36,691. ABS presence disagreement: BikeWale/BikeDekho report single-channel ABS while 91Wheels' listing omits ABS entirely (possible non-ABS base variant) — not resolved to one answer. | RESOLVED (previously flagged as conflicting/unclear): Bajaj's official site, BikeWale, and ZigWheels all independently confirm Single-Channel ABS. 91Wheels' spec table omits ABS entirely (a data-quality gap on that one source, not evidence of no ABS).
- **Single trim (as listed) — data completeness:** Clutch type and frame/chassis not published by Bajaj; mileage/independent test data not distinct from the Cruise sibling.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Single trim (as listed):** power-to-weight ratio ≈ 85.8 W/kg (0.117 PS/kg); estimated tank range ≈ 520.0 km (tank capacity × claimed mileage, petrol/liquid-fuel models only).

## Sources

- https://www.bajajauto.com/bikes/avenger/avenger-street-220
- Structured data consolidated from the Bajaj master dataset (`Bajaj_master_dataset.csv`).
