from pathlib import Path

root = Path(__file__).resolve().parents[1]
path = root / 'news' / 'index.html'
text = path.read_text(encoding='utf-8')

if 'PharmaDissolve-MCP' not in text:
    text = text.replace(
        '        {"@type":"ListItem","position":1,"name":"Joining the 2026 DeeCamp AI4S Training Camp"},',
        '        {"@type":"ListItem","position":1,"name":"PharmaDissolve-MCP featured in the AI4Science Hackathon at Shanghai Jiao Tong University","url":"https://ai4.science/events/shanghai-hackathon"},\n        {"@type":"ListItem","position":2,"name":"Joining the 2026 DeeCamp AI4S Training Camp"},',
        1,
    )
    for old, new in [(6, 7), (5, 6), (4, 5), (3, 4), (2, 3)]:
        text = text.replace(f'"position":{old},', f'"position":{new},', 1)

    card = '''        <article class="card">
          <span class="status">Hackathon</span>
          <h3>PharmaDissolve-MCP featured at AI4Science Hackathon</h3>
          <p>PharmaDissolve-MCP, an MCP-compliant multi-agent dissolution-analysis assistant for traceable and compliant pharmaceutics reporting, was featured in the AI4Science Hackathon at Shanghai Jiao Tong University. Team: Sam C, Lin Leqi, and Zhou Xingyu.</p>
          <div class="link-row"><a class="button primary" href="https://ai4.science/events/shanghai-hackathon" target="_blank" rel="noopener noreferrer">View event</a><a class="button" href="https://github.com/satori55/LLM-for-Pharmaceutical-dissolution-prediction" target="_blank" rel="noopener noreferrer">GitHub project</a></div>
        </article>
'''
    text = text.replace('      <div class="grid two">\n', '      <div class="grid two">\n' + card, 1)
    path.write_text(text, encoding='utf-8')

Path(__file__).unlink()
