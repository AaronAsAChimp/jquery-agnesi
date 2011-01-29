(function ($) {
	
	$.easing.agnesi = function (percent, time, carp0, carp1, duration) {
		var r = carp1 - carp0 / 2;
		var pos = ((r * 2) - cart_agnesi(percent * Math.PI * 2, r)) / 1.81398;
		//console.log(pos - percent, pos);
		
		return pos;
	};
	
	/*function para_agnesi(θ, a) {
		return [
			2 * a * ( 1 / Math.tan(θ) ),
			-a * ( 1 - Math.cos(2 * θ) )
		];
	}*/

	function cart_agnesi(x, a) {
		return (8 * a * a * a) / ( x * x + 4 * a * a );
	}
})(jQuery);

