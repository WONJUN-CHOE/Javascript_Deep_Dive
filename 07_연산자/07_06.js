var x = '1';

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // "1"

x = true;
// 불리언 값을 숫자로 타입 변환한다.
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // true

x = false;
// 불리언 값을 숫자로 타입 변환한다.
console.log(+x); // 0
// 부수 효과는 없다.
console.log(x); // false

x = 'Hello';
// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
console.log(+x); // NaN 
// 부수 효과는 없다.
console.log(x); // "Hello"