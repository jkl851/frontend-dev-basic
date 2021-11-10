## JQuery

jQuery(제이쿼리)는 오픈 소스 기반의 자바스크립트 라이브러리이다.

jQuery는 웹 사이트에 자바스크립트를 더욱 손쉽게 활용할 수 있게 해준다.
또한, jQuery를 사용하면 짧고 단순한 코드로도 웹 페이지에 다양한 효과나 연출을 적용할 수 있다.
그래서 jQuery는 많은 인기 있는 자바스크립트 라이브러리 중 하나이다.



### Jquery의 장점

현재 많이 사용되고 있는 자바스크립트 라이브러리는 다음과 같다.

- 프로토타입(Prototype)
- 도조(Dojo)
- GWT(Google Web Toolkit)
- MochiKit

이렇게 수많은 자바스크립트 라이브러리 중에서도 jQuery가 특히 많이 사용되는 이유는 다음과 같다.

1. jQuery는 주요 웹 브라우저의 구버전을 포함한 대부분의 브라우저에서 지원된다.
2. HTML DOM을 손쉽게 조작할 수 있으며, CSS 스타일도 간단히 적용할 수 있다.
3. 애니메이션 효과나 대화형 처리를 간단하게 적용해 준다.
4. 같은 동작을 하는 프로그램을 더욱 짧은 코드로 구현할 수 있다.
5. 다양한 플러그인과 참고할 수 있는 문서가 많이 존재한다.
6. 오픈 라이선스를 적용하여 누구나 자유롭게 사용할 수 있다.
7. 

### jQuery 적용

jQuery는 자바스크립트 라이브러리이므로, jQuery 파일은 자바스크립트 파일(.js 파일) 형태로 존재한다.
따라서 웹 페이지에서 jQuery를 사용하기 위해서는 jQuery 파일을 먼저 웹 페이지에 로드(load)해야 한다.

웹 페이지에 jQuery 파일을 로드하는 방법은 다음과 같다.

1. jQuery 파일을 다운받아 로드하는 방법
2. CDN(Content Delivery Network)을 이용하여 로드하는 방법



### jQuery 파일을 다운로드 받아 로드하는 방법

최신 버전의 jQuery 파일은 다음 공식 사이트에서 다운로드 받을 수 있다.

http://jquery.com/download

파일은 아래와 같이 2가지 버전이 존재한다.

- 실전 버전(Production version) : 라이브 웹 사이트용 (압축되어 읽을 수 없는 코드)
- 개발 버전(Development version) : 테스트 및 개발용 (압축되지 않고 읽을 수 있는 코드)

다운받은 jQuery 파일을 서버에 저장하고, `<script>`태그를 웹 페이지의 `<head>`태그 내에 삽입하면 된다. 혹은 콘텐츠 로딩 속도 성능을 높이기 위해 맨 아래부분에 삽입하는 경우도 있다.

```html
<head>
    <script src="/media/jquery-3.3.1.min.js"></script>
</head>
```

> <script> 태그 안에 type="text/javascript"는 왜 없는가? HTML5에는 필요없다. 자바 스크립트는 HTML5와 모든 최신 브라우저에서 기본 스크립팅 언어이다



### CDN을 이용하여 로드하는 방법

CDN(Content Delivery Network)이란? 웹 사이트의 접속자가 서버에서 콘텐츠를 다운받아야 할 때, 자동으로 가장 가까운 서버에서 다운받도록 하는 기술이다.
이 기술을 이용하면 특정 서버에 트래픽이 집중되지 않고, 콘텐츠 전송 시간이 매우 빨라지는 장점이 있다.

CDN을 이용하면 jQuery 파일을 서버에 따로 저장하지 않아도 jQuery를 사용할 수 있다.
현재 이용할 수 있는 jQuery 버전 3.x의 CDN은 다음과 같으며, 어떤 CDN을 이용하더라도 동일한 동작을 한다.



#### jQuery.com CDN

```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

#### 구글 CDN

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

#### MS CDN

```html
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
```

#### CDNJS CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

#### sDelivr CDN

```html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
```





## jQuery 문법

jQuery를 사용하면 아주 간편하게 HTML 요소를 선택하고, 그렇게 선택된 요소에 손쉽게 특정 동작을 설정할 수 있다.

```
$(선택자).동작함수();
```

달러($) 기호는 jQuery를 의미하고, jQuery에 접근할 수 있게 해주는 식별자이다.
선택자를 이용하여 원하는 HTML 요소를 선택하고, 동작 함수를 정의하여 선택된 요소에 원하는 동작을 설정한다.



## JQuery 기본 사용법

> - jQuery는 절대 null을 리턴하지 않는다.(무조건 한 개 이상의 무언가를 리턴함)
> - jQuery는 function type 객체(함수)다.
>
> - jQuery 함수를 호출하면 object type 객체(jQuery 객체, 유사배열)를 반환한다.
>
> ```javascript
> var $obj1 = jQuery();
> console.log(typeof(jQuery), typeof($obj1), $obj1.jquery); // function object 버전
> ```
>
> - $는 jQuery 함수 객체를 참조한다.($는 jQuery 함수 객체 이름의 Alias 이다.)
> - jQuery 라이브러리의 정상적인 로딩은 jQuery 객체의 속성 jquery(버전정보)로 확인한다.
>
> ```javascript
> var $obj2 = $();
> console.log(typeof($), typeof($obj2), $obj2.jquery); // function object 버전
> ```



## jQuery 함수의 다양한 사용법

> - Query는 DOM의 엘리먼트를 선택하는 작업을 보통 먼저 하므로, DOM이 로딩된 후에 작성하는 것이 보통이다.
> - DOM이 로딩된 시점1 : DOM API를 사용
>
> ```javascript
> 	window.addEventListener('load', function() {
> 		var $obj = $("#header");
> 		// 절대 jQuery 객체는 null이 아님(유사배열이므로, 비어있을 수는 있다.)
> 		// 유사배열이지만, 엄밀히 배열은 아니므로 배열적인 slice나 splice같은 것은 쓸 수 없다.
> 		// id가 하나이므로 1로 설정
> 		if ($obj.length == 1) {
> 			console.log("성공 : " + $obj[0]);
> 		}
> 
> 	});
> ```
>
> - DOM이 로딩된 시점 : jQuery 함수를 사용하는 방법1
>
> ```javascript
> 	$(document).ready(function() {
> 		var $obj = $("#header");
> 		if ($obj.length == 1) {
> 			console.log("성공");
> 		}
> 	});
> ```
>
> - DOM이 로딩된 시점 : jQuery 함수를 사용하는 방법2
>
> ```javascript
> 	$(function() {
> 		var $obj = $("#header");
> 		if ($obj.length == 1) {
> 			console.log("성공");
> 		}
> 	});
> ```
>
> 



## jQuery 자체제작

> - jQuery-simple.js
>
> ```javascript
> <script type="text/javascript" src="jquery/jquery-simple.js"></script>
> 
> // 간단 jQuery 만들기
> 
> var jQuery = function(param) {
> 	// 함수 만들기
> 	if (typeof (param) === 'function') {
> 		window.addEventListener('load', param);
> 		return;
> 	}
> 
> 	if (typeof (param) === 'string') {
> 		var elements = document.querySelectorAll(param);
> 		return new __jQuery(elements);
> 	}
> }
> 
> var __jQuery = function(elements) {
> 	this.length = elements.length;
> 	for (var i = 0; i < elements.length; i++) {
> 		this["" + i] = elements[i];
> 	}
> }
> 
> // jqeury 를 부르면 현재 버전을 출력
> __jQuery.prototype.jquery = 'jquery.simple.0.0.1';
> 
> // 파라미터로는 상수(핸들러)가 들어옴
> // 이벤트 이름은 click
> __jQuery.prototype.click = function(handler) {
> 	for (var i = 0; i < this.length; i++) {
> 		this[i].addEventListener('click', handler);
> 	}
> }
> 
> // 파라미터로는 상수(핸들러)가 들어옴
> // 이벤트 이름은 css
> __jQuery.prototype.css = function(name, value) {
> 	for (var i = 0; i < this.length; i++) {
> 		this[i].style[name] = value;
> 	}
> }
> 
> // 파라미터로는 index가 들어옴
> // 이벤트 이름은 get
> __jQuery.prototype.get = function(index) {
> 	for (var i = 0; i < this.length; i++) {
> 		return this[index];
> 	}
> }
> 
> var $ = jQuery;
> ```



## jQuery 주의점

> ```javascript
> console.log($obj.lenght); // 2
> console.log(typeof ($obj) + ":" + ($obj instanceof Array)); // 배열 X 유사배열
> console.log($obj[0]); // 해당 구문은 jQuery Object 아님 HTMLElement다.
> console.log($obj.get(0)); // 해당 구문은 jQuery Object 아님 HTMLElement다.
> ```



## jQuery 선택자

> - 태그 선택자
>
> ```javascript
> $(function(){
> 	setTimeout(function(){
> 		$("li").css("text-decoration", "underline");
> 	}, 2000);
> });
> ```
>
> - 아이디 선택자
>
> ````javascript
> // 아이디에는 # 붙일 것
> $(function() {
> 	setTimeout(function() {
> 		$("#first").css("color", "red");
> 		$("#second").css("color", "blue");
> 		$("#third").css("color", "black");
> 		$("#fourth").css("color", "green");
> 	}, 2000);
> });
> ````
>
> - 클래스 선택자
>
> ````javascript
> $(function() {
> 	setTimeout(function() {
> 		$(".red").css("color", "red");
> 		$(".blue").css("color", "blue");
> 	}, 2000)
> });
> ````
>
> - 선택자 - 하위
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $(".red strong").css({
>             color : "red",
>             fontWeight : "normal"
>         });
> 
>         $(".blue strong").css({
>             color : "blue",
>             fontWeight : "normal"
> 
>         });
>     }, 1000);
> });
> ```
>
> - 선택자 - 전체
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("li *").css("font-weight" , "bold");
>     }, 1000);
> });
> ```
>
> - 선택자 - 그룹
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("#first, #third").css("font-weight" , "bold");
>     }, 1000);
> })
> ```
>
> - 선택자 - 자식
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("li > strong").css("font-weight", "normal");
>         $("ul > li > div > strong").css("color", "blue");
>     }, 1000);
> })
> ```
>
> - 선택자 - 인접
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("#second + li").css("color", "red");
>         $("#second + li + li").css("color", "blue");
>     }, 1000);
> })
> ```
>
> - 선택자 - 인접(sibling, 형제)
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("ul li:first-child").css("color", "red");
>         $("ul li:last-child").css("color", "blue");
>     }, 1000);
> })
> ```
>
> - 선택자 - 인접(sibling, 형제)
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("li[id]").css("color", "red");
>         $("li[class='fourth']").css("color", "blue");
>         $("li[class!='fourth']").css("text-decoration", "underline");
>     }, 1000);
> })
> ```
>
> - 선택자 - jQuery Filter(first, last)
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("li:first").css("color", "red");
>         $("li:last").css("color", "blue");
>     }, 1000);
> })
> ```
>
> - 선택자 - jQuery Filter(even, odd)
>
> ```javascript
> // 홀수 odd, 짝수 even
> // 첫번 째 태그는 인덱스 0부터 시작(even)
> $(function() {
>     setTimeout(function() {
>         $("li:odd").css("color", "red");
>         $("li:even").css("color", "blue");
>     }, 1000);
> })
> ```
>
> - 선택자 - jQuery Filter(contains, has)
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("li:contains('샘플')").css("color", "red");
>         $("li:has('strong')").css("color", "blue");
>     }, 1000);
> })
> ```
>
> - DOM 조작 API - text()
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("#p1").text("1. 안녕하세요");
>         $("#p2").text("2. <strong>안녕하세요</strong>");
>         console.log($('#p3').text());
>         console.log($('#p4').text());
>     }, 1000);
> })
> 
> <!-- 
> HTML의 escape 문자들
>     & -> &amp;
> spcae -> &nbsp;
> < -> &lt;
> > -> &gt;
> ` -> &quot;
> -->
> ```
>
> - DOM 조작 API - html()
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("#p1").html("<strong>1. 안녕하세요</strong>");
>         console.log($("#p2").html());
>     }, 1000);
> })
> ```
>
> - DOM 조작 API - prepend()
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         var html = "<strong>" + "가나다라" + "</strong>";
>         $("#p1").prepend(html);
>     }, 1000);
> })
> ```
>
> - DOM 조작 API - append()
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         var html = "<strong>" + "카타파하" + "</strong>";
>         $("#p1").append(html);
>     }, 1000);
> })
> ```
>
> - DOM 조작 API - before()
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         var html = "<h2>제목입니다</h2>"
>         $("#p1").before(html);
>     }, 1000);
> })
> ```
>
> - DOM 조작 API - after()
>
> ```javascript
> 
> $(function() {
>     setTimeout(function() {
>         var html = "<p>내용입니다.</p>"
>         $("#h2").after(html);
>     }, 1000);
> })
> ```
>
> - DOM 조작 API - prependTo()
>
> ```javascript
> // 앞에다 붙이기
> $(function() {
>     setTimeout(function() {
>         $("#p2 strong").prependTo("#p1");
>     }, 1000);
> })
> ```
>
> - DOM 조작 API - appendTo()
>
> ```javascript
> // 뒤에다 붙이기
> $(function() {
>     setTimeout(function() {
>         $("#p2 strong").appendTo("#p1");
>     }, 1000);
> })
> ```
>
> - DOM 조작 API - insertBefore()
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("#h2").insertBefore("#p1");
>     }, 1000);
> })
> ```
>
> - DOM 조작 API - insertAfter()
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("#p1").insertAfter("#h2");
>     }, 1000);
> })
> ```
>
> - DOM 조작 API - wrap()
>
> ```javascript
> // 바깥을 h2, h3 태그로 묶어준다
> $(function() {
>     setTimeout(function() {
>         $(".d1").wrap("<h2>");
>         $(".d2")
>             .wrap("<h3>")
>             .css("paddingLeft", "40px");
>     }, 1000);
> })
> ```
>
> - DOM 조작 API - wrapAll()
>
> ```javascript
> $(function() {
>     setTimeout(function() {
>         $("h2, p")
>             .wrapAll("<div>")
>             .parent()
>             .css({
>             border: "1px solid #ccc",
>             width: "200px"
>         });
>     }, 1000);
> });
> ```
>
> 
>
> - DOM조작 API - replaceWith()
>
> ```javascript
> $(function() {
> 	setTimeout(function(){
> 		$("p").replaceWith("<h2>변경후</h2>");
> 	}, 2000);
> });  
> ```
>
> - 태그 제거(remove())
>
> ```javascript
> $(function() {
> 	setTimeout(function(){
> 		$("ul li:nth-child(3), ul li:nth-child(5)").remove();
> 	}, 2000);
> });  
> ```
>
> - DOM조작 API - attr() /css제어
>
> ```javascript
> $(function() {
> 	setTimeout(function(){
> 		$("h2 a")
> 			.attr({
> 				href: "http://www.douzone.com",
> 				target: "_blank",
> 				title: "우리회사 좋은회사"
> 			})
> 			.css("font-size", "0.75em");
> 	}, 2000);
> });  
> ```
>
> - Class 속성의 추가와 제거
>
> ```javascript
> $(function(){
> 	$("ul li")
> 		.mouseover(function(){
> 			// $(this).css({
> 			// 	backgroundColor: "#287fc2",
> 			//	color: "#fff"
> 			// });
> 			$(this).addClass("on");
> 		})
> 		.mouseout(function(){
> 			// $(this).css({
> 			//	backgroundColor: "#fff",
> 			//	color: "#333"
> 			// });
> 			$(this).removeClass("on");
> 		});
> });  
> ```
>
> 



