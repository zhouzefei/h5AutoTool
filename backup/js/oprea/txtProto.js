'use strict';
function txtProto(){
	//新建文本
	$("li.newTxt").click(function(){
		var strLabel='<div class="box txtProto" data-role="txtProto" style="position:absolute;">请输入文本<div class="coor"></div></div>';
		$('#wrapContent').append(strLabel);
		drag('txtProto','txt');
		$('.txtProto').trigger('click');
	});
	$(".TwoProto .protoTitle>li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var className=$(this).data('role');
		$('.'+className).show().siblings('div').hide();
	});
	//文本输入即时显示
	$(".textKeyIn").on('keyup',function(){
		$(eTarget.currentTarget).text($(this).val());
	});
	//字体颜色
	colorPick('fontColor','txt');
	colorPick('fontBgColor','bg');
	colorPick('borderColor','border');
	$('.fontStyle').click(function(){
		var __this=$(this);
		__this.toggleClass('btn-red');
		var protoType=__this.data('prototype');
		var dataType=__this.data('data');
		if(__this.hasClass('btn-red')){
			$(eTarget.currentTarget).css(protoType,dataType);
		}else{
			$(eTarget.currentTarget).css(protoType,'normal');
			$(eTarget.currentTarget).css(protoType,'none');
		}
	});
	$(".fontSizeSet").change(function(){
		$(eTarget.currentTarget).css('fontSize',$(this).val()+'px');
	});
	$(".fontLineHei").change(function(){
		$(eTarget.currentTarget).css('lineHeight',$(this).val());
	});
	$(".noBgColor").click(function(){
		$(eTarget.currentTarget).css('backgroundColor','transparent');
	});
	$(".borderWid").keyup(function(){
		var thisVal=$(this).val();
		if(!isNaN(thisVal)){
			$(eTarget.currentTarget).css({'borderWidth':thisVal+'px','borderStyle':$('.borderType').val()});
		}
	});
	$(".borderType").change(function(){
		$(eTarget.currentTarget).css({'borderStyle':$(this).val(),'borderWidth':$(".borderWid").val()+'px'});
	});
	sliderCommon('txtOpacity','%','opacity');
	sliderCommon('txtShadow','px','boxShadow');
	sliderCommon('txtRadius','%','borderRadius');
	
}