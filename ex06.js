const input = require('readline-sync');

const secreto = 42;
let tentativas = 0;

while (true) {
    let palpite = Number(input.question("Tente adivinhar o numero secreto: "));
    tentativas++;

    if (palpite === secreto) {
        console.log(`Acertou! Voce precisou de ${tentativas} tentativas.`);
        break;
    } else if (palpite < secreto) {
        console.log("O numero secreto e maior.");
    } else {
        console.log("O numero secreto e menor.");
    }
}