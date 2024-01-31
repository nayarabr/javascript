//Função escreva meu nome
/* function escrevaMeuNome(nome) {
    console.log('Meu nome é ' + nome);
}
escrevaMeuNome('Nayara'); */

//Função verifica se é maior de idade
/* function verificarIdade(idade) {
    if (idade < 18) {
        console.log('Menor de idade');
    } else {
        console.log('Maior de idade');
    }
}
verificarIdade(31); */

//Invocando uma função dentro da outra

function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {
    if (idade < 18) {
        console.log('Menor de idade');
    } else {
        console.log(escrevaMeuNome('Nayara') + ' e sou maior de idade');
    }
}
verificarIdade(31);