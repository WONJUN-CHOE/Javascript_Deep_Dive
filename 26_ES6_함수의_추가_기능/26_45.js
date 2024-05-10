class Person {
  constructor() {
    this.name = 'Lee';
    // 클래스가 생성한 인스턴스(this)의 sayHi 프로퍼티에 화살표 함수를 할당한다.
    // 따라서 sayHi 프로퍼티는 인스턴스 프로퍼티다.
    this.sayHi = () => console.log(`Hi ${this.name}`);
  }
}
