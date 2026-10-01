import os
from PIL import Image

screenshot_path = r'C:\Users\LENOVO\.gemini\antigravity\brain\428bfec5-173f-497e-b584-a34e9ab700a3\.user_uploaded\media_1789532495291.png'
assets_dir = r'd:\school site\school\assets'

# Let's crop a small patch from the right side of screenshot_path (the stage photo)
# screenshot is 1200+ px wide
s_img = Image.open(screenshot_path)
print('Screenshot size:', s_img.size)

# Let's check aspect ratio of the photo in screenshot: roughly 4:3 or 16:9
# Let's search all jpg in assets that are stage or kids performing
candidates = []
for f in os.listdir(assets_dir):
    if f.lower().endswith('.jpg'):
        candidates.append(f)

print(f'Total jpgs: {len(candidates)}')

# Let's check DSC_0151.jpg
for test_f in ['DSC_0151.jpg', 'DSC_0001.jpg', 'DSC_0014.jpg', 'DSC_0125.jpg', 'DSC_0310.jpg', 'DSC_0534.jpg']:
    if os.path.exists(os.path.join(assets_dir, test_f)):
        im = Image.open(os.path.join(assets_dir, test_f))
        print(test_f, im.size)
