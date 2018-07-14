//force 16:9 aspect to images
$(".img-fluid").each(function (i) {
	$(".img-fluid").eq(i).css("height", ($(this).width()*(9/16)))
});

$(".section").hide();
var sec = $(".filterBtn.active").attr("data-section");
$(".section[data-section='"+sec+"']").show();

$(".filterBtn").click(function () {
	var t = $(this);
	if (!t.hasClass("active")) {
		var sec = $(".filterBtn.active").attr("data-section");
		$(".section[data-section='"+sec+"']").hide();
		$(".active").removeClass("active");
		t.addClass("active");
		var sec = $(".filterBtn.active").attr("data-section");
		$(".section[data-section='"+sec+"']").show();
	}
})

$(".lokalItemWrap").click(function () {
	var name = $(this).attr("data-lokalID")
	window.location = "./lokal.html#"+name;
})