
if (document.cookie.match('팝업')) {
    document.querySelector('.popup-background').style.display = 'none';
}
else {
    document.querySelector('.popup-background').style.display = 'block';
}
const elPopUpClose = document.querySelectorAll('div.popup-text-container > div > a');
elPopUpClose.forEach(function (a, key) {
    a.onclick = function () {
        if (key == 0) {
            console.log(key)
            let toDay = new Date();
            toDay.setSeconds(toDay.getSeconds() + 10);
            document.cookie = `popup=팝업;expires=${toDay.toUTCString()}`
            
            /* let today = new Date();
            today.setSeconds(today.getSeconds() + 30);
            document.cookie = `popup=가격할인이벤트!;expires=${today.toUTCString()}` */
        }
        document.querySelector('.popup-background').style.display = 'none';
    };
});


let mainViewNum = 0;
function mainSlideFun(n) {
    mainViewAll[n].style = "left:" + ((-100) * n) + "%; opacity:1";
}
let mainViewAll = document.querySelectorAll(`main>div.visual-box>div.img-box-list>div.img-box`);
let mainViewAni = setInterval(function () {
    ++mainViewNum;
    /* let numPx = (-1903) * Number(mainViewNum); */
    mainSlideFun(mainViewNum);
    if (mainViewNum > 9) {
        mainViewAni = 0;
    }
}, 8000);






