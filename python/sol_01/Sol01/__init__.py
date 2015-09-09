#!/usr/bin/env python

from sys import exit

class Sol01:
    def __init__(self, bill, tip_rate):
        try:
            self.bill = float(bill)
            self.tip_rate = float(tip_rate)
            self.tip = None
            self.total = None
            self._calculate()
        except Exception,e:
            print e.message
            exit(1)

    def _calculate(self):
        try:
            tip = (float(self.tip_rate)/100.0) * self.bill
            self.tip = format(tip, '.2f')
            self.total = format(self.bill + tip, '.2f')
        except Exception,e:
            print e.message
            exit(1)

    def display(self):
        print "Tip: %s" % self.tip
        print "Bill Total: %s" % self.total

def main():
    bill = raw_input("How much is the bill? ")
    tip_rate = raw_input("What is the tip rate percentage (default 15)? ")
    if not tip_rate:
        tip_rate = 15
    calc = Sol01(bill,tip_rate)
    calc.display()

if __name__ == "__main__":
    main()
