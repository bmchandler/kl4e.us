+++
title = "US HF Ham Bands — Overview"
template = "overview.html"

[extra]
eyebrow = "REFERENCE"
+++

A quick breakdown of the US amateur HF bands — how to read the figures on
the band pages, the neighboring bands I skip and why, and a couple of FCC
rules and changes worth keeping in mind.

## About the figures

Frequencies are in megahertz and assume full Amateur Extra privileges. I
drop the third decimal for readability — 20 m's top edge shows as 14.350,
not 14.350.000.

A note that goes with those edges: an SSB signal is a few kHz wide and
sits to one side of the dial frequency. On 20 m, voice is commonly USB, so the
signal lands above the shown frequency — to keep it under the 14.350 edge you'd set
the dial ≥ 3 kHz down, at 14.347 or lower, with clean audio and proper ALC
so nothing splatters past that 3 kHz. On LSB the signal falls below the set frequency because the carrier is
suppressed when using SSB, so using LSB, you may be able to sit right at
the edge (though this is not recommended).

## Skipped bands

These are the LF/MF neighbors just below the HF range. I have no plans on
working these bands due to the below points as well as antenna
requirements.

- **2200 m** — requires registration with the Utilities Technology
  Council; 1 W EIRP maximum.
- **630 m** — also requires UTC registration; 5 W EIRP maximum (1 W in
  some areas near the Russian border).

## 60 meters

60 m sat in limbo for years while the FCC and ARRL sorted out privileges.
In Report and Order FCC 25-60 (December 2025) the FCC adopted the WRC-15
worldwide allocation — 5351.5–5366.5 kHz, secondary, 9.15 W ERP, 2.8 kHz
bandwidth, General class and up — which took effect in early 2026; the
four legacy channels and their 100 W ERP limit continue. See the FCC's
[Report and Order (FCC 25-60)](https://docs.fcc.gov/public/attachments/FCC-25-60A1.pdf),
ARRL's [announcement](https://www.arrl.org/news/new-60-meter-privileges-now-in-effect),
the [60 m FAQ](https://www.arrl.org/60-meter-faq), and the current
[graphical frequency allocations](https://www.arrl.org/graphical-frequency-allocations).
I've left 60 m off the band list for now.

To be clear, it is my opinion one should intimately know their equipment
before using this band. Though General class is allowed, I'd also advise
working with an elmer or Extra class operator familiar with 60 m.

## The 2024 RTTY/data rule change

Until 2024, US RTTY and data on the HF bands below 28 MHz — 160, 80, 40,
30, 20, 17, 15 and 12 m — were held to a 300-baud symbol rate and a 1 kHz
maximum FSK shift. 10 m and up were looser (10 m allowed 1200 baud). The
FCC replaced those symbol-rate limits with a single 2.8 kHz bandwidth
limit in the RTTY/data subbands. Kept here because the old limit still
comes up in conversation. The FCC's
[Report and Order (FCC 23-93)](https://docs.fcc.gov/public/attachments/FCC-23-93A1.pdf)
has the full change.
