var x = 'global x';
var y = 'global y';

function outer() {
  var z = "outer's local z"

  console.log(x); // 1: global x
  console.log(y); // 2: global y
  console.log(z); // 3: outer's local z

  function inner() {
    var x = "inner's local x";

    console.log(x); // 4: inner's local x
    console.log(y); // 5: global y
    console.log(z); // 6: outer's local z
  }

  inner();
}

outer();

console.log(x); // 7: global x
console.log(z); // 8: ReferenceError: z is not defined