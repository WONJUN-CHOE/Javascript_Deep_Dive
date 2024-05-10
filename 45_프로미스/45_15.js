// rejected
new Promise((_, reject) => reject(new Error('rejected')))
  .catch(e => console.error(e)); // Error: rejected