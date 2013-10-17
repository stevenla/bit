#!/usr/bin/env python
import sys
import json

stdin = sys.stdin.read()

js = json.loads(stdin)

ret = []

point = []
counter = 0
for face in js:
  point.append(face)
  counter += 1
  if counter == 3:
    ret.append(point)
    counter = 0
    point = []

  #for i in range(1, len(face)-1):
    #ret.append([face[0], face[i], face[i+1]])
  #print face

print len(ret)
print ret