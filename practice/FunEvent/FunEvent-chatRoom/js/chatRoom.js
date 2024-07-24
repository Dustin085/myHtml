console.log('Hi ! you linked chatRoom.js');
// 製作聊天室
// 1. 寫好html和css樣式(約1hr) OK
// 2. 做一個假訊息在html以確定樣式(約20mins) OK
// 3. 確認btn和textarea的用法 OK
// 4. 用js塞chatroom.msg到html裡面達到創建新訊息的效果 OK 使用了innerHTML，不易閱讀，之後再找看看有沒有別的方法
// 5. 寫一個利用按鈕與textarea來創建新訊息的函式 OK 直接寫好了eventlistener
// 6. 把兩人的訊息分邊 OK 分成fromUser跟fromFunEvent
// 7. 開始製作ChatRoom物件樣版(class) NO 不需要
// TODO list
// 1. 加上一個送出新訊息之後自動卷軸到最下方
// 2. 修正文字訊息過長不會自動換行的問題

// let crBtnEle = document.getElementById('chatroom__btn');
let crBtnEle = document.querySelector('#chatroom__btn');
let crInputEle = document.querySelector('#chatroom__input');
let crBodyEle = document.querySelector('#chatroom__body')

// 按下按鈕後，把使用者輸入的文字包裝成html元素放到聊天室內
function creatNewMsg(btnEle, inputEle, crBodyEle) {
    btnEle.addEventListener("click", () => {
        // crBodyEle.innerHTML += `<div class="chatroom__msg" id="chatroom__msg01"><div class="avatar"></div><div class="content--container"><div class="name"><p>FunEvent 小幫手</p></div><div class="text"><p>${inputEle.value}</p></div></div></div>`;
        // 輸入的文字
        let inputText = inputEle.value;
        // 使用者頭像與名稱
        let userAvatarImgUrl = './images/cola.png';
        let userName = '使用者名字';
        if (inputText != '') {
            // 加入新元素，class的css已經設定好了
            crBodyEle.innerHTML +=
                `<div class="chatroom__msg fromUser">
                <div class="avatar" style="background-image: url(${userAvatarImgUrl});background-size: cover;"></div>
                <div class="content--container">
                <div class="name"><p>${userName}</p></div>
                <div class="text"><p>${inputEle.value}</p></div>
                </div>
                </div>`;
            inputEle.value = '';
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
}
creatNewMsg(crBtnEle, crInputEle, crBodyEle);




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

