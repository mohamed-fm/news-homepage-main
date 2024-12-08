




const btn = document.querySelector('.menue')
const menu = document.querySelector('.menu')
btn.onclick = function (e){
    btn.classList.toggle('clicked')
    menu.classList.toggle('active')
    document.body.classList.toggle('overlay')
} 