const elPopUpClose = document.querySelectorAll('div.popup-text-container > div > a');
        elPopUpClose.forEach(function (a, key) {
            a.onclick = function () {
                document.querySelector('.popup-background').style.display = 'none';
            };
        });

let mainViewNum = 0;
function mainSlideFun(n) {
    mainViewAll[n].style = "left:"+((-100)*n)+"%; opacity:1";
}
let mainViewAll = document.querySelectorAll(`main>div.visual-box>div.img-box-list>div.img-box`);
let mainViewAni = setInterval(function () {
    ++mainViewNum;
    let numPx = (-1903) * Number(mainViewNum);
    mainSlideFun(mainViewNum);
    if (mainViewNum > 9) {
        clearInterval(mainViewAni);
    }
}, 8000); 

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

const tabBtn = document.querySelector('.all-cate>a'),
      tabBox = document.querySelector('.tab-container'),
      tabSubBtn = document.querySelectorAll('.tab-main-list>ul>li');
      tabSubList = document.querySelectorAll('.sub-tab-list>ul')
      tabBanner = document.querySelectorAll('.tab-banner');
tabBtn.onclick = function(){
    tabBox.classList.toggle('on');
};
let idx =0;
tabSubBtn.forEach(function(el,key){
    el.onclick=function(){
        tabSubList[idx].classList.remove('on');
        tabBanner[idx].classList.remove('on');
        tabSubList[key].classList.toggle('on');
        tabBanner[key].classList.toggle('on');
        idx = key;
        console.log(key)
    };

});

