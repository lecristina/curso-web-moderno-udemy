// Armazenando uma função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // 5

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3)); // 5

// retorno implícito em uma função arrow
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3)); // -1

const imprimir2 = a => console.log(a);
imprimir2('Legal!!!'); // Legal!!!