const nav = document.querySelector(".nav");
const closeIcon = document.querySelector(".close");
const menuIcon = document.querySelector(".menuIcon");

menuIcon.addEventListener("click", ()=>{
    // nav.style.transform = "translateX(-10rem);"
    nav.setAttribute('style', 'margin: 0 0%; ');
   
});

closeIcon.addEventListener("click", ()=>{
    // nav.style.transform = "translateX(-10rem);"
    nav.setAttribute('style', 'margin: 0 100%; ');
});


console.log(nav);
// console.log(closeIcon);
// console.log(menuIcon);