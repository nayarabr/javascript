// Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Vanessa', 'Maria', 'Vania', 'Joana', 'Vando', 'Pedro'];

for (let n = 0; n < nomes.length; n++) {
    if ((nomes[n].charAt(0)) === 'V') {
        console.log(nomes[n]);
    }
}