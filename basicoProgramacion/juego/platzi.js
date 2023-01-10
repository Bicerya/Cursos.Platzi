var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");


var fondo = {
    url: "fondo.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

// for(var i=0; i<10; i++)
//     {
//         z = aleatorio(10,20);
//         document.write(z + ", ");
//     }

function dibujar()
{
    papel.drawImage(fondo, 0 , 0);
}

function cargaFondo()
{
    fondo.cargaOK = true;
}

function dibujarPollos()
{
    papel.drawImage(pollo, 280 , 150);
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor( Math.random() * ( maxi - min + 1) ) + min;
    return resultado;
}