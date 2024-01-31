/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoPercurso(distancia, precoCombustivel) {
        return (distancia * this.gastoMedioPorKm * precoCombustivel).toFixed(2);
    }
}

const uno = new Carro('Fiat','Preto', 1/12);
console.log('Valor gasto para o carro Uno percorrer 100km: R$ ' + uno.calcularGastoPercurso(100, 5));

const logan = new Carro('Renault', 'Prata', 1/10);
console.log('Valor gasto para o carro Logan percorrer 100km: R$ ' + logan.calcularGastoPercurso(100, 6));