/* uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 a 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.FaçaDados de entrada:
5
50
10
98
23

Saída: 98 */

const { gets, print } = require('../funcoes-auxiliares');
 const numeroSorteados = [];

 // Primeira opção de código
 /* for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numeroSorteados.push(numeroSorteado);
 }

let maiorNumero = 0;

 for (let i = 0; i < numeroSorteados.length; i++) {
    const numeroSorteado = numeroSorteados[i];
    if (numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado;
    }
 }

print(maiorNumero); */

// Código simplificado
const quantidadeAlunos = gets();
let maiorNumero = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
   const numeroSorteado = gets();
   if (numeroSorteado > maiorNumero) {
       maiorNumero = numeroSorteado;
   }
}

print(maiorNumero);