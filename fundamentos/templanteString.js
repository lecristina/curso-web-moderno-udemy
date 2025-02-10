const nome = 'Rebeca'; 
const concatenacao = 'Olá ' + nome + '!'; // concatenação normal sem template string
const template = ` 
    Olá
    ${nome}`; // concatenação com template string (não é obrigatório a quebra de linha, mas pode ser feita)
console.log(concatenacao, template); 

// expressões...
console.log(`1 + 1 = ${1 + 1}`); // template string somando dois número

const up = texto => texto.toUpperCase(); // criando uma arrow function para deixar em letra maiúscula o texto
console.log(`Ei... ${up('cuidado')}!`); // template string com função (a função que criamos a cima)

