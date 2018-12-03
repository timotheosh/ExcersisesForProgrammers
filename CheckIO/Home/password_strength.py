#!/usr/bin/env python3
import re

def checkio(data):
    if (re.search("[a-z]+", data)
        and re.search("[A-Z]+", data)
        and re.search("[0-9]+", data)
        and 10 <= len(data) <= 64):
        return True
    return False

#Some hints
#Just check all conditions


#These "asserts" using only for self-checking and not necessary for auto-testing
assert checkio('A1213pokl') == False, "1st example"
assert checkio('bAse730onE4') == True, "2nd example"
assert checkio('asasasasasasasaas') == False, "3rd example"
assert checkio('QWERTYqwerty') == False, "4th example"
assert checkio('123456123456') == False, "5th example"
assert checkio('QwErTy911poqqqq') == True, "6th example"
print("Coding complete? Click 'Check' to review your tests and earn cool rewards!")
