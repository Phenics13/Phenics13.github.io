let menuAppear = document.querySelector('.header--appear')
let menu = document.querySelector('.header')
menuAppear.addEventListener('click', (e) => {
    menu.classList.add('appear')
    menuAppear.classList.add('disappear')
})
let menuDisappear = document.querySelector('.header--disappear')
menuDisappear.addEventListener('click', (e) => {
    menu.classList.remove('appear')
    menuAppear.classList.remove('disappear')
})