//objeto con todas las teclas y sus sonidos
let sonidos = {   
    "a": "./sounds/clap.wav",
    "s": "./sounds/hihat.wav",
    "d": "./sounds/kick.wav",
    "e": "./sounds/openhat.wav",
    "g": "./sounds/boom.wav",
    "h": "./sounds/ride.wav",
    "j": "./sounds/snare.wav",
    "k": "./sounds/tom.wav",
    "l": "./sounds/tink.wav",
}

//función para reproducir el sonido con el evento
function reproducirSonido(e) {
    // Convertir la letra presionada a minúscula
    const teclaPresionada = e.key.toLowerCase();
    // Buscar el sonido correspondiente en el objeto
    const sonido = sonidos[teclaPresionada];
    if (sonido) {
        const audio = new Audio(sonido);
        audio.play();
    //aqui se obtiene el elemento html h1 de la tecla presionada
    const tecla = document.querySelector(`.tecla h1[data-key="${e.key}"]`);
    //si la tecla es correcta 
    if (tecla) {
        //aqui se agrega la clase "play" al padre de h1 o sea "tecla"
        tecla.parentNode.classList.add("play");
        //se asigna el contenedor "tecla" a una nueva variable
        const teclaDiv = tecla.parentElement;
        //se agrega la clase "play"
        teclaDiv.classList.add("play");
        //un setTimeout para remover el estilo "play"
        setTimeout(() => {
            //removemos la clase "play"
            teclaDiv.classList.remove("play");
            //despues de 500 milsegundos
        }, 500);
    }}
    else{
        //si presiona otra tecla que no tiene sonido sale este log
        console.log("No se puede reproducir el sonido");
    }
}
//agregando el listen del evento cuando una tecla es presionada
window.addEventListener("keydown",(e)=>{ 
    //imprimiendo la tecla presionada
    console.log(e)
    //llamando a la función que reproducira el sonido
    reproducirSonido(e);
});