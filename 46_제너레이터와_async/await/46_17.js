const fetch = require('node-fetch');

const getGithubUserName = async id => {
  const res = await fetch(`https://api.github.com/users/${id}`); // 1
  const { name } = await res.json(); // 2
  console.log(name); // Ungmo Lee
};

getGithubUserName('ungmo2');