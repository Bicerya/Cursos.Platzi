var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var limpiar = document.getElementById("limpiar");
boton.addEventListener("click", dibujoPorClick);
limpiar.addEventListener("click", limpiarPantalla);


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function limpiarPantalla()
{
    location.reload();
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujoPorClick()
{

var lineas = parseInt(texto.value);
var l = 0;
var yi, xf;
var yf, xi;
var colorcolorcito = "#FAA"
var espacio = ancho / lineas;


for(l = 0; l < lineas; l++)

{
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcolorcito, 1, yi, xf, 499);
    console.log("Linea " + 1);
}


for(l = 0; l < lineas; l++)

{
    xi = espacio * (l + 1);
    yf = espacio * l;
    dibujarLinea(colorcolorcito, xi, 1, 499, yf);
    console.log("Linea " + 1);
}

dibujarLinea(colorcolorcito, 1, 1, 1, ancho - 1)
dibujarLinea(colorcolorcito, 1, ancho - 1, ancho - 1, ancho - 1)
dibujarLinea(colorcolorcito, 1, 1, ancho - 1, 1)
dibujarLinea(colorcolorcito, ancho - 1, 1, ancho - 1, ancho - 1)

}