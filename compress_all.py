import os
from PIL import Image

SRC = "."
DST = "compressed"
QUALITY = 80
MAX_SIDE = 1400
KEEP_EXT = True     # True = يبقي الامتداد الأصلي، False = يحوّل الكل إلى OUT_EXT
OUT_EXT = ".webp"    # أو ".jpg"

count = 0
saved = 0

for root, dirs, files in os.walk(SRC):
    dirs[:] = [d for d in dirs if d not in (DST, ".git", "interface")]
    for name in files:
        low = name.lower()
        if not low.endswith((".jpg", ".jpeg", ".png")) or name == "logo.png":
            continue
        src_path = os.path.join(root, name)
        out_dir = os.path.join(DST, os.path.relpath(root, SRC))
        os.makedirs(out_dir, exist_ok=True)

        base, orig_ext = os.path.splitext(name)
        ext = orig_ext.lower() if KEEP_EXT else OUT_EXT
        out_path = os.path.join(out_dir, base + ext)

        img = Image.open(src_path)
        img.thumbnail((MAX_SIDE, MAX_SIDE))

        if ext == ".webp":
            img.convert("RGB").save(out_path, "WEBP", quality=QUALITY, method=6)
        elif ext in (".jpg", ".jpeg"):
            img.convert("RGB").save(out_path, "JPEG", quality=QUALITY, optimize=True, progressive=True)
        else:  # png
            img.save(out_path, "PNG", optimize=True)

        saved += os.path.getsize(src_path) - os.path.getsize(out_path)
        count += 1
        print(f"{count}: {out_path}")

print(f"تم ضغط {count} صورة، وفّرت {saved/1024/1024:.1f} MB")