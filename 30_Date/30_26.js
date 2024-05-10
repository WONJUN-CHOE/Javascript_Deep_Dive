const today = new Date(); // today의 지정 로캘은 KST다.

// UTC와 today의 지정 로켈 KST와의 차이는 -9시간이다.
today.getTimezoneOffset() / 60 // -9