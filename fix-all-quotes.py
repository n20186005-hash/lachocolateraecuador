#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys

file_path = sys.argv[1] if len(sys.argv) > 1 else "src/i18n/translations.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Chinese curly double quotes with escaped ASCII quotes
# U+201C (") -> \"
# U+201D (") -> \"
content = content.replace('\u201c', '\\"')
content = content.replace('\u201d', '\\"')

# Replace Chinese curly single quotes with escaped ASCII single quotes
# U+2018 (') -> \'
# U+2019 (') -> \'
content = content.replace('\u2018', "\\'")
content = content.replace('\u2019', "\\'")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Fixed all Chinese quotes in {file_path}")
