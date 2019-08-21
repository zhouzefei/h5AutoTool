'use strict';
function imgProto(){
	//新增图片
	$('#addImg').click(function(){
		$(this).closest(".btn-group").removeClass('open');
		var imgSrc=$(this).parent('.picOpera').siblings('div').find('.upLoad').val();
		if(!imgSrc){
			alert('请上传图片');
			return;
		}
		imgSrc='images/pres/'+imgSrc.substring(imgSrc.lastIndexOf('fakepath')+9);
		var img=new NewCompon();
		img.addImg(imgSrc);
	});
	BaseOpera('.imgOpacity').SliderProto('','opacity');
}

