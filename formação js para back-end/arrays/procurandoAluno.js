const alunos = ['abner', 'maria', 'jose'];
const medias = [10, 5, 2];

const AlunosMedias = [alunos, medias];

function exibeNomeNota(aluno){
    if(AlunosMedias[0].includes(aluno)){
        console.log(`* ${aluno} está cadastrado`)

        // const alunos = AlunosMedias[0];
        // const media = AlunosMedias[1];
        
        // criei a vareavel e forceia nomeação com as duas listas existentes
        const[alunos, medias]  = AlunosMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice]

            console.log(`* Ela é o numero ${indice} da chamada`)
            console.log(`* Sua nota é ${mediaDoAluno}`)

        if(mediaDoAluno >= 6){
            console.log("* Acima da media")
        }else if(mediaDoAluno < 6){
            console.log(`* ${aluno} está a baixo da media, contate a secretaria,risco de reporvação`)
        } else if(mediaDoAluno < 2){
            console.log(`* ${aluno} sério risco de reprovação`)
        }


        

    }else{
        console.log('aluno nao encontrado')
    }
}
exibeNomeNota('jose')