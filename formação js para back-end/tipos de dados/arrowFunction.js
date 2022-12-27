function apresentar(nome){
    return `meu nome é ${nome}`
}

const apresentarArrow = nome => `meu nome é ${nome}`;

const somaMedia = (num1, num2, quantidade) => (num1 + num2) / quantidade;


const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "somente numeros menor que 10"
    }else{
        return num1 + num2;
    }
}