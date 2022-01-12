const menuIcon = document.querySelector(".hamburger");


const navbar = document.querySelector(".nav-bar");


menuIcon.addEventListener("click", () =>{
    navbar.classList.toggle("change");
})