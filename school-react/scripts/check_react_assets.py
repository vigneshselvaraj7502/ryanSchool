import os
import re

public_assets = r'd:\school site\school-react\public\assets'
pages_dir = r'd:\school site\school-react\src\pages'

all_ok = True
missing_count = 0
total_checked = 0

for f in os.listdir(pages_dir):
    if not f.endswith('.jsx'):
        continue
    with open(os.path.join(pages_dir, f), 'r', encoding='utf-8') as fh:
        c = fh.read()
    
    srcs = re.findall(r'src=["\']/assets/([^"\']+)["\']', c)
    srcs += re.findall(r'url\(["\']?/assets/([^"\'\)]+)["\']?\)', c)
    
    for s in srcs:
        total_checked += 1
        clean_s = s.split('?')[0]
        p = os.path.join(public_assets, clean_s.replace('/', os.sep))
        if not os.path.exists(p):
            print(f'Missing in {f}: {s}')
            missing_count += 1
            all_ok = False

print(f'Checked {total_checked} image references across all 18 pages. Missing: {missing_count}')
if all_ok:
    print('All image paths resolve with 100% perfection!')
