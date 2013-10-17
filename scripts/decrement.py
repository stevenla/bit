#!/usr/bin/env python
import sys
import json

stdin = sys.stdin.read()

js = json.loads(stdin)

def mapper(l):
  return map(lambda x: int(x) - 1, l)

print map(mapper, js)