jQuery(document).ready(function($) {

var progress = $(".progress-bar");	
var OPercent = $(".OPercent");
var TPercent = $(".TPercent");
var SPercent = $(".SPercent");
var wrapper = $(".wrapper");
let bar = 0;
var SelenImg = $(".seleimg");
SelenImg.hide();
progress.width(bar+"%");

OPercent.click(function() {
	bar = bar + 1;
	progress.width(bar+"%");
	console.log(bar);
		if (bar >= 100) {
	SelenImg.show();
	wrapper.hide();
}
});

TPercent.click(function() {
	bar = bar + 3;
	progress.width(bar+"%");
	console.log(bar);
		if (bar >= 100) {
	SelenImg.show();
	wrapper.hide();
}

});

SPercent.click(function() {
	bar = bar + 7;
	progress.width(bar+"%");
	console.log(bar);
	if (bar >= 100) {
	SelenImg.show();
	wrapper.hide();
}
	});






});