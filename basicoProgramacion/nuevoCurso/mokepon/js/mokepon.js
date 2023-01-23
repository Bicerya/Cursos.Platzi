window.addEventListener('load', iniciarJuego)

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego()
{
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascotas')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

    botonReiniciar.style.display = 'none'
}


function seleccionarMascotaJugador()
{

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

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
    else
    {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function aleatorio(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueFuego()
{
    ataqueJugador = 'Fuego'
    ataqueDelEnemigo()
}

function ataqueAgua()
{
    ataqueJugador = 'Agua'
    ataqueDelEnemigo()
}

function ataqueTierra()
{
    ataqueJugador = 'Tierra'
    ataqueDelEnemigo()
}

function ataqueDelEnemigo()
{
    ataqueEnemigoSeleccionado = aleatorio(1,3)
    
    if (ataqueEnemigoSeleccionado == 1)
    {
        ataqueEnemigo = 'Fuego'
    }
    else if (ataqueEnemigoSeleccionado == 2)
    {
        ataqueEnemigo = 'Agua'
    }
    else
    {
        ataqueEnemigo = 'Tierra'
    }
    combate()

}

function crearMensaje(resultado)
{
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = `Tu mascota ataco con ${ataqueJugador} la mascota del enemigo ataco con ${ataqueEnemigo} ${resultado}`

    sectionMensajes.appendChild(parrafo)    
}


function combate()
{
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador)
    {
        crearMensaje('Empate');
    } 
    else if ((ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') || (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') || (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'))
    {
        crearMensaje('Ganaste!');
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } 
    else
    {
        crearMensaje('Perdiste 😢');
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}

function revisarVidas()
{
    if(vidasEnemigo == 0)
    {
        crearMensajeFinal(`Felicitaciones Ganaste!!`)
    }
    else if (vidasJugador == 0)
    {
      crearMensajeFinal(`Lo siento, Perdiste 🥲`)
    }

}

function crearMensajeFinal(resultadoFinal)
{
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)   
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

    botonReiniciar.style.display = 'block'
}

function reiniciarJuego()
{
    location.reload()
}
