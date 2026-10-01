import os

css_path = r'd:\school site\school-react\src\index.css'
with open(css_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

import_lines = []
other_lines = []

for line in lines:
    if line.strip().startswith('@import url'):
        import_lines.append(line)
    else:
        other_lines.append(line)

new_content = ''.join(import_lines) + '\n' + ''.join(other_lines)

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Moved @import to top of index.css')
