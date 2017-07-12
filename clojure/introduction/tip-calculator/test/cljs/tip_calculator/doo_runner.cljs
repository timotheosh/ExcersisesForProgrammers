(ns tip-calculator.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [tip-calculator.core-test]))

(doo-tests 'tip-calculator.core-test)

