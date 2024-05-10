let todos;

// GET 요청을 위한 비동기 함수
const get = url => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    // 1: 서버의 응답을 상위 스코프의 변수에 할당한다.
    if (xhr.status === 200) {
      todos = JSON.parse(xhr.response);
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

// 2: id가 1인 post를 취득
get('https://jsonplaceholder.typicode.com/todos/1');
console.log(todos); // 2: undefined