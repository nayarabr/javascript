// Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota. Ex de lista de notas = [2, 7, 3, 8, 10, 4]

const listaNotas = [2, 7, 3, 10, 10, 4];

let maiorNota = 0;

for (let l = 0; l < listaNotas.length; l++) {
    if (listaNotas[l] > maiorNota) {
        maiorNota = listaNotas[l];
    }
}
console.log(maiorNota);