from pathlib import Path

root = Path(__file__).resolve().parents[1]
path = root / "blogs" / "pibert_fourier_wavelet_transformer_dialogue.md"
text = path.read_text(encoding="utf-8")
text = text.replace(
    'title: "Inside PIBERT: A Dialogue on Physics-Informed Fourier-Wavelet Transformers for Multiscale CFD"',
    'title: "Inside PIBERT: A Classroom Dialogue on Physics-Informed Fourier-Wavelet Transformers for Multiscale CFD"',
    1,
)
text = text.replace(
    '![PIBERT architecture and multiscale CFD surrogate modeling overview](assets/img/PIBERT-2.png)',
    '![PIBERT architecture and multiscale CFD surrogate modeling overview](/assets/img/PIBERT-2.png)',
    1,
)
path.write_text(text, encoding="utf-8")
Path(__file__).unlink()
