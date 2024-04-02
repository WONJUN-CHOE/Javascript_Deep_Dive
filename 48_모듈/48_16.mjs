// app.mjs
// lib.mjs 모듈이 export한 식별자 이름을 변경하여 import한다.
import { pi as PI, square as sq, Person as P } from './lib.mjs';

console.log(PI);                // 3.141592653589793
console.log(sq(10));        // 100
console.log(new P('kim')); // Person { name: 'kim' }