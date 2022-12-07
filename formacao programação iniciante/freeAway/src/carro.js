// carro paramers
let xCarro = 600;
let yCarro = 40;
let larguraCarro = 50;
let alturaCarro = 40;
let velocidadeCarro = 2;

function mostraCarro(){
    image(imagemCarro, xCarro, yCarro, larguraCarro, alturaCarro);
}
  
function movimentaCarro(){
    xCarro -= velocidadeCarro;
}
  
function loopCarro(){

}
