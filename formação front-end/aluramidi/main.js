// {document} é para selecionar o documento {querySelector} para selecionar o elemento.



const listaDeTeclas = document.querySelectorAll('.tecla');

function tocarSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();

}

let contador = 0;

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    listaDeTeclas[contador].onclick = function(){
        tocarSom(idAudio)
    }
    contador += 1;
    
}