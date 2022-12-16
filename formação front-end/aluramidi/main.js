// {document} é para selecionar o documento {querySelector} para selecionar o elemento.



const listaDeTeclas = document.querySelectorAll('.tecla');

function tocarSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();

}

let contador = 0;

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(listaDeTeclas)

    listaDeTeclas[contador].onclick = function(){
        tocarSom('#som_tecla_pom');
    }

    contador += 1;
    console.log(contador)
}


// const listaDeTeclas = document.querySelectorAll('.tecla');
// const listaDeSons = [
//     document.querySelectorAll(Audio)
// ]

// function tocarSom(){
//     for(let i = 0; listaDeSons.length < listaDeSons; i += 1){
//         listaDeSons[i].play()
//     }
// }


// for(let i = 0 ; listaDeTeclas.length < listaDeTeclas; i =+ 1){
//     listaDeTeclas[i].onclick = tocarSom();
// }



// const leitor =addEventListener => document.querySelector('.tecla_pom');

// if(leitor = true){
//     document.querySelector('#som_tecla_pom').play();
// }

// function leitor(){
//     let leitorPom = addEventListener == document.querySelector('.tecla_pom');
//     if(leitorPom => true){
//         document.querySelector('#som_tecla_pom').play();
//     }
// }

// leitor();

// let tocaSomPom = document.querySelector('#som_tecla_pom').play();
// let somPom = document.querySelector('.tecla_pom').onclick = tocaSomPom;

// function sons(){
//     if(somPom == true){
//         tocaSomPom;
//     }
// }
// sons();


// function tocaSomPom(){
//     document.querySelector('#som_tecla_pom').play();
// }

// function tocar (){
//     if(listaDeTeclas[0].onclick){
//         ListaDeSons[0].play();
//     }
//     // let botao0 =  listaDeTeclas[0].onclick = ListaDeSons[0].play();
//     // let botao1 =  listaDeTeclas[1].onclick = ListaDeSons[1].play();
//     // let botao2 =  listaDeTeclas[3].onclick = ListaDeSons[0].play();
//     // let botao3 =  listaDeTeclas[4].onclick = ListaDeSons[1].play();
//     // let botao4 =  listaDeTeclas[5].onclick = ListaDeSons[0].play();
//     // let botao5 =  listaDeTeclas[6].onclick = ListaDeSons[1].play();
//     // let botao6 =  listaDeTeclas[7].onclick = ListaDeSons[0].play();
//     // let botao7 =  listaDeTeclas[8].onclick = ListaDeSons[1].play();

// }

// tocar();

    

