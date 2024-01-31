/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularValorImc() {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    classificarImc(){
        const imc = this.calcularValorImc();
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
}

const jose = new Pessoa('José', 70, 1.75 );
console.log(jose.calcularValorImc());
console.log(jose.classificarImc());