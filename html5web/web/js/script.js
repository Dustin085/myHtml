console.log("script.js loaded");

// $(() => {}) => $(document).ready(() => {})
$(() => {
    // 在平板以下時移除背景影片
    if ($(window).width() < 821) {
        $("#about video").remove();
    }

    // 交替漢堡按鈕
    $(".hamburger").click(function () {
        // .hamburger 交替切換 .is-active
        $(this).toggleClass("is-active");
        // .navigation 交替切換 .show
        $(".navigation").toggleClass("show");
    });

    // 錨點滑動動畫
    $(".navigation .menu a").click(function () {
        // 滑動目標名字
        let targetName = $(this).attr("href");
        // 滑動目標位置，相對於整個document
        let targetPos = $(targetName).offset();
        // 有些瀏覽器的卷軸寫在html有些在body上，故選擇html和body
        // animate第一個參數寫css語法，第二個參數寫時間(ms)
        $("html, body").animate({
            scrollTop: targetPos.top
        }, 1000);
    });

    // 回到頂點按鈕go-top-btn
    $("#go-top-btn").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });

    // 指定卷軸位置，讓go-top按鈕淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            // 加入stop()可以停止動畫，避免動畫不斷疊加
            // fadeIn跟fadeOut有時會有衝突，所以用fadeTo("", 1)代替
            $("#go-top-btn").stop().fadeTo("fast", 1);
        } else {
            $("#go-top-btn").stop().fadeOut("fast");
        }
    });
});

// jQuery smoove
$(".smoove").smoove({
    offset: "20%"
});