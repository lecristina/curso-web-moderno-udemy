console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
// obj1['nome'] = 'Bola2'; 
// outra forma de atribuir valor a um objeto
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log('Exec...');
    };
}
// criando um objeto a partir de uma função construtora 

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
// o new cria um novo objeto vazio, faz a função apontar para esse objeto e no final retorna esse objeto
obj3.exec(); // executando a função que está dentro do objeto

// notação ponto, é o ponto que usamos para acessar atributos e métodos de um objeto