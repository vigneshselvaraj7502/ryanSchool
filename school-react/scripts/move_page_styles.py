import os
import re

css_to_add = """
/* Custom Nursery & Junior KG animations */
@keyframes float-bubble {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
}
.animate-float-bubble { animation: float-bubble 3s ease-in-out infinite; }

@keyframes pop-in {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
.animate-pop-in { animation: pop-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }

@keyframes shake-bubble {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
.animate-shake-bubble { animation: shake-bubble 0.4s ease-in-out; }

@keyframes float-shape {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
}
.animate-float-shape { animation: float-shape 3s ease-in-out infinite; }

@keyframes shake-shape {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
.animate-shake-shape { animation: shake-shape 0.4s ease-in-out; }

.hide-scroll::-webkit-scrollbar { display: none; }
.hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
"""

index_css_path = r'd:\school site\school-react\src\index.css'
with open(index_css_path, 'a', encoding='utf-8') as f:
    f.write(css_to_add)
print('Appended bubble and shape animations to index.css')

# Strip <style>...</style> from JuniorKgPage.jsx and NurseryPage.jsx
for f in ['JuniorKgPage.jsx', 'NurseryPage.jsx']:
    p = os.path.join(r'd:\school site\school-react\src\pages', f)
    with open(p, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    cleaned = re.sub(r'<style\b[^>]*>.*?</style>', '', content, flags=re.DOTALL)
    with open(p, 'w', encoding='utf-8') as fh:
        fh.write(cleaned)
    print(f'Stripped <style> from {f}')
