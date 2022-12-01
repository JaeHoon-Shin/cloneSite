const elPopUpClose = document.querySelectorAll('div.popup-text-container > div > a');
        elPopUpClose.forEach(function (a, key) {
            a.onclick = function () {
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
    let numPx = (-1903) * Number(mainViewNum);
    mainSlideFun(mainViewNum);
    if (mainViewNum > 9) {
        clearInterval(mainViewAni);
    }
}, 10000); 

const licenseBtn = document.querySelector('.license-btn'),
licenseBox = document.querySelector('.license-dark');

licenseBtn.onclick = function () {
licenseBox.style.display = 'block';
document.querySelector('html').style.overflow = 'hidden';
};
document.querySelector('.close').onclick = function () {
licenseBox.style.display = 'none';
document.querySelector('html').style.overflow = 'visible';
};
