const popupExit = document.querySelector('div.popup-box button.exit'),
    popupBox = document.querySelector('div.popup-box'),
    darkBox = document.querySelector('div.dark-box')
licenseBtn = document.querySelector('.license-btn'),
    licenseBox = document.querySelector('.license-dark');
popupExit.onclick = function () {
    popupBox.style.display = "none";
    darkBox.style.display = "none";
}
licenseBtn.onclick = function () {
    licenseBox.style.display = 'block';
    document.querySelector('html').style.overflow = 'hidden';
};
document.querySelector('.close').onclick = function () {
    licenseBox.style.display = 'none';
    document.querySelector('html').style.overflow = 'visible';
};