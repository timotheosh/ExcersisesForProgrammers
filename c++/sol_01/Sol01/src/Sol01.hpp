/*
 * (C) 2015 Tim Hawes
 * Class Sol01
 * For calculating tip and total based on bill and tip rate.
 */

#ifndef SOL01_HPP
#define SOL01_HPP

class Sol01 {
 private:
  float bill;
  float tip_rate;
  float tip;
  float total;

 public:
  Sol01(int bill, int tip_rate);
  void calculate();
  void display();
};

#endif // SOL01_HPP
