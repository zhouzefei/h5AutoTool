function beforeGetState(){
	var strLabel='';
	strLabel=   '<div class="panelProto panelWrap panel_wid100 beforeQuanState" data-text="获取券之前的状态" data-role="panelProto" style="position: absolute; height: 400px;z-index:0;width:640px;font-size: 0.2rem;text-align: left; top:0;left:0; word-wrap: break-word; line-height: normal;cursor:move;" iscount="true">'
			    +'	<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-image: url(images/pres/top_bg.jpg); background-color: rgb(255, 255, 255); background-size: 100% 100%; background-repeat: no-repeat;">'
				+'	    <div class="dragImg box panelChild" data-role="imgProto" style="z-index: 0; position: absolute; width: 228px; height: 303.716px; cursor: move; text-align: center; top: 44.2236px; left: 2.06rem; line-height: normal; margin-left: 0px;" iscount="true">'
				+'		    <img src="images/pres/red_bg.png" style="height: 100%; width: 100%;display:block;">'	
				+'		    <span class="objBorder borderLeft proxy" style="display: none; height: 304px;"></span>'	
				+'		    <span class="objBorder borderRight proxy" style="display: none; height: 304px;"></span>'	
				+'		    <span class="objBorder borderTop proxy" style="display: none; width: 228px;"></span>'	
				+'		    <span class="objBorder borderBottom proxy" style="display: none; width: 228px;"></span>	'
				+'		    <span class="coor coorBottomRight proxy" style="display: none;"></span>'
				+' 	   </div>'
			    +'	</div>'
			    +'	<span class="objBorder borderLeft proxy" style="display: none; height: 400px;"></span>'
			    +'	<span class="objBorder borderRight proxy" style="display: none; height: 400px;"></span>'
			    +'	<span class="objBorder borderTop proxy" style="display: none; width: 640px;"></span>'
			    +'	<span class="objBorder borderBottom proxy" style="display: none; width: 640px;"></span>'
			    +'	<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
		    	+'</div>';
    var $label = $(strLabel);
	BaseOpera.AddDom($label);
	//事件绑定
	drag($('.beforeQuanState .dragImg'),'bg',true);
	drag($('.beforeQuanState .txtProto'),'txt',true);
	drag($('.beforeQuanState .buttonProto'),'bg',true);
	drag($('.beforeQuanState .panelProto'),'bg',true);
	$('.beforeQuanState .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('beforeQuanState').RightProto();
	domhistory.pushData("new",__this);
}