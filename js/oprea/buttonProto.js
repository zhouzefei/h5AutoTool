'use strict';
function buttonProto(){
	$(".buttonChoose").click(function(){
		var button=new NewCompon();
		button.addButton();
	});
	//文本输入即时显示
	$(".btnKeyIn").on('keyup',function(){
		__this.children(':first-child').html($(this).val());
	});

	$('.deleBtnBg').click(function(){
		__this.children(':first-child').css({'backgroundImage':'none'});
	});
	$('.btnFontSizeSet').change(function(){
		__this.children(':first-child').css('fontSize',$(this).val()/100+'rem');
	});
	$(".BtnLineHei").change(function(){
		__this.children(':first-child').css('lineHeight',$(this).val());
	});
	//字体颜色
	BaseOpera('#btnFontColor').ColorProto('btnTxt');
	BaseOpera('#btnFontBgColor').ColorProto('btnBg');
}

