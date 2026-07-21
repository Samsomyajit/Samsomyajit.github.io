from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
TITLE = 'Machine learning assisted inverse design of low resistivity In–Ga–Sn–Zn oxide sputtering targets'
AUTHORS = 'Cheng, N., Chakraborty, S., Liu, X., Zhang, W., Liang, X., Zhao, H., Bi, W., Zhang, M., Sun, B., He, J. and Liu, Y.'
JOURNAL = 'Journal of the American Ceramic Society'
DOI = '10.1111/jace.71067'
URL = 'https://doi.org/10.1111/jace.71067'
ARTICLE_ID = 'JACE71067'
INTERNAL_ID = '100636828'
DATE = '2026-07-21'


def read(path):
    return (root / path).read_text(encoding='utf-8')


def write(path, text):
    (root / path).write_text(text, encoding='utf-8')


def remove_under_review_object(text):
    pattern = r"\n\s*\{\n\s*id:\s*6,\n\s*title:\s*\"Machine learning assisted inverse design of low resistivity In–Ga–Sn–Zn oxide sputtering targets\",\n\s*authors:\s*\"Cheng, N\., Chakraborty, S\., Liu, X\., Zhang, W\., Liang, X\., Zhao, H\., Bi, W\., Zhang, M\., Sun, B\., He, J\. and Liu, Y\.\",\n\s*year:\s*2025,\n\s*journal:\s*\"Journal of Alloys and Compounds\",\n\s*status:\s*\"Under review\",?\n\s*\},"
    return re.sub(pattern, '', text, count=1)


def update_js_data(path, export_style=False):
    text = read(path)
    text = remove_under_review_object(text)
    if DOI not in text:
        entry = f'''    {{
      id: 6,
      title: "{TITLE}",
      authors: "{AUTHORS}",
      year: 2026,
      journal: "{JOURNAL}",
      articleId: "{ARTICLE_ID}",
      internalArticleId: "{INTERNAL_ID}",
      doi: "{DOI}",
      url: "{URL}",
    }},
'''
        text = text.replace('  journals: [\n', '  journals: [\n' + entry, 1)
    write(path, text)


def update_publications_md():
    path = 'publications.md'
    text = read(path)
    text = re.sub(r"\n- \*\*Cheng, N\., Chakraborty, S\., Liu, X\., Zhang, W\., Liang, X\., Zhao, H\., Bi, W\., Zhang, M\., Sun, B\., He, J\. and Liu, Y\.\*\*\s*\n\s*_Machine learning assisted inverse design of low resistivity In–Ga–Sn–Zn oxide sputtering targets\._ Journal of Alloys and Compounds\. \(2025\)\n", "\n", text, count=1)
    if DOI not in text:
        entry = f"- **{AUTHORS}, 2026.**  \n  _{TITLE}._ {JOURNAL}. Article ID: {ARTICLE_ID}. [doi: {DOI}]({URL}).\n\n"
        text = text.replace('## 📰 Journals\n', '## 📰 Journals\n' + entry, 1)
    write(path, text)


def update_latest_news():
    path = 'js/latest-news.js'
    text = read(path)
    if DOI not in text:
        entry = f"""    {{
      en: [
        {{ text: 'New publication: ' }},
        {{ text: '{TITLE}', highlight: true }},
        {{ text: ' accepted/published in ' }},
        {{ text: '{JOURNAL}', highlight: true }},
        {{ text: '. DOI: {DOI}.' }}
      ],
      zh: [
        {{ text: '新论文：' }},
        {{ text: '{TITLE}', highlight: true }},
        {{ text: ' 已在 ' }},
        {{ text: '{JOURNAL}', highlight: true }},
        {{ text: ' 发表。DOI：{DOI}。' }}
      ],
      href: '{URL}',
      linkLabel: 'View DOI →',
      linkLabelZh: '查看 DOI →'
    }},
"""
        text = text.replace('  const newsItems = [\n', '  const newsItems = [\n' + entry, 1)
    write(path, text)


def renumber_positions(text):
    n = 0
    def repl(match):
        nonlocal n
        n += 1
        return f'"position":{n}'
    return re.sub(r'"position":\d+', repl, text)


def update_news_page():
    path = 'news/index.html'
    text = read(path)
    if DOI not in text:
        item = f'        {{"@type":"ListItem","position":1,"name":"{TITLE} published in {JOURNAL}","url":"{URL}"}},\n'
        text = text.replace('      "itemListElement": [\n', '      "itemListElement": [\n' + item, 1)
        text = renumber_positions(text)
        card = f'''        <article class="card">
          <span class="status accepted">Published</span>
          <h3>JACerS article published</h3>
          <p><em>{TITLE}</em> has been published in the <em>{JOURNAL}</em>. Article ID: {ARTICLE_ID}; internal article ID: {INTERNAL_ID}; DOI: {DOI}.</p>
          <div class="link-row"><a class="button primary" href="{URL}" target="_blank" rel="noopener noreferrer">View DOI</a></div>
        </article>
'''
        text = text.replace('      <div class="grid two">\n', '      <div class="grid two">\n' + card, 1)
    write(path, text)


def update_index_html():
    path = 'index.html'
    text = read(path)
    text = text.replace('<span class="kpi-pill-number">4</span>\n              <span class="kpi-pill-label">Journals</span>', '<span class="kpi-pill-number">5</span>\n              <span class="kpi-pill-label">Journals</span>', 1)
    text = text.replace('<span class="kpi-pill-number">5</span>\n              <span class="kpi-pill-label">Conferences</span>', '<span class="kpi-pill-number">6</span>\n              <span class="kpi-pill-label">Conferences</span>', 1)
    text = text.replace('<span class="kpi-pill-number">2</span>\n              <span class="kpi-pill-label">Under Review</span>', '<span class="kpi-pill-number">1</span>\n              <span class="kpi-pill-label">Under Review</span>', 1)
    text = text.replace('<span class="kpi-pill-number">2</span>\n              <span class="kpi-pill-label">Preprints</span>', '<span class="kpi-pill-number">3</span>\n              <span class="kpi-pill-label">Preprints</span>', 1)
    text = text.replace('<span class="kpi-pill-number">14</span>\n              <span class="kpi-pill-label">Total</span>', '<span class="kpi-pill-number">16</span>\n              <span class="kpi-pill-label">Total</span>', 1)
    old = '''            <div class="pub-compact-card animated-card">
              <span class="pub-compact-badge pending">Pending</span>
              <div class="pub-compact-content">
                <div class="pub-compact-title">Machine learning assisted inverse design of low resistivity In–Ga–Sn–Zn oxide sputtering targets</div>
                <div class="pub-compact-authors">Cheng, N., Chakraborty, S., Liu, X., Zhang, W., Liang, X., Zhao, H., Bi, W., Zhang, M., Sun, B., He, J. and Liu, Y.</div>
                <div class="pub-compact-meta">
                  <span>Journal of Alloys and Compounds</span>
                  <span class="pub-compact-meta-sep">·</span>
                  <span>2025</span>
                </div>
              </div>
            </div>
'''
    text = text.replace(old, '', 1)
    if DOI not in text:
        card = f'''            <div class="pub-compact-card animated-card">
              <span class="pub-compact-badge journal">Journal</span>
              <div class="pub-compact-content">
                <div class="pub-compact-title">{TITLE}</div>
                <div class="pub-compact-authors">{AUTHORS}</div>
                <div class="pub-compact-meta">
                  <span>{JOURNAL}</span>
                  <span class="pub-compact-meta-sep">·</span>
                  <span>Article ID: {ARTICLE_ID}</span>
                  <span class="pub-compact-meta-sep">·</span>
                  <span>2026</span>
                  <span class="pub-compact-meta-sep">·</span>
                  <a href="{URL}" target="_blank" rel="noopener">DOI</a>
                </div>
              </div>
            </div>
'''
        marker = '          <div class="pub-compact-list">\n'
        journal_start = text.index('Journal Articles')
        insert_pos = text.index(marker, journal_start) + len(marker)
        text = text[:insert_pos] + card + text[insert_pos:]
    write(path, text)


def update_app_core():
    path = 'js/app-core.js'
    text = read(path)
    text = text.replace('      Journals: 4,\n      Conferences: 6,\n      \'Under Review\': 2,', '      Journals: 5,\n      Conferences: 6,\n      \'Under Review\': 1,')
    write(path, text)


def update_sitemap():
    path = 'sitemap.xml'
    text = read(path)
    for loc in ['/', '/news/', '/publications/']:
        pattern = rf'<url><loc>https://samchakraborty\.me{re.escape(loc)}</loc>(?:<lastmod>[^<]+</lastmod>)?</url>'
        text = re.sub(pattern, f'<url><loc>https://samchakraborty.me{loc}</loc><lastmod>{DATE}</lastmod></url>', text)
    write(path, text)

update_js_data('js/data.js')
update_js_data('react-app/src/data/publications.js')
update_publications_md()
update_latest_news()
update_news_page()
update_index_html()
update_app_core()
update_sitemap()

Path(__file__).unlink()
