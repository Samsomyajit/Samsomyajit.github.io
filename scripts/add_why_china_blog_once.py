from pathlib import Path

root = Path(__file__).resolve().parents[1]
data_path = root / 'js' / 'data.js'
text = data_path.read_text(encoding='utf-8')
entry = """  {
    id: 'why-i-chose-china',
    title: 'Why I Chose China: A Personal Journey from India and Ireland to Shanghai',
    category: 'Anecdotes',
    date: '2026-07-04',
    excerpt: 'A book-like personal essay on colonial aspiration, loneliness, literature, Ireland, love, marriage, scientific ambition, and choosing China as a future rather than a fallback.',
    contentUrl: 'blogs/why_i_chose_china.md',
    image: 'assets/img/blogs/why-china-thumbnail.svg',
  },
"""
if "id: 'why-i-chose-china'" not in text:
    marker = 'const blogs = [\n'
    if marker not in text:
        raise SystemExit('Blog list marker not found')
    text = text.replace(marker, marker + entry, 1)
    data_path.write_text(text, encoding='utf-8')

Path(__file__).unlink()
