const btnstart = document.querySelector('#btnStart')
const display = document.querySelector ('#tempo_timer');
const start = document.querySelector ('.tempo_botao');
var tmin = 30;
var tseg = 0;
const tbtn = document.querySelector ('.timer_botao');
var dmin = 5;
var dseg = 0;
const dbtn = document.querySelector ('#descanso_botao');

const mstart = new Audio ('./assets/audio/start.mp3');
const mChange = new Audio ('./assets/audio/change.mp3');
const mEnd = new Audio ('./assets/audio/end.mp3');

//Configuração e recepção dos valores
tbtn.addEventListener('click', () => {
    var tminu = document.querySelector('#tminutos').value;
    var tsegu = document.querySelector('#tsegundos').value;
    console.log(tminu, tsegu);
    window.tmin = tminu;
    window.tseg = tsegu;
    display.innerHTML = `${tmin} : ${tseg}`;
    clearInterval(interval);
    start.style.visibility = "visible";
})

dbtn.addEventListener('click', () => {
    const dminu = document.querySelector ('#dminutos').value;
    const dsegu = document.querySelector ('#dsegundos').value;
    console.log(dminu, dsegu);
    window.dmin = dminu;
    window.dseg = dsegu;
    clearInterval(interval);
    display.innerHTML = `${tmin} : ${tseg}`;
    start.style.visibility = "visible";
})

//Início do timer
start.addEventListener ('click', () => {
    start.style.visibility = "hidden";
})

start.addEventListener ('click', () => {
    if (btnstart.checked == true) {
        clearInterval(interval);
        interval = null;    
        // iconestart.innerHTML = `Start`;
        return
    }
    
    else if (btnstart.checked == false) {
        let duracao = (parseInt(tmin)*60 + parseInt(tseg));
        interval = timer(duracao, display);    
        mstart.play();
        // iconestart.innerHTML = `Pause`;
        return
    
    }
})


const timer = (duracao, display) => {
    let timer = duracao;
    let minutos, segundos;

    return setInterval(() => {
        minutos = Math.floor(timer / 60);
        segundos = Math.floor(timer % 60);

        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;

        display.innerHTML = `${minutos} : ${segundos}`;

        timer -= 1;
        window.timer2 = timer;
        console.log(timer)
        if(timer < 0) {
            display.innerHTML = 'Folga';
            clearInterval(interval);
            interval = null;
            
            mChange.play();

            let descansao = (parseInt(dmin)*60 + parseInt(dseg));
            timer2(descansao, display);
           }
    }, 1000);    
}

const timer2 = (descansao, display) => {
    let timer2 = descansao;
    let minutos, segundos;

    let interval2 = setInterval(() => {
        minutos = Math.floor(timer2 / 60);
        segundos = Math.floor(timer2 % 60);

        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;

        display.innerHTML = `${minutos} : ${segundos}`;

        timer2 -= 1;
        console.log(timer2)
        if(timer2 < 0) {
            display.innerHTML = 'Fim?';
            display.style.color = 'var(--cor-30)';
            clearInterval(interval2);
            mEnd.play();
        }
    }, 1000);
}



