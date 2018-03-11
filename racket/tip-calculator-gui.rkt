#lang racket

(require racket/gui/base)

(define frame (new frame% [label "Meal Tip Calculator"]))

(define group-box-panel (new group-box-panel%
                             (parent frame)
                             (label "Meal Tip Calculator")))

(define meal-cost-field (new text-field%
                             (label "Meal Cost")
                             (parent group-box-panel)
                             (init-value "0.0")))

(define tip-percentage-field (new text-field%
                                  (label "Tip Percentage")
                                  (parent group-box-panel)
                                  (init-value "15")))

(define total-view (new text-field%
                        (label "Meal Total")
                        (enabled #f)
                        (parent group-box-panel)
                        (init-value "")))

(new button% [parent group-box-panel]
     [label "Calculate Total"]
     ; Callback procedure for a button click:
     [callback (lambda (button event)
                 (send total-view set-value
                       (format "~a" (+ (string->number (send meal-cost-field get-value))
                                       (* (string->number (send meal-cost-field get-value))
                                          (/ (string->number (send tip-percentage-field get-value)) 100.0))))))])

(send frame show #t)
