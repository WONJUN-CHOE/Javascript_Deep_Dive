class Person {
  // this에 클래스 필드를 바인딩해서는 안 된다.
  this.name = ''; // SyntaxError: Unexpected token '.'
}