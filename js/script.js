const html = document.querySelector('html');
const est1 = document.querySelector('.estilos_opcao-1');
const est2 = document.querySelector('.estilos_opcao-2');
const est3 = document.querySelector('.estilos_opcao-3');
const est4 = document.querySelector('.estilos_opcao-4');
const est = document.querySelectorAll('.estilos_opcao');
const playMusic = document.querySelector('#playMusic');
const switchGeral = document.querySelector ('#controle_tempo');
const iniciarPausarMusica = document.querySelector('.material-icons');
const tempo = document.querySelector('#tempo');
const inputs = document.querySelector('#cInputs');
const player = document.querySelector('#cMusica');

const mStart = new Audio ('./assets/audio/star.mp3');

var audio = document.querySelector('audio');
audio.volume = 0.0;


/*testes
const testar = document.querySelector("#controle_tempo");
console.log();
*/

est1.addEventListener ('click', () => {
    alterarEstilo('est1')
    est1.classList.add('estilos_ativo')
    audio.setAttribute('src', './assets/audio/jazz.mp3')
})

est2.addEventListener ('click', () => {
    alterarEstilo('est2')
    est2.classList.add('estilos_ativo')
    audio.setAttribute('src', './assets/audio/lofiSnow.mp3')
})

est3.addEventListener ('click', () => {
    alterarEstilo('est3')
    est3.classList.add('estilos_ativo')
    audio.setAttribute('src', './assets/audio/EspacoSideral.mp3')
})

est4.addEventListener ('click', () => {
    alterarEstilo('est4')
    est4.classList.add('estilos_ativo')
    audio.setAttribute('src', './assets/audio/diaFeliz.mp3')
})

function alterarEstilo(estilo) {
    html.setAttribute ('data-estilos', estilo);
    est.forEach(function (estilo){
        estilo.classList.remove('estilos_ativo')
    });
}


function trocarInput () {
    if (switchGeral.checked == true) {
        console.log(tempo);
        tempo.style.display = "flex";
        inputs.style.display = "none";
        player.style.display = "none";
    }

    else {
        tempo.style.display = "none";
        inputs.style.display = "flex";
        player.style.display = "flex";
    }
}


function trocarIcone () {
    if (playMusic.checked == true) {
        iniciarPausarMusica.textContent = "pause"
        audio.volume = .15;
        audio.play();
    }

    else {
        iniciarPausarMusica.textContent = "play_arrow"
        audio.volume = 0.0;
    }
}


