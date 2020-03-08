// Construtora -> molde(classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () =>  'ORIGINAL' + this.nome + ' ' + this.sobrenome
} 

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome
}
// instancia 
const pessoa1 = new Pessoa('rodrigo', 'tanaka'); // <= Pessoa = Função construtora
const pessoa2 = new Pessoa('carlos', 'almeida'); // <= Pessoa = Função construtora

console.dir(pessoa1)
console.dir(pessoa2)