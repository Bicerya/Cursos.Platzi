var teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;
var colorcito = "green";

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{  
        var movimiento = 1;

    switch(evento.keyCode)
    {

        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default:
            console.log("otra tecla");
        break;
    }
}

var cuadro = document.getElementById("area_de_dibujo"); //Identificamos como areaDibujo al canvas o lienzo de HTML.
var papel = cuadro.getContext("2d"); //Defino el context.
cuadro.addEventListener("mousedown", lineaInicial); //Cuadro escucha el evento del clic abajo del mouse y ejecuta la función lineaInicial
cuadro.addEventListener("mouseup", finLinea); //Cuadro escucha el evento clic arriba -soltar- y ejecuta finLinea
cuadro.addEventListener("mousemove", lineaMovimiento); //cuadro escucha el mov del mouse y ejecutas lineaMovimiento.

let mouse = false; // La variable mouse por defecto será false porque así lo definí

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){ //Esta es la función base del dibujo.
    lienzo.beginPath();
    lienzo.strokeStyle= colorcito;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function lineaInicial(){ //Linea inicial me cambia el false por defecto a true.
    mouse = true;
}

function finLinea(){ //Esta función me vuelve a poner al mouse como nulo, es decir false.
    mouse = false;
}
function lineaMovimiento(event){ //Esta función dice 
    if(mouse == true){ //Si mouse es true -es decir si está siendo mousedown, va a dibujar.
        dibujarLinea("colorcito", event.layerX - 1, event.layerY - 1, event.layerX + 1, event.layerY + 1, papel);
    } //Como dibujará
}