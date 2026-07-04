from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
news = root / 'news' / 'index.html'
text = news.read_text(encoding='utf-8')
text = text.replace('"position":3,"name":"Joining the 2026 DeeCamp AI4S Training Camp"', '"position":2,"name":"Joining the 2026 DeeCamp AI4S Training Camp"')
text = text.replace('"position":2,"name":"WindOps Sentinel presentation at MindSpec"', '"position":3,"name":"WindOps Sentinel presentation at MindSpec"')
news.write_text(text, encoding='utf-8')

sitemap = root / 'sitemap.xml'
s = sitemap.read_text(encoding='utf-8')
s = s.replace('<url><loc>https://samchakraborty.me/</loc><lastmod>2026-07-02</lastmod></url>', '<url><loc>https://samchakraborty.me/</loc><lastmod>2026-07-04</lastmod></url>')
s = re.sub(r'<url><loc>https://samchakraborty\.me/news/</loc>(?:<lastmod>[^<]+</lastmod>)?</url>', '<url><loc>https://samchakraborty.me/news/</loc><lastmod>2026-07-04</lastmod></url>', s)
sitemap.write_text(s, encoding='utf-8')

Path(__file__).unlink()
