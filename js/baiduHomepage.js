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
$(".change-cloth a").click(function(){
	$(".cloth-column").slideDown();
});
$(".cloth-column-closespan").click(function(){
	$(".cloth-column").slideUp();
});
// $(document).click(function(e){
// 	if (e.target != $(".cloth-column")[0]) {
// 		$(".cloth-column").slideUp();
// 	}
// });
$(".cloth-column-bg .cloth-library img").click(function(){
	$imgSrc = $(this).attr("src");
	$(".wrapperskin img").attr("src",$imgSrc);
});
$(".cloth-column-bg .cloth-library img").mouseover(function(){
	$mouseoverSrc = $(this).attr("src");
	$(".cloth-preview .skin-content img").attr("src",$mouseoverSrc);
});
