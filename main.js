document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-cards', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
  
  let imgProducto = document.getElementById("imgProducto");
let miniaturas = document.querySelectorAll(".miniaturas img");

function setMini(pos){

    if(pos=='0'){
        imgProducto.style.transform = "rotateZ(0deg)";
       
    }
    if(pos=='1'){
        imgProducto.style.transform = "rotateZ(35deg)";
        
    }
    if(pos=='2'){
        imgProducto.style.transform = "rotateZ(-55deg) scale(0.75)";
       
    }

    miniaturas[0].style.backgroundColor = "#fff1d9";
    miniaturas[1].style.backgroundColor = "#fff1d9";
    miniaturas[2].style.backgroundColor = "#fff1d9";
    miniaturas[pos].style.backgroundColor = "#fdc10e";
}

let sizes = document.querySelectorAll(".info-detalle button");

function setSize(pos){
    sizes[0].style.backgroundColor = "#fff1d9";
    sizes[1].style.backgroundColor = "#fff1d9";
    sizes[2].style.backgroundColor = "#fff1d9";
    sizes[pos].style.backgroundColor = "#fdc10e";
}

//MENU RESPONSIVE
let menu_responsive_visible = false;
let nav_responsive = document.getElementById("nav-responsive");
let nav = document.getElementById("nav");
let close_responsive = document.getElementById("close-responsive");

nav_responsive.onclick = function(){
    if(menu_responsive_visible==false){
        nav.className = "menu-responsive";
        menu_responsive_visible = true;
    }
}
close_responsive.onclick = function(){
    if(menu_responsive_visible==true){
        nav.className = "";
        menu_responsive_visible = false;
    }
}

const carouselImages = document.querySelector('.carousel-images');

let translateX = 0;

function moveLeft() {
  const imageWidth = carouselImages.children[0].offsetWidth;
  translateX -= imageWidth;
  if (translateX < -imageWidth * (carouselImages.children.length - 1)) {
    translateX = 0;
  }
  carouselImages.style.transform = `translateX(${translateX}px)`;
}

setInterval(moveLeft, 2000); // Cambia las imágenes cada 2 segundos

