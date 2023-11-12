const header = document.getElementById('header');

window.addEventListener("scroll", () =>{
    window.scrollY > 100 ? header.classList.add('sticked') : header.classList.remove('sticked');
})
const menuIcon = document.getElementById("menu-icon");
const bxIcon = document.getElementById("bx");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.style.display = "none";
    bxIcon.style.display= "block";
});

bxIcon.addEventListener("click", () => {
    navbar.classList.remove("active");
    bxIcon.style.display ="none";
    menuIcon.style.display= "block";
});            