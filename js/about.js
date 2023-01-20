// Acordeon
var pregunta = document.querySelectorAll('.pregunta');

pregunta.forEach(element1 => {
    element1.addEventListener('click', function () {
        var respuesta = element1.nextElementSibling;
        respuesta.classList.toggle("respuestaHeight");
        element1.style.marginBottom = "0px";
        var siblings = getSiblings(element1);
        siblings.forEach(element2 => {
            if (element2 != respuesta) {
                element2.classList.remove("respuestaHeight");
            }
        });
    })
})



