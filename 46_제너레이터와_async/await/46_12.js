// node-fetch는 Node.js 환경에서 window.fetch 함수를 사용하기 위한 패키지다.
// 브라우저 환경에서 이 예제를 실행한다면 아래 코드는 필요 없다.
// https://github.com/node-fetch/node-fetch
const fetch = require('node-fetch');

// 제너레이터 실행기
const async = generatorFunc => {
  const generator = generatorFunc(); // 2

  const onResolved = arg => {
    const result = generator.next(arg); // 5

    return result.done
      ? result.value // 9
      : result.value.then(res => onResolved(res));
  };

  return onResolved; // 3
};

(async(function* fetchTodo() { // 1
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const response = yield fetch(url); // 6
  const todo = yield response.json(); // 8
  console.log(todo);
  // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
})()); // 4
