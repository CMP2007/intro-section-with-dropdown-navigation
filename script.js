const nav = document.querySelector(".nav");
const closeIcon = document.querySelector(".close");
const menuIcon = document.querySelector(".menuIcon");
const details = document.querySelectorAll(".details");
const arrows = document.querySelectorAll(".arrow");


for (let cont = 0; cont < details.length; cont++) {
    details[cont].addEventListener("click", ()=>{
        if (!details[cont].hasAttribute("open")){
            arrows[cont].src = "./images/icon-arrow-up.svg";
        }
        else {
            arrows[cont].src = "./images/icon-arrow-down.svg";
        }
    })
}
/************************************* Movil Events ********************************************** */
menuIcon.addEventListener("click", ()=>{
    nav.classList.remove("none");
    setTimeout(()=>{
        nav.setAttribute('style', 'margin: 0 0%;');
    },250);
   
});

closeIcon.addEventListener("click", ()=>{
    nav.setAttribute('style', 'margin: 0 110%;');
    setTimeout(()=>{
        nav.classList.add("none");
    },800);
});


function deleteNone() {
    const windowOb = window;
    const windowValue = windowOb.innerWidth;
  
    if (windowValue > 930) {
      nav.classList.remove('none');
      nav.setAttribute('style', 'margin: 0 0%;');
    } else {
      nav.classList.add('none');
    }
  }
  window.addEventListener('resize',deleteNone);
  deleteNone();
