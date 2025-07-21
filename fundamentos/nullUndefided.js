let valor // não inicializada = undefined
console.log(valor); // undefined
console.log(valor2); // is not defined, é diferente de undefined, pois não existe

valor = null; // ausência de valor
console.log(valor); // null
console.log(valor.toString()); // TypeError: Cannot read properties of null (reading 'toString'), não é possível chamar métodos de null

const produto = {};
console.log(produto.preco); // undefined, não existe a chave preco no objeto produto
console.log(produto.preco.a); // TypeError: Cannot read properties of undefined (reading 'a'), não é possível chamar métodos de undefined

console.log(produto); // {}
produto.preco = 3.50; // atribuindo valor
console.log(produto); // { preco: 3.5 }

produto.preco = undefined; // evite atribuir undefined, use null
console.log(!!produto.preco); // false, undefined é false
// delete produto.preco; // deleta a chave preco do objeto
console.log(produto); // { preco: undefined }

produto.preco = null; // ausência de valor / sem preço
console.log(!!produto.preco); // false, null é false
console.log(produto); // { preco: null }


