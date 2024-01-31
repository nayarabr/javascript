//Aula 1

// função que não devolve nada = procedimento -> não tem retorno
/* function sayMyname(name) {
    console.log('Your name is ' + name);
}

sayMyname('Nayara');
sayMyname('Pedro');

function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
console.log(quadrado(20) + quadrado(10)); 

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(200, 15));
console.log(incrementarJuros(150, 20)); */


//Aula 2 - Refatorando exercício IMC

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {

    if (imc < 18.5) {
        return 'IMC: Abaixo do peso!';
    } else if (imc >= 18.5 && imc < 25) {
        return 'IMC: peso normal!';
    } else if (imc >= 25 && imc < 30) {
        return 'IMC: Acima do peso!';
    } else if (imc >= 30 && imc < 40) {
        return 'IMC: Obeso!';
    } else {
        return 'IMC: Obesidade grave!';
    }
}

/* Função imediatamente invocada e não nomeada (anônima)
Ela cria e executa uma única vez*/

(function () {
    const peso = 103.55;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();

//main();