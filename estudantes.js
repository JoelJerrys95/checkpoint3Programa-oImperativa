/* Passo 1.2

Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. */

const aluno = require('./aluno');

let aluno1 =  new aluno('Joel', 1, [9, 10, 10, 9])
let aluno2 = new aluno('Jerrys', 1, [9, 8, 10, 5])
let aluno3 = new aluno('Vanessa', 2, [8.9, 10, 7.8,])
let aluno4 = new aluno('Bernardo', 5, [8.8, 9.7, 10])
let aluno5 = new aluno('Saulo', 0, [9, 9.1, 10,])

let lista = [aluno1,aluno2,aluno3,aluno4,aluno5]

console.log(aluno1);
console.log(aluno1.calcularMedia())
console.log(aluno1.adicionaFaltas())
module.exports = {lista};