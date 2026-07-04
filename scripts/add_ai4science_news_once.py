from pathlib import Path

root = Path(__file__).resolve().parents[1]
latest_path = root / 'js' / 'latest-news.js'
text = latest_path.read_text(encoding='utf-8')

if 'PharmaDissolve-MCP' not in text:
    entry = """    {
      en: [
        { text: 'PharmaDissolve-MCP', highlight: true },
        { text: ' featured in the ' },
        { text: 'AI4Science Hackathon at Shanghai Jiao Tong University', highlight: true },
        { text: ' with Sam C, Lin Leqi, and Zhou Xingyu.' }
      ],
      zh: [
        { text: 'PharmaDissolve-MCP', highlight: true },
        { text: ' 入选/展示于 ' },
        { text: '上海交通大学 AI4Science Hackathon', highlight: true },
        { text: '，团队成员：Sam C、林乐齐、周星宇。' }
      ],
      href: 'https://ai4.science/events/shanghai-hackathon',
      linkLabel: 'View event →',
      linkLabelZh: '查看活动 →'
    },
"""
    text = text.replace('  const newsItems = [\n', '  const newsItems = [\n' + entry, 1)
    latest_path.write_text(text, encoding='utf-8')

Path(__file__).unlink()
