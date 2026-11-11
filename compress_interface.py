import os
from PIL import Image

SRC = "interface"
DST = "compressed_interface"
MAX_SIDE = 1400

os.makedirs(DST, exist_ok=True)
before = after = 0

for name in os.listdir(SRC):
    if not name.lower().endswith(".png"):
        continue
    src_path = os.path.join(SRC, name)
    out_path = os.path.join(DST, name)

    img = Image.open(src_path)
    img.thumbnail((MAX_SIDE, MAX_SIDE))
    # تقليل الألوان إلى 256 يصغّر الـ PNG كثيراً مع جودة جيدة
    img = img.convert("RGBA").quantize(colors=256, method=Image.Quantize.FASTOCTREE)
    img.save(out_path, "PNG", optimize=True)

    before += os.path.getsize(src_path)
    after += os.path.getsize(out_path)
    print(name, os.path.getsize(out_path) // 1024, "KB")

print(f"Before: {before/1024:.0f} KB  After: {after/1024:.0f} KB")