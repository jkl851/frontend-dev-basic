/*
    String
*/
// 배열처럼 접근이 가능하다.

var str1 = "Hello World";
for(var i =0; i < str1.length; i++) {
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = "Hello";
var str3 = "World";
var str4 = str2 + ' ' + str3;
console.log(str4);

// 캐스팅
var str5 = 5 + "5";
console.log(str5);

var str6 = "boolean:" + true;
console.log(str6);

// 메소드
var str7 = "string1 string2 string3";

var index = str7.indexOf('string2');
console.log(index);
//  결과값 : 8

var index = str7.indexOf('string4');
console.log(index); // 찾지 못하면 -1
//  결과값 : -1 

var str8 = str7.substr(10); // 10th ~ end
console.log(str8);
//  결과값 : ring2 string3

var str9 = str7.substr(10, 3/* count */);
console.log(str9);
// 결과값 : rin

var str10 = str7.substring(10, 13/* last index - 1 */);
console.log(str10);
// 결과값 : rin

var a = str7.split(" ");
console.log(a);

// 결과값 : ['string1', 'string2', 'string3']

var str11 = 'abcdef';
var a = str11.split(":");
console.log(a);

// 결과값 : ['abcdef']
