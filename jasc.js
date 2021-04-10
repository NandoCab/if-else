var seleccionar = document.querySelector("select");
var parrafo = document.querySelector("p");

seleccionar.addEventListener("change", establcerClima);

function establcerClima() {
    var seleccion = seleccionar.value;
    var temperatura = undefined

    /*if(seleccion === "soleado") {
        parrafo.textContent = "El dia esta caluroso";
        if(temperatura < 86) {
            parrafo.textContent = "Temperatura baja " + temperatura + " Grados"
        } else {
            parrafo.textContent = "Tempertura alta " + temperatura + " Grados"
        }*/
    if(seleccion === "soleado" && temperatura < 86 && temperatura !== null || temperatura === undefined) { 
        parrafo.textContent = "Temperatura baja " + temperatura + " Grados"
    } else if(seleccion === "soleado" && temperatura >= 86 && temperatura !== null || temperatura === undefined) {
        parrafo.textContent = "Tempertura alta " + temperatura + " Grados"
    } else if(seleccion === "lluvioso") {
        parrafo.textContent = "El dia esta lluvioso";
    } else if (seleccion === "nublado") {
        parrafo.textContent = "El dia esta nublado";
    } else if(seleccion === "frio") {
        parrafo.textContent = "Hace mucho frio";
    } else {
        parrafo.textContent = ""
    }
}