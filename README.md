# lazyload

### 延迟加载 页面滚动时图片等元素

##v1.2

增加参数：threshold `//提前开始加载，默认为0`

参数详情请看下面`可用参数`

##v1.1

bug fix: 

修复元素是否在视图内的判定问题：

&amp;&amp;优先级高于||

##v1.0

##使用说明：

需要先调用jQuery.js，然后再调用jquery.lazyload.js

然后调用插件：

		$(".lazyload").lazyload();

-表示所有class名为lazyload的元素绑定了延迟加载lazyload

需加载的元素原地址，绑定在元素的data-url属性上，例：

		<div class="lazyload" data-url="loaded.html">WAIT LOADING</div>

##可用参数：

<table>
	<tr>
		<th>参数</th>
		<th>默认值</th>
		<th>解释</th>
	</tr>
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
	<tr>
		<td>threshold</td>
		<td>0</td>
		<td>值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉</td>
	</tr>
</table>

**示例如下：**

		$(".lazyload").lazyload({
			container: $("#divdiv"),
			callback: function(){
				this.style.backgroud-color="#333"
			}，
			threshold:100
		});
