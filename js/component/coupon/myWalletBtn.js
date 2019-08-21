function myWalletBtn(){
	var strLabel='';
	strLabel=   '<div class="buttonProto box myWalletBtnWrap" data-role="buttonProto" data-text="我的钱包按钮" style="z-index: 0; position: absolute; width: 253.846px; height: 58.4615px; cursor: move; text-align: center; top: 159.602px; left: 56.899px; line-height: normal;" iscount="true">'
				+'	<div class="btnOpera" style="font-family: Microsoft YaHei; height: 100%; width: 100%; font-size: 0.26rem; cursor: move; line-height: 2.5; color: rgb(102, 102, 102); border-radius: 0.15rem; background-color: rgb(255, 208, 0); background-size: 100% 100%;">'
				+'		我的超人钱包'
				+'	</div>'
				+'	<span class="objBorder borderLeft proxy" style="display: none; height: 58px;"></span>'
				+'	<span class="objBorder borderRight proxy" style="display: none; height: 58px;"></span>'
				+'	<span class="objBorder borderTop proxy" style="display: none; width: 254px;"></span>'
				+'	<span class="objBorder borderBottom proxy" style="display: none; width: 254px;"></span>'
				+'	<span class="coor coorBottomRight proxy" style="display: none;"></span>'
				+'</div>';	
		
	var $label = $(strLabel);
	BaseOpera.AddDom($label);
	//事件绑定
	drag($('.myWalletBtnWrap .dragImg'),'bg',true);
	drag($('.myWalletBtnWrap .txtProto'),'txt',true);
	drag($('.myWalletBtnWrap .buttonProto'),'bg',true);
	drag($('.myWalletBtnWrap .panelProto'),'bg',true);
	$('.myWalletBtnWrap .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('myWalletBtnWrap').RightProto();
	domhistory.pushData("new",__this);
};

