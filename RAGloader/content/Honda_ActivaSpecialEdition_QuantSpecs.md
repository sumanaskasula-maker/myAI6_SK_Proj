---
brand: Honda
model_family: Activa
model_name: Activa Special Edition
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Activa Special Edition — Quantitative Specifications (Honda)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Activa Special Edition. Every field below is drawn directly from the Honda master dataset (all 2 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (2)

- Dlx
- Smart

## Shared Specifications (identical across all trims above)

- **Segment:** 110-125cc gearless scooter
- **Ex-Showroom Price (INR):** Not verified
- **Price City Reference:** Not verified
- **Price Source Tier:** Not applicable (ex-showroom price not published in source brochures)
- **Price Conflict Note:** None
- **Colours:** Matte Steel Black Metallic, Pearl Siren Blue
- **Displacement (cc):** 109.51
- **Engine Type:** 4-Stroke, SI Engine
- **Cooling:** Air cooled
- **Fuel System:** PGM-FI
- **Max Power:** 5.77 kW @ 8000 rpm
- **Max Torque:** 8.90 Nm @ 5500 rpm
- **Transmission:** Automatic (V-Matic)
- **Clutch:** Automatic centrifugal
- **Top Speed (OEM claimed):** Not verified
- **Top Speed (independent sources):** Not verified
- **0-60 km/h Acceleration:** Not verified
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** Not verified
- **Mileage (independent sources):** Not verified
- **Length (mm):** 1833
- **Width (mm):** 697
- **Height (mm):** 1156
- **Wheelbase (mm):** 1260
- **Ground Clearance (mm):** 162
- **Seat Height (mm):** Not verified
- **Fuel Tank Capacity (L):** 5.3
- **Frame/Chassis:** Under Bone [T1]
- **Front Suspension:** Telescopic
- **Rear Suspension:** 3-Step Adjustable Suspension (Unit Swing)
- **Front Brake:** Drum
- **Rear Brake:** Drum 130 mm
- **ABS Configuration:** Not applicable (CBS with Equalizer, not ABS)
- **Front Tyre:** 90/90-12 54J, Tubeless
- **Rear Tyre:** 90/100-10 53J, Tubeless
- **Wheel Type:** Alloy (DLX/Smart); steel (STD, 110cc only)
- **Instrument Cluster:** Not verified
- **Ride Modes:** Not verified
- **Warranty (years/km):** 3 years standard + 7 years optional (10-year extended warranty package)
- **Warranty Note:** Honda Extended Warranty: 3 years standard + 7 years optional service warranty, per brochure [T1].
- **First Service:** Not verified
- **Service Interval:** Not verified
- **Engine Oil:** Not verified

## Per-Trim Specifications (differ by trim)

| Trim | Starting | Kerb Weight (kg) | Connectivity Features |
| --- | --- | --- | --- |
| Dlx | Kick/Self | 106 | Honda Smart Key with H-Smart Technology (Smart Safe/Unlock/Start/Find) — brochure implies Smart Key on this edition; per-trim feature gating (Dlx vs Smart) not itemised in this brochure |
| Smart | Self only | 105 | Honda Smart Key with H-Smart Technology: Smart Safe, Smart Unlock, Smart Start, Smart Find |

## Data Notes

- **Dlx — unresolved conflict:** Max net power/torque differ slightly from the standard Activa 110 combo brochure (5.77 kW @ 8000 rpm / 8.90 Nm @ 5500 rpm here vs 5.88 kW @ 8000 rpm / 9.05 Nm @ 5500 rpm in the Activa 110/125 combo brochure) despite identical displacement (109.51cc) — both figures preserved rather than merged; likely brochure-revision/rounding variance rather than a true engine difference, but not confirmed.
- **Dlx — data completeness:** This is a special-edition livery variant of the Activa 110 (same 109.51cc engine family), sold via its own dedicated brochure with 2 new colour variants (Matte Steel Black Metallic, Pearl Siren Blue), black-chrome styling, and stylish graphics. Per-trim (Dlx vs Smart) feature/spec split not itemised in this brochure the way the combo brochure does — this row uses the brochure's combined 'Dlx & Smart' figures where shared, and Dlx-labelled figures (kerb weight, starting method) where trim-specific. Battery listed as 12V 3.0 Ah (MF) — differs from the 12V 5.0 Ah battery listed for standard Activa 110/125.
- **Smart — unresolved conflict:** Max net power/torque differ slightly from the standard Activa 110 combo brochure (5.77 kW @ 8000 rpm / 8.90 Nm @ 5500 rpm here vs 5.88 kW @ 8000 rpm / 9.05 Nm @ 5500 rpm in the Activa 110/125 combo brochure) despite identical displacement (109.51cc) — both figures preserved rather than merged; likely brochure-revision/rounding variance rather than a true engine difference, but not confirmed.
- **Smart — data completeness:** Special-edition livery variant of the Activa 110. Battery listed as 12V 3.0 Ah (MF) — differs from the 12V 5.0 Ah battery listed for standard Activa 110/125; both preserved as brochure-stated rather than reconciled.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Dlx:** power-to-weight ratio ≈ 54.4 W/kg (0.074 PS/kg).
- **Smart:** power-to-weight ratio ≈ 55.0 W/kg (0.075 PS/kg).

## Sources

- Not verified (per-model page not confirmed; brand site: https://www.honda2wheelersindia.com)
- Structured data consolidated from the Honda master dataset (`Honda_master_dataset.csv`).
