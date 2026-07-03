from pathlib import Path

root = Path(__file__).resolve().parents[1]
index_path = root / "index.html"
text = index_path.read_text(encoding="utf-8")
url = '        "https://www.wikidata.org/wiki/Q140420332",\n'

if "https://www.wikidata.org/wiki/Q140420332" not in text:
    marker = '      "sameAs": [\n'
    if marker not in text:
        raise SystemExit("ProfilePage sameAs array not found in index.html")
    text = text.replace(marker, marker + url, 1)
    index_path.write_text(text, encoding="utf-8")

Path(__file__).unlink()
