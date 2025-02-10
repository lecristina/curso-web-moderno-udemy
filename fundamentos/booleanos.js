let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // sinal de negação duas vezes, o falso é falso, portanto vira verdadeiro

console.log('os verdadeiros...');
console.log(!!3); // qualquer número a cima ou a baixo de zero é true
console.log(!!-1);
console.log(!!' '); // tendo um espaço ou qualquer outra coisa dentro é true
console.log(!!'texto');
console.log(!![]); // array
console.log(!!{}); // função
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // caso a atribuição seja com um valor verdadeiro, então o resultado é true

console.log('os falsos...');
console.log(!!0); // zero é false, pois não temos "nada"
console.log(!!''); // mesma coisa, string vazia é nada, caso queiramos validar campo nome, só passar string vazia para falar que se o campo tiver vazio então é falso
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false)); // caso a atribuição seja com um valor falso, então o resultado é false

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' ')); // o || (ou) --> ele serve para indicar que: se algumas dessas for verdadeira, retorne true

let nome = '';
console.log(nome || 'Desconhecido'); // caso o usuário coloque o nome dele, vai imprimir o nome dele, caso não, vai imprimir 'Desconhecido'

let nome2 = 'Lucas';
console.log(nome2 || 'Desconhecido');



