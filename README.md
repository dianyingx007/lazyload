# lazyload

##v1.1

bug fix: 

�޸�Ԫ���Ƿ�����ͼ�ڵ��ж����⣺
&amp;&amp;���ȼ�����||

##v1.0

### �ӳټ��� ҳ�����ʱͼƬ��Ԫ��

##ʹ��˵����

��Ҫ�ȵ���jQuery.js��Ȼ���ٵ���jquery.lazyload.js

Ȼ����ò����

		$(".lazyload").lazyload();

-��ʾ����class��Ϊlazyload��Ԫ�ذ����ӳټ���lazyload

����ص�Ԫ��ԭ��ַ������Ԫ�ص�data-url�����ϣ�����

<div class="lazyload" data-url="loaded.html">WAIT LOADING</div>

##���ò�����

<table>
	<tr>
		<th>����</th>
		<th>Ĭ��ֵ</th>
		<th>����</th>
	</tr>
	<tr>
		<td>attr</td>
		<td>data-url</td>
		<td>��ȡԪ�ؼ��ص�ַ����������</td>
	</tr>
	<tr>
		<td>container</td>
		<td>$(window)</td>
		<td>������������Ĭ����ҳ������</td>
	</tr>
	<tr>
		<td>callback</td>
		<td>$.noop</td>
		<td>�ص�������������ɺ�ִ�еĻص�������Ĭ��Ϊ�պ�����</td>
	</tr>
</table>

**ʾ����**

		$(".lazyload").lazyload({
			container: $("#divdiv"),
			callback: function(){
				this.style.backgroud-color="#333"
			}
		});