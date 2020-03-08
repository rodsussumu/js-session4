function Produto(nome, preco, estoque) {
    // Publico
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Torna chave visivel
        value: estoque, // Torna valor da chave visivel
        writable: false, //Pode alterar valor da chave
        configurable: true // Pode configurar/deletar
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Torna chave visivel
            value: nome, // Torna valor da chave visivel
            writable: false, //Pode alterar valor da chave
            configurable: true // Pode configurar/deletar
        },
        preco: {
            enumerable: true, // Torna chave visivel
            value: preco, // Torna valor da chave visivel
            writable: false, //Pode alterar valor da chave
            configurable: true // Pode configurar/deletar
        }
    })
}

const p1 = new Produto('camiseta', 15, 10);
p1.estoque = 50000;
console.log(p1);