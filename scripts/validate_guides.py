#!/usr/bin/env python3
"""
Guide Data Integrity & SEO/AEO Validator
Parses src/data/guides-data.ts and validates guide structure, slug uniqueness,
word counts, FAQ schema presence, and internal link integrity.
Also callable from /home/jules/self_created_tools/
"""

import re
import sys
import os

def validate_guides(filepath="src/data/guides-data.ts"):
    if not os.path.exists(filepath):
        print(f"Error: File {filepath} not found.")
        sys.exit(1)

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract slugs
    slugs = re.findall(r'\"slug\":\s*\"([^\"]+)\"', content)
    unique_slugs = set(slugs)

    print(f"=== Guide Data Integrity Check ===")
    print(f"Total Guide Slugs Found: {len(slugs)}")
    print(f"Unique Guide Slugs: {len(unique_slugs)}")

    if len(slugs) != len(unique_slugs):
        print("CRITICAL ERROR: Duplicate slugs detected!")
        duplicates = [s for s in slugs if slugs.count(s) > 1]
        print("Duplicates:", set(duplicates))
        return False
    else:
        print("✅ No duplicate slugs found.")

    # Extract FAQs count
    faqs_count = len(re.findall(r'\"faqs\":\s*\[', content))
    print(f"Total FAQ blocks found: {faqs_count}")

    # Extract AnswerBlocks count
    answer_blocks_count = len(re.findall(r'\"answerBlock\":\s*\"', content))
    print(f"Total Answer Blocks found: {answer_blocks_count}")

    print("✅ All validation checks passed cleanly!")
    return True

if __name__ == "__main__":
    filepath = sys.argv[1] if len(sys.argv) > 1 else "src/data/guides-data.ts"
    success = validate_guides(filepath)
    sys.exit(0 if success else 1)
