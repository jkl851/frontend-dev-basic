/*
    function 타입의 객체(함수)
*/

// 함수를 생성하는 방법1
function f1(a, b) {
    return a + b;
}
console.log(typeof (f1), f1(10, 20));
// 결과값 : function 30

// 함수를 생성하는 방법2
var f2 = function (a, b) {
    return a + b;
}
console.log(typeof (f2), f2(10, 20));
// 결과값 : function 30

// 함수를 생성하는 방법3 : new 연산자와 함께 Function() 생성자 함수를 사용하는 방법
var f3 = new Function('a', 'b', 'return a + b');
console.log(typeof (f3), f3(10, 20));
// 결과값 : function 30

// 함수를 생성하는 방법 4 : anonymous 함수
// callback
setTimeout(function () {
    console.log("time out!");
}, 2000);
// 결과값 : 2초 후 time out!

// 즉시 실행하는 함수
// 초기화 해야할 많은 변수들을 사용하는 함수 구현시 전역변수를 할당할 필요가 없으므로 메모리를 효율적으로 사용할 수 있다.
var s = (function (a, b) {
    return a + b;
})(10, 20);
console.log(s);

// 가변 파라미터 함수
var sum = function () {
    console.log(arguments instanceof Array); //  값 : false  -> Array가 아니다, 유사배열이다.

    var sum = 0;

    // 구현1
    // for (var i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }

    // 구현2
    Array.prototype.forEach.call(arguments, function (e) {
        sum += e;
    });

    return sum;
}
console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40, 50));
// 결과값 : 30 false
//          60 false
//          150 false
