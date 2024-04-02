// foo라는 레이블 식별자가 붙은 레이블 문
foo: {
  console.log(1);
  break foo;
  console.log(2);
}

console.log('Done!');