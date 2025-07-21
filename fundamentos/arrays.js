const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste'); // não é boa prática ter arrays de vários tipos, o certo é criar arrays com cada um de um tipo
console.log(valores);

console.log(valores.pop()); // o .pop retira o ultimo valor do array, ele literalmente apaga esse valor do array
console.log(valores);

delete valores[0]; // deleta algum valor específico
console.log(valores);

console.log(typeof valores); // array é um objeto