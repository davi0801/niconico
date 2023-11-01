function tocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPo


const listaDeTeclas = document.querySelectorall('.tecla')  

let contador = 0;

//while significa enquanto
while (contador < listaDeTeclas.length) {
 const efeito = listaDeTeclas [contador].classList[1];
const idAudio = "#som_" +efeito;
    listaDeTeclas[contador].onclick = function ()
        {
            tocaSom (idAudio);
        }
            contador = contador + 1;
    console.log(contador);
}
// Pom ----------------------------------------
function tocaSomPom () {
document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;
