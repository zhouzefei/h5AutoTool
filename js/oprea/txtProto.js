'use strict';	
//新建文本
function txtProto(){
	$("li.newTxt").click(function(){
		var txt=new NewCompon();
			txt.addTxt();
	});
	$(".TwoProto .protoTitle>li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var className=$(this).data('role');
		$(this).closest('section').find('.'+className).show().siblings('div').hide();
	});
	//文本输入即时显示
	$(".textKeyIn").on('keyup',function(){
		__this.find('.txtShuru').html($(this).val());
	});
	//字体居中
	$('.alignType li').click(function(e){
		$(this).addClass('active').siblings().removeClass('active');
		__this.css({'textAlign':$(this).attr('txtAlign')});
	});
	$('.fontStyle').click(function(){
		$(this).toggleClass('btn-red');
		var protoType=$(this).data('prototype');
		var dataType=$(this).data('data');
		if($(this).hasClass('btn-red')){
			__this.css(protoType,dataType);
		}else{
			__this.css(protoType,'normal').css(protoType,'none');
		}
	});
	$(".fontSizeSet").change(function(){
		__this.css('fontSize',$(this).val()/100+'rem');
	});
	$(".fontLineHei").change(function(){
		__this.css('lineHeight',$(this).val());
	});
	$(".noBgColor").click(function(){
		__this.children(':first-child').css('backgroundColor','transparent');
	});
	$(".borderWid").keyup(function(){
		var thisVal=$(this).val();
		if(!isNaN(thisVal)){
			__this.children(':first-child').css({'borderWidth':thisVal/100+'rem','borderStyle':$('.borderType').val()});
		}
	});
	$(".borderType").change(function(){
		__this.children(':first-child').css({'borderStyle':$(this).val(),'borderWidth':$(".borderWid").val()+'px'});
	});

	//字体颜色
	BaseOpera('#fontColor').ColorProto('txt');
	BaseOpera('#fontBgColor').ColorProto('txtBg');
	BaseOpera('#borderColor').ColorProto('txtBorder');
	BaseOpera('.txtOpacity').SliderProto('','backgroundColor');
	BaseOpera('.txtShadow').SliderProto('rem','boxShadow');
	BaseOpera('.txtRadius').SliderProto('rem','borderRadius');
}

