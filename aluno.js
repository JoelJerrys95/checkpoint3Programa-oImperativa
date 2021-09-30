/* Passo 1.1

Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) 
e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. */

function Aluno (nomealuno, faltasaluno, notasalunos) {
        this.nome = nomealuno;
        this.faltas = faltasaluno;
        this.notas = notasalunos;
        this.calcularMedia = () =>
        this.notas.reduce((acumulador, elemento) => acumulador + elemento) /
         this.notas.length;
        this.adicionaFaltas = () => this.faltas++;
}    
    /* Passo 2
    
    Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um 
    método chamado faltas, que simplesmente aumenta o número de faltas em 1. */

module.exports = Aluno;