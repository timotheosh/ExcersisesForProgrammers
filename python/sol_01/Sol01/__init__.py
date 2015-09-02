#!/usr/bin/env python

from sys import exit

class Sol01:
    def __init__(self, bill, tip_rate):
        self.bill = bill
        self.tip_rate = tip_rate
        self.tip = None
        self.total = None
        self._calculate()

    def _calculate(self):
        try:
            tip = (float(self.tip_rate)/100.0) * self.bill
            self.tip = float(format(tip, '.2f'))
            self.total = self.bill + self.tip
        except Exception,e:
            print e.message
            exit(1)

    def display(self):
        print "Tip: %s" % self.tip
        print "Bill Total: %s" % self.total

def main(bill, tip_rate):
    calc = Sol01(bill,tip_rate)
    calc.display()

if __name__ == "__main__":
    main(10,15)
