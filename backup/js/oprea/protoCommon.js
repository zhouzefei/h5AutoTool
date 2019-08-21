//透明度
function sliderCommon(ele,uni,changeType,color){
	var unim=uni||'%';
	var inputVal=0;
	$("."+ele).slider({max:100,value:inputVal,changeType:changeType,uni:uni}).next("input[type='text']").focus(function(){
		$(this).val($(this).val().split(unim)[0])	
	}).keyup(function(e){
		inputVal=$(this).val();
		if(!isNaN(inputVal)){
			$("."+ele).slider({max:100,value:inputVal,changeType:changeType,uni:uni});
		}
	}).blur(function(){
		$(this).val($(this).val()+unim);
		slideCallback($('.'+ele),changeType,inputVal,unim,color)	
	}); 
};
function slideCallback(ele,ttype,c,uni,color){
	if(ele.siblings('input').length>0){
		ele.siblings('input').val(c+uni);
        if(eTarget){
            if(ttype=='opacity'){
                $(eTarget.currentTarget).css(ttype,(1-c/100));
            }else if(ttype=='boxShadow'){
            	var colorVal=$("#borderColor").val();
            	$(eTarget.currentTarget).css(ttype,(colorVal+' 0 0 0'+(c+uni)));
            }else{
                $(eTarget.currentTarget).css(ttype,c+uni);
            }
        }
	}
}
//颜色选择器
function colorPick(ele,eleType){
	$('#'+ele).ColorPicker({
		onSubmit: function(hsb, hex, rgb, el) {
			colorType(ele,eleType,'#'+hex)
			$(el).ColorPickerHide();
			$(el).val(hex);
			console.log($(this).val());
		},
		onBeforeShow: function () {
			console.log($(this).val());
			$(this).ColorPickerSetColor(this.value);
		},
		onChange: function (hsb, hex, rgb,el) {
			$(el).val(hex);
			colorType(ele,eleType,'#'+hex)
		}
	})
	.bind('keyup', function(){
		$(this).ColorPickerSetColor(this.value);
	});
};

function colorType(ele,eleType,hex){
	switch(eleType){
		case 'txt':fontChangeColor(ele,hex); break;
		case 'border':borderChangeColor(ele,hex);break;
		case 'bg':
		default:bgChangeColor(ele,hex);
	}
}
//设置当前对象底色
 function bgChangeColor(ele,option){
	$(eTarget.currentTarget).css({'backgroundColor':option});
}
//设置当前字体颜色
 function fontChangeColor(ele,option){
 	$('#'+ele).css('backgroundColor',option);
	$(eTarget.currentTarget).css({'color':option});
}
//设置当前边框颜色
function borderChangeColor(ele,option){
	$('#'+ele).css('backgroundColor',option);
	$(eTarget.currentTarget).css({'borderColor':option});
}
//拖拽
function drag(ele,eleType){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top':(e.pageY - posix.y)/0.65,
						'left': (e.pageX - posix.x)/0.65
					});
				};

			callback.call(this, e, posix);
		}
	}).mouseup(function(e) {
		e.stopPropagation();
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});
	var $box = $('.'+ele).mousedown(function(e) {
	    var offset = $(this).position();
	    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
	    $.extend(document, {'move': true, 'move_target': this});
	}).on('click',function(e){
		e.stopPropagation();
		eTarget=e;
		$('#'+$(this).data('role')).show().siblings('section').hide();
		$('.coor').hide();
		$(this).find('.coor').show();
	}).on('mousedown', '.coor', function(e) {
		e.stopPropagation();
        var $this=$(this).parent();
	    var posix = {
	            'w': $this.width(), 
	            'h': $this.height(), 
	            'x': e.pageX, 
	            'y': e.pageY
	        };
	    $.extend(document, {'move': true, 'call_down': function(e) {
	    	var wid=(e.pageX - posix.x)/0.65 + posix.w;
	    	var hei=(e.pageY - posix.y)/0.65+ posix.h;
	    	if(eleType=='txt'){
				$this.css({
		            'width': Math.max(40, wid),
		        });
	    	}else{
	    		$this.css({
		            'width': Math.max(40, wid),
		            'height': Math.max(40, hei)
		        });
	    	}
	    }});
	    return false;
	}).on('click','.coor',function(e){
		e.stopPropagation();
	}).on('click','.mouseup',function(e){
		e.stopPropagation();
	});
}
