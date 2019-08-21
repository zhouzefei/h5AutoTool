function wxTxtBefore(){
	var strLabel='';
	strLabel=   '<div class="panelProto panelWrap wxTxtBefore" data-text="微信端获取前状态" data-role="panelProto" style="position: absolute; height: 215.077px; z-index: 0; width: 100%; font-size: 0.2rem; text-align: left; top: 75.375px; left: 0px; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px;" iscount="true">'
				+'<div class="panelContain"  style="height: 100%; width: 100%; position: relative; background-color: rgb(144, 211, 86); background-size: 100% 100%; background-repeat: no-repeat;">'
				+'   <div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.22rem; height: auto; width: auto; text-align: left; top: 21.143px; left: 78.4363px; max-width: 100%; word-wrap: break-word; cursor: move; color: rgb(153, 153, 153);" iscount="true">'	
				+'	   <div class="txtShuru" style="height: 100%; min-height: 0.3rem; width: 100%; background-color: transparent;">'
				+'	   汽车超人给你发年终奖红包啦'
				+'	   </div>'	
				+'	   <span class="coor proxy coorRightCenter" style="display: none;"></span>'	
				+'	   <span class="objBorder borderLeft proxy" style="display: none; height: 30px;"></span>'	
				+'	   <span class="objBorder borderRight proxy" style="display: none; height: 30px;"></span>'	
				+'	   <span class="objBorder borderTop proxy" style="display: none; width: 286px;"></span>'	
				+'	   <span class="objBorder borderBottom proxy" style="display: none; width: 286px;"></span>'
				+'   </div>'
				+'   <div class="buttonProto box" data-role="buttonProto" style="z-index: 0; position: absolute; width: 483.077px; height: 56.9231px; cursor: move; text-align: center; top: 70.3534px; left: 78.5px; line-height: normal; margin-left: 0px;" iscount="true">'
				+'	   <input type="tel" placeholder="输入手机号" class="btnOpera" style="font-family: Microsoft YaHei; padding:0; margin:0; text-indent:1em; border:1px solid #ccc; height: 100%; width: 100%; font-size: 0.26rem; cursor: move; line-height: 2; border-radius: 0.11rem; background-color: rgb(255, 255, 255); background-size: 100% 100%;"/>'
				+'	   <span class="objBorder borderLeft proxy" style="display: none; height: 57px;"></span>'
				+'	   <span class="objBorder borderRight proxy" style="display: none; height: 57px;"></span>'
				+'	   <span class="objBorder borderTop proxy" style="display: none; width: 483px;"></span>'
				+'	   <span class="objBorder borderBottom proxy" style="display: none; width: 483px;"></span>'
				+'	   <span class="coor coorBottomRight proxy" style="display: none;"></span>'
				+'   </div>'
				+'   <div class="buttonProto box panelChild" data-role="buttonProto" style="z-index: 0; position: absolute; width: 484px; height: 57.8462px; cursor: move; text-align: center; top: 144px; left: 78px; line-height: normal; margin-left: 0px;" iscount="true">'
				+'	   <div class="btnOpera" style="font-family: Microsoft YaHei; height: 100%; width: 100%; font-size: 0.26rem; cursor: move; line-height: 2; border-radius: 0.11rem; color: rgb(255, 255, 255); background-color: rgb(252, 20, 20); background-size: 100% 100%;">'
				+'	   输入文本'
				+'	   </div>'
				+'	   <span class="objBorder borderLeft proxy" style="display: block; height: 58px;"></span>'
				+'	   <span class="objBorder borderRight proxy" style="display: block; height: 58px;"></span>'
				+'	   <span class="objBorder borderTop proxy" style="display: block; width: 484px;"></span>'
				+'	   <span class="objBorder borderBottom proxy" style="display: block; width: 484px;"></span>'
				+'	   <span class="coor coorBottomRight proxy" style="display: block;"></span>'
				+'   </div>'
			    +'</div>'
				+'<span class="objBorder borderLeft proxy" style="display: none; height: 223px;"></span>'
				+'<span class="objBorder borderRight proxy" style="display: none; height: 223px;"></span>'
				+'<span class="objBorder borderTop proxy" style="display: none; width: 640px;"></span>'
				+'<span class="objBorder borderBottom proxy" style="display: none; width: 640px;"></span>'
				+'<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
			    +'</div>';
    var $label = $(strLabel);
	BaseOpera.AddDom($label);
	//事件绑定
	drag($('.wxTxtBefore .dragImg'),'bg',true);
	drag($('.wxTxtBefore .txtProto'),'txt',true);
	drag($('.wxTxtBefore .buttonProto'),'bg',true);
	drag($('.wxTxtBefore .panelProto'),'bg',true);
	$('.wxTxtBefore .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('wxTxtBefore').RightProto();
	domhistory.pushData("new",__this);
}