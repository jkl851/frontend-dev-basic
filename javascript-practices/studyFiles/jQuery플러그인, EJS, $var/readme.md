## 1. JQuery Plug In에 관하여

### JQuery Plug In이란?

custom jQuery 메소드로써 jQuery를 확장한 것이다

### jQuery 동작원리

우선 jQuery의 동작 원리에 대해 간단히 알아본다

$ 함수는 jQuery 객체를 반환하며 jQuery 객체는 css()와 같은 jQuery 메소드를 소유한다

순수 javascript에서 built-in object의 메소드가 prototype에 담겨있는 것과 같이 

jQuery 객체의 메소드들은 jQuery 객체의 prototype인 **$.fn**에 담겨 있다

다음 예시를 보자

```jsx
<script>
	$.fn.hello = function() {
		console.log("Hello World");
		console.log(this.length);
		console.log(this.attr('title'));
		return this;
	}
</script>
```

$.fn.hello 라는 function 객체는 풀어서 해석하면 다음과 같다

```jsx
jQuery.prototype.hello
```

`$`는 jQuery 부분, 즉 jQuery Obejct를 의미하며 `prototype` 은 fn 부분이다

즉 jQuery.prototype의 기존 메소드 뿐만아니라 hello 메소드를 추가해주었기 때문에 플러그인으로 사용할 수 있다.





### EJS란? (Embedded JavaScript templating)

: 자바스크립트로 HTML 마크업을 생성할 수 있는 간단한 템플릿 언어,



**사용태그문법**

```
<% %>
이 태그는 자바스크립트를 실행할 수 있다.

<%= %>
이 태그는 변수 값을 내장시킬 수 있다.

<%# ... %>
주석

<%_ ... _%>
태그내부 공백 제거

<%- ... %>
html escape안하고 변수 출력
```



**listitem-template.ejs**

:콘텐츠용 템플릿 파일 작성

```ejs
<li data-no='<%=no %>'>
	<strong><%=name %></strong>
	<p>
		<%=message.replace(/\n/, '<br>') %>
	</p> 
	<strong></strong> 
	<a href='' data-no='<%=no %>'>삭제</a>
</li>
```



**템플릿 생성**

```jsp
var listItemEJS = new EJS({
	url: '${pageContext.request.contextPath }/ejs/listitem-template.ejs'
});
```



**템플릿(listItemEJS)을 render로 렌더링한다.**

```
var html = listItemEJS.render(response.data);
```

- render메소드의 인수인 response.data는 렌더링할 때 전달되는 변수의 값으로 <%= %> 태그안에서 변수로 사용할 수 있다.



### 변수 var a 와 var $a 의 차이점

- var a;
  자바스크립트 변수. 흔히 아는 방식으로 스크립트만 사용 가능하다.

- var $a;
  jQuery 변수. jQuery에서 사용하는 내장 함수들을 모두 사용할 수 있음.
  ex) var a 는 a.css('backgroundcolor', 'blue') 라는 메소드가 안 먹음.
  .css 메소드는 jQeury에서만 사용하는 것이므로.
  var $a 는 jQuery 변수이므로 모든 스크립트 사용이 가능함.
  .css(), .hide(), .show() 등등