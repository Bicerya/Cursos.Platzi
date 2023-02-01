window.addEventListener('load', iniciarJuego)

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonMascotaJugador = document.getElementById('boton-mascotas')

const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const resultadoDelJugador = document.getElementById('resultado-del-jugador')
const resultadoDelEnemigo = document.getElementById('resultado-del-enemigo')

const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let ataquesMokepon
let ataquesMokeponEnemigo
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let botonFuego
let botonAgua
let botonTierra
let botones = []
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon
{
    constructor(nombre, foto, vida)
    {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './imagenes/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './imagenes/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './imagenes/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push
(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push
(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

ratigueya.ataques.push
(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego()
{
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => 
    {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
    })

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)

    botonReiniciar.style.display = 'none'
}

function seleccionarMascotaJugador()
{
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked)
    {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }
    else if (inputCapipepo.checked)
    {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }
    else if (inputRatigueya.checked)
    {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }
    else
    {
        spanMascotaJugador.innerHTML = 'Muertinho'
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador)
{
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre)
        {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques)
{
    ataques.forEach((ataque) => 
    {
        ataquesMokepon = `<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>`
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque()
{
    botones.forEach((boton) => 
    {
        boton.addEventListener('click', (e) => 
        {
            if(e.target.textContent === '🔥')
            {
                ataqueJugador.push('FUEGO')
                boton.style.background = '#112f58'
                console.log(ataqueJugador)
            }
            else if (e.target.textContent === '💧')
            {
                ataqueJugador.push('AGUA')
                boton.style.background = '#112f58'
                console.log(ataqueJugador)
            }
            else
            {
                ataqueJugador.push('TIERRA')
                boton.style.background = '#112f58'
                console.log(ataqueJugador)
            }

            ataqueDelEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo()
{
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    
    secuenciaAtaque()
}

function aleatorio(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueDelEnemigo()
{
    ataqueEnemigoSeleccionado = aleatorio(0, ataquesMokeponEnemigo.length - 1)
    
    if (ataqueEnemigoSeleccionado == 0 || ataqueEnemigoSeleccionado == 1)
    {
        ataqueEnemigo.push('FUEGO')
    }
    else if (ataqueEnemigoSeleccionado == 3 || ataqueEnemigoSeleccionado == 4)
    {
        ataqueEnemigo.push('AGUA')
    }
    else
    {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
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
