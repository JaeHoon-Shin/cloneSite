
$(document).ready(function () {
    slickSlide();
});
if (document.cookie.match('팝업')) {
    document.querySelector('.popup-background').style.display = 'none';
}
else {
    document.querySelector('.popup-background').style.display = 'block';
}
//팝업 이벤트 
const elPopUpClose = document.querySelectorAll('div.popup-text-container > div > a');
elPopUpClose.forEach(function (a, key) {
    a.onclick = function () {
        if (key == 0) {
            console.log(key)
            let toDay = new Date();
            toDay.setMinutes(toDay.getMinutes() + 10);
            document.cookie = `popup=팝업;expires=${toDay.toUTCString()}`
        }
        document.querySelector('.popup-background').style.display = 'none';
    };
});
//리뷰 슬라이드 
const reviewBtn = document.querySelectorAll('.review-container > .visual-box > button'),
    reviewBox = document.querySelector('.review-list');
let start = 0;
reviewBtn.forEach(function (btn, key) {
    btn.addEventListener('click', function () {
        if (start < 3) {
            if (key == 0) {
                start++
            }
        }
        if (start > 0) {
            if (key == 1) {
                start--
            }
        }
        reviewBox.style = `transform : translateX(-${350 * start}px);`
    })
})
//슬릭 슬라이드 함수 
function slickSlide() {
    $('.popup-slide').slick({
        slidesToShow: 1,         // 한 화면에 보여질 컨텐츠 개수
        arrows: false,           // true 이전 다음 버튼 생성 false 생성 X
        infinite: true,         // 무제한으로 슬라이드 되는지
        autoplay: true,           // 페이지 넘기기 자동 false 시 넘어가지 않음 
        autoplaySpeed: 5000,    // 자동 스크롤 넘어가는 시간 	
        setPosition: 0,
        dots: true,
        dotsClass: "slick-dots"
    });
    $('.img-box-list').slick({
        slidesToShow: 1,         // 한 화면에 보여질 컨텐츠 개수
        arrows: true,           // true 이전 다음 버튼 생성 false 생성 X
        infinite: true,         // 무제한으로 슬라이드 되는지
        autoplay: true,           // 페이지 넘기기 자동 false 시 넘어가지 않음 
        autoplaySpeed: 3000,    // 자동 스크롤 넘어가는 시간 	
        setPosition: 0,
        dots: true,
        fade: true,
        dotsClass: "view-slick-dots"
    });
    $('.celeb-visual-list').slick({
        slide: 'div',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive:  // 반응형 작업
        [
            {
                breakpoint: 760,   //width 1024 이상부터
                settings: 
                {
                    slidesToShow: 2
                }
            }
        ]
    });
    $('.notice-list-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,           // true 이전 다음 버튼 생성 false 생성 X
        infinite: true,  
        vertical : true,
        verticalSwiping: true
    })
}
$('.youtube-play-btn').on('click',function(e){
    e.preventDefault();
    $(".youtube-play>iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}',
    '*'); 
})





