document.querySelector('.header-btn1').onclick = function (){
    document.querySelector('.overlay').classList.add('overlay_active');
    document.querySelector('.popup__form_login').classList.add('active')
};
document.querySelector('.overlay').onclick = function(e) {
    if ( e.target.classList.contains('overlay')) {
        document.querySelector('.overlay').classList.remove('overlay_active');
        document.querySelector('.popup__form_login').classList.remove('active');
        document.querySelector('.popup__form_signup').classList.remove('active')
    }
};
document.querySelector('.header-btn2').onclick = function () {
    document.querySelector('.overlay').classList.add('overlay_active');
    document.querySelector('.popup__form_signup').classList.add('active')
};
document.querySelector('.popup__close').onclick = function (e) {
    document.querySelector('.overlay').classList.remove('overlay_active');
    document.querySelector('.popup__form_login').classList.remove('active');
    document.querySelector('.popup__form_signup').classList.remove('active')
};

