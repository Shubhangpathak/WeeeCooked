"""Read-only HTTP checks of public learning links. Does not imply video review."""
import concurrent.futures, html, json, re, urllib.request
from pathlib import Path
manifest=json.loads(Path('docs/resource-manifest.json').read_text())
urls={r['url'] for r in manifest['resources']}
urls.update(l['practice']['url'] for l in manifest['lessons'])
urls.update(l['solutionUrl'] for l in manifest['lessons'] if l.get('solutionUrl'))
def check(url):
    try:
        request=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0 (compatible; curriculum-link-audit)'})
        with urllib.request.urlopen(request,timeout=18) as response:
            body=response.read(2000000).decode('utf-8',errors='replace')
            title=re.search(r'<title[^>]*>(.*?)</title>',body,re.S|re.I)
            instructor=re.search(r'Instructor:\s*(?:</?[^>]+>\s*)*([^<\n]+)',body)
            return {'url':url,'status':response.status,'finalUrl':response.url,'pageTitle':html.unescape(title.group(1).strip()) if title else None,'instructor':instructor.group(1) if instructor else None,'method':'HTTP GET; not video playback','checkedOn':'2026-09-29'}
    except Exception as e:
        return {'url':url,'status':'unconfirmed','detail':str(e),'method':'HTTP GET; failure may reflect bot protection','checkedOn':'2026-09-29'}
with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool:
    results=list(pool.map(check,sorted(urls)))
Path('docs/resource-verification.json').write_text(json.dumps(results,indent=2),encoding='utf-8')
print(f'{sum(r["status"]==200 for r in results)}/{len(results)} returned HTTP 200')
for r in results:
    if r['status']!=200 or r.get('instructor'): print(json.dumps(r))
