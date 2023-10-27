function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPo


const listaDeTeclas = document.querySelectorall('.tecla')  

let contador = 0;

//while significa enquanto
while (contador <9) {

    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;
    console.log(contador);
}
// Pom ----------------------------------------
function tocaSomPom () {
document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;
