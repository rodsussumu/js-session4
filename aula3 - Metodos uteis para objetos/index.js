/* 
Object.values
Object.entries
Object.assign(des, any) (igual ao spread, copia elementos sem alterar o principal)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos
Object.keys(retorna chaves)
Object.freeze(congela o objeto/não é possivel alterar)
Object.defineProperty(define uma propriedade)
Object.defineProperties(define varias propriedades)
*/

// const Camiseta = { nome: 'Camiseta', preco: 10 };
// const Caneca = Object.assign({}, Camiseta, {material: 'Porcelana'});
// Caneca.nome = 'Caneca'
// console.log(Caneca)
// console.log(Camiseta)

const Produto = { nome: 'Produto', preco: 10}
console.log(Object.getOwnPropertyDescriptor(Produto, 'nome'))

