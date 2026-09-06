---
brand: Honda
model_family: Activa e:
model_name: Activa e:
category: quantitative specifications
doc_type: rag_narrative_quant
companion_doc: qualitative narrative document for this model (positioning, use-case framing, competitors, sentiment) is a separate file; this document intentionally carries structured spec data only.
---

# Activa e: — Quantitative Specifications (Honda)

This document is the structured, numeric-spec companion to the qualitative narrative document for the Activa e:. Every field below is drawn directly from the Honda master dataset (all 2 trim(s)/variant(s) on record for this model). No field has been omitted; specs identical across all trims are stated once below, and specs that differ by trim are listed in the per-trim table.

## Trims Covered (2)

- Base (non-RoadSync)
- Honda RoadSync Duo

## Shared Specifications (identical across all trims above)

- **Segment:** Electric scooter
- **Ex-Showroom Price (INR):** Not verified
- **Price City Reference:** Not verified
- **Price Source Tier:** Not applicable (ex-showroom price not published in source brochures)
- **Price Conflict Note:** None
- **Colours:** Pearl Shallow Blue, Pearl Misty White, Pearl Serenity Blue, Matt Foggy Silver Metallic, Pearl Igneous Black
- **Displacement (cc):** Not verified
- **Engine Type:** Electric (PMSM motor)
- **Cooling:** Not applicable (electric)
- **Fuel System:** Not applicable (electric)
- **Max Power:** 6 kW peak (PMSM motor)
- **Max Torque:** 22 Nm (Honda internal testing)
- **Transmission:** Not applicable (direct drive, electric)
- **Clutch:** Not applicable (electric)
- **Starting:** Electric (key/smart key)
- **Top Speed (OEM claimed):** 80
- **Top Speed (independent sources):** Not verified
- **0-60 km/h Acceleration:** 7.3 sec (0-60 km/h)
- **0-100 km/h Acceleration:** Not verified
- **Mileage (OEM/ARAI claimed):** 102 km range (Honda internal testing, per brochure)
- **Mileage (independent sources):** Not verified
- **Length (mm):** 1854
- **Width (mm):** 700
- **Height (mm):** 1125
- **Wheelbase (mm):** 1310
- **Ground Clearance (mm):** 171
- **Seat Height (mm):** Not verified
- **Fuel Tank Capacity (L):** Not applicable (electric)
- **Frame/Chassis:** Under Bone [T1]
- **Front Suspension:** Telescopic
- **Rear Suspension:** 3-Step Adjustable Spring Loaded Hydraulic
- **Front Brake:** Disc 160 mm
- **Rear Brake:** Drum 130 mm
- **ABS Configuration:** Not applicable (no ABS; disc + drum combination, no CBS/ABS branding stated)
- **Front Tyre:** 90/90-12, Tubeless
- **Rear Tyre:** 110/80-12, Tubeless
- **Ride Modes:** 3 modes (Econ, Standard, Sport)
- **Warranty (years/km):** 3 years / 50,000 km (whichever comes first) — vehicle, battery, and charger warranty
- **Warranty Note:** 3-years/50,000 km warranty (whichever comes first) on vehicle, battery, and charger; 3 free services in the first year.
- **First Service:** Not verified
- **Service Interval:** Not verified
- **Engine Oil:** Not applicable (electric)

## Per-Trim Specifications (differ by trim)

| Trim | Kerb Weight (kg) | Wheel Type | Instrument Cluster | Connectivity Features |
| --- | --- | --- | --- | --- |
| Base (non-RoadSync) | 118 | Black Alloy | 12.70 cm (5") TFT, 800x480 px, RGB 8-bit (16M colours), 1000 nits, 15:9 aspect ratio | Reverse mode, dashboard auto brightness, side stand inhibitor, Smart Key (Smart Find/Safe/Start/Unlock) — no RoadSync app, navigation, call/music control, topple alert, maintenance alert, live tracking, or OTA updates on this trim |
| Honda RoadSync Duo | 119 | Diamond Cut Alloy | 17.78 cm (7") TFT, Cortex-A72 Quadcore 1690MHz processor, 32GB storage, 6GB RAM, Android Open Source OS (AOSP), 800x480 px, RGB 8-bit (16M colours), 1000 nits, 15:9 aspect ratio | Honda RoadSync Duo app, reverse mode, dashboard auto brightness, topple alert, maintenance alert, call and music control, navigation, live tracking, OTA updates, side stand inhibitor, Smart Key (Smart Find/Safe/Start/Unlock) |

## Data Notes

- **Base (non-RoadSync) — data completeness:** Battery: Swappable Li-ion, 1.5 kWh x 2 modules, IP65. Charging time/type not detailed for swappable-battery ownership model (battery-swap network details not in brochure). Gradeability 13 degrees.
- **Honda RoadSync Duo — data completeness:** Battery: Swappable Li-ion, 1.5 kWh x 2 modules, IP65. Charging time/type not detailed for swappable-battery ownership model (battery-swap network details not in brochure). Gradeability 13 degrees.

## Derived Analysis (Computed — Not Brochure-Sourced)

The figures in this section are calculated directly from the specification fields above; they are not published by the manufacturer and should not be cited as an official claim. They exist to give a quick, comparable read on performance and range characteristics.

- **Base (non-RoadSync):** power-to-weight ratio ≈ 50.8 W/kg (0.069 PS/kg); tank-range estimate skipped (CNG/electric/mixed-fuel tank spec — liters-only formula doesn't apply).
- **Honda RoadSync Duo:** power-to-weight ratio ≈ 50.4 W/kg (0.069 PS/kg); tank-range estimate skipped (CNG/electric/mixed-fuel tank spec — liters-only formula doesn't apply).

## Sources

- Not verified (per-model page not confirmed; brand site: https://www.honda2wheelersindia.com)
- Structured data consolidated from the Honda master dataset (`Honda_master_dataset.csv`).
