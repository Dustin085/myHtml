console.log('Hi ! you linked chatRoom.js');
// 製作聊天室
// 1. 寫好html和css樣式(約1hr) OK
// 2. 做一個假訊息在html以確定樣式(約20mins) OK
// 3. 確認btn和textarea的用法 OK
// 4. 用js塞chatroom.msg到html裡面達到創建新訊息的效果 OK 使用了innerHTML，不易閱讀，之後再找看看有沒有別的方法
// 5. 寫一個利用按鈕與textarea來創建新訊息的函式
// 6. 把兩人的訊息分邊
// 7. 開始製作ChatRoom物件樣版(class)
// 製作ChatRoom物件樣版

// let crBtnEle = document.getElementById('chatroom__btn');
let crBtnEle = document.querySelector('#chatroom__btn');
let crInputEle = document.querySelector('#chatroom__input');
let crBodyEle = document.querySelector('#chatroom__body')

// 按下按鈕後
function creatNewMsg(btnEle, inputEle, crBodyEle) {
    btnEle.addEventListener("click", ()=>{
        crBodyEle.innerHTML += `<div class="chatroom__msg" id="chatroom__msg01"><div class="avatar"></div><div class="content--container"><div class="name"><p>FunEvent 小幫手</p></div><div class="text"><p>${inputEle.value}</p></div></div></div>`;
        inputEle.value='';
    });
    inputEle.addEventListener("keypress", (event)=>{
        if(event.key === "Enter"){
            event.preventDefault();
            // 幫我點btnEle
            btnEle.click();
        }
    });
}
creatNewMsg(crBtnEle, crInputEle, crBodyEle);

// 直接塞到crBodyEle
crBodyEle.innerHTML += '<div class="chatroom__msg" id="chatroom__msg01"><div class="avatar"></div><div class="content--container"><div class="name"><p>FunEvent 小幫手</p></div><div class="text"><p>測試訊息</p></div></div></div>';

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


function ChatRoom(convsationBody, inputEle, submitBtnEle) {
    this.convsationBody = convsationBody;
    this.inputEle = inputEle;
    this.submitBtnEle = submitBtnEle;
}

