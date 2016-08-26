# lazyload

### 延迟加载 页面滚动时图片等元素

##使用说明：

需要先调用jQuery.js，然后再调用jquery.lazyload.js

然后调用插件：

		$(".lazyload").lazyload();

		表示所有class名为lazyload的元素绑定了延迟加载lazyload

需加载的元素原地址，绑定在元素的data-url属性上，例：

<div class="lazyload" data-url="loaded.html">WAIT LOADING</div>

##可用参数：

<table>
	<th>
		<td>参数</td>
		<td>默认值</td>
		<td>解释</td>
	</th>
	<tr>
		<td>attr</td>
		<td>data-url</td>
		<td>获取元素加载地址的属性名。</td>
	</tr>
	<tr>
		<td>container</td>
		<td>$(window)</td>
		<td>滚动的容器；默认网页滚动。</td>
	</tr>
	<tr>
		<td>callback</td>
		<td>$.noop</td>
		<td>回调函数，加载完成后执行的回调函数；默认为空函数。</td>
	</tr>
</table>

**示例：**

$(".lazyload").lazyload({
	container: $("#divdiv"),
	callback: function(){
		this.style.backgroud-color="#333"
	}
});