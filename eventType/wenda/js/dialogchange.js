var iDialog = {
    options: { width:160,height:90,lock: true, quickClose: false, auto: false, time: 2000 },
    show: function (content, options, callback) {
        if (options != null && typeof (options) != "undefined") {
            for (var key in options) {
                iDialog.options[key] = options[key];
            }
        }
        var tmplHtml = '<div id="idialog"><div class="imask" style="display: none;position: absolute;top: 0px;left: 0px;background-color: #333;z-index: 998;opacity: 0.85;-moz-opacity: 0.3;filter: alpha(opacity=30);"></div>' +
            '<div class="ipopup" style="display: none;position: fixed;border: 0px solid rgba(178,178,178,.3);border-radius: 6px;z-index: 999;max-width:90%;">' +
            '<div class="iclose" style="position:absolute;top:-10px;right:-10px;color:#f00;z-index:1000;cursor:pointer;"></div>' +
            '<div class="icontent"></div></div></div>';
        var ele = $(tmplHtml);
        if ($("#idialog").length <= 0) {
            $("body").append(ele);
            $(".iclose").on({
                touchstart: function (e) {
                    e.stopPropagation();
                    iDialog.close();
                    return false;
                }
            });
        }
        $("#idialog .icontent").html(content);

        if (iDialog.options.lock) {
            iDialog.showMask();
        }
        iDialog.showContent();

        if (iDialog.options.auto) {
            setTimeout(function () {
                iDialog.close();
            }, iDialog.options.time);
        }

        if (callback != null && typeof (callback) != "undefined" && typeof (callback) == "function") {
            callback();
        }
    },
    showMask: function () {
        var documentHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        var documentWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        $("#idialog .imask").css({ "height": documentHeight + "px", "width": documentWidth + "px" }).show();
        if (iDialog.options.quickClose) {
            $("#idialog .imask").on("touchstart", function (e) {
                e.stopPropagation();
                iDialog.close();
            });
        }
    },
    showContent: function () {
        var ipopupobj = $("#idialog .ipopup");
        ipopupobj.show();
        iDialog.resize();
        iDialog.center(ipopupobj);
        ipopupobj.removeClass('zoomOut').addClass('zoomIn').removeClass('animated').addClass('animated');
    },
    resize: function () {
        var content = $("#idialog .icontent");
        var width = iDialog.options.width;
        var height = iDialog.options.height;
        content.removeAttr("style");
        if (content.children().length == 0) {
            content.css({ "padding":"20px"});
            return false;
        }
        content.css({ "height": height, "width": width});
    },
    center: function (obj) {
        var top = ($(window).height() - $(obj).height()) / 2;
        var left = ($(window).width() - $(obj).width()) / 2;
        $(obj).css({ "top": top + "px", "left": left + "px" });
    },
    close: function () {
        $("#idialog .ipopup").hide();
        $("#idialog .ipopup").removeClass('zoomIn').addClass("zoomOut").removeClass('animated').addClass('animated');
        $("#idialog .imask").hide();
    }  
}