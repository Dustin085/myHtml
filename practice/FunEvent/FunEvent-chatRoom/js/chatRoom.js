console.log('Hi ! you have linked chatRoom.js');
// 製作聊天室
// 1. 寫好html和css樣式(約1hr) OK
// 2. 做一個假訊息在html以確定樣式(約20mins) OK
// 3. 確認btn和textarea的用法 OK
// 4. 用js塞chatroom.msg到html裡面達到創建新訊息的效果 OK 使用了innerHTML，不易閱讀，之後再找看看有沒有別的方法
// 5. 寫一個利用按鈕與textarea來創建新訊息的函式 OK 直接寫好了eventlistener
// 6. 把兩人的訊息分邊 OK 分成fromUser跟fromFunEvent
// 7. 開始製作ChatRoom物件樣版(class) NO 不需要
// TODO list
// 1. 加上一個送出新訊息之後自動卷軸到最下方 OK function scrollBack
// 2. 修正文字訊息過長不會自動換行的問題 OK word-break: break-all; 要設定最大寬度，然後好幾個元素都要加上width: 100%讓文字訊息有足夠的寬度
// 3. 把訊息做成物件樣版(class)
// 4. 把訊息物件存在local storage
// 5. 寫一個initChatRoom，來初始化聊天室
// 6. 創建多個聊天室，可能把聊天室寫成class來製造多個聊天室

// let crBtnEle = document.getElementById('chatroom__btn');
let crBtnEle = document.querySelector('#chatroom__btn');
let crInputEle = document.querySelector('#chatroom__input');
let crBodyEle = document.querySelector('#chatroom__body')

// 按下按鈕後，把使用者輸入的文字包裝成html元素放到聊天室內
function addChatRoomListener(btnEle, inputEle, crBodyEle) {
    btnEle.addEventListener("click", () => {
        // crBodyEle.innerHTML += `<div class="chatroom__msg" id="chatroom__msg01"><div class="avatar"></div><div class="content--container"><div class="name"><p>FunEvent 小幫手</p></div><div class="text"><p>${inputEle.value}</p></div></div></div>`;
        // 輸入的文字
        let inputText = inputEle.value;
        // 使用者頭像與名稱
        let userAvatarImgUrl = './images/cola.png';
        let userName = '使用者名字';
        if (inputText != '') {
            // 加入新元素，class的css已經設定好了
            crBodyEle.innerHTML += creatChatRoomMsgHtmlStr(userAvatarImgUrl, userName, inputEle.value);
            // 洗掉輸入框內的文字
            inputEle.value = '';
            // 自動卷軸到最下面
            scrollBack(crBodyEle);
        }
    });
    // 在input區域按下enter直接觸發btn點擊事件
    inputEle.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            // 觸發點擊事件
            btnEle.click();
        }
    });
    // 卷軸自動回到最下方
    function scrollBack(scrollEle) {
        scrollEle.scrollTo(0, scrollEle.scrollHeight - scrollEle.clientHeight);
    }
}
// 製造聊天室訊息的html string，參數分別為：頭像圖片的url字串、名稱、文字、是否來自使用者(正在看網頁的那個會員)
function creatChatRoomMsgHtmlStr(avatarImgUrl, name, text, isFromUser = true) {
    // 回傳html string，樣式都已經在css內做好了。頭像圖片直接寫在html屬性裡
    let fromWho = '';
    if(isFromUser){
        fromWho = "fromUser";
    }else{
        fromWho = "fromOther";
    }
    return `<div class="chatroom__msg ${fromWho}">
            <div class="avatar" style="background-image: url(${avatarImgUrl});"></div>
            <div class="content--container">
            <div class="name"><p>${name}</p></div>
            <div class="text"><p>${text}</p></div>
            </div>
            </div>`;
}
// 執行func
addChatRoomListener(crBtnEle, crInputEle, crBodyEle);




// `<div class="chatroom__msg fromUser">
// <div class="avatar" style="background-image: url(${userAvatarImgUrl});background-size: cover;"></div>
// <div class="content--container">
// <div class="name"><p>${userName}</p></div>
// <div class="text"><p>${inputEle.value}</p></div>
// </div>
// </div>`;

// 塞測試用msg進crBodyEle
// myDiv = document.createElement('div');
// myDiv.innerHTML = '<div class="chatroom__msg" id="chatroom__msg01"><div class="avatar"></div><div class="content--container"><div class="name"><p>FunEvent 小幫手</p></div><div class="text"><p>測試訊息</p></div></div></div>';
// console.log(myDiv.innerHTML);
// crBodyEle.appendChild(myDiv.firstChild);

// 寫一個測試用msg
// let newMsgEle = document.createElement('div').classList.add('chatroom_msg');
// newMsgEle.appendChild(document.createElement('div').classList.add('avatar'));
// console.log(newMsgEle);


// test


// function ChatRoom(convsationBody, inputEle, submitBtnEle) {
//     this.convsationBody = convsationBody;
//     this.inputEle = inputEle;
//     this.submitBtnEle = submitBtnEle;
// }

