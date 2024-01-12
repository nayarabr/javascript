const numero = 2;

const numeroPar = (numero % 2) === 0; // % resto da divisão

if (numero === 0) {
    console.log('Número inválido!');
} else if(numeroPar) {
    console.log('Sim');
} else {
    console.log('Não');
}
