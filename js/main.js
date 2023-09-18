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



//Hace scroll hasta el div con la id "sectionId" sin que se cambie la url del proyecto.
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
  }





/* Cierra el "menu hamburguesa" luego de clickear uno de sus enlaces */
$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


/* Se encarga de llamar a la funcion fadeOut() luego de 2 segundos de haber cargado la pagina */
setTimeout( function(){
    fadeOut();
}, 28 )