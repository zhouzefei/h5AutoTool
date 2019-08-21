function shareBtn(){
	var strLabel='';
	strLabel=   '<div class="buttonProto box shareBtnWrap clone" data-role="buttonProto" data-text="分享" style="z-index: 0; position: absolute; width: 253.846px; height: 58.4615px; cursor: move; text-align: center; top: 161.532px; left: 327.688px; line-height: normal;" iscount="true">'			
				+'	<div class="btnOpera" style="font-family: Microsoft YaHei; height: 100%; width: 100%; font-size: 0.26rem; cursor: move; line-height: 2.5; color: rgb(102, 102, 102); border-radius: 0.15rem; background-color: rgb(255, 208, 0); background-size: 100% 100%;">'
				+'		分享'
				+'	</div>'	
				+'	<span class="objBorder borderLeft proxy" style="height: 58px; display: none;"></span>'	
				+'	<span class="objBorder borderRight proxy" style="height: 58px; display: none;"></span>'
				+'	<span class="objBorder borderTop proxy" style="width: 254px; display: none;"></span>'	
				+'	<span class="objBorder borderBottom proxy" style="width: 254px; display: none;"></span>'	
				+'	<span class="coor coorBottomRight proxy" style="display: none;"></span>'
				+'</div>';		
	var $label = $(strLabel);
	BaseOpera.AddDom($label);
	//事件绑定
	drag($('.shareBtnWrap .dragImg'),'bg',true);
	drag($('.shareBtnWrap .txtProto'),'txt',true);
	drag($('.shareBtnWrap .buttonProto'),'bg',true);
	drag($('.shareBtnWrap .panelProto'),'bg',true);
	$('.shareBtnWrap .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('shareBtnWrap').RightProto();
	domhistory.pushData("new",__this);
};