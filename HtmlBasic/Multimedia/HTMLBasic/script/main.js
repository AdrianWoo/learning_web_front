
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "./images/Firefox_logo,_2019.png") {
        myImage.setAttribute("src", "./images/firefox2.webp");
    } else {
        myImage.setAttribute("src", "./images/Firefox_logo,_2019.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla Cool，" + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla Cool，" + storedName;
}

myButton.onclick = function(){
    setUserName();
};
