1 @ 1; // SyntaxError: Invalid or unexpected token
foo(); // ReferenceError: foo is not defined
null.foo; // TypeError: Cannot read properties of null (reading 'foo')
new Array(-1); // RangeError: Invalid array length
decodeURIComponent('%'); // URIError: URI malformed
