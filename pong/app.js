// parametros da bolina
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 15;
let raio = diametroBolinha / 2;

// velociadade da bolinha
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

// cria a tela
function setup() {
  createCanvas(600, 400);
}

// objetos no game
function draw() {
  background(0);
  circle(xBolinha, yBolinha,       diametroBolinha);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  // condicional para a bolinha rebater nas bordas
      // eixo x
   if(xBolinha + raio > width || xBolinha - raio < 0){
     velocidadeXBolinha *= -1; 
   }
      // eixo y
   if(yBolinha + raio > height || yBolinha - raio < 0){
     velocidadeYBolinha *= -1; 
   }
    
   

}