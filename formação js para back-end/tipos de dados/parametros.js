function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(10, 20))


function media(){
    let bimestreNotas = {
        nota1 : 40,
        nota2 : 60,
        nota3 : 80,
        nota4 : 100
    }
    let somaMedias = Number(bimestreNotas.nota1 + bimestreNotas.nota2  + bimestreNotas.nota3+ bimestreNotas.nota4) / 4;
    return somaMedias
}

console.log(media())