#!/usr/bin/env python3
"""Small dependency-free smoke checks for the static Cards site."""

from pathlib import Path
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
REQUIRED = ("index.html", "classic.html", "card2.html", "think-with-ai.html")


def main() -> int:
    missing = [name for name in REQUIRED if not (ROOT / name).is_file()]
    if missing:
        print("Missing required files: " + ", ".join(missing), file=sys.stderr)
        return 1

    index = (ROOT / "index.html").read_text(encoding="utf-8")
    links = re.findall(r'href="([^"?#]+)', index)
    broken = [link for link in links if link.endswith(".html") and not (ROOT / link).is_file()]
    if broken:
        print("Broken local links: " + ", ".join(broken), file=sys.stderr)
        return 1

    print(f"Cards smoke check passed ({len(REQUIRED)} required files, {len(links)} landing-page links).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
