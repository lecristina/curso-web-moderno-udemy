// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

// usando destructuring para extrair os dados do objeto
const { nome, idade } = pessoa; // TIRE NOME E IDADE DO OBJETO PESSOA
console.log(nome, idade);

const { nome: n, idade: i } = pessoa; // TIRE NOME E IDADE DO OBJETO PESSOA E COLOQUE EM VARIÁVEIS COM NOME DIFERENTE
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa; // TIRE SOBRENOME E BEMHUMORADA DO OBJETO PESSOA, SE NÃO EXISTIR, BEMHUMORADA VAI RECEBER O VALOR TRUE
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa; // TIRE LOGRADOURO, NUMERO E CEP DO OBJETO ENDEREÇO QUE ESTÁ DENTRO DO OBJETO PESSOA
console.log(logradouro, numero, cep);

//CUIDADO: SE TENTAR ACESSAR UMA PROPRIEDADE DE UM OBJETO QUE NÃO EXISTE, VAI DAR ERRO
// const { conta: { ag, num } } = pessoa; // TIRE AG E NUM DO OBJETO CONTA QUE NÃO EXISTE DENTRO DO OBJETO PESSOA