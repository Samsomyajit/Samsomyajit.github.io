from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"


def replace_required(text: str, old: str, new: str, label: str) -> str:
    if old not in text:
        raise RuntimeError(f"Could not find required text for {label}")
    return text.replace(old, new)


def insert_publication_card(html: str, heading: str, card: str, marker: str) -> str:
    if marker in html:
        return html
    pattern = re.compile(
        rf'(<section class="pub-compact-group">(?:(?!<section class="pub-compact-group">).)*?{re.escape(heading)}.*?<div class="pub-compact-list">)(.*?)(\n\s*</div>\n\s*</section>)',
        re.DOTALL,
    )
    match = pattern.search(html)
    if not match:
        raise RuntimeError(f"Could not locate publication group: {heading}")
    replacement = match.group(1) + match.group(2) + "\n" + card + match.group(3)
    return html[: match.start()] + replacement + html[match.end() :]


html = INDEX.read_text(encoding="utf-8")

html = replace_required(
    html,
    'content="Somyajit Chakraborty (Sam Chakraborty) is a Doctoral Scholar at Shanghai Jiao Tong University working on Physical AI, LLMs, Computational Physics, CFD, and Complex Networks."',
    'content="Somyajit Chakraborty (Sam Chakraborty) is a Doctoral Researcher at Shanghai Jiao Tong University working on Physical AI, scientific machine learning, computational fluid dynamics, applied mathematics, and complex networks."',
    "meta description",
)
html = replace_required(
    html,
    '<title>Somyajit Chakraborty (Sam) | Physical AI Researcher &amp; Doctoral Scholar</title>',
    '<title>Somyajit Chakraborty | Doctoral Researcher at Shanghai Jiao Tong University</title>',
    "page title",
)

person_schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://samchakraborty.me/#profile",
    "url": "https://samchakraborty.me/",
    "name": "Somyajit Chakraborty | Doctoral Researcher at Shanghai Jiao Tong University",
    "description": "Academic profile of Somyajit Chakraborty, also known as Sam Chakraborty and 叶一明, a Doctoral Researcher at Shanghai Jiao Tong University working on Physical AI, scientific machine learning, computational fluid dynamics, applied mathematics, and complex networks.",
    "mainEntity": {
        "@type": "Person",
        "@id": "https://samchakraborty.me/#person",
        "name": "Somyajit Chakraborty",
        "alternateName": ["Sam Chakraborty", "Yiming Ye", "Ye Yiming", "叶一明"],
        "url": "https://samchakraborty.me/",
        "image": {
            "@type": "ImageObject",
            "url": "https://samchakraborty.me/Profile1.png",
        },
        "jobTitle": "Doctoral Researcher at Shanghai Jiao Tong University",
        "description": "Researcher working on Physical AI, scientific machine learning, computational fluid dynamics, applied mathematics, language models, and complex networks.",
        "email": "somyajitchppr@gmail.com",
        "affiliation": {
            "@type": "CollegeOrUniversity",
            "name": "Shanghai Jiao Tong University",
            "url": "https://www.sjtu.edu.cn/",
        },
        "alumniOf": [
            {
                "@type": "CollegeOrUniversity",
                "name": "University College Cork",
                "url": "https://www.ucc.ie/",
            },
            {
                "@type": "CollegeOrUniversity",
                "name": "Techno India University",
                "url": "https://technoindiauniversity.ac.in/",
            },
        ],
        "identifier": [
            {
                "@type": "PropertyValue",
                "propertyID": "ORCID",
                "value": "0000-0002-2038-5169",
                "url": "https://orcid.org/0000-0002-2038-5169",
            },
            {
                "@type": "PropertyValue",
                "propertyID": "Google Scholar",
                "value": "R9Wr3yQAAAAJ",
                "url": "https://scholar.google.com/citations?user=R9Wr3yQAAAAJ",
            },
            {
                "@type": "PropertyValue",
                "propertyID": "Web of Science",
                "value": "POV-3975-2026",
                "url": "https://www.webofscience.com/wos/author/record/POV-3975-2026",
            },
        ],
        "sameAs": [
            "https://orcid.org/0000-0002-2038-5169",
            "https://scholar.google.com/citations?user=R9Wr3yQAAAAJ",
            "https://github.com/Samsomyajit",
            "https://www.linkedin.com/in/somyajit-sam-chakraborty/",
            "https://www.researchgate.net/profile/Somyajit-Chakraborty",
            "https://sjtu.academia.edu/SomyajitChakraborty",
            "https://www.webofscience.com/wos/author/record/POV-3975-2026",
            "https://faculty.sjtu.edu.cn/chenxizhong/en/xsxx/630387/content/279020.htm",
        ],
        "subjectOf": {
            "@type": "WebPage",
            "name": "Official Shanghai Jiao Tong University profile",
            "url": "https://faculty.sjtu.edu.cn/chenxizhong/en/xsxx/630387/content/279020.htm",
        },
        "knowsAbout": [
            "Physical AI",
            "Scientific Machine Learning",
            "Computational Fluid Dynamics",
            "Physics-Informed Machine Learning",
            "Applied Mathematics",
            "Partial Differential Equations",
            "Fourier and Wavelet Methods",
            "Complex Networks",
            "Large Language Models",
            "AI for Science",
        ],
    },
}
new_schema_block = (
    "<!-- Structured Data: ProfilePage + Person for Google Knowledge Graph / disambiguation -->\n"
    "  <script type=\"application/ld+json\">\n"
    + json.dumps(person_schema, ensure_ascii=False, indent=2)
    + "\n  </script>"
)
html, replacements = re.subn(
    r'<!-- Structured Data: ProfilePage \+ Person for Google Knowledge Graph / disambiguation -->\s*<script type="application/ld\+json">.*?</script>',
    new_schema_block,
    html,
    count=1,
    flags=re.DOTALL,
)
if replacements != 1:
    raise RuntimeError("Could not replace ProfilePage structured data")

for old, new, label in [
    ("Shanghai Jiao Tong University · CGS Doctoral Fellow", "Doctoral Researcher at Shanghai Jiao Tong University", "hero badge"),
    ('<h1 class="hero-title">Somyajit Chakraborty, <span class="hero-subtitle"> (Sam) PhD (reading).</span> <span class="hero-chinese-name">(叶一明)</span></h1>', '<h1 class="hero-title">Somyajit Chakraborty <span class="hero-subtitle">(Sam)</span> <span class="hero-chinese-name">(叶一明)</span></h1>', "hero name"),
    ("PhD Scholar, Dept. of Chemical Engineering — Shanghai Jiao Tong University", "Doctoral Researcher at Shanghai Jiao Tong University", "hero position"),
    ("I am a PhD student at <strong>Shanghai Jiao Tong University (SJTU)</strong>", "I am a Doctoral Researcher at <strong>Shanghai Jiao Tong University (SJTU)</strong>", "biography role"),
    ("<strong>(2) Optimization in CFD:</strong> Building and Improving CFD solvers with improved speed and optimzation using AI, Quantum Computing, GPU assisted HPC. Exploration of CFD-DEM coupling, Finite Element Method, Unsteady Flow, Turbulance Modeling are some of my focus.", "<strong>(2) Optimization in CFD:</strong> Building and improving CFD solvers for greater speed and optimization using AI, quantum computing, and GPU-accelerated high-performance computing. CFD-DEM coupling, the Finite Element Method, unsteady flow, and turbulence modeling are among my main research interests.", "CFD biography wording"),
    ("<h3>Somyajit Chakraborty (Sam), PhD.</h3>", "<h3>Somyajit Chakraborty (Sam)</h3>", "footer name"),
    ("<p>Doctoral Scholar @ Shanghai Jiao Tong University</p>", "<p>Doctoral Researcher at Shanghai Jiao Tong University</p>", "footer role"),
]:
    html = replace_required(html, old, new, label)

for page, route in {
    "home": "/",
    "publications": "/publications/",
    "projects": "/projects/",
    "education": "/education/",
    "experience": "/experience/",
    "blog": "/blog/",
}.items():
    html = html.replace(f'href="#page-{page}"', f'href="{route}"')

news_section = '''
        <!-- Latest News: static crawlable source, enhanced into a rotating feed by JavaScript -->
        <section id="latest-news-section" class="favorites-section" aria-labelledby="latest-news-title">
          <h2 id="latest-news-title" class="section-title">Latest News</h2>
          <ul class="favorites-list">
            <li class="fav-item"><span class="fav-text">Joining the <a class="fav-title" href="/news/">2026 DeeCamp AI4S Training Camp</a> (聚焦AI4S！2026 DeeCamp科学智能训练营).</span></li>
            <li class="fav-item"><span class="fav-text">Presented <span class="fav-title">WindOps Sentinel</span> at MindSpec. <a class="fav-title" href="https://www.youtube.com/watch?v=gyae5ExsYLg&amp;t=3s" target="_blank" rel="noopener noreferrer">Watch presentation →</a></span></li>
            <li class="fav-item"><span class="fav-text"><a class="fav-title" href="/publications/centerdistill/">CenterDistill</a> accepted at CORE EANN / EAAAI 2026.</span></li>
            <li class="fav-item"><span class="fav-text">New paper: <a class="fav-title" href="/publications/fourier-wavelet-transformer/">A Physics-Informed Fourier-Wavelet Transformer for Multiscale Computational Fluid Dynamics Surrogate Modeling</a>.</span></li>
            <li class="fav-item"><span class="fav-text">Started working with <span class="fav-title">Dr. Danny H. Van Der Haven</span> on Porosity from Drag Experiments in collaboration with Global Labs.</span></li>
            <li class="fav-item"><span class="fav-text">Industrial partnership with Beijing Corp on a <span class="fav-title">pipeline digital twin for CFD analysis</span>.</span></li>
          </ul>
          <p><a class="fav-title" href="/news/">View all news →</a></p>
        </section>

'''
if 'id="latest-news-section"' not in html:
    anchor = "        <!-- Research Interests -->"
    if anchor not in html:
        raise RuntimeError("Could not find Research Interests insertion point")
    html = html.replace(anchor, news_section + anchor, 1)

html = html.replace('<span class="kpi-pill-number">5</span>\n              <span class="kpi-pill-label">Conferences</span>', '<span class="kpi-pill-number">6</span>\n              <span class="kpi-pill-label">Conferences</span>', 1)
html = html.replace('<span class="kpi-pill-number">2</span>\n              <span class="kpi-pill-label">Preprints</span>', '<span class="kpi-pill-number">3</span>\n              <span class="kpi-pill-label">Preprints</span>', 1)
html = html.replace('<span class="kpi-pill-number">14</span>\n              <span class="kpi-pill-label">Total</span>', '<span class="kpi-pill-number">16</span>\n              <span class="kpi-pill-label">Total</span>', 1)

pacepal_card = '''            <div class="pub-compact-card animated-card" data-publication-title="PacePal: A Geo-Aware Retrieval-Augmented Chatbot Agent for Walking Engagement and Well-Being">
              <span class="pub-compact-badge conference">Conf.</span>
              <div class="pub-compact-content">
                <div class="pub-compact-title"><a href="/publications/pacepal/">PacePal: A Geo-Aware Retrieval-Augmented Chatbot Agent for Walking Engagement and Well-Being</a></div>
                <div class="pub-compact-authors">Chakraborty, S., Shoaib, M., Minghim, R. and Tabassum, M.</div>
                <div class="pub-compact-meta"><span>ICHCAI 2026 — IEEE Xplore</span><span class="pub-compact-meta-sep">·</span><span>Halden, Norway</span><span class="pub-compact-meta-sep">·</span><span>Accepted</span></div>
              </div>
            </div>'''
fourier_card = '''            <div class="pub-compact-card animated-card" data-publication-title="A Physics-Informed Fourier-Wavelet Transformer for Multiscale Computational Fluid Dynamics Surrogate Modeling">
              <span class="pub-compact-badge preprint">Preprint</span>
              <div class="pub-compact-content">
                <div class="pub-compact-title"><a href="/publications/fourier-wavelet-transformer/">A Physics-Informed Fourier-Wavelet Transformer for Multiscale Computational Fluid Dynamics Surrogate Modeling</a></div>
                <div class="pub-compact-authors">Chakraborty, S., Pan, M. and Chen, X.</div>
                <div class="pub-compact-meta"><span>arXiv:2606.24696</span><span class="pub-compact-meta-sep">·</span><span>Submitted to Engineering Applications of Artificial Intelligence</span><span class="pub-compact-meta-sep">·</span><span>2026</span></div>
              </div>
            </div>'''
html = insert_publication_card(html, "Conference Proceedings", pacepal_card, 'data-publication-title="PacePal:')
html = insert_publication_card(html, "Preprints", fourier_card, 'data-publication-title="A Physics-Informed Fourier-Wavelet')

publication_links = {
    "Comeback or dropout: study of discontinued researchers at early career stage": "/publications/comeback-researchers/",
    "PIBERT: A Physics-Informed Bi-directional Hybrid Spectral Transformer for Multiscale CFD Surrogate Modeling": "/publications/pibert/",
    "Trust@ Health: A Trust-Based Multilayered Network for Scalable Healthcare Service Management": "/publications/trust-health/",
    "CenterDistill: Weakly-Supervised Distillation for Ambiguity-Aware Cross-Lingual QA": "/publications/centerdistill/",
    "LLMPR: A Novel LLM-Driven Transfer Learning based Petition Ranking Model": "/publications/llmpr/",
}
for title, href in publication_links.items():
    html = html.replace(
        f'<div class="pub-compact-title">{title}</div>',
        f'<div class="pub-compact-title"><a href="{href}">{title}</a></div>',
    )
    html = html.replace(
        f'<div class="featured-pub-title">{title}</div>',
        f'<div class="featured-pub-title"><a href="{href}">{title}</a></div>',
    )

footer_anchor = '<p>AI Researcher | LLMs | Computational Physics</p>'
footer_links = '<p>AI Researcher | LLMs | Computational Physics</p>\n            <p><a href="/research/">Research</a> · <a href="/publications/">Publications</a> · <a href="/news/">News</a></p>'
html = replace_required(html, footer_anchor, footer_links, "footer internal links")

INDEX.write_text(html, encoding="utf-8")

latest_news = ROOT / "js" / "latest-news.js"
news_js = latest_news.read_text(encoding="utf-8")
news_js = news_js.replace(
    "    if (document.getElementById(sectionId)) return;\n\n    const home = document.getElementById('page-home');",
    "    document.getElementById(sectionId)?.remove();\n\n    const home = document.getElementById('page-home');",
)
latest_news.write_text(news_js, encoding="utf-8")

app_core = ROOT / "js" / "app-core.js"
app_js = app_core.read_text(encoding="utf-8")
app_js = app_js.replace(
    "home: 'Somyajit Chakraborty (Sam) | Physical AI Researcher & Doctoral Scholar',",
    "home: 'Somyajit Chakraborty | Doctoral Researcher at Shanghai Jiao Tong University',",
)
app_core.write_text(app_js, encoding="utf-8")
