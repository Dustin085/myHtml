$(function () {
    // 啟用jquery ui的tabs功能
    $("#tabs").tabs();

    // 滑鼠變化影像
    $('.hover-image').hover(
        function () {
            // 滑鼠移入時更換圖片
            let hoverSrc = $(this).data('hover');
            $(this).attr('data-default', $(this).attr('src')); // 儲存原始圖片
            $(this).attr('src', hoverSrc);
        },
        function () {
            // 滑鼠移出時還原圖片
            let defaultSrc = $(this).attr('data-default');
            $(this).attr('src', defaultSrc);
        });
});