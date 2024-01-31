/* const nayara = {
    nome: 'Nayara Brito Rodrigues Bastos',
    idade: 31,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }

};
nayara.descrever(); */


//instãncia da classe pessoa sem constructor
/* const nayara = new Pessoa();
nayara.nome = 'Nayara Bastos';
nayara.idade = 31;

const pedro = new Pessoa();
pedro.nome = 'Pedro Bastos';
pedro.idade = 31;

console.log(pedro);
console.log(nayara); */

/* nayara.descrever();
pedro.descrever(); */

// Define como o objeto pessoa deve ser
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor (nome, idade) { 
        this.nome = nome; //aqui diz que o parâmetro nome que o constructor vai receber vai ser igual ao atributo nome da classe Pessoa.
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever () {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e nasci em ${this.anoDeNascimento}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        conole.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const nayara = new Pessoa('Nayara Bastos', 32);
const pedro = new Pessoa('Pedro Bastos', 31);

compararPessoas(nayara, pedro);