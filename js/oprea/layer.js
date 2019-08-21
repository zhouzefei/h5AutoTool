var objArr=[];
function layer(){
	var str='<span class="icon iconfont iconReset icon-chexiao"></span><ul class="layerUl">';
	objArr=[];
	$('#wrapContain .wrapContent').children().each(function(i,n){
		var txtDes=$(this).data('text') || '图层'+i;
		objArr.push($(this));
		var statusCheck='';
		if(!$(this).is(":hidden")){
			statusCheck='checked';
		}
		str+='<li><input type="checkbox" '+statusCheck+' class="layerCheck" id="lay'+i+'"/><label for="lay'+i+'">'+txtDes+'</label></li>';
	});
	str+='</ul>';
	$(".layerInner").html(str);
}
//选择图层显示
$('body').on('change','.layerCheck',function(){
	var index=$(this).parent('li').index();
	var $obj=objArr[index];
	if($obj){
		if($(this).prop('checked')){
			$obj.show();
		}else{
			$obj.hide();
		}
	}
});

//撤销
$('body').on('click','.iconReset',function(){
	$('.layerShow').removeClass('on');
	$(".frameLayer").animate({'right':'-301px'});
});