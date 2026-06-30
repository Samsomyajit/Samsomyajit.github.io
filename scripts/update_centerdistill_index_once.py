from pathlib import Path

root = Path(__file__).resolve().parents[1]
index_path = root / "index.html"
text = index_path.read_text(encoding="utf-8")

old = '''            <div class="pub-compact-card animated-card">
              <span class="pub-compact-badge conference">Conf.</span>
              <div class="pub-compact-content">
                <div class="pub-compact-title">CenterDistill: Weakly-Supervised Distillation for Ambiguity-Aware Cross-Lingual QA</div>
                <div class="pub-compact-authors">Chakraborty, S., Naskar, S., Paul, S., Chakraborty, N., Gayen, A. and Jana, A.</div>
                <div class="pub-compact-meta">
                  <span>EAAAI/EANN 2026</span>
                  <span class="pub-compact-meta-sep">·</span>
                  <span>2026</span>
                </div>
              </div>
            </div>'''

new = '''            <div class="pub-compact-card animated-card">
              <span class="pub-compact-badge conference">Published</span>
              <div class="pub-compact-content">
                <div class="pub-compact-title">CenterDistill: Weakly-supervised distillation for ambiguity-aware cross-lingual QA</div>
                <div class="pub-compact-authors">Chakraborty, S., Naskar, S., Paul, S., Jana, A., Chakraborty, N. and Gayen, A.</div>
                <div class="pub-compact-meta">
                  <span>Engineering Applications of Neural Networks — Springer</span>
                  <span class="pub-compact-meta-sep">·</span>
                  <span>CCIS Vol. 3025</span>
                  <span class="pub-compact-meta-sep">·</span>
                  <span>pp. 1–15</span>
                  <span class="pub-compact-meta-sep">·</span>
                  <span>2026</span>
                  <span class="pub-compact-meta-sep">·</span>
                  <a href="https://doi.org/10.1007/978-3-032-31141-2_11" target="_blank" rel="noopener">DOI</a>
                </div>
              </div>
            </div>'''

count = text.count(old)
if count != 1:
    raise SystemExit(f"Expected exactly one CenterDistill publication block, found {count}.")

index_path.write_text(text.replace(old, new, 1), encoding="utf-8")
Path(__file__).unlink()
