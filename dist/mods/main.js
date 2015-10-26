define(function(require,exports,module){

	var $ = require('jquery');
	var slide = require('slide');
	var smSlider = require('smallslider');

	// Solve IE 7 blocking
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") {
		alert("test");
		setTimeout(init, 10);
	} else {
		init();
	}

	function init() {
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
					 switchTime: 1000
			 });
		 })();

		 if( $(".news-item")[0]  ) {
			 if( $(".news-item")[0].style.display !== 'block' ) {
					__initSlider();
			 }
		 }

		}
	}

  	// Judge ie6
	(function() {
		var isIE=!!window.ActiveXObject;
		var isIE6=isIE&&!window.XMLHttpRequest;
		if( isIE6 ) {
			// document.documentElement.style.display = "none";
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
					//	alert($(".right_sub").css("display"));
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

		var html = "<a href=\"http://zxz.neu.edu.cn\" target=\"_blank\">\
						<img src=\"./assets/images/sanyansanshi.jpg\" />\
					</a>\
					<a href=\"http://uzone.univs.cn/school_2129.html\" target=\"_blank\">\
						<img src=\"./assets/images/changyeshuxiang.jpg\" />\
					</a>\
					<a href=\"http://zxz.neu.edu.cn\" target=\"_blank\">\
						<img src=\"./assets/images/sanyansanshi.jpg\" />\
					</a>";

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

	exports.iframeBlockStyle = function(){
		var style0 = document.createElement('style');
		    style0.media="screen";
		    style0.type = "text/css";
		    style0.innerHTML = "body{margin:0}.widget ul{list-style:none;margin:0;padding:0 0}.widget li{line-height:25px;height: 25px;overflow: hidden;}.widget a{font-size:15px;color:#3e3a39;text-decoration:none}.linktitle{float:left}.datetime{float:right;color:#032b83;font-size: 15px;}.clear{clear:both;padding:0;margin:0}";
		var style1 = document.createElement('style');
		    style1.media="screen";
		    style1.type = "text/css";
		    style1.innerHTML = "body{margin:0}.widget ul{list-style:none;margin:0;padding:0 0}.widget li{line-height:25px;height: 25px;overflow: hidden;}.widget a{font-size:15px;color:#3e3a39;text-decoration:none}.linktitle{float:left}.datetime{float:right;color:#032b83;font-size: 15px;}.clear{clear:both;padding:0;margin:0}";
		var style2 = document.createElement('style');
		    style2.media="screen";
		    style2.type = "text/css";
		    style2.innerHTML = "body{margin:0}.widget ul{list-style:none;margin:0;padding:0 0}.widget li{line-height:25px;height: 25px;overflow: hidden;}.widget a{font-size:15px;color:#3e3a39;text-decoration:none}.linktitle{float:left}.datetime{float:right;color:#032b83;font-size: 15px;}.clear{clear:both;padding:0;margin:0}";
		var style3 = document.createElement('style');
		    style3.media="screen";
		    style3.type = "text/css";
		    style3.innerHTML = "body{margin:0}.widget ul{list-style:none;margin:0;padding:0 0}.widget li{line-height:25px;height: 25px;overflow: hidden;}.widget a{font-size:15px;color:#3e3a39;text-decoration:none}.linktitle{float:left}.datetime{float:right;color:#032b83;font-size: 15px;}.clear{clear:both;padding:0;margin:0}";

		$("#universityNewsIframe")[0].contentDocument.getElementsByTagName("head")[0].appendChild(style0);
		$("#media .news iframe")[0].contentDocument.getElementsByTagName("head")[0].appendChild(style1);
		$("#academyNews .news iframe")[0].contentDocument.getElementsByTagName("head")[0].appendChild(style2);
		$("#inform .news iframe")[0].contentDocument.getElementsByTagName("head")[0].appendChild(style3);

		$("#imageNews iframe").bind('load', function(){
			var doc = this.contentDocument;
			var window = this.contentWindow;
			var style0 = document.createElement('style');
		    style0.media="screen";
		    style0.type = "text/css";
		    style0.innerHTML = "#container{width:auto;margin:0px;position:relative}#container .clear{display:none}#slides{float:left;width:230px}#slide_grident{display:none}.slidesContainer{float:left}.slidesPagination{margin-top:-20px;float:right;position:relative;z-index:20}#slides .clear{display:none}#news_text{float:right;width:210px}#news_text a{text-decoration:none;color:#3e3a39}.img_news_tilte{height:26px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size:18px;line-height:26px}.img_news_description{font-size:14px} @media screen and (max-width: 1280px){#news_text{width:190px}}/*  @media screen and (max-width: 1200px){#news_text{width:120px}} */";

		    doc.getElementsByTagName("head")[0].appendChild(style0);


		    window.$("img").css({"width":"230px" , "height":"150px"});
		    window.$(".slidesControl").css({"width":"230px" , "height":"150px"});
		    window.$(".slidesContainer").css({"width":"230px" , "height":"150px"});
		});

	}

})
