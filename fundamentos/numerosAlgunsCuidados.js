console.log(7 / 0); // infinity
console.log('10' / 2); // 5, pois ele converte a string quando tenta dividir
console.log('3' - 2); // 1,  pois ele converte a string quando tenta subtrair
console.log('3' + 2); // ele vai concatenar ao inves de somar, poi a soma na concatenação faz sentido
console.log('show!' * 2); // NaN
console.log(0.1 + 0.7); // 0.7999... não tem precisão, pois ficaria muito lento se fosse muito preciso
// console.log(10.toString()); vai dar erro, não da pra chamar um literal direto para a função
console.log((10.345).toFixed(2)); // 10.35 - se colocar o literal dentro do parenteses funciona




