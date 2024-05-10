// GET 요청을 위한 비동기 함수
const get = url => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    // 서버의 응답을 콘솔에 출력한다.
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

// id가 1인 post를 취득
get('https://jsonplaceholder.typicode.com/todos/1');
/*
{
  userId: 1, 
  id: 1, 
  title: 'delectus aut autem', 
  completed: false
}
*/