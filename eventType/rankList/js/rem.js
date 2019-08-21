		function resize() {
				window.remFontSize = document.documentElement.clientWidth / 10;
				document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + "px"
			}
		var b = null;
		window.addEventListener("resize", function() {
			clearTimeout(b), 
			b = setTimeout(resize, 300)
		}, !1);
		resize();