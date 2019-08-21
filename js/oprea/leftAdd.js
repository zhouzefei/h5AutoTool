$(function(){
	$(".addPage").click(function(){
		$('.pagesShow>li.active .pageShowWrap').children("[class^='detailPage']").html($("#wrapContain #wrap").html());
		var pageLen=$('.pagesShow li').length+1;
		$('.pagesShow>li.active .pageShowWrap').children("[class^='page']").html($("#wrapContain #wrap").html());
		$('.pagesShow>li.active').removeClass('active').after('<li class="active"><div class="pageShowWrap"><div style="overflow:hidden;width:100%;height:100%;position:relative;" class="detailPage'+pageLen+'"></div></div></li>');
		$('.pageShowWrap .proxy').hide();
		$('#wrapContain .wrapContent').trigger('click').html('');
		$('#wrapContain div.bgColor').css({'background':'#fff'}).children('img').attr('src','');
	});
	//点击缩小列表
	$("body").on('click','.pagesShow li',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('#wrapContain #wrap').html($(this).find("div[class^='detailPage']").html());
		drag($('#wrapContain .box'),'bg',true);
		drag($('#wrapContain .panelProto'),'bg',true)
		// drag($('#wrapContain .wrapContent'),'bg',false);
		$('#wrapContain .wrapContent').trigger('click');
		BaseOpera('panelProto').RightProto();
	});
});