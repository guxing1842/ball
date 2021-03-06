var prefix = "/user/trade"

$().ready(function() {
	validateRule();
});

$.validator.setDefaults({
	submitHandler : function() {
		update();
	}
});

function getCheckedRoles() {
	var adIds = "";
	$("input:checkbox[name=role]:checked").each(function(i) {
		if (0 == i) {
			adIds = $(this).val();
		} else {
			adIds += ("," + $(this).val());
		}
	});
	return adIds;
}

function update() {
	$("#roleIds").val(getCheckedRoles());
	var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
	parent.layer.close(index);
	$.ajax({
		type: "POST",
		url: prefix + "/reRole/update",
		data: $('#tradeRoleForm').serialize(),// 你的formid
		async: false,
		error: function(request) {
			parent.layer.alert("Connection error");
		},
		success: function(data) {
			if (data.code == 1) {
				parent.layer.msg("操作成功",{icon: 1}, function(){
					parent.reLoad();
				});
			} else {
				parent.layer.alert(data.msg)
			}
		}
	});
}

function validateRule() {
	var icon = "<i class='fa fa-times-circle'></i> ";
	$("#tradeRoleForm").validate({
		rules : {
		},
		messages : {
		}
	})
}