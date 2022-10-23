/**
 * 암호해독 문제
 * 일련의 코드를 문자열로 인코딩할 수 있는지를 따지는 문제
 * 1. for ~ of 와 for ~ in 의 사용법을 익히자
 * 2. parseInt 로 2진수를 10진수로 변환해 보자
 * 3. 유니코드를 문자열로 바꾸어 보자
 */
const list = [
  "   + -- + - + -   ",
  "   + --- + - +   ",
  "   + -- + - + -   ",
  "   + - + - + - +   ",
];

let s = '';
for (const string of list) {
  const phase1 = string.replace(/ /ig, '').replace(/\+/ig, '1').replace(/\-/ig, '0')
  const phase2 = parseInt(phase1, 2)
  s = s + String.fromCharCode(phase2)
}
console.log(s);

