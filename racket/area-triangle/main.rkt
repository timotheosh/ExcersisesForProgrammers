#lang racket

(module+ test
  (require rackunit))

;; Notice
;; To install (from within the package directory):
;;   $ raco pkg install
;; To install (once uploaded to pkgs.racket-lang.org):
;;   $ raco pkg install <<name>>
;; To uninstall:
;;   $ raco pkg remove <<name>>
;; To view documentation:
;;   $ raco docs <<name>>
;;
;; For your convenience, we have included a LICENSE.txt file, which links to
;; the GNU Lesser General Public License.
;; If you would prefer to use a different license, replace LICENSE.txt with the
;; desired license.
;;
;; Some users like to add a `private/` directory, place auxiliary files there,
;; and require them in `main.rkt`.
;;
;; See the current version of the racket style guide here:
;; http://docs.racket-lang.org/style/index.html

;; Code here

(define (area-rectangle-feet length width)
  (* length width))

(define (area-rectangle-meters length width)
  (let ((sqr-feet (area-rectangle-feet length width)))
    (string->number
     (~r (* sqr-feet 0.09290304) #:precision 3))))

(define (get-feet dim)
  (display (format "What is the ~A of the room in feet? " dim))
  (string->number (read-line)))

(module+ test
  ;; Tests to be run with raco test
  (check-equal? (area-rectangle-feet 15 20) 300 "Area of rectangle in square feet.")
  (check-equal? (area-rectangle-meters 15 20) 27.871 "Area of rectangle in square meters."))

(module+ main
  ;; Main entry point, executed when run with the `racket` executable or DrRacket.
  (let* ((length (get-feet "length"))
         (width  (get-feet "width"))
         (area-feet (area-rectangle-feet length width))
         (area-meters (area-rectangle-meters length width)))
    (displayln (format "The area is~%~A square feet~%~A square meters" area-feet area-meters))))
