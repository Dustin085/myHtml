console.log("script.js loaded");

// 在平板以下時移除背景影片
// $(() => {}) => $(window).ready(() => {})
$(() => {
    if ($(window).width() < 821) {
        $("#about video").remove();
    }
});

// if($(window).width() < 821){
//     $("#about video").remove();
// }