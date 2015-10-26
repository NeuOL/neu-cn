define(function(require,exports,module){

	var $ = require('jquery');
	var slide = require('slide');
	var smSlider = require('smallslider');

	(function() {
	__initSlider();
	slide.slideInit();
	function __initSlider() {
		smSlider.initSlider();
		(function __initSlider() {
			$('#img-slider').smallslider({
				 switchEffect: 'ease',
				 switchPath: 'left',
				 switchMode: 'click',
				 autoStart: true,
				 showText: false,
				 switchTime: 1000,
				 width: 220,
				 height: 150
		 });
	 })();

	 if( $(".news-item")[0]  ) {
		 if( $(".news-item")[0].style.display !== 'block' ) {
				__initSlider();
		 }
	 }

	 // Load compat_ie.css for IE 7
	 if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7." && document.getElementById("compat")) {

		 var compat_styles = "_<style> \
		 					#body {margin-top: 30px;} \
							 	#body hr , footer hr {\
							 	margin:  0;\
							}\
							 .head-news h4 { \
							   font-weight:bold;\
						   } \
							 .news .text {\
							 	float: left;\
							}\
							 .news .date {\
							 	float: right;\
							}\
							 #universityNews .more {\
							   width: 120px;\
							   margin-top: -5px;\
						   }\
							 #media li .date {\
							 	width: 40px;\
							}\
							 #academyNews li .date, #others li .date, #media li .date {\
							 	width: 40px;\
							}\
							 #media ul {\
							 	zoom:1;\
							 	overflow:hidden;\
							}\
							 #media .news ul li, #academyNews li {\
							     margin: 0px;\
							 	margin-bottom: 11px;\
							} \
							</style>";

		var div = document.getElementById("compat");
		div.innerHTML = compat_styles;
		div.removeChild(div.firstChild);
	 }

	}

	})();

  	// Judge ie6
	(function() {
		var isIE=!!window.ActiveXObject;
		var isIE6=isIE&&!window.XMLHttpRequest;
		if( isIE6 ) {
			alert("您的浏览器版本太低，导致页面显示问题，请升级浏览器。");
		}
	})();

	$("#slider").bind('click', function() {
		window.location.href="./index.html";
	});
	function resetAll() {
		$(document).ready(function() {
			if($("#foot")) {
				var offsetTop = $("#foot").offset() && $("#foot").offset().top;
				//alert(offsetTop);
				if(offsetTop >= 1000) {
					$(".embed_left").css("display", "block");
					if($(".right_sub").css("display") != "none") {
						$(".embed_left_2").css("display", "none");
					} else {
						$(".embed_left_2").css("display", "block");
					}
				}
				else {
					$(".embed_left").css("display", "none");
					$(".embed_left_2").css("display", "none");
				}
			}
		});
	}
	resetAll();

	convertSliderSize();
	function convertSliderSize() {
		var _width = document.documentElement.clientWidth;

		if (_width >= 1690) {
			var   w = 310
				, h = 200;

			var _css = {
				"width": w + "px",
				"height": h + "px"
			};

			$(".smallslider").css(_css);
			$("#img-slider li").css(_css);
			$.each( $(".smallslider li img"), function(k, v) {
				$(v).css("height", h);
				$(v).css("width", w);
			});
			$.smallsliderConvert(w, h);
		} else {
			var   w = 220
				, h = 150;

			var _css = {
				"width": w,
				"height": h
			};

			$(".smallslider").css(_css);
			$("#img-slider li").css(_css);
			$.each( $(".smallslider li img"), function(k, v) {
				$(v).css("height", h);
				$(v).css("width", w);
			});
			$.smallsliderConvert(w, h);
		}
	}

	exports.slide = function () {
		$("#slider").responsiveSlides({
			auto: true,
			pager: false,
			nav: true,
			speed: 500,
			timeout:5000,
			pager: true,
			pauseControls: true,
			namespace: "slider"
		});
	}

	exports.nav = function(){
		var Nav = require('nav');
		var n = new Nav("nav.menu");
		n._init();

		var _width = document.documentElement.clientWidth;
	    if(_width < 650){
	        n.removeHover();
	    }else{
		    n.addHover();
	    }
	}

	exports.topicData = function(){

		var html = "";

		$("#topics .news").html(html);
	}

	exports.timeline = function(){
		var $prev = $("#timeline .prev");
		var $container = $("#timeline .contain");
		var $prevWrapper = $("#timeline .prev-wrapper");
		var $nextWrapper = $("#timeline .next-wrapper");
		var $next = $("#timeline .next");
		var $newsCon1 = $("#timeline ul");
		var $news = $("#timeline li");
		var size = $news.size();
		var _width = document.documentElement.clientWidth;
		var liLength = 282;
		if( _width < 1200 ){
			liLength = 235;
		}else if( _width < 1600 ){
			liLength = 282;
		}else if( _width>=1600 ){
			liLength = 376;
		}else if( !_width ){
			liLength = 282;
		}

		if( size<=4 ){
			$prev.hide();
			$next.hide();
		}

		$(window).resize(function() {
			resetAll();
			convertSliderSize();
			_width = document.documentElement.clientWidth;
			if( _width < 1200 ){
				liLength = 235;
			}else if( _width < 1600 ){
				liLength = 282;
			}else{
				liLength = 376;
			}
			$newsCon1.animate({marginLeft:"0px"});

			$newsCon1.css("width", (size*liLength+20)+"px");
			$nextWrapper.bind('click', function(){
				if( animating ) return;
				animating = true;
				if( parseInt($newsCon1.css("marginLeft"))<(-liLength*(size-4)+1) ){
					// console.log("move");
					$newsCon1.animate({marginLeft:0+"px"}, function() {
						animating = false;
					});
				}else{
					$newsCon1.animate({marginLeft:'-='+liLength+'px'}, function() {
						animating = false;
					});
				}
			});
		});

		$newsCon1.css("width", (size*liLength+20)+"px");

		var animating = false;
		$prevWrapper.bind('click', function(){
			if( animating ) return;
			animating = true;
			if( parseInt($newsCon1.css("marginLeft"))>(-1) ){
				$newsCon1.animate({marginLeft:(-liLength*(size-4))+"px"}, function() {
					animating = false;
				});
			}else{
				$newsCon1.animate({marginLeft:'+='+liLength+'px'}, function() {
					animating = false;
				});
			}
		});

		$nextWrapper.bind('click', function(){
			if( animating ) return;
			animating = true;
			if( parseInt($newsCon1.css("marginLeft"))<(-liLength*(size-4)+1) ){
				// console.log("move");
				$newsCon1.animate({marginLeft:0+"px"}, function() {
					animating = false;
				});
			}else{
				$newsCon1.animate({marginLeft:'-='+liLength+'px'}, function() {
					animating = false;
				});
			}
		});

		var __enter = false;
		$container.bind('mouseenter', function() {
				return __enter = true;
		});

		$container.bind('mouseleave', function() {
			return __enter = false;
		});

		setInterval(function() {
			if( !__enter )
				$nextWrapper.trigger('click');
		}, 5000);

	}

	exports.iframeBlockStyle = function(){}

})
