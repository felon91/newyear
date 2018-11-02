function get_timer_229(string_229) {
	var date_new_229 = string_229;
	var date_t_229 = new Date(date_new_229);
	var date_229 = new Date();
	var timer_229 = date_t_229 - date_229;
	if (date_t_229 > date_229) {
		var day_229 = parseInt(timer_229 / (60 * 60 * 1000 * 24));
		if (day_229 < 10) {
			day_229 = "0" + day_229;
		}
		day_229 = day_229.toString();
		var hour_229 = parseInt(timer_229 / (60 * 60 * 1000)) % 24;
		if (hour_229 < 10) {
			hour_229 = "0" + hour_229;
		}
		hour_229 = hour_229.toString();
		var min_229 = parseInt(timer_229 / (1000 * 60)) % 60;
		if (min_229 < 10) {
			min_229 = "0" + min_229;
		}
		min_229 = min_229.toString();
		var sec_229 = parseInt(timer_229 / 1000) % 60;
		if (sec_229 < 10) {
			sec_229 = "0" + sec_229;
		}
		sec_229 = sec_229.toString();
		timethis_229 = day_229 + " : " + hour_229 + " : " + min_229 + " : " + sec_229;
		$(".timerhello_229 p.timer__results .result-day").text(day_229);
		$(".timerhello_229 p.timer__results .result-hour").text(hour_229);
		$(".timerhello_229 p.timer__results .result-minute").text(min_229);
		$(".timerhello_229 p.timer__results .result-second").text(sec_229);
	} else {
		$(".timerhello_229 p.timer__results .result-day").text("00");
		$(".timerhello_229 p.timer__results .result-hour").text("00");
		$(".timerhello_229 p.timer__results .result-minute").text("00");
		$(".timerhello_229 p.timer__results .result-second").text("00");
	}
}

function getfrominputs_229() {
	string_229 = "12/15/2018 00:00";
	get_timer_229(string_229);
	setInterval(function() {
		get_timer_229(string_229);
	}, 1000);
}
$(document).ready(function() {
	getfrominputs_229();
});