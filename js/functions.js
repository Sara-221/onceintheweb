// Funciones para efecto hover de la página principal.
// 1. Cambiar de imagen a texto al hacer hover

function ImgToText(elemento) {
    var elemento = document.querySelector("." + elemento);
    elemento.addEventListener('mouseenter', function () {
    elemento.classList.add("navhover");
});
}

// 2. Cambiar de texto a imagen al parar el hover
function TextToImg(elemento) {
    var elemento = document.querySelector("." + elemento);
    elemento.addEventListener('mouseleave', function () {
    elemento.classList.remove("navhover");
});
}

// Función para obtener los hermanos de un elemento, usada en el acordeón
// Fuente: https://gomakethings.com/how-to-get-all-of-an-elements-siblings-with-vanilla-js/
var getSiblings = function (elem) {

	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = elem.parentNode.firstChild;

	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}

	return siblings;

};


// Funcion que quita una clase (clase1) y añade otra diferente (clase2) a un elemento. Utilizada en el JS de la pagina "how".

function cambiarClase(e, clase1, clase2) {
	e.classList.remove(clase1);
	e.classList.add(clase2); 
}

