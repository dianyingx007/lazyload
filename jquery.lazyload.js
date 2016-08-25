(function($) {
	$.fn.lazyload = function(option) {
		var defaults = {
			attr: "data-url",
			container: $(window),
			callback: $.noop
		}
	}
})(jQuery);