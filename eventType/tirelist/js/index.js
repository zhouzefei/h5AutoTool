function resize() {
    window.remFontSize = document.documentElement.clientWidth / 10;
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + "px";
}
var b = null;
window.addEventListener("resize", function() {
    clearTimeout(b),
        b = setTimeout(resize, 300)
}, !1);
resize();

function getJsonData(url, data, callfunc, errfunc) {
    $.ajax({
        url: url,
        data: data,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(data) {
            callfunc(data);
        },
        error: function(data) {
            if (errfunc)
                errfunc(data);
            else
                callfunc(data);
        }
    });
}

var storeObj = {
    page: 1,
    isLoad: true,
    isData: '',
    dataId:'',
    init: function(callback,scroljson) {
        callback && callback();
        this.scrollLoad(scroljson);
    },
    getMesg: function(json) {
        var _this = this;
        $('.load').show();
        _this.isLoad = false;
        getJsonData(json.url, json.data, function(data) {
            if (data.code == 0) {
                $('.load').hide();
                _this.isData = JSON.parse(data.info);
                if (_this.isData.goodsRos && _this.isData.goodsRos.length > 0) {
                    _this.appendStore(_this.isData.goodsRos);
                } else {
                    if (!json.isscroll) {
                        $('.goodsList').html('<p style="text-align:center;background: #efeff4;font-size: 0.4rem;margin-top: 10px;">暂无数据</p>');
                    }else{
                        $('.goodsList').append('<p style="text-align:center;background: #efeff4;font-size: 0.4rem;margin-top: 10px;">没有数据了</p>');
                    }
                }

            } else {
                $('.goodsList').html('<p style="text-align:center;background: #efeff4;font-size: 0.4rem;margin-top: 10px;">暂无数据</p>');
            }
            _this.isLoad = true;
        }, function(data) {
            $('.load').hide();
            _this.isLoad = true;
            $('.goodsList').html('<p style="text-align:center;background: #efeff4;font-size: 0.4rem;margin-top: 10px;">暂无数据</p>');
        })
    },
    appendStore: function(data) {
        var tempFn = doT.template($('#goodsList_tmp').html());
        var resultText = tempFn(data);
        $('.goodsList').append(resultText);
        storeObj.attachEvent();
    },
    attachEvent: function() {
        $(".goodsList").delegate("li", "click", function() {
            var sTireId = $(this).attr("data-id").toString();
            toApp.tireDetail(sTireId);
        });
    },
    scrollLoad: function(scroljson) {   //滚动加载
        var _this = this;
        $(window).on('scroll', function() {
            var iH = $(window).scrollTop() + $(window).height();
            // console.log($(window).height() + '---' + $('body').height());
            if (iH >= $('body').height()) {
                _this.page++;
                if (_this.isLoad) {
                    isLoad = false;
                    if (_this.isData.goodsRos.length > 0) {
                        _this.getMesg(
                        {
                            url : scroljson.url +'&pageNum='+_this.page+'&pageSize=10&carType='+[(!scroljson.carType)?'':(scroljson.carType)],
                            isscroll: true
                        }
                        );
                    } else {
                        _this.isLoad = true;
                    }
                }
            }
        })
    }
};


function stopScroll(dom) {
        var startX, startY;
        $(dom).on('touchstart', function(e) {
            startX = e.changedTouches[0].pageX;
            startY = e.changedTouches[0].pageY;
        });
        // 仿innerScroll方法
        $(dom).on('touchmove', function(e) {
            e.stopPropagation();
            var deltaX = e.changedTouches[0].pageX - startX;
            var deltaY = e.changedTouches[0].pageY - startY;
            // 只能纵向滚
            if (Math.abs(deltaY) < Math.abs(deltaX)) {
                e.preventDefault();
                return false;
            }
            var box = $(this).get(0);
            if ($(box).height() + box.scrollTop >= box.scrollHeight) {
                if (deltaY < 0) {
                    e.preventDefault();
                    return false;
                }
            }
            if (box.scrollTop === 0) {
                if (deltaY > 0) {
                    e.preventDefault();
                    return false;
                }
            }
            $(".mask").eq(0)[0].addEventListener("touchstart", function(ev) {
                ev.preventDefault();
            });
        });
    }

function appendType(data,dom) {
        var tempFn = doT.template($('#typeList_tmp').html());
        var resultText = tempFn(data);
        $(dom).append(resultText);
}

appendType(carData[1].jinkoubaoma,$(".jinkoubaoma"));
appendType(carData[1].huachenbaoma,$(".huachenbaoma"));
appendType(carData[9].mini,$(".mini"));
appendType(carData[2].beijingbenchi,$(".beijingbenchi"));
appendType(carData[2].jinkoubenchi,$(".jinkoubenchi"));
appendType(carData[0].yiqidazhong,$(".yiqidazhong"));
appendType(carData[0].jinkouaodi,$(".jinkouaodi"));
appendType(carData[6].yiqidazhong,$(".yiqidazhong"));
appendType(carData[6].shanghaidazhong,$(".shanghaidazhong"));
appendType(carData[5].shanghaitongyong,$(".shanghaitongyong"));
appendType(carData[10].dongfengrichan,$(".dongfengrichan"));
appendType(carData[7].yiqifengtian,$(".yiqifengtian"));
appendType(carData[7].guangqifengtian,$(".guangqifengtian"));
appendType(carData[8].fute,$(".fute"));
appendType(carData[3].guangqibentian,$(".guangqibentian"));
appendType(carData[3].dongfengbentian,$(".dongfengbentian"));
appendType(carData[11].xiandai,$(".xiandai"));
appendType(carData[4].jinkoubiaozhi,$(".jinkoubiaozhi"));
appendType(carData[4].dongfengbiaozhi,$(".dongfengbiaozhi"));