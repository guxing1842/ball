var prefix = "/operate/order"

$(function() {
	load();
});

function load() {
	$('#orderTable')
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
				sidePagination : "server", // 设置在哪里进行分页，可选值为"client" 或者 "server"
				// "server"
				queryParams : function(params) {
					return {
						// 说明：传入后台的参数包括offset开始索引，limit步长，sort排序列，order：desc或者,以及所有列的键值对
						limit : params.limit,
						offset : params.offset,
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
						checkbox : true
					},
					{
					    title: '序号',//标题  可不加  
					    align : 'center',
					    formatter: function (value, row, index) {  
					        return index+1;  
					    }  
					},
					{
						field : 'customerPhoneNo',
						title : '客户手机号'
					},
					{
						field : 'memberCode',
						title : '会员编号'
					},
					{
						field : 'stakeType',
						title : '下注类型'
					},
					{
						field : 'stakePrice',
						title : '每手价格'
					},
					{
						field : 'orderNum',
						title : '数量'
					},
					{
						field : 'stakeAmount',
						title : '下注金额'
					},
					{
						field : 'tradeFee',
						title : '交易所手续费'
					},
					{
						field : 'memberFee',
						title : '会员手续费'
					},
					{
						field : 'totalAmount',
						title : '总金额'
					},
					{
						field : 'orderStatus',
						title : '状态',
						formatter : function(value, row, index) {
							if (value == '0') {
								return '<span class="label label-info">未知</span>';
							} else if (value == '1') {
								return '<span class="label label-danger">赢</span>';
							} else if (value == '2') {
								return '<span class="label label-warning">平</span>';
							} else if (value == '3') {
								return '<span class="label label-primary">输</span>';
							}
						}
					},
					{
						field : 'id',
						title : '操作',
						align : 'center',
						formatter : function(value, row, index) {
							var a = '<a  class="btn btn-primary btn-sm ' + a_edit + '" href="#" mce_href="#" title="编辑" onclick="edit(\''
								+ row.id
								+ '\')"><i class="fa fa-edit "></i>编辑</a> ';
							var b = '<a  class="btn btn-primary btn-sm ' + b_clean + '" href="#" mce_href="#" title="结算" onclick="onSale(\''
								+ row.id
								+ '\')"><i class="fa fa-calendar-check-o"></i>上架</a> ';
							return a + b;
						}
					} ]
			});
}

function reLoad() {
	$('#orderTable').bootstrapTable('refresh');
}

$(function(){
	$('#searchName').keydown(function(e){
		if(e.keyCode==13){
			reLoad();
		}
	});
});

function add() {
	layer.open({
		type : 2,
		title : '新增赛程',
		maxmin : false,
		shadeClose : true, // 点击遮罩关闭层
		area : [ '800px', '520px' ],
		content : prefix + '/add'
	});
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

function result(id){
	layer.open({
		type : 2,
		title : '赛程结果',
		maxmin : false,
		shadeClose : true, // 点击遮罩关闭层
		area : [ '800px', '520px' ],
		content : prefix + '/result/' + id
	});
}

$('#scheduleTable').on('dbl-click-row.bs.table', function(row, element){
	layer.open({
		type : 2,
		title : '赛程详情',
		maxmin : false,
		shadeClose : true, // 点击遮罩关闭层
		area : [ '800px', '520px' ],
		content : prefix + '/detail/' + element.id
	});
});

