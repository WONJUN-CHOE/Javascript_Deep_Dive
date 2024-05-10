const requestData1 = () => 
  new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => 
  new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => 
  new Promise(resolve => setTimeout(() => resolve(3), 1000));

// 세 개의 비동기 처리를 병렬로 처리
Promise.all([requestData1(), requestData2(), requestData3()])
  .then(console.log) // [ 1, 2, 3 ] => 약 3초 소요
  .catch(console.error);