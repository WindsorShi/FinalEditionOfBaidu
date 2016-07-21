$(document).ready(function(){
$(".username").mouseenter(function(){
	$("#username-menu").show();
});
$('.username').mouseleave(function(){
	$("#username-menu").hide();
});
$(".setting").mouseenter(function(){
	$("#usersetting-menu").show();
});
$('.setting').mouseleave(function(){
	$("#usersetting-menu").hide();
});
$("#header .head-inform .more").mouseenter(function(){
	$(".right-more-column").show();
});
$("#header .head-inform .more").mouseleave(function(){
	$(".right-more-column").hide();
});
$(".right-more-column").mouseenter(function(){
	$(".right-more-column").show();
});
$(".right-more-column").mouseleave(function(){
	$(".right-more-column").hide();
});
$(".change-cloth a").click(function(e){
	$(".cloth-column").slideDown();
	e.stopPropagation();
});
$(".cloth-column-closespan").click(function(){
	$(".cloth-column").slideUp();
});

$(document).click(function(e){
	if (!(e.target == $(".cloth-column")[0] || $.contains($(".cloth-column")[0],e.target))) {
		$(".cloth-column").slideUp();
		}
});

$(".cloth-column-bg .cloth-library img").click(function(){
	$imgSrc = $(this).attr("src");
	$(".wrapperskin img").attr("src",$imgSrc);
	setCookie("the-cookie-img", $(".wrapperskin img").attr("src"));
});


$(".cloth-preview .skin-content img").attr("src",getCookie("the-cookie-img"));


$(".cloth-column-bg .cloth-library img").mouseover(function(){
	$mouseoverSrc = $(this).attr("src");
	$(".cloth-preview .skin-content img").attr("src",$mouseoverSrc);
});
var cookieImg = getCookie("the-cookie-img");
if ( cookieImg == null) {
	$(".wrapperskin img").attr("src","img/bg1.jpg");
}else {
	$(".wrapperskin img").attr("src",getCookie("the-cookie-img"));
}
function setCookie(cookieName,cookieValue){
	$(".cloth-preview .skin-content img").attr("src",cookieValue);
	document.cookie = cookieName + "=" +cookieValue;
}
function getCookie(cookieName){
	var cookie = document.cookie;
	var cookieStartAt = cookie.indexOf(""+cookieName +"=");
	if (cookieStartAt == -1) {
		return null;
	}else{
		var cookieValueStartAt = cookie.indexOf("=",cookieStartAt)+1;
		var cookieValueEndAt = cookie.indexOf("=",cookieStartAt);
		if (cookieValueEndAt ==-1) {
			cookieValueEndAt = cookie.length;
		}
		var cookieValue = unescape(cookie.subString(cookieValueStartAt,cookieValueEndAt));
	}
	return cookieValue;
}



});
