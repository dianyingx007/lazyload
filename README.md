# lazyload

### �ӳټ��� ҳ�����ʱͼƬ��Ԫ��

##ʹ��˵����

��Ҫ�ȵ���jQuery.js��Ȼ���ٵ���jquery.lazyload.js

Ȼ����ò����

		$(".lazyload").lazyload();

		��ʾ����class��Ϊlazyload��Ԫ�ذ����ӳټ���lazyload

����ص�Ԫ��ԭ��ַ������Ԫ�ص�data-url�����ϣ�����

<div class="lazyload" data-url="loaded.html">WAIT LOADING</div>

##���ò�����

<table>
	<th>
		<td>����</td>
		<td>Ĭ��ֵ</td>
		<td>����</td>
	</th>
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