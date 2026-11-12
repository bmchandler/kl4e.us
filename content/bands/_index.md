+++
title = "Bands"
template = "bands.html"

[extra]
eyebrow = "NOTEBOOK"
intro = "My band-by-band notes — propagation, where the activity lives, how the antenna behaves. Frequency edges are the US amateur allocations; the notes come from my Obsidian notebook. WARC bands are marked; 60 m is left off for now."
overview = "Quick breakdown of the US Amateur Radio HF bands, along with notable FCC rules and changes."

[[extra.bands]]
name = "160 m"
range = "1.800 – 2.000 MHz"
note = "\"Top band\" — all modes, often noisy, and a tougher DX haul."
real = true
detail = "@/bands/160m.md"

[[extra.bands]]
name = "80 m"
range = "3.500 – 4.000 MHz"
note = "Nighttime band, huge and busy — ragchew country, best in winter."
real = true
detail = "@/bands/80m.md"

[[extra.bands]]
name = "40 m"
range = "7.000 – 7.300 MHz"
note = "Evening-to-morning band — the most reliable all-season DX band."
real = true
detail = "@/bands/40m.md"

[[extra.bands]]
name = "30 m"
range = "10.100 – 10.150 MHz"
tags = ["WARC"]
note = "Quiet WARC band — CW and data only, solid DX and FT8."
real = true
detail = "@/bands/30m.md"

[[extra.bands]]
name = "20 m"
range = "14.000 – 14.350 MHz"
note = "The daytime DX and POTA workhorse — great for portable antenna setups."
real = true
detail = "@/bands/20m.md"

[[extra.bands]]
name = "17 m"
range = "18.068 – 18.168 MHz"
tags = ["WARC"]
note = "Narrow WARC band — quiet, and a touch more solar-cycle dependent than 20 m."
real = true
detail = "@/bands/17m.md"

[[extra.bands]]
name = "15 m"
range = "21.000 – 21.450 MHz"
note = "Daytime DX band — long-haul F2, best when the solar cycle is high."
real = true
detail = "@/bands/15m.md"

[[extra.bands]]
name = "12 m"
range = "24.890 – 24.990 MHz"
tags = ["WARC"]
note = "Quiet WARC band — daytime use, with nighttime DX around solar max."
real = true
detail = "@/bands/12m.md"

[[extra.bands]]
name = "10 m"
range = "28.000 – 29.700 MHz"
note = "Groundwave like CB, summer sporadic-E, and an FM segment up top."
real = true
detail = "@/bands/10m.md"

# 2 m (VHF) intentionally omitted for now — to be built out in a dedicated
# session (its content differs from the HF band template). See TODO below.
+++
