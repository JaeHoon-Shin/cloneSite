$('body').prepend('<header>');
$('body').append('<footer>');
$('header').load('./inc.html header', head);
$('footer').load('./inc.html footer', foot);
function head() {
    
    

    //헤더 메뉴 클릭시 위치 확인
    let hidx = localStorage.idx;
    $('.header-top-menu>ul>li').removeClass('on');
    $('.header-top-menu>ul>li').eq(hidx).addClass('on');
    $('.header-top-menu>ul>li').on('click', function () {
        hidx = $(this).index();
        localStorage.hidx = hidx;
    });
    localStorage.clear();
    //헤더 메뉴 바 
    const tabBtn = document.querySelector('.all-cate>a'),
        tabBox = document.querySelector('.tab-container'),
        tabSubBtn = document.querySelectorAll('.tab-main-list>ul>li');
    tabSubList = document.querySelectorAll('.sub-tab-list>ul')
    tabBanner = document.querySelectorAll('.tab-banner');
    tabBtn.onclick = function () {
        tabBox.classList.toggle('on');
    };
    let idx = 0;
    tabSubBtn.forEach(function (el, key) {
        el.onclick = function () {
            tabSubList[idx].classList.remove('on');
            tabBanner[idx].classList.remove('on');
            tabSubList[key].classList.toggle('on');
            tabBanner[key].classList.toggle('on');
            idx = key;
            console.log(key)
        };
    });
}
function foot() {
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
    $('.top-icon').on('click', function (e) {
        e.preventDefault(); /* e.preventDefault() */
        window.scrollTo({top:0, left:0,behavior:'smooth'});
    })
    //사이드바
    window.addEventListener('scroll', side);
    function side() {
        let i = window.pageYOffset
        const nonSide = document.querySelector('.side-bar')
        i > 0 ? nonSide.style.opacity = "1" : nonSide.style.opacity = "0";
    }
}