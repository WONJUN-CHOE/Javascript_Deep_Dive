function printToDo(todo) {
  console.log(`할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료'} 상태입니다.`);
}

printToDo({ id: 1, content: 'HTML', completed: true }); // 할일 HTML은 완료 상태입니다.