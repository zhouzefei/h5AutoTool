/*
 * Created with Sublime Text 2.
 * license: http://www.lovewebgames.com/jsmodule/index.html
 * User: 田想兵
 * Date: 2015-03-31
 * Time: 09:49:11
 * Contact: 55342775@qq.com
 */
;
(function(root, factory) {
	//amd
	if (typeof define === 'function' && define.amd) {
		define(['$', 'dialog'], factory);
	} else if (typeof exports === 'object') { //umd
		module.exports = factory();
	} else {
		root.MobileSelectArea = factory(window.Zepto || window.jQuery || $);
	}
})(this, function($, Dialog) {
	var MobileSelectArea = function() {
		var rnd = Math.random().toString().replace('.', '');
		this.areaId = 'scroller_' + rnd;
		this.scroller;
		this.data;
		this.index = 0;
		this.value = [0, 0, 0];
		this.areaCode = [0, 0, 0];
		this.oldvalue;
		this.text = ['', '', ''];
		this.level = 3;
		this.mtop = 30;
		this.separator = ' ';
	};
	MobileSelectArea.prototype = {
		init: function(settings) {
			this.settings = $.extend({}, settings);
			this.trigger = $(this.settings.trigger);
			level = parseInt(this.settings.level);
			this.level = level > 0 ? level : 3;
			this.trigger.attr("readonly", "readonly");
			this.value = (this.settings.value && this.settings.value.split(",")) || [0, 0, 0];
			this.areaCode = (this.settings.areaCode && this.settings.areaCode.split(",")) || [0, 0, 0];
			this.text = this.settings.text || this.trigger.attr('data-area').split(' ') || ['', '', ''];
			this.oldvalue = this.value.concat([]);
			this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
			this.clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
			this.getData();
			this.bindEvent();
		},
		getData: function() {
			var _this = this;
			if (typeof this.settings.data == "object") {
				this.data = this.settings.data;
			} else {
				$.ajax({
					//dataType: 'jsonp',
					cache: true,
					url: this.settings.data,
					async:false,
					//type: 'GET',
					success: function(result) {
						_this.data = result.data;
						//console.log(typeof _this.data)
					},
					accepts: {
						json: "application/json, text/javascript, */*; q=0.01"
					}
				});
			}
		},
		bindEvent: function() {
			var _this = this;
			this.trigger.tap(function(e) {
				var dlgContent = '';
				for (var i = 0; i < _this.level; i++) {
					dlgContent += '<div></div>';
				};
				$.confirm('<div class="ui-scroller-mask"><div id="' + _this.areaId + '" class="ui-scroller">' + dlgContent + '<p></p></div></div>', null, function(t, c) {
					var This=this;
					if (t == "yes") {
						_this.submit(function(data){
//							if($(".ui-scroller div:eq(1)").find(".focus")=='——'){
//								alert('请选择区域');	
//								return false;
//							};
							/*if(data[1]==''){
								e.preventDefault();
								alert('请选择区域');
								return false;								
							}
							else{*/
								This.dispose();
							//}
						});
					}
					if (t == 'no') {
						_this.cancel();
						this.dispose();
					}
					//this.dispose();
				}, {
					clientHeight: _this.clientHeight,
					clientWidth: _this.clientWidth
				});
				_this.scroller = $('#' + _this.areaId);
				_this.format();
				var start = 0,
					end = 0
				_this.scroller.children().bind('touchstart', function(e) {
					start = e.changedTouches[0].pageY;
				});
				_this.scroller.children().bind('touchmove', function(e) {
					end = e.changedTouches[0].pageY;
					var diff = end - start;
					var dl = $(e.target).parent();
					if (dl[0].nodeName != "DL") {
						return;
					}
					var top = parseInt(dl.css('top') || 0) + diff;
					dl.css('top', top);
					start = end;
					return false;
				});
				_this.scroller.children().bind('touchend', function(e) {
					end = e.changedTouches[0].pageY;
					var diff = end - start;
					var dl = $(e.target).parent();
					if (dl[0].nodeName != "DL") {
						return;
					}
					var i = $(dl.parent()).index();
					var top = parseInt(dl.css('top') || 0) + diff;
					if (top > _this.mtop) {
						top = _this.mtop;
					}
					if (top < -$(dl).height() + 60) {
						top = -$(dl).height() + 60;
					}
					var mod = top / _this.mtop;
					var mode = Math.round(mod);
					var index = Math.abs(mode) + 1;
					if (mode == 1) {
						index = 0;
					}
					_this.value[i] = $(dl.children().get(index)).attr('ref');
					_this.areaCode[i] = $(dl.children().get(index)).attr('areaCode');
					_this.value[i] == 0 ? _this.text[i] = "" : _this.text[i] = $(dl.children().get(index)).html();
					for (var j = _this.level - 1; j > i; j--) {
						_this.value[j] = 0;
						_this.text[j] = "";
					}
					if (!$(dl.children().get(index)).hasClass('focus')) {
						var indexof=$(dl.children().get(index)).parent("dl").parent("div").index();
						var pindexof=$(dl.children().get(index)).index();
						if(/——/.test($(dl.children().get(0)).html()))
						{
							pindexof=pindexof-1;
						}
						var areaindex=-2;
						if(indexof==1)
						{
							 areaindex=$(".ui-scroller div").eq(0).find(".focus").index();
						}
						else if(indexof==2)
						{
							areaindex=-1;
						}
						var arr=[pindexof,indexof,$(dl.children().get(index)).attr("ref"),areaindex]
						_this.format(arr);
					}
					$(dl.children().get(index)).addClass('focus').siblings().removeClass('focus');
					dl.css('top', mode * _this.mtop);
					return false;
				});
				return false;
			});
		},
		format: function(arr) {
			var _this = this;
			var child = _this.scroller.children();
			var acttivedata={};
			if(arr){
				if(arr[3]==-2)
				acttivedata=_this.data[arr[0]];
				else if(!(arr[3]<0))
				{
					acttivedata=_this.data[arr[3]].subAreas[arr[0]];
				}
			}
			if(arr&&arr[3]<0&&arr[1]>=0&&arr[3]!=-1&&!acttivedata.subAreas)
			{
				signCreate("RegionInfo",'{"insurance_id": "1","service_id":"getRegionInfo","parentId": "'+arr[2]+'"}',function(data){	
					acttivedata.subAreas=data.info;	//市一级
					console.log(_this.index);
					_this.areaCode[1] = data.info[0].areaCode;
					_this.f(_this.data);
					/*if(acttivedata.subAreas&&acttivedata.subAreas.length)
					{
						var pid=acttivedata.subAreas[0].areaId;
						signCreate("RegionInfo",'{"insurance_id": "1","service_id":"getRegionInfo","parentId": "'+pid+'"}',function(ndata){	
							acttivedata.subAreas[0].subAreas=ndata.info;	//区一级
							_this.f(_this.data);
						});
					}*/
				});
			}else
			{
				_this.f(this.data);
			}
			
		},
		f: function(data) {
			var _this = this;
			var item = data;
			if (!item) {
				item = [];
			};
			var str = '<dl>';
			if(_this.index==2)
			 str = '<dl><dd ref="0">——</dd>';
			var focus = 0,
				childData, top = _this.mtop;
			if (_this.index !== 0 && _this.value[_this.index - 1] == "0") {
				str = '<dl><dd ref="0" class="focus">——</dd>'; 
				_this.value[_this.index] = 0;				
				_this.text[_this.index] = "";
				_this.areaCode[_this.index]=0;
				_this.areaCode[_this.index] = _this.data[i].subAreas[0].areaCode+"";
				focus = 0;
			} else {
				if (_this.value[_this.index] == "0") {
					if(_this.index==2)
					str = '<dl><dd ref="0" class="focus">——</dd>';
					if(_this.index==1)
					{
						for(var i=0;i<_this.data.length;i++)
						{
							if(_this.value[0]==_this.data[i].areaId)
							{
								_this.value[_this.index]=_this.data[i].subAreas[0].areaId+"";
								_this.text[_this.index]=_this.data[i].subAreas[0].areaName+"";
								_this.areaCode[_this.index] = _this.data[i].subAreas[0].areaCode+"";
								break;
							}
						}	
					}
					focus = 0;
				}
				for (var j = 0, len = item.length; j < len; j++) {
					var pid = item[j].pid || 0;
					var id = item[j].areaId || 0;
					var areaCode = item[j].areaCode || 0;
					var cls = '';
					if (_this.value[_this.index] == id) {
						cls = "focus";
						focus = id;
						childData = item[j].subAreas;
						top = _this.mtop * (-j+1);
						
					};
					str += '<dd areaCode="'+ areaCode +'" pid="' + pid + '" class="' + cls + '" ref="' + id + '">' + item[j].areaName + '</dd>';
				}
			}
			str += "</dl>";
			var newdom = $(str);
			if(_this.index==2&&newdom.find(".focus").index()>0)
			top=top-_this.mtop;
			newdom.css('top', top);
			var child = _this.scroller.children();
			$(child[_this.index]).html(newdom);
			_this.index++;
			if (_this.index > _this.level - 1) {
				_this.index = 0;
				return;
			}
			_this.f(childData);
		},
		submit: function(callback) {
			this.oldvalue = this.value.concat([]);
			if (this.trigger[0].nodeType == 1) {
				//input
				//console.log(this.text)
				//console.log(this.value);
				callback &&　callback(this.text);
				if(this.text[1]==''){
					return false;
				}
				var sArea=this.text[1] ? this.text[1] : this.text[0];
				var sValue=parseInt(this.value[1]) ? this.value[1] : this.value[0];
				var value=parseInt(this.value[2]) ? this.value[2] : sValue;
				var areaType=parseInt(this.value[2]) ? 3 :(parseInt(this.value[1]) ? 2: 1) //区域类型 1.省 2.市 3.区(县)
				this.trigger.html(this.text[1] ? this.text[1] : sArea+'<b></b>')
				this.trigger.attr('data-area',this.text.join(this.separator));
				this.trigger.attr('data-value',value);//this.value.join(',')
				this.trigger.attr('data-type',areaType);
				this.trigger.attr('areaCode',this.areaCode[1]);
				
				//console.log(this.value[0]+'--'+this.value[1]);
				
				//console.log(areaType);				
				var searchType=$('.select option:selected').val(),
					sType=$('.orderShopList option:selected').val();
				$('.storeList').html('');
				cityCode = value;
				// console.log(cityCode)
				//storeObj.getMesg({page:1,areaId:value,areaType:areaType,searchType:searchType,keyWord:'',type:sType,num:6,h5:1});
			}
			this.trigger.next(':hidden').val(this.value.join(','));
			this.settings.callback && this.settings.callback(this.scroller);
			console.log(this);
		},
		cancel: function() {
			this.value = this.oldvalue.concat([]);
		}
	};
	return MobileSelectArea;
});