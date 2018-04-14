$(document).ready(function () {
	$("input").on("keyup keydown keypress change", function (e) {
		var ppw = parseFloat($(this).val()),
			// Formulas based on excise tax
			ny_cost = (ppw * 13).toFixed(2),
			cr_cost = (ppw * 9).toFixed(2),
			ny_profit = (ppw * 4.35).toFixed(2),
			va_profit = (ppw * .3).toFixed(2),
			ny_loss = (ny_profit * 52).toFixed(2),
			va_gain = (va_profit * 52).toFixed(2);
		$("#outPuts").find("span").text(ny_cost);
		$("#costs").find("span").text(ny_profit);
		$("#crCost").find("span").text(cr_cost);
		$("#vaProfit").find("span").text(va_profit);
		$("#nyl").find("span").text(ny_loss);
		$("#vap").find("span").text(va_gain);
	});

});
