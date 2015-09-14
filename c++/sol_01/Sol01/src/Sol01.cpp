/*
 * (C) 2015 Tim Hawes
 * Class Sol01
 * For calculating tip and total based on bill and tip rate.
 */

#include "Sol01.hpp"
#include <iostream>
#include <iomanip>

Sol01::Sol01(int bill, int tip_rate) {
  bill = (float)bill;
  tip_rate = (float)tip_rate;
  calculate();
}

void Sol01::calculate() {
  tip = (float)tip_rate/100.0 * bill;
  total = bill + tip;
}

void Sol01::display() {
  std::cout << std::fixed << std::setprecision(2);
  std::cout << "Tip: " << tip << std::endl;
  std::cout << "Bill Total: " << total << std::endl;
}
