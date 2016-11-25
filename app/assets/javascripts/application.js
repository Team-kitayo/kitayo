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

$(function(){

    // サイトアクセス時に非表示にしてから、フェードインさせる
    $('#wrapper').hide();
    $('#wrapper').fadeIn(360);

    // リンククリック時にフェードアウトしてから、画面遷移する
    $('a').click(function(){
        // URLを取得する
        var url = $(this).attr('href');

        // URLが空ではない場合
        if (url != '') {
            // フェードアウトしてから、取得したURLにリンクする
            $('#wrapper').fadeOut(960);
            setTimeout(function(){
                location.href = url;
            }, 1000);
        }
        return false;

    });
});
