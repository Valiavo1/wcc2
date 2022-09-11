var hide_L = document.querySelector('.content_left')
var hide_R = document.querySelector('.content_right')

window.onload = function (){
    hide_L.classList.remove('hide_left')
    hide_L.classList.add('show')
    hide_R.classList.remove('hide_right')
    hide_R.classList.add('show')
}

