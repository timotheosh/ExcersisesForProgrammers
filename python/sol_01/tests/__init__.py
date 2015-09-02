#!/usr/bin/env python

from unittest import TestCase
from sys import path
path.append('../Sol01')
from Sol01 import Sol01

class TestSol01(TestCase):
    def test_Sol01_calculate1(self):
        calc = Sol01(10, 15)
        tip = calc.tip
        total = calc.total
        self.assertEqual(1.5, tip)
        self.assertEqual(11.5, total)

    def test_Sol01_calculate2(self):
        calc = Sol01(11.25, 15)
        self.assertEqual(1.69, calc.tip)
        self.assertEqual(12.94, calc.total)
