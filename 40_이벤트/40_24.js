$checkbox.onchange = e => {
  // e.target은 change 이벤트를 발생시킨 DOM 요소 $checkbox를 가리키고
  // e.currentTarget는 이벤트 핸들러가 바인딩된 DOM 요소 $checkbox를 가리킨다.
  console.log(Object.getPrototypeOf(e) === e.currentTarget); // true

  $msg.textContent = e.target.checked ? 'on' : 'off';
};