from PIL import Image
import os

for folder, _, files in os.walk("."):
    if ".git" in folder:
        continue
    for f in files:
        ext = f.lower().rsplit(".", 1)[-1]
        if ext not in ("jpg", "jpeg", "png") or f.lower() == "logo.png":
            continue
        p = os.path.join(folder, f)
        im = Image.open(p)
        if im.width > 900:
            im = im.resize((900, round(im.height * 900 / im.width)), Image.LANCZOS)
        if ext in ("jpg", "jpeg"):
            im.convert("RGB").save(p, "JPEG", quality=78, optimize=True, progressive=True)
        else:
            im.save(p, optimize=True)
        print("ok", p)