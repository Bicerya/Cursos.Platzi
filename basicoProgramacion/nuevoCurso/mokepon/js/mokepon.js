window.addEventListener('load', iniciarJuego)

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonMascotaJugador = document.getElementById('boton-mascotas')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const resultadoDelJugador = document.getElementById('resultado-del-jugador')
const resultadoDelEnemigo = document.getElementById('resultado-del-enemigo')

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon
{
    constructor(nombre, foto, vida)
    {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let hipodoge = new Mokepon

function iniciarJuego()
{
    sectionSeleccionarAtaque.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)

    botonReiniciar.style.display = 'none'
}

function seleccionarMascotaJugador()
{
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

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
        spanMascotaJugador.innerHTML = 'Muertinho'
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo()
{
    let ataqueAleatorio = aleatorio(1,3)

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
    let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
  
    resultadoDelJugador.appendChild(nuevoAtaqueDelJugador) 
    resultadoDelEnemigo.appendChild(nuevoAtaqueDelEnemigo) 
}

function combate()
{
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
    sectionMensajes.innerHTML = resultadoFinal
    
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display = 'flex'
}

function reiniciarJuego()
{
    location.reload()
}
