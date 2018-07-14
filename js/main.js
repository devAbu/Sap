//var City = geoplugin_city();
$(".imgCityText").html("Sarajevo");

$("#cityImgContainer").css("background-image", 'url("img/back.jpg")');

$("#cityImgContainer").css("height", ($(window).height() - 50));
$("#catSelectHome").css("margin-top", - $("#catSelectHome").height());

//$("#newsSectionMain").slideUp();
$(".mainGotoNews").click(function () {
	//$("#newsSectionMain").slideToggle(500);
	$("#newsSectionMain").goTo();
})

/////////////////////////////////////////////////////
//cat butons:
$(".catKafaBtn").click(function() {
    window.location = "./kategorijaDemo.html";
});