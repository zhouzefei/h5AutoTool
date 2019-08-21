'use strict';
function bgProgo(){
	//背景属性设置模块
    $('#wrapContent').bind('click',function(e){
    	eTarget=e;
    	$('.coor').hide();
    	$("#"+($(this).attr('id')+'Proto')).show().siblings('section').hide();
    });
	$("[data-toggle='tooltip']").tooltip(); 
	$(".dropdown-menu li").click(function(e){
		e.stopPropagation();
	});
	$(".picCollection").click(function(){
		if(!eTarget || eTarget.target.id!='wrapContent'){
			alert('请选择目标');
			return false;
		}
	});
	$(".changeBg").click(function(e){
		e.stopPropagation();
		$(".picCollection").trigger('click');
		if(eTarget && eTarget.target.id=='wrapContent'){
			$('.'+$(this).data('role')).children('.btn-group').addClass('open');
		}
	})
	$("input[type='file'].upLoad").change(function(e){
		$(this).closest(".btn-group").removeClass('open');
		var imgSrc=$(this).val();
		imgSrc='images/pres/'+imgSrc.substring(imgSrc.lastIndexOf('fakepath')+9);
		$('img.img').attr('src',imgSrc);
		$(eTarget.currentTarget).css({'backgroundImage':'url('+imgSrc+')'});
	});
    $(".deleBg").click(function(){
    	$(eTarget.currentTarget).css({'backgroundImage':'none'});
    	$('img.img').attr('src','');
    });
    $(".cirColor dd:not(.cir-allBoth,.cir-none)").click(function(e){
    	var scolor=$(this).css('backgroundColor');
    	bgChangeColor(scolor);
    });
    $(".cirColor dd.cir-none").click(function(e){
    	bgChangeColor('transparent');
    });

	colorPick('picker','bg');
	sliderCommon('slider','%','opacity');
}