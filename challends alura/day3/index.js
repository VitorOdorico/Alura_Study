// Você alguma vez já jogou algum jogo que te desse mais de uma escolha e, dependendo do que você escolhesse, o destino do personagem seria totalmente diferente?

// Hoje você vai desenvolver um exemplo assim com Javascript!

// Eu quero que você trabalhe com estruturas de controle de fluxo. Esse jeito complicado de falar só quer dizer que, assim como nos jogos, a história que você montar precisa se adaptar às respostas dadas por quem está jogando.

// Para isso, você vai precisar de algumas estruturas capazes de alterar o fluxo da aplicação, como for, while, if e else. Todas essas conseguem cumprir esse objetivo, dada uma certa condição.

// O if e o else, que eu já te mostrei nos últimos dias, são capazes de criar ramificações dentro da aplicação para que seja tomada uma ou outra ação, dependendo da condição fornecida.

// Os loops (como for e while) são capazes de fazer uma tarefa repetitiva se transformar em poucas linhas de código, independente de quantas vezes você precisar repetir aquela tarefa.

// 












// O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

// Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.
// DICA
// Já deu pra ter uma ideia de como fazer toda essa historinha acontecer, né? Principalmente lembrando como utilizar as estruturas condicionais e loops em Javascript!

// Caso você ainda não saiba como imprimir e receber valores nas páginas web com HTML e CSS, você poderá usar console.log, prompt e alert para desenvolver o seu jogo, como você já viu nos últimos dias.

// Lembre-se que você pode sempre personalizar o jogo da forma que quiser.
// EXTRA
// Você já viu estruturas condicionais em Javascript anteriormente, mas vou recapitular. O if é usado para verificar se uma determinada condição é verdadeira.

// Exemplo:

// if (cidade === "Roma"){
//     // mostre a foto do "Coliseu"
// }

// Além disso, ele também pode ser usado com um ou vários else if, que irá saber que a condição anterior era falsa e vai verificar se a atual é verdadeira.

// Por fim, existe o else sozinho, sem nenhuma condição, e o código dentro dele será executado sempre que todas as condições encadeadas anteriormente forem falsas.

// if (cidade === "Roma"){
//     // mostre a foto do "Coliseu"
// }
// else if (cidade === "Paris"){
//     // mostre a foto do "Torre Eiffel"
// }
// else {
//     // dê a resposta "Você não digitou nenhuma cidade válida"
// }

// Além disso, para a parte 4, você precisará de uma estrutura de repetição (loop) como o while. Para usá-lo, é bem fácil:

// let idade = 0;

// while (idade < 8) {
//     // algum comando para imprimir a idade
//     idade = idade + 1;
// }

// Esse código começará com a idade em zero e, ao entrar no while, esse valor será impresso e, logo depois, incrementado em 1.

// Ou seja, depois da primeira vez que ele passar, o valor da idade será igual a 1, que é menor que 8, e por isso, a condição do while terá um resultado verdadeiro e ele continuará a ser executado.

// Ele só vai parar quando o valor da variável idade chegar a 8, que não é menor que 8, e por isso a condição do while terá um resultado falso.

// Você também pode aprender mais sobre o while nesse site.




// Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

    // 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

    let decisao = prompt('Digite  a carreira que quer seguir "front-end" ou "back-end"')
        // 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
        if(decisao === 'front-end'){
            let framework = prompt("quer aprender 'react' ou 'vue'? ");
                if(framework === 'react'){
                    window.alert('parabens voce escolheu react');
                }else if(framework === 'vue'){
                    window.alert('parabens você escolheu vue');
                }
        }else if(decisao == 'back-end'){
            let framework = prompt("quer aprender 'c#' ou 'java'? ");
                if(framework === 'c#'){
                    window.alert('parabens voce escolheu c#');
                }else if(framework === 'java'){
                    window.alert('parabens você escolheu java');
                }
        }else if(decisao != 'front-end' || 'back-end'){
            let fullStacks = prompt('Você deseja se tornar full-stacks? digite "sim"')

            if(fullStacks === 'sim'){

                let skills = prompt('Qual a habilidade que deseja apreender? ')

                function habilidades(){
                    switch(skills){
                        case 'javascript':
                            window.alert('JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web')
                        case 'python':
                            window.alert('Python é uma linguagem de programação de alto nível e de propósito geral. Sua filosofia de design enfatiza a legibilidade do código com o uso de recuo significativo. Python é tipado dinamicamente e coletado como lixo')
                        case 'ruby':
                            window.alert('Ruby é uma linguagem de programação interpretada multiparadigma, de tipagem dinâmica e forte, com gerenciamento de memória automático, originalmente planejada e desenvolvida no Japão em 1995, por Yukihiro "Matz" Matsumoto, para ser usada como linguagem de script.')
                        break;
                        default:
                            window.alert('end program');
                    }
                }
                let maisAlgo = prompt('Tem mais alguma tecnologia que você gostaria de aprender? digite "ok" se sim, qual?')
                    for(let i = 0; maisAlgo === 'ok'; maisAlgo += maisAlgo){
                        skills = prompt('Qual a habilidade que deseja apreender? ')
                        habilidades();
                    }
            }
        }
    
 
