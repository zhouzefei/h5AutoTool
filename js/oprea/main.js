'use strict';
var __this=$('.wrapContent');
$(function(){
	var hashId=getQueryString('type');
	if(!hashId){
		alert('请先选择一种适配方式');
	}
	//适配方式选择
	$('.dapet li').click(function(e){
		var daptType=$(this).data('type');
		var urlHre=(location.href).split('?')[0];
		if($('.wrapContent').children().length>0){
			if (confirm('确认放弃当前所有操作')) {
				location.href=urlHre+'?type='+daptType;
			};
		}else{
			location.href=urlHre+'?type='+daptType;
		}
	});
	$('.dapet li[data-type='+hashId+']').addClass('active');
	chooseDapt(hashId)
	function chooseDapt(daptType){
		if(daptType.toUpperCase().indexOf('W')>-1){
			$("script[src='js/oprea/dragH.js']").remove()
			var script=document.createElement('script');
			script.onload=function(){
	            bgProto();
				txtProto();
				imgProto();
				buttonProto();
				panelProto();
				BaseOpera('.panelAlign li').AlignType('H');
				BaseOpera('.panelVertical li').AlignType('V');
			 };
			script.src='js/oprea/dragW.js';
			document.head.appendChild(script);
			//保存
			$('.save').click(function(){
				$(".proxy").hide();
				$('.dialog').css({'position':'fixed','height':'100%'})
				console.log($("#wrap").remove('.coor').html());
			});
		}else{
			$("script[src='js/oprea/dragW.js']").remove()
			var script=document.createElement('script');
			script.onload=function(){
				$('.wrapContent').css({'overflow':'hidden'});
	            bgProto();
				txtProto();
				imgProto();
				buttonProto();
				panelProto();
				BaseOpera('.panelAlign li').AlignType('H');
				BaseOpera('.panelVertical li').AlignType('V');
			};
			script.src='js/oprea/dragH.js';
			document.head.appendChild(script);
			//保存
			$('.save').click(function(){
				$(".proxy").hide();
				$('.pagesShow>li:last-of-type .pageShowWrap').children("[class^='page']").html($("#wrapContain #wrap").html());
				$('.pagesShow>li.active .pageShowWrap').children("[class^='detailPage']").html($("#wrapContain #wrap").html());
				$(".proxy").remove();
				var htmlStr='',jsonData=[];
				$("div.pageShowWrap").each(function(e){
					htmlStr+=$(this).html();
					var jsonStr={};
					domToJson(this,jsonStr);
					jsonData.push(jsonStr);
				})
				console.log(JSON.stringify(jsonData));
				//console.log(htmlStr);
			});
		}
	}
	//图层组
	$('.layerShow').click(function(){
		$(".configShow").removeClass('on');
		$(".frameConfig").animate({'top':'1800px'},'fast')
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(".frameLayer").animate({'right':'-301px'},'300',function(){
				layer();
			});
		}else{
			$(this).addClass('on');
			$(".frameLayer").animate({'right':'0'},'300',function(){
				layer();
			});
		}
	});
	//配置系数
	$('.configShow').click(function(){
		$('.layerShow').removeClass('on');
		$(".frameLayer").animate({'right':'-301px'});
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(".frameConfig").animate({'top':'1800px'},'300')
		}else{
			$(this).addClass('on');
			$(".frameConfig").animate({'top':'0'},'300')
		}
	});
	
	//dom转json字面量
	function domToJson(ele,jsonStr){
		var childArr=[];	
		$(ele).children().each(function(e){
			var child={};								
			child.nodeName=$(this)[0].nodeName;
			child.className=$(this)[0].className;
			if($(this)[0].className.indexOf('txtShuru')>-1||$(this)[0].className.indexOf('btnOpera')>-1){
				child.content=$(this).html();
			}else{
				child.content='';
			}
			child.id=$(this).attr('id');
			child.styleCss=cssToJson($(this).attr('style'));
			child.src=$(this).attr('src');
			child.dataProto=$(this).attr('isCount');
			childArr.push(child);
			domToJson(this,child);
		});
		jsonStr.child = childArr;
	}
	function cssToJson(str){
		if(!str){
			return ;
		}
		str=str.replace(/url\((.*?)\/(images\/.*?)\);/, 'url($2);');
		var arr=str.split(';');
        var arrLast=arr.splice(-1,1);
        var jsonStr=[];
        var styleObj={};
        for(var k=0;k<arr.length;k++){
        	jsonStr.push(arr[k].split(':'));
        }
        for(var l=0;l<jsonStr.length;l++){
          styleObj[jsonStr[l][0]]=jsonStr[l][1];
        }
        return styleObj;
	};
	//操作左侧即可见
	$("body").on('click','*',function(){
		$('.pagesShow>li.active .pageShowWrap').children("[class^='detailPage']").html($("#wrapContain #wrap").html());
	});
});
