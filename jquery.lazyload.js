(function($) {
	$.fn.lazyload = function(option) {
		var defaults = {
			attr: "data-url",
			container: $(window),
			callback: $.noop
		};
		var params = $.extend({}, defaults, option || {});
		params.cache = [];
		$(this).each(function() {
			var node = this.nodeName.toLowerCase(),
				url = $(this).attr(params["attr"]);
			/*重组存放到cache*/
			var data = {
				obj: $(this),
				tag: node,
				url: url
			};
			params.cache.push(data);
		});
		/*显示数据后，回调函数*/
		var callback = function(callid) {
			if($.isFunction(params.callback)) {
				params.callback.call(callid.get(0));
			}
		};
		/*动态显示数据*/
		var loading = function() {
			var contHeight = params.container.height(); /*默认为window的高度*/
			if($(window).get(0) === window) {
				contop = $(window).scrollTop();
			} else {
				contop = params.container.offset().top;
			}

			$.each(params.cache, function(i, data) {
				var o = data.obj,
					tag = data.tag,
					url = data.url,
					post, posb;
				if(o) {
					post = o.offset().top - contop, posb = post + o.height();
					console.log(1);
					if(o.is(':visible') && (post >= 0 && post < contHeight) || (posb > 0 && posb <= contHeight)) {
						if(!url) {
							callback(o); /*无地址直接触发回调函数*/
						} else if(tag === "img") {
							/*图片，改src*/
							callback(o.attr("src", url));
							console.log(3);
						} else {
							/*非图片，load资源*/
							o.load(url, {}, function() {
								callback(o);
							});
							console.log(4);
						}
						data.obj = null;
						/*已经加载的资源不再加载*/
					}
				}
			});
		};
		console.log(2);
		loading();
		/*添加scroll事件*/
		params.container.bind("scroll", loading);
		console.log(5);
	};
})(jQuery);