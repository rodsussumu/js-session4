// Função construtora
function Produto(nome, preco, estoque) {
    // Publico
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Torna chave visivel
        configurable: true, // Pode configurar/deletar

        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number'){
                console.log("NaN");
                return;
            }
            estoquePrivado = valor;
        }
    })
}

// const p1 = new Produto('camiseta', 15, 10);
// p1.estoque = 50;
// console.log(p1.estoque)


// Função fabrica
function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            // Interceptando valor
            valor = valor.replace('mundo', '')
            nome = valor;
        }
    }
}

const p3 = criaProduto('Camiseta');
p3.nome = "Olá mundo";
console.log(p3.nome);