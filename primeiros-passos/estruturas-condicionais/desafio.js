/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoEtanol = 3.64;
const precoGasolina = 5.82;
const tipoCombustivel = 'gasolina'; // para strings usar aspas simples ou acento
const gastoMedio = 10; // 10 km por litro
const distancia = 100;

const gastoViagem = (distancia / gastoMedio);

if (tipoCombustivel == 'etanol') {
    console.log('Valor de combustível Etanol para realizar a viagem: ' +(gastoViagem * precoEtanol).toFixed(2) + ' reais');
} else {
    console.log('Valor de combustível Gasolina para realizar a viagem: ' +(gastoViagem * precoGasolina).toFixed(2) + ' reais');
}