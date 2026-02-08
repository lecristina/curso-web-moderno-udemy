function rand([ min = 0, max = 1000 ] = []) {
    if (min > max) [min, max] = [max, min]; // se o valor de min for maior que o valor de max, troca os valores entre si
    const valor = Math.random() * (max - min) + min; // gera um número aleatório entre min e max
    return Math.floor(valor);
}

console.log(rand([50, 40]));// nesse caso, o valor mínimo vai ser 40 e o valor máximo vai ser 50, porque a função troca os valores entre si se o valor de min for maior que o valor de max
console.log(rand([955])); // nesse caso, o valor mínimo vai ser 955 e o valor máximo vai ser 1000, porque não foi passado nenhum valor para o segundo elemento do array
console.log(rand([, 10])); // nesse caso, o valor mínimo vai ser 0 e o valor máximo vai ser 10, porque não foi passado nenhum valor para o primeiro elemento do array
console.log(rand([])); // nesse caso, o valor mínimo vai ser 0 e o valor máximo vai ser 1000, porque não foi passado nenhum valor para o array, então ele recebe o valor padrão que é um array vazio
// console.log(rand()); // nesse caso, vai dar erro, porque a função rand espera receber um array como parâmetro, e se não for passado nenhum valor, ela vai tentar desestruturar um array que não existe, o que vai dar erro.