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
$(document).ready(function(){
	var isSticky = false;
	var $elem = $("#sticker");
	var elemHeight = 0;
	var windowHeight = 0;
	var breakpoint = 0;
	calculateBreakpoint();

	// Calculates when elem should stick
	function calculateBreakpoint() {
		elemHeight = $elem.height();
		windowHeight = $(window).height();
		breakpoint = windowHeight - elemHeight;
	}

	// Determines if elem should stick
	function determineStickyness() {
		var top = $(window).scrollTop();
		if (top >= breakpoint && !isSticky) {
			isSticky = true;
			$elem.addClass('sticky');
		} else if (top < breakpoint && isSticky) {
			isSticky = false;
			$elem.removeClass('sticky');
		}
	}

	$(window).scroll(_.throttle(determineStickyness,200));
	$(window).resize(_.throttle(calculateBreakpoint,500));
});