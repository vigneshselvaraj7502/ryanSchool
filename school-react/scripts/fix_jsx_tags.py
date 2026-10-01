import os

# 1. Fix PlaygroupPage.jsx
p_path = r'd:\school site\school-react\src\pages\PlaygroupPage.jsx'
with open(p_path, 'r', encoding='utf-8') as f:
    p_content = f.read()

target_p = 'A glimpse into a day full of interactive games, park adventures, and creative arts.</p>\n        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10 items-stretch mt-16">'
repl_p = 'A glimpse into a day full of interactive games, park adventures, and creative arts.</p>\n        </div>\n        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10 items-stretch mt-16">'

p_crlf = '\r\n' in p_content
p_norm = p_content.replace('\r\n', '\n')
if target_p in p_norm:
    p_norm = p_norm.replace(target_p, repl_p)
    if p_crlf:
        p_norm = p_norm.replace('\n', '\r\n')
    with open(p_path, 'w', encoding='utf-8') as f:
        f.write(p_norm)
    print('Fixed PlaygroupPage.jsx')
else:
    print('Playgroup target not matched')

# 2. Fix NurseryPage.jsx
n_path = r'd:\school site\school-react\src\pages\NurseryPage.jsx'
with open(n_path, 'r', encoding='utf-8') as f:
    n_content = f.read()

target_n = '            </div>\n        </div>\n        </div>\n    </section>'
repl_n = '            </div>\n        </div>\n    </section>'

n_crlf = '\r\n' in n_content
n_norm = n_content.replace('\r\n', '\n')
if target_n in n_norm:
    n_norm = n_norm.replace(target_n, repl_n, 1)
    if n_crlf:
        n_norm = n_norm.replace('\n', '\r\n')
    with open(n_path, 'w', encoding='utf-8') as f:
        f.write(n_norm)
    print('Fixed NurseryPage.jsx')
else:
    print('Nursery target not matched')

# 3. Fix SeniorKgPage.jsx
s_path = r'd:\school site\school-react\src\pages\SeniorKgPage.jsx'
with open(s_path, 'r', encoding='utf-8') as f:
    s_content = f.read()

target_s = '        </div>\n    </section>\n        </div>\n    </section>'
repl_s = '        </div>\n    </section>'

s_crlf = '\r\n' in s_content
s_norm = s_content.replace('\r\n', '\n')
if target_s in s_norm:
    s_norm = s_norm.replace(target_s, repl_s, 1)
    if s_crlf:
        s_norm = s_norm.replace('\n', '\r\n')
    with open(s_path, 'w', encoding='utf-8') as f:
        f.write(s_norm)
    print('Fixed SeniorKgPage.jsx')
else:
    print('SeniorKg target not matched')
