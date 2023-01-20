// Cambiar la estructura solo para desktop.
// Definir los diferentes titulos de "pasos" como variables y convertirlos en array.
var botones = howPage.querySelectorAll('button');
// Seleccionar todas las decripciones de etapa y definirlas como un único array.
var etapas = document.querySelectorAll('.etapa');

botones.forEach(element1 => {
    // Cambiar de formato el título al hacer click: el botón en el que se ha hecho click se activa, los demás se desactivan. Pâra ello usamos la funcion "cambiarClase" definida en functionsjs
    element1.addEventListener('click', function () {
        cambiarClase(element1, "inactivo", "activo");
        // Uso de la función siblings para "desactivar" los demás botones.
        var siblings = getSiblings(element1);
        siblings.forEach(element2 => {
            if (element2.classList.contains("activo")) {
                cambiarClase(element2, "activo", "inactivo");
            }
        });

        // Ocultar todos los bloques descriptivos para q se muestre después sólo aquel en el que el usuario hace click.
        etapas.forEach(element3 => {
            element3.classList.add("dNone");
        });

        // Mostrar bloque correspondiente a la descripción de cada título
        var id = element1.id;
        switch (id) {
            case "discovery":
                cambiarClase(ux, "dNone", "dFlex");
                break;
            case "webDesign":
                cambiarClase(ui, "dNone", "dFlex");
                break;
            case "development":
                cambiarClase(dev, "dNone", "dFlex");
                break;
            case "training":
                cambiarClase(tra, "dNone", "dFlex");
                break;
        }

    });
});
