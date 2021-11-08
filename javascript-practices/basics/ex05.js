/*
구문(statement)
1. 자바스크립트 실행 단위
2. 구문 구성 요소
   - 값, 연산자 : 표현식
   - 주석 : 구문을 구성해도 실행되지 않는다.
   - 예약어들 : if, const, for, .....
3. 구문의 예
if, 
if~else, 
for, 
while, 
do~while, 
switch, 
for~in
4. 공백 : 토큰 분리
5. 세미콜론:
   원칙적으로는 구문을 분리한다.
6. 개행
*/

/*
;는 표현식을 표현식 구문으로 만들어서 표현식을 바로 실행하게 한다.
*/

i=10;
var s = "hello world"; console.log(s);

// 1. 개행의 역할1: ;를 대체한다.
var s = 'hello world'
console.log(s);

// 2. 개행의 역할2: 상황에 따라서는 토큰을 분리하는 역할
a
=
2
+
2
console.log(a);