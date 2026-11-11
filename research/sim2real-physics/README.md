# Sim2Real Physical Fidelity — standalone microsite

A self-contained, responsive research microsite for:

**Do Better Scores Mean Better Physics? Physics-Grounded Explanations for Sim2Real Neural Operators**

## Live page

https://samchakraborty.me/research/sim2real-physics/

## Run locally

No package installation or build step is required.

From the repository root:

```bash
python3 -m http.server 8000
```

Then open:

```
http://localhost:8000/research/sim2real-physics/
```

You can also open `index.html` directly in a modern browser. The page uses native HTML, CSS, Canvas and JavaScript; it has no framework or runtime dependency.

## Interactions

- Animated schematic flow field around a stylised NACA4418 airfoil.
- Scroll progress, section reveal transitions and responsive navigation.
- Selection/calibration tabs for the reported CNO-versus-reference estimates.
- Equal-area mask explorer with high-energy, random and low-energy selection modes.
- Copyable BibTeX citation.
- Reduced-motion support for accessibility.

## Scientific interpretation

The animated flow and mask grid are explicitly labelled as schematic illustrations, not measured CFD/PIV data. The mask explorer explains the equal-area intervention logic; it does not reproduce the paper's spatial field. Exact reported values are displayed only where available in the paper summary.


## Original figure gallery

The page includes a six-figure gallery sourced from the original arXiv v1 PDF. Each card previews its original PDF page and opens a larger viewer with zoom controls. The gallery uses the PDF itself rather than re-drawing the figures, preserving their original labels, scales and panels.
