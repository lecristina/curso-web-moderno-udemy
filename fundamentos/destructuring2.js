// a partir de um array, eu consigo extrair os dados dele e colocar em variáveis, isso é o destructuring

const [a] = [10]; // TIRE O PRIMEIRO VALOR DO ARRAY E COLOQUE NA VARIÁVEL A
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; // TIRE O PRIMEIRO, TERCEIRO E QUINTO VALOR DO ARRAY E COLOQUE NAS VARIÁVEIS N1, N3 E N5, SE NÃO EXISTIR O QUINTO VALOR, N5 VAI RECEBER O VALOR 0
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]; // TIRE O SEGUNDO VALOR DO SEGUNDO ARRAY E COLOQUE NA VARIÁVEL NOTA
console.log(nota);
//não é recomendado usar o destructuring em arrays muito complexos, isso pode deixar o código difícil de entender, o ideal é usar o destructuring em arrays mais simples, como no exemplo do primeiro array, onde só tem um valor, ou no segundo array, onde tem poucos valores.