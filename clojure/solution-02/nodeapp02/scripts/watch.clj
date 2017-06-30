(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'nodeapp02.core
   :output-to "out/nodeapp02.js"
   :output-dir "out"})
