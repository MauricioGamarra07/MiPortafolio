function llamar(){
    let botonera=document.getElementById("botonera");
    botonera.classList.toggle("botonera-open");

    let menu=document.getElementById("menu");
    menu.querySelector('.menu .cerrar').classList.toggle("fa-times");
}

//Botón para subir al Inicio
window.addEventListener("scroll",Subir)
function Subir(){
    let subir=document.getElementById("subir");
    let posy=window.pageYOffset;
    if (posy>100){
        subir.style.display="block";
    }
    else{
        subir.style.display="none";
    }
}