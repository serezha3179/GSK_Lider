if(window.matchMedia('(max-width: 768px)').matches) {
const headerBurger = document.querySelector('.header__burger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerList = document.querySelector('.header__nav-list');
const paddingValue = window.innerWidth - document.querySelector('.page').clientWidth + "px";
const inputFile = document.querySelector('input[type="file"]');
const formLabelForm = document.querySelector('.form__label-form span');

headerBurger.addEventListener('click', headerOpen)
    function headerOpen() {
        header.classList.toggle('js-header_open');
        body.classList.toggle('js-lock');
        headerBurger.classList.toggle('is-active');
    };

    const headerSubmenu = document.querySelector('.js-submenu');
    const headerSubmenuItems = document.querySelector('.nav-item__wrapper')
    headerSubmenu.addEventListener('click',() => {
        headerSubmenu.classList.toggle('is-active');
        if(headerSubmenuItems.style.maxHeight) {
            headerSubmenuItems.style.maxHeight = null;
        } else {
            headerSubmenuItems.style.maxHeight = headerSubmenuItems.scrollHeight + "px";
        }
    })
}