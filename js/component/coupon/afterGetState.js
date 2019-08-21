function afterGetState(){
	var strLabel='';
	strLabel=   '<div class="panelProto panelWrap panel_wid100 afterQuanState" data-text="获取券之后的状态" data-role="panelProto" style="position: absolute; height: 400px;z-index:0;width:640px;font-size: 0.2rem;text-align: left; top:0;left:0; word-wrap: break-word; line-height: normal;cursor:move;" iscount="true">'
				+'<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-image: url(images/pres/top_bg.jpg); background-color: rgb(255, 255, 255); background-size: 100% 100%; background-repeat: no-repeat;">	 '   	
			    +'	<div class="panelProto panelWrap panelChild" data-role="panelProto" style="height: 75px;margin:0 auto; z-index: 0; width: 5rem; font-size: 0.2rem; text-align: left; word-wrap: break-word; line-height: normal; cursor: move; " iscount="true">'
				+'    	<div class="panelContain afterStateUrl" style="height: 100%; width: 100%; background-image: url(images/pres/quanBg.png); background-color: rgba(0, 0, 0, 0); background-size: 100% 100%; background-repeat: no-repeat;">'
				+'    	</div>'
				+'    	<span class="objBorder borderLeft proxy" style="display: none; height: 67px;"></span>'
				+'    	<span class="objBorder borderRight proxy" style="display: none; height: 67px;"></span>'
				+'    	<span class="objBorder borderTop proxy" style="display: none; width: 500px;"></span>'
				+'    	<span class="objBorder borderBottom proxy" style="display: none; width: 500px;"></span>'
				+'    	<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
			    +'	</div>'
				+'  <div class="dragImg box panelChild" data-role="imgProto" style="z-index: 0; position: absolute; width: 176.923px; height: 232.527px; cursor: move; text-align: center; top: 88.8462px; left: 210.769px; line-height: normal;" iscount="true">'	
				+'	    <img src="images/pres/red_qiangguang.png" class="afterOneInfo" style="height: 100%; width: 100%;display:block;">'
				+'	    <span class="objBorder borderLeft proxy" style="display: block; height: 232px;"></span>'	
				+'	    <span class="objBorder borderRight proxy" style="display: block; height: 232px;"></span>'
				+'	    <span class="objBorder borderTop proxy" style="display: block; width: 177px;"></span>'	
				+'	    <span class="objBorder borderBottom proxy" style="display: block; width: 177px;"></span>'	
				+'	    <span class="coor coorBottomRight proxy" style="display: block;"></span>'
				+'  </div>'
		    	+'</div>'
			    +'	<span class="objBorder borderLeft proxy" style="display: none; height: 400px;"></span>'
			    +'	<span class="objBorder borderRight proxy" style="display: none; height: 400px;"></span>'
			    +'	<span class="objBorder borderTop proxy" style="display: none; width: 640px;"></span>'
			    +'	<span class="objBorder borderBottom proxy" style="display: none; width: 640px;"></span>'
			    +'	<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
		    	+'</div>';
    var $label = $(strLabel);
	BaseOpera.AddDom($label);
	//事件绑定
	drag($('.afterQuanState .dragImg'),'bg',true);
	drag($('.afterQuanState .txtProto'),'txt',true);
	drag($('.afterQuanState .buttonProto'),'bg',true);
	drag($('.afterQuanState .panelProto'),'bg',true);
	$('.afterQuanState .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('afterQuanState').RightProto();
	domhistory.pushData("new",__this);
}