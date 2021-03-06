var prefix = "/operate/profit"

$(function() {
	load();
});

function load() {
	$('#profitTable')
		.bootstrapTable(
			{
				method : 'get', // 服务器数据的请求方式 get or post
				url : prefix + "/list", // 服务器数据的加载地址
				// showRefresh : true,
				// showToggle : true,
				// showColumns : true,
				iconSize : 'outline',
				striped : true, // 设置为true会有隔行变色效果
				dataType : "json", // 服务器返回的数据类型
				pagination : true, // 设置为true会在底部显示分页条
				// queryParamsType : "limit",
				// //设置为limit则会发送符合RESTFull格式的参数
				singleSelect : false, // 设置为true将禁止多选
				// contentType : "application/x-www-form-urlencoded",
				// //发送到服务器的数据编码类型
				pageSize : 10, // 如果设置了分页，每页数据条数
				pageNumber : 1, // 如果设置了分布，首页页码
				// search : true, // 是否显示搜索框
				showColumns : false, // 是否显示内容下拉框（选择显示的列）
				sidePagination : "client", // 设置在哪里进行分页，可选值为"client" 或者
				// "server"
				queryParams : function(params) {
					return {
						// 说明：传入后台的参数包括offset开始索引，limit步长，sort排序列，order：desc或者,以及所有列的键值对
//						limit : params.limit,
//						offset : params.offset,
						aName : $('#searchName').val()
					};
				},
				// //请求服务器数据时，你可以通过重写参数的方式添加一些额外的参数，例如 toolbar 中的参数 如果
				// queryParamsType = 'limit' ,返回参数必须包含
				// limit, offset, search, sort, order 否则, 需要包含:
				// pageSize, pageNumber, searchText, sortName,
				// sortOrder.
				// 返回false将会终止请求
				columns : [
					{
					    title: '序号',//标题  可不加  
					    align : 'center',
					    formatter: function (value, row, index) {  
					        return index+1;  
					    }  
					},
					{
						field : 'levelNum',
						title : '代理商层级'
					},
					{
						field : 'amountScale',
						title : '占盈亏比列'
					},
					{
						field : 'scaleOne',
						title : '一层占比列'
					},
					{
						field : 'scaleTwo',
						title : '二层占比列'
					},
					{
						field : 'scaleThree',
						title : '三层占比列'
					},
					{
						field : 'id',
						title : '操作',
						align : 'center',
						formatter : function(value, row, index) {
							var a = '<a  class="btn btn-primary btn-sm ' + a_edit + '" href="#" mce_href="#" title="编辑" onclick="edit(\''
								+ row.id
								+ '\')"><i class="fa fa-edit "></i>编辑</a> ';
							return a;
						}
					}
				]
		});
}

function reLoad() {
	$('#profitTable').bootstrapTable('refresh');
}

function edit(id){
	layer.open({
		type : 2,
		title : '编辑赛程',
		maxmin : false,
		shadeClose : true, // 点击遮罩关闭层
		area : [ '800px', '520px' ],
		content : prefix + '/edit/' + id
	});
}

