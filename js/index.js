
$(document).ready(function () {
    slickSlide();
    init();
    aj();
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
        if(start > 0) {
            if (key == 0) {
                start--; 
            }
        }
        if(start < 3) {
            if (key == 1) {
                start++;
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
        slidesToShow: 1,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        setPosition: 0,
        dots: true,
        fade: true,
        dotsClass: "view-slick-dots",
        responsive:[
            {
                breakpoint: 760,
                settings:{
                    arrows: false
                }
            }
        ]
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
                    breakpoint: 760,   //width 760px 이하
                    settings:
                    {
                        slidesToShow: 1
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
        vertical: true,         // 세로 슬라이드 
        verticalSwiping: true
    })
}

// youtube API
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. API 코드를 다운로드 받은 다음에 <iframe>을 생성하는 기능 (youtube player도 더불어)
var player;
let yArray = ['q7CKE1WsO74'];
// if(yArray == false){

//     alert('a')
// }
function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {
        //videoId: 'q7CKE1WsO74',  //변경-영상ID
        playerVars: {
            'rel': 0,    //연관동영상 표시여부(0:표시안함)
            'controls': 0,    //플레이어 컨트롤러 표시여부(0:표시안함)
            'autoplay': 0,   //자동재생 여부(1:자동재생 함, mute와 함께 설정)
            'mute': 1,   //음소거여부(1:음소거 함)
            'loop': 0,    //반복재생여부(1:반복재생 함)
            'playsinline': 1,    //iOS환경에서 전체화면으로 재생하지 않게
            //'playlist': 'q7CKE1WsO74',   //재생할 영상 리스트
            'showinfo': 0
        },
        events: {
            'onReady': onPlayerReady, //onReady 상태일 때 작동하는 function이름
            'onStateChange': onPlayerStateChange //onStateChange 상태일 때 작동하는 function이름
        }
    });
}

// 4. API는 비디오 플레이어가 준비되면 아래의 function을 불러올 것이다.
function onPlayerReady(event) {
    $('.youtube-play-btn').on('click', function () {
        event.target.playVideo();
    });
}
// 5. API는 플레이어의 상태가 변화될 때 아래의 function을 불러올 것이다.
//    이 function은 비디오가 재생되고 있을 때를 가르킨다.(state=1),
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {  //유튜브 동영상이 끝날 시 섬네일 보여주기
        youtubeDisplay('block');
    }
    if (event.data == YT.PlayerState.PAUSED) {     //유튜브 동영상이 일시정지 시 섬네일 보여주기
        youtubeDisplay('block');
    }
    else {
        youtubeDisplay('none');
        //위에 두 상황이 아닐 시 섬네일 감추기

    }
}
//유튜브 섬네일 디스플레이 
function youtubeDisplay(display) {
    $('.youtube-play>a').css('display', display);
}
// swiper 슬라이드
function init() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 5,
        /* slidesPerGroup: 3, */
        loop: false,
        /* loopFillGroupWithBlank : true, */
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // 자동으로 슬라이드 넘김
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        // 반응형
        // breakpoints: {
        //     640: {
        //         slidesPerView: 2,
        //         spaceBetween: 20,
        //     },
        //     768: {
        //         slidesPerView: 4,
        //         spaceBetween: 40,
        //     },
        //     1024: {
        //         slidesPerView: 5,
        //         spaceBetween: 50,
        //     },
        // },

        /*  슬라이드 이벤트 작동 
       on: {
            slideChange: function (e) {
                const elActive = document.querySelector('.swiper-slide-next');
                if (elActive)
                    elActive.style = 'color:red';
                console.log(e.activeIndex, e.realIndex);
            }
        } */
    });
}
// 유튜브 썸네일 비동기 처리
function aj() {
    const elYoutube = document.querySelectorAll('.swiper-slide'),
        elThumbImg = document.querySelector('.youtube-play-btn>img'),
        elIframe = document.querySelector('#player');
    let idx = 0;
    let yImg = ""
    elYoutube.forEach(function (el, key) {
        el.addEventListener('click', function () {
            elYoutube[idx].classList.remove('active')
            el.classList.add('active');
            idx = key;
            $.ajax({
                url: "./json/youtube.json",
                dataType: "json",
                success: function (yJson) {
                    elThumbImg.src = yJson.thumb[key].src;
                    elIframe.src = yJson.thumb[key].ysrc;
                    onYouTubeIframeAPIReady();
                    youtubeDisplay('block');
                    //    json forEach 돌리는 문법
                    //$.each(yJson.thumb, function(e,value){   
                    //     })
                }
            })
        });
    })
}
// product 비동기 처리
const elProduct = document.querySelectorAll('.new-product-list>ul>li'),
      elCon = document.querySelector(".product-img-container");
let pIdx = 0;
elProduct.forEach(function(el,key){
    el.addEventListener('click',function(e){
        e.preventDefault();
        elProduct[pIdx].classList.remove('active');
        elProduct[key].classList.add('active');
        pIdx = key;
        $.ajax({
            url: "./json/product.json",
            dataType : "json",
            success : function(proJson){
                elCon.innerHTML = `<div class="main-img-box-container">
                <div class="main-img-box">
                    <a href="#">
                    <img src=${proJson.product[key].main}>
                    </a>
                </div>
            </div>
            <div class="sub-img-container">
                <div class="sub-img-box">
                    <a href="#"><img src="${proJson.product[key].sub[0]}"></a>
                    <a href="#"><img src="${proJson.product[key].sub[1]}"></a>
                </div>
                <div class="sub-img-box">
                    <a href="#"><img src="${proJson.product[key].sub[2]}"></a>
                    <a href="#"><img src="${proJson.product[key].sub[3]}"></a>
                </div>
            </div>`
            }
        })
    })
})
