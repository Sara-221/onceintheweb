// Homepage Desktop: Efecto de opacidad con scroll
var html1 = document.querySelector('html');
var header1 = document.querySelector('#headerHome');
var footer1 = document.querySelector('#footerHome');

// El siguiente bloque se ejecuta sólo en viewports desktop, con un ancho mínimo de 1280px.
if(window.innerWidth>=1280){
    //La pagina principal aparece al hacer scroll. 
    window.addEventListener('scroll', function () {
        scroll1 = html1.scrollTop;
        if (scroll1 > 10 && !footer1.classList.contains("dFlex")) {       
            header1.classList.add("dFlex");
            portada.classList.add("transY");
            portada.style.zIndex = "4";
            window.scrollTo(0,0);
            setTimeout(() => {
                footer1.classList.add("dFlex");
            }, 1500);
        }
    });
    // Máscara de imagen siguiendo el movimiento del ratón
    var element = document.querySelector('.imagenPortada');
    shadowWidth = element.offsetWidth;
    shadowHeight = element.offsetHeight;

    document.addEventListener('mousemove', function (e) {              
    if (e.target.hasAttribute('movable')) {
        portada.style.setProperty('--mouseX', e.offsetX/shadowWidth*100);
        portada.style.setProperty('--mouseY', e.offsetY/shadowHeight*100);   
    }

    });
}


// Aplicar funciones de hover (en fichero functions.js) a las 4 partes de la homepage. Utilizamos un bucle if para asegurarnos de que el efecto sólo se aplica en la versión desktop.
var seccion = document.getElementById('pagina');
var winWidth = window.innerWidth;

if (winWidth >= 1280) {
    for (var child of seccion.children) {
        ImgToText(child.className);
        TextToImg(child.className);
    }
}
