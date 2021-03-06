var prefix = "/user/member"

$().ready(function() {
	validateRule();
});

$.validator.setDefaults({
	submitHandler : function() {
		update();
	}
});

function update() {
	var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
	parent.layer.close(index);
	$.ajax({
		type: "POST",
		url: prefix + "/update",
		data: $('#memberUpdForm').serialize(),// 你的formid
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
	$("#memberUpdForm").validate({
		rules : {
		},
		messages : {
		}
	})
}