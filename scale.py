#!/usr/bin/env python

import sys
import json

stdin = sys.stdin.read()

scale = float(sys.argv[1])

js = json.loads(stdin)

def mapper(l):
  return map(lambda x: float(x)*scale, l)

mapped = map(mapper, js)

print json.dumps(mapped)