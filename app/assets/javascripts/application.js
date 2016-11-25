// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
// $(function () {
//     setTimeout('rect()'); //アニメーションを実行
// });
//
// function rect() {
//     $("#rect").animate({
//         left: "1000px" //要素を動かす位置
//     }, 3000).animate({
//         left: "-200px"　//要素を戻す位置
//     }, 0)
//     setTimeout("rect()", 300);//アニメーションを繰り返す間隔
// }

window.onload = function() {
    var target = document.getElementById("test");
    target.addEventListener("touchstart",function(){
        this.className="touchstyle";
    }, false);
    target.addEventListener("touchend",function(){
        this.className="notouchstyle";
    }, false);
}

/* Copyright (c) 2011 detelu (http://www.detelu.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * jquery.fademover.js
 * Version: 2012-02-06
*/
(function($){
	$.fn.fadeMover = function(options) {
		var defaults = {
			'effectType': 1,
			'inSpeed': 800,
			'outSpeed': 800,
			'inDelay' : '0',
			'outDelay' : '0',
			'nofadeOut' : 'nonmover'
        };
        var setting = $.extend(defaults, options);
		var cnt = $(this).length-1;
        this.each(function(i) {
			var pel = this;
			if(setting.effectType == 1 || setting.effectType == 2) {
				$(pel).css("opacity", 0).delay(i*setting.inDelay).animate({opacity: 1}, setting.inSpeed);
			}
			if(setting.effectType == 1 || setting.effectType == 3) {
				$('a').click(function(event) {
					var moveUrl = $(this).attr("href");
					if(!$(this).hasClass(setting.nofadeOut) && moveUrl.charAt(0) != "#"){
						event.preventDefault();
						$(pel).delay(i*setting.outDelay).animate({"opacity": 0}, setting.outSpeed, function(){
						if(cnt == i || setting.outDelay == '0')
							location.href = moveUrl;
						});
					}
				});
			}
		});
		return this;
	}
	window.onunload = function () {};
})(jQuery);
