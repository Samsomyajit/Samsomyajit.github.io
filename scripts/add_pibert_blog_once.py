from pathlib import Path

root = Path(__file__).resolve().parents[1]
data_path = root / "js" / "data.js"
text = data_path.read_text(encoding="utf-8")

marker = "const blogs = [\n"
entry = """const blogs = [
  {
    id: 'pibert-fourier-wavelet-dialogue',
    title: 'Inside PIBERT: A Classroom Dialogue on Physics-Informed Fourier-Wavelet Transformers for Multiscale CFD',
    category: 'Research',
    date: '2026-07-02',
    excerpt: 'A lecture-style exploration of PIBERT, covering hybrid Fourier-wavelet representations, physics-biased attention, self-supervised physics pretraining, benchmark results, and practical tradeoffs.',
    contentUrl: 'blogs/pibert_fourier_wavelet_transformer_dialogue.md',
    image: 'assets/img/PIBERT-2.png',
  },
"""

if "id: 'pibert-fourier-wavelet-dialogue'" not in text:
    if marker not in text:
        raise SystemExit('Blog array marker not found.')
    text = text.replace(marker, entry, 1)
    data_path.write_text(text, encoding='utf-8')

Path(__file__).unlink()
