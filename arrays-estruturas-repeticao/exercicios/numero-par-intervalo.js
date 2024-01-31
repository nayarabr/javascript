// Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

const listaPares = [];

for (let p = 10; p <= 50; p++) {
    if ((p % 2) == 0) {
        listaPares.push(p);
    }
}
console.log(listaPares);