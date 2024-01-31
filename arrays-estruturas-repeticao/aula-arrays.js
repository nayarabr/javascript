// variável recebe uma string
//const aluno = 'João';

// objeto literal - sem precisar de classe
//const aluno = ( nome: 'João' );

// Lista de alunos

const alunos = ['João', 'José', 'Maria'];

// Imprimir itens na lista
//console.log(alunos[2]);

// Adicionar itens
alunos.push('Nayara');
console.log(alunos);

alunos[2] = 'Pedro';// substituiu Maria por Pedro
console.log(alunos);


// Remover itens

alunos.pop(); // remove o ultimo
console.log(alunos);
alunos.shift(); // remove o primeiro
console.log(alunos);