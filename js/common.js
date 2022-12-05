
function side (){
    let i = window.pageYOffset
    const nonSide = document.querySelector('.side-bar')
    i>0 ? nonSide.style.opacity = "1" : nonSide.style.opacity = "0" ;
}

window.addEventListener('scroll',side);