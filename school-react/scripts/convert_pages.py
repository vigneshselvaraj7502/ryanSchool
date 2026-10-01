import os
import re

def style_str_to_jsx(style_str):
    # e.g. "background-image: url('assets/pattern.png'); opacity: 0.8"
    parts = [p.strip() for p in style_str.split(';') if p.strip()]
    props = []
    for part in parts:
        if ':' not in part:
            continue
        k, v = part.split(':', 1)
        k = k.strip()
        v = v.strip()
        # kebab to camelCase
        k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
        # replace assets/ with /assets/
        v = re.sub(r'assets/', '/assets/', v)
        # quote string value
        v_escaped = v.replace('"', '\\"')
        props.append(f"{k_camel}: '{v_escaped}'")
    return "{{ " + ", ".join(props) + " }}"

def html_to_jsx(body_html, page_name="Page"):
    s = body_html

    # Replace comments <!-- ... --> with {/* ... */}
    s = re.sub(r'<!--(.*?)-->', lambda m: '{/*' + m.group(1).replace('{', '').replace('}', '') + '*/}', s, flags=re.DOTALL)

    # Replace class=" with className="
    s = re.sub(r'\bclass="', 'className="', s)
    s = re.sub(r"\bclass='", "className='", s)

    # Replace for=" with htmlFor="
    s = re.sub(r'\bfor="', 'htmlFor="', s)

    # Replace style="..." with style={{ ... }}
    s = re.sub(r'style="([^"]*)"', lambda m: f'style={style_str_to_jsx(m.group(1))}', s)

    # Self-closing tags: <img>, <input>, <br>, <hr>
    # img: <img ... > where not ending in />
    s = re.sub(r'<img([^>]*?[^/])>', r'<img\1 />', s)
    s = re.sub(r'<input([^>]*?[^/])>', r'<input\1 />', s)
    s = re.sub(r'<br(\s*?[^/])>', r'<br />', s)
    s = re.sub(r'<br>', r'<br />', s)
    s = re.sub(r'<hr(\s*?[^/])>', r'<hr />', s)
    s = re.sub(r'<hr>', r'<hr />', s)

    # SVG attributes
    svg_attrs = {
        'stroke-width': 'strokeWidth',
        'stroke-linecap': 'strokeLinecap',
        'stroke-linejoin': 'strokeLinejoin',
        'fill-rule': 'fillRule',
        'clip-rule': 'clipRule',
        'stroke-miterlimit': 'strokeMiterlimit',
    }
    for k, v in svg_attrs.items():
        s = re.sub(rf'\b{k}=', f'{v}=', s)

    # Fix relative image src: src="assets/ -> src="/assets/
    s = re.sub(r'src="assets/', 'src="/assets/', s)
    s = re.sub(r"src='assets/", "src='/assets/", s)

    # Internal page links: href="name.html" -> to="/name"
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

    # Replace <a href="X.html#anchor"> with <Link to="/X#anchor">
    for page_file, route in page_route_map.items():
        # with anchor
        s = re.sub(rf'<a\s+([^>]*?)href="{page_file}#([^"]+)"([^>]*)>',
                   rf'<Link \1to="{route}#\2"\3>', s)
        # without anchor
        s = re.sub(rf'<a\s+([^>]*?)href="{page_file}"([^>]*)>',
                   rf'<Link \1to="{route}"\2>', s)
        # closing </a> is fine, but in JSX if we used Link, replace </a> with </Link> where appropriate
        # Note: we can also keep <Link to="..."> or keep <a> for internal links if preferred,
        # but <Link to="..."> is standard in React Router!

    # Replace open-enquiry-modal buttons
    # e.g. <button class="open-enquiry-modal ... " data-program="Play Group" data-type="enquiry">
    def replace_modal_btn(m):
        attrs = m.group(1)
        prog_m = re.search(r'data-program="([^"]*)"', attrs)
        type_m = re.search(r'data-type="([^"]*)"', attrs)
        prog = prog_m.group(1) if prog_m else 'Play Group'
        typ = type_m.group(1) if type_m else 'enquiry'
        # clean attrs
        clean_attrs = re.sub(r'data-program="[^"]*"', '', attrs)
        clean_attrs = re.sub(r'data-type="[^"]*"', '', clean_attrs)
        return f'<button onClick={{() => openModal("{prog}", "{typ}")}} {clean_attrs}>'

    s = re.sub(r'<button([^>]*?open-enquiry-modal[^>]*?)>', replace_modal_btn, s)

    return s

print("Helper defined.")
