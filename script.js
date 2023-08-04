function llamar(){
    let botonera=document.getElementById("botonera");
    botonera.classList.toggle("botonera-open");

    let menu=document.getElementById("menu");
    menu.querySelector('.menu .cerrar').classList.toggle("fa-times");
}

//Header
window.addEventListener("scroll",Mover)
function Mover(){
    let header=document.querySelector(".cont-header");
    let pos = window.scrollY;
    /* console.log(pos); */
    if (pos>600){
        header.classList.add("efecto");
    }
    else{
        header.classList.remove("efecto");
    }
}