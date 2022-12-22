const numero =5;
const text = '5';

console.log(numero == text)
console.log(numero === text)   


// operador ternario

const idadeMinima = 18;
const idadeCliente = 15;

// operadores de  comparação
//      if(idadeCliente >= idadeMinima){
//             console.log("maior de idade, pode comprar cerveja")
//      }else{
//            console.log("menor de idade, não pode comprar cerveja")
//            console.error('compra suco poha')
//       }

// operador ternário

    // exemple console.log(condicion ? verdadeiro : falso)
 
console.log(idadeCliente >= idadeMinima ? "maior de idade, pode comprar cerveja" : "menor de idade, não pode comprar cerveja")

