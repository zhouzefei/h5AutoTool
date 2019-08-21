'use strict';
var NewCompon=function(){};
NewCompon.prototype={
	'addTxt':function(){
		var strLabel='<div class="box txtProto" data-role="txtProto" style="position: absolute;min-height:0.3rem;z-index:0;font-size:0.26rem; height:auto;width:auto;text-align: left; top: 75px;left:80px; max-width:100%; word-wrap: break-word; cursor:move;">'
					+'	<div class="txtShuru" style="height:100%;min-height:0.3rem;width:100%;background-color: #ccc;">请输入文本</div>'
					+'	<span class="coor proxy coorRightCenter"></span>'
					+'	<span class="objBorder borderLeft proxy"></span>'
					+'	<span class="objBorder borderRight proxy"></span>'
					+'	<span class="objBorder borderTop proxy"></span>'
					+'	<span class="objBorder borderBottom proxy"></span>'
					+'</div>';
		var $label = $(strLabel);
		BaseOpera.AddDom($label);
		BaseOpera('txtProto').RightProto();
		drag($label,'txt',false);
		$label.trigger('click');
		domhistory.pushData("new",__this);
	},
	'addImg':function(imgSrc){
		var strLabel="<div class='dragImg box' data-role='imgProto' style='z-index:0;position: absolute;width:280px; height:auto; cursor:move; text-align: center; top: 75px;left:80px;  line-height: normal;'>"
					+"	<img src='"+imgSrc+"' style='height: 100%; width: 100%;display:block;'/>"
					+"	<span class='objBorder borderLeft proxy'></span>"
					+"	<span class='objBorder borderRight proxy'></span>"
					+"	<span class='objBorder borderTop proxy'></span>"
					+"	<span class='objBorder borderBottom proxy'></span>"
					+"	<span class='coor coorBottomRight proxy'></span>"
					+"</div>";
		var $label = $(strLabel);
		BaseOpera.AddDom($label);
		BaseOpera('dragImg').RightProto();
		drag($label,'img',false);
		$label.trigger('click');
		var wrapType=__this.data('role');
		$('#'+wrapType+' img.img').attr('src',imgSrc);
		domhistory.pushData("new",__this);
	},
	'addPanel':function(){
		var strLabel='<div class="panelProto panelWrap panel_wid100" data-role="panelProto"'
						+'style="position: absolute; height: 400px;z-index:0;width:640px;font-size: 0.2rem;text-align: left; top:0;left:0; word-wrap: break-word; line-height: normal;cursor:move;">'
						+'<div class="panelContain" style="height:100%;width:100%;background-size:100% 100%;background-repeat:no-repeat;background-color:#fff; position:relative;"></div>'
						+'<span class="objBorder borderLeft proxy"></span><span class="objBorder borderRight proxy"></span><span class="objBorder borderTop proxy"></span><span class="objBorder borderBottom proxy"></span><span class="coor coorBottomRight  proxy"></span></div>';
		var $label = $(strLabel);
		BaseOpera.AddDom($label);
		BaseOpera('panelProto').RightProto();
		drag($label,'bg',false);
		$label.trigger('click');
		domhistory.pushData("new",__this);
	},
	'addButton':function(){
		var strLabel="<div class='buttonProto box' data-role='buttonProto' style='z-index:0;position: absolute;width:200px; height:60px; cursor:move; text-align: center; top: 75px;left:80px;  line-height: normal;'>"
					+"<div class='btnOpera' style='background-size:100% 100%; font-family:Microsoft YaHei;height: 100%; width: 100%;font-size:.26rem;cursor:move;line-height:2;'>输入文本</div>"
					+"<span class='objBorder borderLeft proxy'></span><span class='objBorder borderRight proxy'></span><span class='objBorder borderTop proxy'></span><span class='objBorder borderBottom proxy'></span><span class='coor coorBottomRight proxy'></div>";
		var $label = $(strLabel);
		BaseOpera.AddDom($label);
		BaseOpera('buttonProto').RightProto();
		drag($label,'button',false);
		$label.trigger('click');
		domhistory.pushData("new",__this);
	}
};
