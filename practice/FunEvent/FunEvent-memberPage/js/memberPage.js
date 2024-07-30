console.log('Hi ! you have linked memberPage.js');
// TODO list
// 1. 編輯會員資料能儲存到localStorage
// 2. 登入登出，註冊功能
// 3. 信用卡彈出式視窗
// 建立會員資料物件(物件樣版)到localStorage
window.onload = () => {
    // 若沒有會員清單則建立新的清單
    if (!localStorage.getItem("memberList")) {
        let myMember = new Member("王", "曉明", "1999-9-19", "生理男", "0999999999", "testtest@gmail.com", "台北市中正區濟南路一段321號");
        let myMember02 = new Member("郭", "雪芙", "1988-06-30", "生理女", "0999999990", "snowy@gmail.com", "台北市中正區雪芙路一段123號");
        let myMemberList = [myMember, myMember02];
        localStorage.setItem("memberList", JSON.stringify(myMemberList));
        console.log("會員名單初始化完成");
    }
    // 若是無登入情況，自動登入會員清單[0]，王曉明，之後再實裝登入系統
    // loginMemberUid代表現在登入的會員uid
    if (!localStorage.getItem("loginMemberUid")) {
        let memberList = JSON.parse(localStorage.getItem("memberList"));
        let loginMemberUid = memberList[0]["uid"];
        localStorage.setItem("loginMemberUid", loginMemberUid);
        console.log(`已自動登入會員：${memberList[0]["lastName"]}${memberList[0]["firstName"]}，uid = ${memberList[0]["uid"]}`);
    }

    // 會在基本資料的地方填入現在登入會員的會員資料
    putMemberInfo();

    // 放入雪芙的基本資料
    // putMemberInfo(JSON.parse(localStorage.getItem("memberList"))[1]);

    // test
    // let memberList = JSON.parse(localStorage.getItem("memberList"));
    // let loginMemberUid = localStorage.getItem("loginMemberUid");
    // Array.from(memberList).forEach((member, index) => {
    //     if (member["uid"] == loginMemberUid) {
    //         console.log(`目前登入會員是：${member["lastName"]}${member["firstName"]}，uid = ${member["uid"]}`);
    //     }
    // });
}

class Member {
    constructor(lastName, firstName, birthday, gender, phoneNumber, email, address) {
        // 目前沒做uid的重複確認，重複機率很小
        this.uid = creatNewUid();
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthday = birthday;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        function creatNewUid() {
            // 生成最多八碼數字的uid
            return Math.floor(Math.random() * (10 ** 8));
        }
    }
}


// 主要內容頁籤

// 會員基本資料修改
// 按鈕跳入表單
let infoEditBtnEle = document.querySelector("#member-info-edit-btn");     // 修改按鈕
let infoCancelBtnEle = document.querySelector("#member-info-cancel-btn"); // 取消按鈕
let infoSaveBtnEle = document.querySelector("#member-info-save-btn");     // 儲存(修改)按鈕
let infoContentEle = document.querySelector("#member-info-content");      // 基本資料頁面div
let infoEditEle = document.querySelector("#member-info-edit");            // 修改資料頁面div
// 按下編輯按鈕
infoEditBtnEle.onclick = () => {
    infoContentEle.classList.remove("active");
    infoEditEle.classList.add("active");
};
// 按下取消按鈕
infoCancelBtnEle.onclick = () => {
    infoEditEle.classList.remove("active");
    infoContentEle.classList.add("active");
};
// 按下儲存按鈕

// 會員管理的tab和tab content，加入eventListener
let tabBtnArr = document.querySelectorAll(".account-manage__tab-btn");
let tabContentArr = document.querySelectorAll(".account-manage__tab-content");
tabBtnArr.forEach((tabBtn, btnIndex) => {
    tabBtn.onclick = () => {
        switchActive(tabContentArr, btnIndex);
        switchActive(tabBtnArr, btnIndex);
    }
});
// 切換active的元素，arrToSwitch => 要修改的dom元素陣列，targetIndex => 要被加上active的index
function switchActive(arrToSwitch, targetIndex) {
    // 清除陣列中每個item的class: active
    arrToSwitch.forEach((arrEle) => {
        arrEle.classList.remove('active');
    });
    // 為陣列中指定index的元素加上class: active
    arrToSwitch[targetIndex].classList.add('active');
}

// function區
// 把會員資料從會員物件放入會員資料頁面中，預設會放入登入者的資料
function putMemberInfo(member) {
    // 若未填入會員物件則定義member為現在登入的會員
    if (member == undefined) {
        let memberList = JSON.parse(localStorage.getItem("memberList"));
        let loginMemberUid = localStorage.getItem("loginMemberUid");
        // 抓目前登入的會員
        let loginMember = {};
        Array.from(memberList).forEach((member, index) => {
            if (member["uid"] == loginMemberUid) {
                loginMember = member;
            }
        });
        member = loginMember;
    }
    console.log(`目前登入會員是：${member["lastName"]}${member["firstName"]}，uid = ${member["uid"]}`);
    // 漫長的裝入過程
    let memberNameEle = document.querySelector("#membername");
    let birthdayEle = document.querySelector("#birthday");
    let genderEle = document.querySelector("#gender");
    let phoneNumberEle = document.querySelector("#phone-number");
    let emailEle = document.querySelector("#email");
    let addressEle = document.querySelector("#address");
    memberNameEle.textContent = member["lastName"] + member["firstName"];
    birthdayEle.textContent = member["birthday"];
    genderEle.textContent = member["gender"];
    phoneNumberEle.textContent = member["phoneNumber"];
    emailEle.textContent = member["email"];
    addressEle.textContent = member["address"];
}