(function($) {
	$.fn.lazyload = function(option) {
		var defaults = {
			attr: "data-url",
			container: $(window),
			callback: $.noop
		};
		var params = $.extend({},defaults,option||{});
		params.cache = [];
		$(this).each(function(){
			var node = this.nodeName.toLowerCase(),url = $(this).attr(params["attr"]);
			/*重组存放到cache*/
			var data = {
				obj: $(this),
				tag: node,
				url: url
			};
			params.cache.push(data);
		});
		/*显示数据后，调用所需函数*/
		var callback = function(callid) {
			if($.isFunction(params.callback)){
				params.callback.call(callid.get(0));
			}
		};
		
	}
})(jQuery);