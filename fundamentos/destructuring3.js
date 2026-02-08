function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
// A função rand recebe um objeto com as propriedades min e max, se não for passado nenhum valor para essas propriedades, elas vão receber os valores 0 e 1000 respectivamente, a função retorna um número aleatório entre o valor mínimo e o valor máximo, arredondado para baixo.

console.log(rand({ max: 50, min: 40 }));
console.log(rand({ min: 955 })); // nesse caso, o valor máximo vai ser 1000, porque não foi passado nenhum valor para a propriedade max, então ela vai receber o valor padrão que é 1000
console.log(rand({})); // nesse caso, o valor mínimo vai ser 0 e o valor máximo vai ser 1000, porque não foi passado nenhum valor para as propriedades min e max, então elas vão receber os valores padrão que são 0 e 1000 respectivamente
// console.log(rand()); // nesse caso, vai dar erro, porque a função rand espera receber um objeto como parâmetro, e se não for passado nenhum valor, ela vai tentar acessar as propriedades min e max de um objeto que não existe, o que vai dar erro. 
