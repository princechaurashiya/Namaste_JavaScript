/*Uses of Closures:
  -Module Design pattern 
  -Currying
  -Functions like once 
  -memoize
  -maintaining state in async world 
  -setTimeouts 
  -Iterators
  -and many more ...
 */

  // function along with its lexical scope forms a closer thats known as closer.


function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();