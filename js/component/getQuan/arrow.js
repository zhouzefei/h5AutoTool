function arrow(){
	var strLabel='';
	strLabel=   '<div class="dragImg box arrow" data-role="imgProto" data-text="下滑箭头" style="z-index:999;position: fixed; bottom: 0.2rem; left: 46%; width: 8%; -webkit-animation: arrowGo 1.5s infinite ease-in-out;">'
				+'	<img src="images/pres/arrow.png" style="height: 100%; width: 100%;display:block;"/>'
				+'	<span class="objBorder borderLeft proxy" style="display: none; height: 23px;"></span>'
				+'	<span class="objBorder borderRight proxy" style="display: none; height: 23px;"></span>'
				+'	<span class="objBorder borderTop proxy" style="display: none; width: 41px;"></span>'
				+'	<span class="objBorder borderBottom proxy" style="display: none; width: 41px;"></span>'
				+'	<span class="coor coorBottomRight proxy" style="display: none;"></span>'
				+'</div>';
	var $label = $(strLabel);
	BaseOpera.AddDom($label);
	$label.trigger('click');
	BaseOpera('arrow').RightProto();
	domhistory.pushData("new",__this);
}	