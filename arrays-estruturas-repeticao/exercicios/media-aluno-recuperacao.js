// Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).Ex de lista = [2, 7, 3, 8, 10, 4]

const medias = [2, 7, 3, 8, 10, 4];

console.log('Médias que estão de recuperação:');

for (let m = 0; m < medias.length; m++) {
    if (medias[m] < 5) {
        console.log(medias[m]);
    }
}