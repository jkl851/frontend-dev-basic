<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
$(function() {
	$("button").click(function() {
		$.ajax({
			url: "${pageContext.request.contextPath }/api/xml",
			dataType: "xml",
			success: function(response) {
				// console.log(response);
				var $data = $("data", response);
				var $no = $("no", $data);
				var $name = $("name", $data);
				var $message = $("message", $data);
				
				var html = "";
				html += ("<h2>" + $no.text() + "</h2>");
				html += ("<h3>" + $name.text() + "</h3>");
				html += ("<h4>" + $message.text() + "</h4>");
				
				$("#data").append(html);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX Test - XML Format Data</h1>
	
	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>