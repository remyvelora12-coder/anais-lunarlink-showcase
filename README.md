# ANAIS LunarLink™ — NASA Space Apps 2026 Showcase (v3)

A responsive, **static** website showcasing the LunarLink digital twin concept, an illustrative 60-second lunar descent simulation, concept image gallery, three mission-reel videos and direct GitHub evidence links.

## Preview

Open `index.html` in a modern browser. For reliable local video loading, from the website directory run `python3 -m http.server 8000` and visit `http://localhost:8000`.

## Publish

**GitHub Pages:** Upload *the contents of this folder* into the root of your Pages repository (or a `docs/` folder), then select that source under Settings → Pages. All paths are relative and work for project Pages subpaths.

**Vercel:** Import the folder as a repository, select Framework Preset `Other`, and deploy as a static project. No build command is needed.

**Render:** Use a Static Site linked to the same Git repository and configure the publish directory as `.`.

## Important limitations

- The descent simulator uses deterministic **synthetic data** and is not flight-qualified.
- The art is **concept art**, not photographs of real ANAIS spacecraft or validated NASA hardware.
- All NASA-themed material is shown as user-supplied event imagery; the website does not imply NASA endorsement or partnership.
- Three MP4s are included locally (approximately 39 MB total), with click-to-play controls and no autoplay.
- No analytics tracking, backend, AI API keys, sign-in, user-data collection, or database is enabled.
- NASA and third-party logos should be checked against applicable brand rules before public deployment.
- Source/research/test status must be supported by actual GitHub project evidence.

## Potential future integrations

- **GitHub**: source and workflow evidence (already linked).
- **Vercel / Render**: hosting; choose one platform.
- **Supabase**: only if persistent missions, accounts, and secured data storage are required.
- **Amplitude**: optional later, with a privacy notice and consent approach appropriate to your audience.
- **NVIDIA**: future terrain model inference or GPU workloads, not required for this static demo.
- **Noodle Seed**: future MCP connection if the mission APIs need to be exposed to agents.
- **Exa**: research/source discovery; not necessary as browser runtime dependency.
- **Superdesign, Magnific, AI Graphic Design, Image Generator**: design asset creation; their services should not be embedded directly into the runtime webpage.
- **Atlas Scout**: repository code navigation for engineering review.
- **Template Creator**: reuse visual structure for future projects.

## Ownership / provenance

Date: 2026-11-15  | Version: 3.0 | Document ID: ANAIS-LL-WEB-003

Organization: Aegis Air Intelligence Systems LLC / ANAIS Technology LLC

Classification: Proprietary — Public Demonstration Version | Status: Prototype / Not flight qualified.

Property of Aegis Air Intelligence Systems LLC & ANAIS Technology LLC

Prepared under the direction of Edward Guillen Morejon, Founder & CEO

© 2025 Aegis Air Intelligence Systems LLC & ANAIS Technology LLC. All Rights Reserved.

Controlled Distribution • Access Logged • Unauthorized Disclosure Prohibited

*This is a requested document notice only; the website does not implement access logging.*


## ANAIS-LL-WEB-003 — Executable browser site analyzer (v3)

`site-engine.js` is a standalone, deterministic, inspectable JavaScript module. `technical-demo.js` supplies the page interactions. This is **not an implementation imported from LunarNav** and does not use NASA measured or live data. It is a new transparent scoring demonstration.

Run local tests using `node test-site-engine.js` (7 checks). Open `index.html` in a modern browser; the site needs no build process or external credentials. Choose candidate Alpha, Beta, or Gamma; adjust sliders; review ranking; run self-checks; export JSON results. Inputs are synthetic.

Scoring: `100 * (0.35*max(0, 1-slope/15) + 0.30*(1-roughness/100) + 0.20*(illumination/100) + 0.15*(comms/100))`, rounded to one decimal. All model weights and thresholds are illustrative and unvalidated. Steep slope >10 degrees, roughness >65, illumination <30%, and comms <40% each trigger a REVIEW warning; high scores cannot override flagged warnings.

### Fast deployment

**Vercel:** import the folder as a new static project or drag the extracted folder into the Vercel deployment workflow. Framework preset: Other; no build command; publish the folder containing `index.html`. Upload the entire contents, including `assets`.

**GitHub Pages:** create a public repository, upload **the contents of this folder** to its root, go to Settings → Pages → Deploy from branch → main / (root). Publish the resulting URL on the Space Apps submission form.

### Submission evidence

- Public URL: [ADD AFTER DEPLOYMENT]
- Source repository: https://github.com/remyvelora12-coder/anais-lunarnav (not inspected from this environment)
- New site prototype: includes source `site-engine.js`, `technical-demo.js`, `test-site-engine.js`, and images/videos.
- Tested: 7 Node.js model checks and syntax validation for site scripts. Browser rendering and external publication must be verified after upload.
- Limitations: No verified connection to LunarNav; no real lunar imagery geospatial overlays or NASA mission telemetry ingestion; no real flight-control or landing clearance capability.

### Suggested 60-second judge demo

1. Show landing visualization and explain it is a **synthetic descent animation**.
2. Open **Site Analyzer** and choose Candidate Alpha.
3. Increase its slope to 13 degrees. Observe REVIEW warning and lower score.
4. Switch to Beta and Gamma to compare alternatives. Export results as JSON.
5. Click Run Model Self-Checks and show source code/tests in GitHub if published.
