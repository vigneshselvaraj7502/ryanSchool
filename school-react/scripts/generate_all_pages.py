import os
import re

page_defs = [
    ('index.html', 'HomePage.jsx', 'HomePage'),
    ('about.html', 'AboutPage.jsx', 'AboutPage'),
    ('academics.html', 'AcademicsPage.jsx', 'AcademicsPage'),
    ('programs.html', 'ProgramsPage.jsx', 'ProgramsPage'),
    ('facilities.html', 'FacilitiesPage.jsx', 'FacilitiesPage'),
    ('activities.html', 'ActivitiesPage.jsx', 'ActivitiesPage'),
    ('events.html', 'EventsPage.jsx', 'EventsPage'),
    ('gallery.html', 'GalleryPage.jsx', 'GalleryPage'),
    ('admissions.html', 'AdmissionsPage.jsx', 'AdmissionsPage'),
    ('contact.html', 'ContactPage.jsx', 'ContactPage'),
    ('playgroup.html', 'PlaygroupPage.jsx', 'PlaygroupPage'),
    ('nursery.html', 'NurseryPage.jsx', 'NurseryPage'),
    ('juniorkg.html', 'JuniorKgPage.jsx', 'JuniorKgPage'),
    ('seniorkg.html', 'SeniorKgPage.jsx', 'SeniorKgPage'),
    ('daycare.html', 'DaycarePage.jsx', 'DaycarePage'),
    ('park.html', 'ParkPage.jsx', 'ParkPage'),
    ('news.html', 'NewsPage.jsx', 'NewsPage'),
    ('principal.html', 'PrincipalPage.jsx', 'PrincipalPage'),
]

page_route_map = {
    'index.html': '/',
    'about.html': '/about',
    'academics.html': '/academics',
    'programs.html': '/programs',
    'facilities.html': '/facilities',
    'activities.html': '/activities',
    'events.html': '/events',
    'gallery.html': '/gallery',
    'admissions.html': '/admissions',
    'contact.html': '/contact',
    'playgroup.html': '/playgroup',
    'nursery.html': '/nursery',
    'juniorkg.html': '/juniorkg',
    'seniorkg.html': '/seniorkg',
    'daycare.html': '/daycare',
    'park.html': '/park',
    'news.html': '/news',
    'principal.html': '/principal',
}

def style_str_to_jsx(style_str):
    parts = [p.strip() for p in style_str.split(';') if p.strip()]
    props = []
    for part in parts:
        if ':' not in part:
            continue
        k, v = part.split(':', 1)
        k = k.strip()
        v = v.strip()
        k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
        v = re.sub(r'assets/', '/assets/', v)
        v_escaped = v.replace("'", "\\'")
        props.append(f"{k_camel}: '{v_escaped}'")
    return "{{ " + ", ".join(props) + " }}"

def convert_html_to_jsx(html_content, component_name):
    s = html_content

    # Replace comments <!-- ... --> with {/* ... */}
    def clean_comment(m):
        c = m.group(1).replace('{', '').replace('}', '').replace('/*', '').replace('*/', '')
        return f'{{/* {c.strip()} */}}'
    s = re.sub(r'<!--(.*?)-->', clean_comment, s, flags=re.DOTALL)

    # Replace class=" with className="
    s = re.sub(r'\bclass="', 'className="', s)
    s = re.sub(r"\bclass='", "className='", s)

    # Replace for=" with htmlFor="
    s = re.sub(r'\bfor="', 'htmlFor="', s)
    s = re.sub(r"\bfor='", "htmlFor='", s)

    # Replace style="..." with style={{ ... }}
    s = re.sub(r'style="([^"]*)"', lambda m: f'style={style_str_to_jsx(m.group(1))}', s)

    # Self-close void tags
    # img
    s = re.sub(r'<img\b([^>]*?[^/])>', r'<img\1 />', s)
    # input
    s = re.sub(r'<input\b([^>]*?[^/])>', r'<input\1 />', s)
    # br
    s = re.sub(r'<br\s*/?>', '<br />', s)
    # hr
    s = re.sub(r'<hr\s*/?>', '<hr />', s)

    # SVG attributes
    svg_map = {
        'stroke-width': 'strokeWidth',
        'stroke-linecap': 'strokeLinecap',
        'stroke-linejoin': 'strokeLinejoin',
        'fill-rule': 'fillRule',
        'clip-rule': 'clipRule',
        'stroke-miterlimit': 'strokeMiterlimit',
    }
    for k, v in svg_map.items():
        s = re.sub(rf'\b{k}=', f'{v}=', s)

    # Fix relative image src
    s = re.sub(r'src="assets/', 'src="/assets/', s)
    s = re.sub(r"src='assets/", "src='/assets/", s)

    # Replace modal trigger buttons
    def modal_btn_repl(m):
        tag_start = m.group(0)
        prog = 'Play Group'
        typ = 'enquiry'
        pm = re.search(r'data-program="([^"]*)"', tag_start)
        tm = re.search(r'data-type="([^"]*)"', tag_start)
        if pm:
            prog = pm.group(1)
        if tm:
            typ = tm.group(1)
        # clean out data- attributes
        cleaned = re.sub(r'\s*data-program="[^"]*"', '', tag_start)
        cleaned = re.sub(r'\s*data-type="[^"]*"', '', cleaned)
        cleaned = re.sub(r'\s*open-enquiry-modal', '', cleaned)
        # add onClick
        return cleaned[:-1] + f' onClick={{() => openModal("{prog}", "{typ}")}}>'

    s = re.sub(r'<button\b[^>]*open-enquiry-modal[^>]*>', modal_btn_repl, s)

    # Replace <a href="page.html..."> with <Link to="/page...">
    for h_name, route in page_route_map.items():
        # href="page.html#anchor"
        s = re.sub(rf'<a\b([^>]*?)href="{h_name}#([^"]+)"([^>]*)>',
                   rf'<Link\1to="{route}#\2"\3>', s)
        # href="page.html"
        s = re.sub(rf'<a\b([^>]*?)href="{h_name}"([^>]*)>',
                   rf'<Link\1to="{route}"\2>', s)

    # Replace any closing </a> with </Link> where we used <Link
    tokens = re.split(r'(</?Link\b[^>]*>|</?a\b[^>]*>)', s)
    link_stack = []
    new_tokens = []
    for t in tokens:
        if t.startswith('<Link'):
            link_stack.append('Link')
            new_tokens.append(t)
        elif t.startswith('<a'):
            link_stack.append('a')
            new_tokens.append(t)
        elif t == '</a>' or t == '</Link>':
            if link_stack:
                last = link_stack.pop()
                new_tokens.append(f'</{last}>')
            else:
                new_tokens.append('</a>')
        else:
            new_tokens.append(t)
    s = "".join(new_tokens)

    # Special case: replace data-counter-target="X" with AnimatedCounter
    def counter_repl(m):
        full = m.group(0)
        target_m = re.search(r'data-counter-target="(\d+)"', full)
        prefix_m = re.search(r'data-counter-prefix="([^"]*)"', full)
        suffix_m = re.search(r'data-counter-suffix="([^"]*)"', full)
        target = target_m.group(1) if target_m else '100'
        prefix = prefix_m.group(1) if prefix_m else ''
        suffix = suffix_m.group(1) if suffix_m else ''
        
        cleaned = re.sub(r'\s*data-counter-target="\d+"', '', full)
        cleaned = re.sub(r'\s*data-counter-prefix="[^"]*"', '', cleaned)
        cleaned = re.sub(r'\s*data-counter-suffix="[^"]*"', '', cleaned)
        tag_open = cleaned[:cleaned.index('>')+1]
        tag_close = cleaned[cleaned.rindex('<'):]
        return f'{tag_open}<AnimatedCounter target={{{target}}} prefix="{prefix}" suffix="{suffix}" />{tag_close}'

    s = re.sub(r'<[a-zA-Z0-9]+\b[^>]*data-counter-target="[^"]*"[^>]*>.*?</[a-zA-Z0-9]+>', counter_repl, s)

    return s

def extract_body(html_text):
    m_overlay = re.search(r'id=["\']mobile-overlay["\'][^>]*></div>', html_text)
    if m_overlay:
        start_pos = m_overlay.end()
    else:
        m_hdr = re.search(r'</header>', html_text)
        start_pos = m_hdr.end() if m_hdr else 0

    m_footer = re.search(r'<footer\b', html_text)
    end_pos = m_footer.start() if m_footer else len(html_text)

    return html_text[start_pos:end_pos].strip()

def build_component(component_name, jsx_body):
    return f"""import React, {{ useState, useEffect }} from 'react';
import {{ Link }} from 'react-router-dom';
import {{ useModal }} from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function {component_name}() {{
  const {{ openModal }} = useModal();

  useEffect(() => {{
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {{
      entries.forEach(entry => {{
        if (entry.isIntersecting) {{
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }}
      }});
    }}, {{ threshold: 0.12 }});

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }}, []);

  return (
    <div className="{component_name.lower()}-page">
      {jsx_body}
    </div>
  );
}}
"""

out_dir = r"d:\school site\school-react\src\pages"
os.makedirs(out_dir, exist_ok=True)

for html_file, jsx_file, comp_name in page_defs:
    src_path = os.path.join(r"d:\school site\school", html_file)
    dst_path = os.path.join(out_dir, jsx_file)
    
    if not os.path.exists(src_path):
        print(f"File not found: {src_path}")
        continue
    
    with open(src_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    body = extract_body(html)
    jsx_body = convert_html_to_jsx(body, comp_name)
    component_code = build_component(comp_name, jsx_body)
    
    with open(dst_path, 'w', encoding='utf-8') as f:
        f.write(component_code)
    
    print(f"Generated {jsx_file} ({len(component_code)} bytes)")

print("All 18 page components regenerated successfully!")
