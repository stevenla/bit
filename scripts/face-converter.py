#!/usr/bin/env python
import sys

if len(sys.argv) != 1:
  start = int(sys.argv[1])
else:
  start = 0

def mapper(x):
  return int(x) + start

stdin = sys.stdin.read()

listed = stdin.split(',-1,')

cleaned = map(str.strip, listed)

print 'var faces = ['

for face_string in cleaned:
  indices = face_string.split(',')
  if len(indices) == 1:
    continue
  indices = map(mapper, indices)
  sys.stdout.write('\t[%s, %s, %s],\n' % (indices[0], indices[1], indices[2]))
  for i in range(2, len(indices)-1):
    sys.stdout.write('\t[%s, %s, %s],\n' % (indices[0], indices[i], indices[i+1]))
  #print indices

print '];'

#print cleaned