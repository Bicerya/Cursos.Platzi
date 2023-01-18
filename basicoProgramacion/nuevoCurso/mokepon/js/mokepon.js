window.addEventListener('load', iniciarJuego)

let ataqueJugador = 0
let ataqueEnemigo = 0


function iniciarJuego()
{
    let botonMascotaJugador = document.getElementById('boton-mascotas')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}


function seleccionarMascotaJugador()
{
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked)
    {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }
    else if (inputCapipepo.checked)
    {
        spanMascotaJugador.innerHTML = 'Capipepo'
    }
    else if (inputRatigueya.checked)
    {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }
    else if (inputLangostelvis.checked)
    {
        spanMascotaJugador.innerHTML = 'Langostelvis'
    }
    else if (inputTucapalma.checked)
    {
        spanMascotaJugador.innerHTML = 'Tucapalma'
    }
    else if (inputPydos.checked)
    {
        spanMascotaJugador.innerHTML = 'Pydos'
    }
    else
    {
        alert('No has seleccionado un Mokepon!')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo()
{
    let ataqueAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1)
    {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }
    else if (ataqueAleatorio == 2)
    {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }
    else if (ataqueAleatorio == 3)
    {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
    else if (ataqueAleatorio == 4)
    {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    }
    else if (ataqueAleatorio == 5)
    {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    }
    else
    {
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

function aleatorio(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueFuego()
{
    ataqueJugador = 'Fuego'
    alert('Elegiste el ataque de ' + ataqueJugador)
    ataqueDelEnemigo()
}

function ataqueAgua()
{
    ataqueJugador = 'Agua'
    alert('Elegiste el ataque de ' + ataqueJugador)
    ataqueDelEnemigo()
}

function ataqueTierra()
{
    ataqueJugador = 'Tierra'
    alert('Elegiste el ataque de ' + ataqueJugador)
    ataqueDelEnemigo()
}

function ataqueDelEnemigo()
{
    ataqueEnemigoSeleccionado = aleatorio(1,3)
    
    if (ataqueEnemigoSeleccionado == 1)
    {
        ataqueEnemigo = 'Fuego'
        alert('El Enemigo eligio el ataque de ' + ataqueEnemigo)
    }
    else if (ataqueEnemigoSeleccionado == 2)
    {
        ataqueEnemigo = 'Agua'
        alert('El Enemigo eligio el ataque de ' + ataqueEnemigo)
    }
    else
    {
        ataqueEnemigo = 'Tierra'
        alert('El Enemigo eligio el ataque de ' + ataqueEnemigo)
    }

    crearMensaje()
}

function crearMensaje()
{
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' - Pendiente'

    sectionMensajes.appendChild(parrafo)
}




