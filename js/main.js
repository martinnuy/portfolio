var loader = document.getElementById("preloader");
var opacity = 0;
var intervalID = 0;


function fadeOut(){

    intervalID = setInterval(hide, 20);

}

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


setTimeout( function(){
    fadeOut();
}, 2000 )