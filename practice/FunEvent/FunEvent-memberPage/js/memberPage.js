console.log('Hi ! you have linked memberPage.js');
// 主要內容頁籤

// 會員基本資料修改
// 按鈕跳入表單
let infoEditBtnEle = document.querySelector("#member-info-edit-btn"); // 修改按鈕
let infoSaveBtnEle = document.querySelector("#member-info-save-btn"); // 儲存(修改)按鈕
let infoContentEle = document.querySelector("#member-info-content");  // 基本資料頁面div
let infoEditEle = document.querySelector("#member-info-edit");        // 修改資料頁面div
// 點下編輯按鈕
infoEditBtnEle.onclick = () => {
    infoContentEle.classList.remove("active");
    infoEditEle.classList.add("active");
};
// 按下儲存(修改)按鈕
infoSaveBtnEle.onclick = () => {
    infoEditEle.classList.remove("active");
    infoContentEle.classList.add("active");
};