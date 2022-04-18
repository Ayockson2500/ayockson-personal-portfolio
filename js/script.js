const menuBar = document.getElementById('menu-btn')
const header = document.querySelector('.header')

menuBar.addEventListener('click', function() {
    menuBar.classList.toggle('fa-times')
    header.classList.toggle('active')
})

window.onscroll = () => {
    menuBar.classList.remove('fa-times');
    header.classList.remove('active');
}
const themeToggler = document.getElementById('theme-toggler');
themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active');
    }
}