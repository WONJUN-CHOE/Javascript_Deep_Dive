## 48.1 모듈의 일반적 의미

- 모듈(module)이란 애플리케이션을 구성하는 개별적 요소로서 재사용 가능한 코드 조각을 말한다.
- 일반적으로 모듈은 기능을 기준으로 파일 단위로 분류한다.
- 이때 모듈이 성립하려면 모듈은 자신만의 파일 스코프(모듈 스코프)를 가질 수 있어야 한다.
- 자신만의 파일 스코프를 갖는 모듈의 모든 자산은 캡슐화되어 다른 모듈에서 접근할 수 없다. 
- 모듈은 개별적 존재로서 애플리케이션과 분리되어 존재한다.

모듈은 애플리케이션이나 다른 모듈에 의해 재사용되어야 의미가 있다.

- 모듈은 공개가 필요한 자산에 한정하여 명시적으로 선택적 공개가 가능하다. 이를 export라 한다.
- 모듈 사용자는 모듈이 공개(export)한 자산 중 일부 또는 전체를 선택해 자신의 스코프 내로 불러들여 재사용할 수 있다. 이를 import라고 한다.

모듈은 애플리케이션과 분리되어 개별적으로 존재하다가 필요에 따라 다른 모듈에 의해 재사용된다.
모듈은 기능별로 분리되어 개별적인 파일로 작성된다.
코드의 단위를 명확히 분리하여 애플리케이션을 구성할 수 있고, 재사용성이 좋아서 개발 효율성과 유지보수성을 높일 수 있다.

## 48.2 자바스크립트와 모듈

자바스크립트 런타임 환경인 Node.js는 모듈 시스템의 사실상 표준인 CommonJS를 채택했고 독자적인 진화를 거쳐, 현재는 CommonJS 사양과 100% 동일하지는 않지만 기본적으로 CommonJS 사양을 따르고 있다.
즉, Node.js는 ECMAScript 표준 사양은 아니지만 모듈 시스템을 지원한다. 따라서 Node.js 환경에서는 파일별로 독립적인 파일 스코프(모듈 스코프)를 갖는다.

## 48.3 ES6 모듈(ESM)

- ES6에서는 클라이언트 사이드 자바스크립트에서도 동작하는 모듈기능을 추가했다.
- ES6모듈의 사용법은 간단하다. script 태그에 type="module" 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로서 동작한다. 
- 일반적인 자바스크립트 파일이 아닌 ESM임을 명확히 하기 위해 ESM의 확장자는 mjs를 사용하는 것을 권장한다.
```html
<script type="module" src="app.mjs"></script>
```
ESM에는 클래스와 마찬가지로 기본적으로 strict mode가 적용된다.

### 48.3.1 모듈 스코프
ESM은 독자적인 모듈 스코프를 갖는다. ESM이 아닌 일반적인 자바스크립트 파일은 script 태그로 분리해서 로드해도 독자적인 모듈 스코프를 갖지 않는다.

```javascript
// foo.js
// x 변수는 전역 변수다.
var x = 'foo';

console.log(window.x); // foo
```

```javascript
// bar.js
// x 변수는 전역 변수다. foo.js에서 선언한 전역 변수 x 와 중복된 선언이다.
var x = 'bar';

// foo.js에서 선언한 전역 변수 x의 값이 재할당되었다.
console.log(window.x); // bar
```

```html
<!DOCTYPE html>
<html>
<body>
  <script src="foo.js"></script>
  <script src="bar.js"></script>
</body>
</html>
```

ESM은 파일 자체의 독자적인 모듈 스코프를 제공한다. 따라서 모듈 내에서 var 키워드로 선언한 변수는 더는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.

```javascript
// foo.mjs
// x 변수는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
var x = 'foo';

console.log(x); // foo
console.log(window.x); // undefined
```

```javascript
// bar.mjs
// x 변수는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
// foo.mjs에서 선언한 x 변수와 스코프가 다른 변수다.
var x = 'bar';

console.log(x); // bar
console.log(window.x); // undefined
```

```html
<!DOCTYPE html>
<html>
<body>
  <script type="module" src="foo.mjs"></script>
  <script type="module" src="bar.mjs"></script>
</body>
</html>
```

모듈 내에서 선언한 식별자는 모듈 외부에서 팜조할 수 없다. 모듈 스코프가 다르기 때문이다.

```javascript
// foo.mjs
var x = 'foo';
console.log(x); // foo
```

```javascript
// bar.mjs
console.log(x); // ReferenceError: x is not defined
```

```html
<!DOCTYPE html>
<html>
<body>
  <script type="module" src="foo.mjs"></script>
  <script type="module" src="bar.mjs"></script>
</body>
</html>
```

### 48.3.2 export 키워드
- 모듈은 독자적인 모듈 스코프를 갖는다. 
- 따라서 모듈 내부에서 선언한 모든 식별자는 기본적으로 해당 모듈 내부에서만 참조할 수 있다.
- 모듈 내부에서 선언한 식별자를 외부에 공개하여 다른 모듈들이 재사용할 수 있게 하려면 export 키워드를 사용한다.

```javascript
// lib.mjs
// 변수의 공개
export const pi = Math.PI;

// 함수의 공개
export function square(x) {
  return x * x;
}

// 클래스의 공개
export class Person {
  constructor(name) {
    this.name = name;
  }
}
```

선언문 앞에 매번 export 키워드를 붙이는 것이 번거롭다면 export할 대상을 하나의 객체로 구성하여 한 번에 export할 수도 있다.

```javascript
// lib.mjs
const pi = Math.PI;

function square(x) {
  return x * x;
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

export { pi, square, Person };
```

### 48.3.3 import 키워드
- 다른 모듈에서 공개(export)한 식별자를 자신의 모듈 스코프 내부로 로드하려면 import 키워드를 사용한다.
- 다른 모듈이 export한 식별자 이름으로 import해야 하며 ESM의 경우 파일 확장자를 생략할 수 없다.

```javascript
// app.mjs
// 같은 폴더 내의 lib.mjs 모듈이 export한 식별자 이름으로 import한다.
// ESM의 경우 파일 확장자를 생략할 수 없다.
import { pi, square, Person } from './lib.mjs';

console.log(pi);                // 3.141592653589793
console.log(square(10));        // 100
console.log(new Person('lee')); // Person { name: 'lee' }
```

```html
<!DOCTYPE html>
<html>
<body>
  <script type="module" src="app.mjs"></script>
</body>
</html>
```

위 예제의 app.mjs는 애플리케이션의 진입점(entry point)이므로 반드시 script 태그로 로드해야 한다. 하지만 lib.mjs는 app.mjs의 import 문에 의해 로드되는 의존성(dependency)이다. 따라서 lib.mjs는 script 태그로 로드하지 않아도 된다.

모듈이 export한 식별자 이름을 일일이 지정하지 않고 하나의 이름으로 한 번에 import할 수도 있다. 이때 import되는 식별자는 as 뒤에 지정한 이름의 객체에 프로퍼티로 할당된다.

```javascript
// app.mjs
// lib.mjs 모듈이 export한 모든 식별자를 lib 객체의 프로퍼티로 모아 import한다.
import * as lib from './lib.mjs';

console.log(lib.pi);                // 3.141592653589793
console.log(lib.square(10));        // 100
console.log(new lib.Person('lee')); // Person { name: 'lee' }
```

모듈이 export한 식별자 이름을 변경하여 import할 수도 있다. 

```javascript
// app.mjs
// lib.mjs 모듈이 export한 식별자 이름을 변경하여 import한다.
import { pi as PI, square as sq, Person as P } from './lib.mjs';

console.log(PI);                // 3.141592653589793
console.log(sq(10));        // 100
console.log(new P('kim')); // Person { name: 'kim' }
```

모듈에서 하나의 값만 export한다면 default 키워드를 사용할 수 있다. default 키워드를 사용하는 경우 기본적으로 이름 없이 하나의 값을 export한다.

```javascript
// lib.mjs
export default x => x * x;
```

default 키워드를 사용하는 경우 var, let, const 키워드는 사용할 수 없다.

```javascript
// lib.mjs
export default const foo = () => {};
// SyntaxError: Unexpected token 'const'
// export default () => {};
```

default 키워드와 함께 export한 모듈은 {}없이 임의의 이름으로 import한다.

```javascript
// app.mjs
import square from './lib.mjs';

console.log(square(3)); // 9
```
