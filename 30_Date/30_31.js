const today = new Date('2020/07/24/12:30');

today.toString();     // -> 'Fri Jul 24 2020 12:30:00 GMT+0900 (한국 표준시)'
today.toLocaleTimeString(); // -> '오후 12:30:00'
today.toLocaleTimeString('ko-KR'); // -> '오후 12:30:00'
today.toLocaleTimeString('en-US'); // -> '12:30:00 PM'
today.toLocaleTimeString('ja-JP'); // -> '12:30:00'