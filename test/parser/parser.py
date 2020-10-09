import re
import json

with open("emoji_list.html", 'r', encoding="utf8") as fp:
    lines = fp.readlines()

lines = ''.join(lines)

regex = "(.)<span> <\/span><code>(:.*?:)"

matches = re.finditer(regex, lines, re.MULTILINE)

finds = dict()
for match in matches:
    finds[match.group(1)] = match.group(2)

with open("emojis.txt", 'w') as fp:
    json.dump(finds, fp)
