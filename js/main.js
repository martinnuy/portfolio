var loader = document.getElementById("preloader");
var opacity = 0;
var intervalID = 0;

/* Funcion para desvanecer el load screen */
function fadeOut(){
    intervalID = setInterval(hide, 20);
}

/* Funcion auxiliar de la funcion fadeOut() */ 
function hide(){

    opacity = Number(window.getComputedStyle(loader).getPropertyValue("opacity"));

    if(opacity > 0){
        opacity = opacity - 0.1;
        loader.style.opacity = opacity;
    }else{

        clearInterval(intervalID);
        loader.style.display = "none";
        document.body.style.overflow = 'visible'
    }

}


/* Se encarga de llamar a la funcion fadeOut() luego de 2 segundos de haber cargado la pagina */
setTimeout( function(){
    fadeOut();
}, 2 )