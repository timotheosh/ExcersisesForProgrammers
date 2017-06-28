#!/usr/bin/python3

S = input().strip()
try:
    num = int(S)
    print(S)
except ValueError:
    print("Bad String")
