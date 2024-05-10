// rejected
new Promise((_, reject) => reject(new Error('rejected')))
  .then(undefined, e => console.error(e)); // Error: rejected