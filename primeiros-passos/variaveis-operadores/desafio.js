/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoCombustivel = 5.99; // preço por litro de combustível

const gastoMedio = 10; // 10 km por litro

const distancia = 100; // distancia em kilometros

let gastoViagem = (distancia / gastoMedio) * precoCombustivel;  

console.log('Valor de combustível para realizar a viagem: ' + gastoViagem.toFixed(2) + ' reais');
