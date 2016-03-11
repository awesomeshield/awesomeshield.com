$('document').ready(function() {
	var options = { 
		videoId: '5jUpoAzs5ME', 
		start: 0,
		end: 10
	};
	$('#wrapper-hero').tubular(options);
	// f-UGhWj1xww cool sepia hd
	// 49SKbS7Xwf4 beautiful barn sepia
});

// sticky
$(document).ready(function() {

	$('#sidebar').stick_in_parent({
		'parent': $('#sidebar').closest('.row'),
		'offset_top': 20,
		'bottoming': false,
	});	
});

// countdown
$(document).ready(function() {
	$('#countdown').countdown('2016/04/26', function(event) {
   		$(this).html(event.strftime('in %D days'));
  	});
});