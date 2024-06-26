const now = Date.now(); // -> 1714061825708

// Date 생성자 함수에 숫자 타입의 밀리초를 인수로 전달하면 1970년 1월 1일 00:00:00(UTC)을
// 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환한다.
new Date(now); // -> Fri Apr 26 2024 01:17:05 GMT+0900 (한국 표준시)