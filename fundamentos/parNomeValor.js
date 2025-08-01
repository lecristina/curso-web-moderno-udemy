// par nome/valor
const saudacao = 'Olá'; // contexto léxico 1

function exec() {
    const saudacao = 'Fala'; // contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
};

console.log(saudacao); // Olá
console.log(exec()); // Fala
console.log(cliente); // { nome: 'Pedro', idade: 32, peso: 90, endereco: { logradouro: 'Rua Muito Legal', numero: 123 } }

// Acessando valores
console.log(cliente.nome); // Pedro
console.log(cliente['idade']); // 32
console.log(cliente.endereco.logradouro); // Rua Muito Legal
console.log(cliente['endereco']['numero']); // 123