button = document.querySelector(".nav-btn");
nav = document.querySelector("nav");
topBar = document.querySelector(".topbar");
headerContent = document.querySelector(".header-content");
button.addEventListener('click', navToggle);
function navToggle(){
    nav.classList.toggle('active')
    headerContent.classList.toggle('header-clicked')
    button.classList.toggle('open')
}
