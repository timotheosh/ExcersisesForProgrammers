/**
 * (C) 2015 Tim Hawes
 * Program:     sol01
 * Description: First exercise solution in C++
 */

#include <iostream>
#include <string>

int main(int argc, char **argv) {
  float bill = 0.0;
  int tip_rate;
  std::string line;

  std::cout << "How much is the bill? " << std::flush;
  if (!(std::cin >> bill)) {
    std::cout << "You did not enter in the bill as a number with a decimal." << std::endl
              << "Please enter the bill amount as a decimal: " << std::flush;
  }

  std::cout << "What is the tip rate percentage (default 15)? ";
  std::cin >> tip_rate;
  if (!tip_rate) {
    tip_rate = 15;
  }
  std::cout << "Bill: " << bill << std::endl;
  std::cout << "Tip rate: " << tip_rate << std::endl;
  return(0);
}
