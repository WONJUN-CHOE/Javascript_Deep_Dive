promiseGet('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.xxx(res))
  .catch(err => console.error(err)); // VM239:3 TypeError: console.xxx is not a function