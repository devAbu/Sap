//force 16:9 aspect to images
$(".img-fluid").each(function (i) {
	$(".img-fluid").eq(i).css("height", ($(this).width()*(9/16)))
});
//moves introtext over the image;
$(".introText").css("margin-top", -(10 + $(".introText").height()));


$(".writeComentCard").hide();

$(".writeCommentBtn").click(function () {
	$(".writeComentCard").slideToggle();
	$(".postCommentBtn").goTo();
	$(".writeCommentBtn").hide();
})

$(".cancelCommentBtn").click(function () {
	$(".writeCommentBtn").show();
	$(".writeComentCard").hide();
	$(".writeCommentBtn").goTo();
})


var ime = window.location.hash.substr(1);
$(".topTitle").html(ime);
$(".lokalName").html(ime);