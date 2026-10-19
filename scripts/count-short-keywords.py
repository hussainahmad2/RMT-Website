from pathlib import Path
import re

text = Path("src/data/short-keywords.ts").read_text(encoding="utf-8")
kws = re.findall(r'keyword:\s*"([^"]+)"', text)
urls = re.findall(r'url:\s*"([^"]+)"', text)
print("keywords", len(kws))
print("unique_urls", len(set(urls)))
for u in sorted(set(urls)):
    print(u)
for k in kws:
    print("KW:", k)
