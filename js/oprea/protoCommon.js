/*
*********操作公共模块**************
*/
'use strict';
;(function(BaseOpera){
	//属性拖拽设置
	var sliderProto=function(){};
	sliderProto.prototype={
		'sliderCommon':function(ele,uni,changeType,color){
			var unim=uni||'%';
			var inputVal=0,self=this;
			$(ele).slider({max:100,value:inputVal,changeType:changeType,uni:uni}).next("input[type='text']").focus(function(){
				$(this).val($(this).val().split(unim)[0])	
			}).keyup(function(e){
				inputVal=$(this).val();
				if(!isNaN(inputVal)){
					$(ele).slider({max:100,value:inputVal,changeType:changeType,uni:uni});
				}
			}).blur(function(){
				$(this).val($(this).val()+unim);
				self.slideCallback($(ele),changeType,inputVal,unim,color)	
			}); 
		},
		'slideCallback':function(ele,ttype,c,uni,color){
			var self=this;
			if(ele.siblings('input').length>0 && __this){
				ele.siblings('input').val(c+uni);
				console.log(ttype);
	        	switch(ttype){
	        		case 'backgroundColor':
	        			if(__this && __this.attr('class')=='wrapContent'){
		            		var colorVal=$('#wrapContain .bgColor').css('backgroundColor');
			            	self.rgbTrans(colorVal,ttype,c,$('#wrapContain .bgColor'));
		            	}else{
		            		var colorVal=__this.children(':first-child').css('backgroundColor');
			            	self.rgbTrans(colorVal,ttype,c,__this.children(':first-child'));
		            	};
		            	break;
	        		case 'boxShadow':
		            	var colorVal=$("#borderColor").val();
		            	colorVal=colorVal||'#000';
		            	 __this.children(':first-child').css(ttype,(colorVal+' 0 0 0'+(c/100+uni)));
		            	 break;
	            	case 'opacity':
		            	if(__this && __this.attr('class')=='wrapContent'){
		            		__this.children(':first-child').css(ttype,(1-c/100)+uni);
		            	}else{
							
		            		__this.css(ttype,(1-c/100)+uni);
		            	};
		            	break;
	            	default:
	            		__this.children(':first-child').css(ttype,c/100+uni);
            	};
			}
		},
		'rgbTrans':function(colorVal,ttype,c,ele){
			if(colorVal.indexOf('rgba')>-1){
				colorVal=colorVal||'rgba(0, 0, 0,1)';
        		colorVal=colorVal.substring(5,colorVal.lastIndexOf(','));
        	}else{
        		colorVal=colorVal||'rgb(0, 0, 0)';
        		colorVal=colorVal.substring(4,colorVal.length-1);
        	}
    		ele.css(ttype,'rgba('+colorVal+','+ (1-c/100) +')');
		}
	};
	//颜色选择器
	var colorProto=function(){};
	colorProto.prototype={
		'colorPick':function(ele,eleType){
			var self=this;
			$(ele).ColorPicker({
				onSubmit: function(hsb, hex, rgb, el) {
					self.colorType(ele,eleType,'#'+hex)
					$(el).ColorPickerHide();
					$(el).val(hex);
				},
				onBeforeShow: function () {
					$(this).ColorPickerSetColor(this.value);
				},
				onChange: function (hsb, hex, rgb,el) {
					$(el).val(hex);
					self.colorType(ele,eleType,'#'+hex)
				}
			})
			.bind('keyup', function(){
				$(this).ColorPickerSetColor(this.value);
			});
		},
		'colorType':function(ele,eleType,hex){
			switch(eleType){
				case 'txt':this.fontChangeColor(ele,hex); break;
				case 'border':this.borderChangeColor(ele,hex);break;
				case 'txtBorder':this.txtBorderChangeColor(ele,hex);break;
				case 'btnTxt':this.btnFontChangeColor(ele,hex);break;
				case 'btnBg':this.btnBgChangeColor(ele,hex);break;
				case 'txtBg':this.btnBgChangeColor(ele,hex);break;
				case 'childBg':this.childBgChangeColor(ele,hex);break;
				case 'bg':
				default:this.bgChangeColor(ele,hex);
			};
		},
		'bgChangeColor':function (ele,option){
			__this.closest('#wrap').find('.bgColor').css({'backgroundColor':option});
		},
		'childBgChangeColor':function (ele,option){
			__this.children(':first-child').css({'backgroundColor':option});
		},
		//设置当前字体颜色
		'fontChangeColor': function (ele,option){
		 	$(ele).css('backgroundColor',option);
			__this.css({'color':option});
		},
		//设置当前边框颜色
		'borderChangeColor':function (ele,option){
			$(ele).css('backgroundColor',option);
			__this.css({'borderColor':option});
		},
		//设置按钮字体颜色
		'btnFontChangeColor':function (ele,option){
			$(ele).css('backgroundColor',option);
			__this.children(':first-child').css({'color':option});
		},
		//设置按钮字体背景色
		'btnBgChangeColor':function (ele,option){
			$(ele).css('backgroundColor',option);
			__this.children(':first-child').css({'backgroundColor':option});
		},
		//设置字体
		'txtBorderChangeColor':function (ele,option){
			$(ele).css('backgroundColor',option);
			__this.children(':first-child').css({'borderColor':option});
		}
	};
	//右键操作
	var rightProto=function(){};
	rightProto.prototype={
		'rightOpera':function (ele){
			var self=this;
			console.log(ele)
			$.contextMenu({
			    selector: '.'+ele, 
			    callback: function(key, options) {
			        if(key=='delete'){
			        	console.log(__this);
			        	domhistory.pushData("undoRemove",{'obj':__this,'parentObj':__this.parent()});
			        	__this.remove();
			        }else if(key=='downIndex'){
			        	self.downest(ele);
			        }else if(key=='upest'){
						self.upest(ele);
			        }else if(key=='copy'){
			        	var newThis=__this.clone();
			        	$(newThis).css({'top':0,'left':0}).addClass('clone').removeClass('context-menu-active').attr('data-role','');
			        	__this.after($(newThis));
						drag($(newThis),'bg',true);
						$(newThis).trigger('click');
						BaseOpera('clone').RightProto();
			        }
			    },
			    items: {
			        "downIndex": {name: "置底层"},
			        "upest": {name: "置顶层"},
			        "sep1": "---------",
			        "copy": {name: "复制"},
			        "delete": {name: "删除"}
			    }
		    });
		},
		'downest':function (ele){
			var sibEle=__this.siblings();
			var eleZindex=__this.css('z-index');
			var indexArr=[],domArr=[];
			var optZindex;
			$.each(sibEle,function(i,n){
				optZindex=$(n).css('z-index');
				indexArr.push(optZindex);
				domArr.push(n);
			});
			optZindex=Math.min.apply(null,indexArr); 
			if(eleZindex>optZindex){
				var temp=optZindex;
				optZindex=eleZindex;
				eleZindex=temp;
			}else if(eleZindex==optZindex && optZindex>0){
				eleZindex--;
			}
			__this.css('z-index',eleZindex);
			var index = $.inArray(optZindex,indexArr);
			$(domArr[index]).css('z-index',optZindex);
		},
		'upest':function (ele){
			var sibEle=__this.siblings();
			var eleZindex=__this.css('z-index');
			var indexArr=[],domArr=[];
			var optZindex;
			$.each(sibEle,function(i,n){
				optZindex=$(n).css('z-index');
				indexArr.push(optZindex);
				domArr.push(n);
			});
			optZindex=Math.max.apply(null,indexArr); 
			if(eleZindex<optZindex){
				var temp=optZindex;
				optZindex=eleZindex;
				eleZindex=temp;
			}else if(eleZindex==optZindex){
				eleZindex++;
			}
			__this.css('z-index',eleZindex);
			var index = $.inArray(optZindex,indexArr);
			$(domArr[index]).css('z-index',optZindex);
		}
	};
	//对齐方式
	var alignType=function(){};
	alignType.prototype={
		'alignCenter':function(ele){
			$(ele).click(function(){
				$(this).addClass('active').siblings().removeClass('active');
				var alignType=$(this).data('align');
				var leftX='',verticalY='';
				switch(alignType){
					case 'left':
						leftX=0;break;
					case 'center':
						leftX=(__this.parent().width()-__this.width())/2;break;
					case 'right':
						leftX=__this.parent().width()-__this.width();break;
					default:
						leftX=0;
				};
				var prototypes=__this.attr('iscount');
				if(prototypes){
					__this.css({'left':leftX+'px','right':'','marginLeft':'0'}).trigger('click');
				}else{
					__this.css({'left':leftX/100+'rem','right':'','marginLeft':'0'}).trigger('click');
				}
			});
		},
		'verticalCenter':function(ele){
			$(ele).click(function(){
				$(this).addClass('active').siblings().removeClass('active');
				var alignType=$(this).data('align');
				if(alignType=='top'){
					__this.css({'top':'0'}).removeClass('panel_btm0').trigger('click');
				}else{
					var heiContent=$('#wrapContain .wrapContent').height()-__this.height();
					__this.css({'top':heiContent+'px'}).addClass('panel_btm0').trigger('click');
				}
				
			});
		}
	};
	//增加dom
	var addDom=function(){};
	addDom.prototype={
		'addDom':function($label){
			if(__this && __this.attr('class') && __this.attr('class').indexOf('panelWrap')>-1){
				$label.addClass('panelChild');
				__this.children(':first-child').append($label);
			}else if(__this && __this.attr('class')=='wrapContent'){
				$('#wrapContain .wrapContent').append($label);
			}else{
				__this.parent().append($label);
			}
		}
	};
	BaseOpera.fn.extend({
		'RightProto':function(){
			var objRight=new rightProto();
			objRight.rightOpera(this.selector);
		},
		'ColorProto':function(eleType){
			var objColor=new colorProto()
			objColor.colorPick(this,eleType);
		},
		'SliderProto':function(uni,changeType,color){
			var objSlider=new sliderProto();
			objSlider.sliderCommon(this,uni,changeType,color);
		},
		'AlignType':function(v){
			var objAlign=new alignType();
			if(v=='V'){
				objAlign.verticalCenter(this);
			}else{
				objAlign.alignCenter(this);
			}
		}
	});
	BaseOpera.extend({
		'AddDom':function($label){
			var addProto=new addDom();
			addProto.addDom($label);
		}
	});
	window.BaseOpera=BaseOpera;
	window.sliderProto=sliderProto;
}($));
