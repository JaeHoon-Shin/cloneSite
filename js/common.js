
function side (){
    let i = window.pageYOffset
    const nonSide = document.querySelector('.side-bar')
    i>0 ? nonSide.style.opacity = "1" : nonSide.style.opacity = "0" ;
}

window.addEventListener('scroll',side);

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