/* null과 undefined */
var myVar1 = undefined; // 명시적으로 undefined 대입
var myVar1;             // 암시적으로 undefined 대입이 된다.
var myVar2 = null;

console.log(myVar1 + ':' + myVar2);
console.log(typeof(myVar1) + ":" + typeof(myVar2)); 

console.log(myVar1 == myVar2) // 값비교
console.log(myVar1 === myVar2) // 타입비교 + 값비교

console.log("==========================")

// ==: eqality, 값의 동치성, 형변환 o
console.log(4 == '4');
console.log(false == 0);
console.log("abc" == new String("abc"));

console.log(true + 10);
console.log('abc' + new String('abc'));
console.log(1 + '1');
console.log('1' + 1);

console.log("==========================")

// === : identity
// 1. 타입의 동일성
// 2. 값의 동일성 또는 객체의 동일성
// 3. 형변환
console.log("2" === 2);
console.log(true === 1);
console.log(2 === 4);
console.log(new Number(4) === new Number(4));