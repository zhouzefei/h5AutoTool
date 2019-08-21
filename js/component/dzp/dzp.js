function zp () {
	var strLabel='';
	strLabel='<div class="panelProto panelWrap zpWrap" data-text="大转盘" data-role="panelProto" '
				+'style="position: absolute; height: 5.86rem; width: 6.4rem; left: 0; z-index: 0; font-size: 0.2rem;'
				+'text-align: left; top: 0.646226rem; word-wrap: break-word; line-height: normal; cursor: move;' 
				+'background-image: url(images/pres/zp.png); background-position: center center;background-size: contain;background-repeat:no-repeat">'
				+'<div class="panelContain" style="height:100%;width:100%;position:relative;">';
	var child1='<div class="dragImg box panelChild" data-role="imgProto" style="'
				+'z-index: 0; position: absolute; width: 5.91923rem; height: 5.83261rem; cursor: move; text-align: center; top: 0.0103124rem; left: 0.243473rem; line-height: normal;"'
				+'><img src="images/pres/zhuanpanbg_03.png" style="height: 100%; width: 100%;">'
				+'<span class="objBorder borderLeft proxy" style="display: none; height: 583px;"></span><span class="objBorder'
				+' borderRight proxy" style="display: none; height: 583px;"></span><span class="objBorder borderTop proxy" '
				+'style="display: none; width: 592px;"></span><span class="objBorder borderBottom proxy" style="display: none; '
				+'width: 592px;"></span><span class="coor coorBottomRight proxy" style="display: none;"></span></div>';
	var child2='<div '
				+'class="dragImg box" data-role="imgProto" style="z-index: 0; position: absolute; width: 5.77923rem; '
				+'height: 5.76928rem; cursor: move; text-align: center; top: 0.00993981rem; left: 0.27393rem; line-height: normal;">'
				+'<img src="images/pres/zhuanpan2_03.png" class="zpRotate" style="height: 100%; width: 100%;"><span class="objBorder borderLeft proxy" '
				+'style="display: none; height: 577px;"></span><span class="objBorder borderRight proxy" style="display: none; '
				+'height: 577px;"></span><span class="objBorder borderTop proxy" style="display: none; width: 578px;"></span><span '
				+'class="objBorder borderBottom proxy" style="display: none; width: 578px;"></span><span class="coor coorBottomRight proxy"'
				+' style="display: none;"></span></div>';
	var child3='<div class="dragImg box" data-role="imgProto" style="z-index: 0; position: absolute; width: 1.89231rem; '
				+'height: 2.24374rem; cursor: move; text-align: center; top: 1.41025rem; left: 2.2581rem; line-height: normal;'
				+'"><img src="images/pres/zhuanpanbtn_03.png" class="zpButton" style="height: 100%; width: 100%;"><span class="objBorder borderLeft '
				+'proxy" style="display: none; height: 224px;"></span><span class="objBorder borderRight proxy" style="display: none; height:'
				+' 224px;"></span><span class="objBorder borderTop proxy" style="display: none; width: 189px;"></span><span class="objBorder'
				+' borderBottom proxy" style="display: none; width: 189px;"></span><span class="coor coorBottomRight proxy" '
				+'style="display: none;"></span></div></div>';
	strLabel+=child1+child2+child3+'<span class="objBorder borderLeft proxy" style="display: none; height: 586px;">'
				+'</span><span class="objBorder borderRight proxy" style="display: none; height: 586px;"></span><span class="objBorder borderTop'
				+' proxy" style="display: none; width: 586px;"></span><span class="objBorder borderBottom proxy" style="display: none; '
				+'width: 586px;"></span><span class="coor coorBottomRight  proxy" style="display: none;"></span></div>';
	var $label = $(strLabel);
	BaseOpera.AddDom($label);
	drag($('.zpWrap .box'),'bg',true);
	$('.zpWrap .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('zpWrap').RightProto();
	domhistory.pushData("new",__this);
}
