// Produto -> aumento, desconto
// Camiseta = cor , caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 7.5, 'Vermelha')
console.log(camiseta) 

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.aumento = function(percentual) {
    this.preco = this.preco + (percentual*(this.preco / 100));
}

const caneca = new Caneca('Caneca', 10, 'Plastico')
caneca.aumento(100)
console.log(caneca)
