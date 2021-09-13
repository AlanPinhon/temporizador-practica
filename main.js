// Variables del temporizador
let horas = 1;
let minutos = 0;
let segundos = 3;

// Selectores
const txtSegundos = document.querySelector('#segundos');
const txtMinutos = document.querySelector('#minutos');
const txtHoras = document.querySelector('#horas');

// Ejecutar los segundos
function ejecutarSegundos () {

    if(segundos < 0) {
        segundos = 59;
    }

    // Se muestran los segundos en pantalla
    if(segundos < 10) {
        txtSegundos.textContent = `0${segundos}`;
    } else {
        txtSegundos.textContent = segundos;
    }
    segundos--;

    ejecutarMinutos(segundos);
}

// Ejecutar los minutos
function ejecutarMinutos (segundos) {

    if(segundos === -1 && minutos !== 0) {
        setTimeout(() => {
            minutos--;
        }, 500);
    } else if (segundos === -1 && minutos === 0) {
        setTimeout(() => {
            minutos = 59;
        }, 500);
    }

    // Mostrar los minutos en pantalla
    if(minutos < 10) {
        txtMinutos.textContent = `0${minutos}`;
    } else {
        txtMinutos.textContent = minutos;
    }

    ejecutarHoras(segundos, minutos);
}

// Ejecutar las horas
function ejecutarHoras(segundos, minutos) {
    
    if(segundos === -1 && minutos === 0 && horas !== 0) {
        setTimeout(() => {
            horas--;
        }, 500);
    } else if (segundos === -1 && minutos === 0 && horas === 0) {
        clearInterval(temporizador);
    }

    // Imprime las horas en pantalla
    if(horas < 10) {
        txtHoras.textContent = `0${horas}`;
    } else {
        txtHoras.textContent = horas;
    }
}

let temporizador = setInterval(ejecutarSegundos, 1000);
ejecutarSegundos();