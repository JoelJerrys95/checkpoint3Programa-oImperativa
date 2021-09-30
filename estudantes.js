/* Passo 1.2

Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. */

const aluno = require('./aluno');

let lista = [
    new aluno('Joel', 0, [9, 10, 10, 9]),
    new aluno('Jerrys', 1, [9, 8, 10, 5]),
    new aluno('Vanessa', 2, [8.9, 10, 7.8,]),
    new aluno('Bernardo', 5, [8.8, 9.7, 10]),
    new aluno('Saulo', 0, [9, 9.1, 10,])
];

console.log(lista);

module.exports = {lista};