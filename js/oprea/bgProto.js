'use strict';
function bgProto(){
	//背景属性设置模块
    $('body').on('click','#wrapContain .wrapContent',function(e){
    	__this=$(this);
    	$('.proxy').hide();
    	$(this).nextAll('.proxy').show();
    	$("#"+($(this).attr('class')+'Proto')).show().siblings('section').hide();
    });
	$("[data-toggle='tooltip']").tooltip(); 
	$(".dropdown-menu li").click(function(e){
		e.stopPropagation();
	});
	$(".picCollection").click(function(){
		if(!__this){
			alert('请选择目标');
			return false;
		}
	});
	$(".changeBg").click(function(e){
		e.stopPropagation();
		$(".picCollection").trigger('click');
		if(__this){
			$('.'+$(this).data('role')).children('.btn-group').addClass('open');
		}
	});
	$("input[type='file'].upLoad").change(function(e){
		var imgSrc=$(this).val();
		imgSrc='images/pres/'+imgSrc.substring(imgSrc.lastIndexOf('fakepath')+9);
		$(".imgUp").html("<img src='"+imgSrc+"'/>");
	});
	//更换背景图
	$('#changeBg').click(function(){
		$(this).closest(".btn-group").removeClass('open');
		var imgSrc=$(this).parent('.picOpera').siblings('div').find('.upLoad').val();
		if(!imgSrc){
			alert('请上传图片');
			return;
		}
		imgSrc='images/pres/'+imgSrc.substring(imgSrc.lastIndexOf('fakepath')+9);
		var wrapType=__this.data('role');
		$('#'+wrapType+' img.img').attr('src',imgSrc);
		var thisClass=__this.attr('class');
		if(thisClass=='wrapContent'){
			__this.closest('#wrap').find('.bgColor').css({'backgroundImage':'url('+imgSrc+')'});
		}else if(thisClass && thisClass.indexOf('panelWrap')>-1){
			__this.children('.panelContain').css({'backgroundImage':'url('+imgSrc+')'});
		}else if(thisClass && thisClass.indexOf('buttonProto')>-1){
			__this.children(':first-child').css({'backgroundImage':'url('+imgSrc+')'});
		}else{
			__this.find('img').attr('src',imgSrc);
		}
	});
    $(".deleBg").click(function(){
    	var thisClass=__this.attr('class');
    	if(thisClass && thisClass.indexOf('panelWrap')>-1){
			__this.children('.panelContain').css({'backgroundImage':'none'});
		}else if(thisClass=='wrapContent'){
			__this.closest('#wrap').find('.bgColor').css({'backgroundImage':'none'});
		}else{
    		__this.css({'backgroundImage':'none'});
		}
    	var wrapType=__this.data('role');
    	$('#'+wrapType+' img.img').attr('src','');
    });
    $(".cirColor dd:not(.cir-allBoth)").click(function(e){
    	var scolor=$(this).css('backgroundColor');
    	if(__this && __this.attr('class')=='wrapContent'){
    		__this.closest('#wrap').find('.bgColor').css({'backgroundColor':scolor});
    	}else{
    		__this.children(':first-child').css({'backgroundColor':scolor});
    	}
    });
	BaseOpera('#picker').ColorProto('bg');
	BaseOpera('.slider').SliderProto('','backgroundColor');
}
	
