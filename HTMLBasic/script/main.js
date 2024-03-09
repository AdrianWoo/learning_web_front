let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "./images/Firefox_logo,_2019.png"){
        myImage.setAttribute("src","./images/firefox2.webp");
    }else{
        myImage.setAttribute("src","./images/Firefox_logo,_2019.png");
    }
};