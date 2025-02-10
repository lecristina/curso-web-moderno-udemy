const escola = "Cod3r";

console.log(escola.charAt(4)); //retorna a letra em determinado ídice
console.log(escola.charAt(5)); // não retorna nada quando o índice da letra não existe
console.log(escola.charCodeAt(3)); // é o código relacionado a tabela unicode, valor associado ao 3 é 51
console.log(escola.indexOf('3')); // retorna o 3

console.log(escola.substring(1)); // imprime tudo depois do indice indicado --> od3r
console.log(escola.substring(0, 3)); // ele imprime do indice 0 até o 3, sem imprimir o terceiro --> Cod

console.log('Escola '.concat(escola).concat("!")); // a partir de um literal (dado sem armazenar em uma variável), ele consegue concatenar com o .concat

console.log(escola.replace(3, 'e')); // vai procura o 3 e subtitui-lo pelo e
console.log(escola.replace(/\w/g, 'e')); // ou usar um rejex /\d/ (subtitui tudo) pelo e

console.log('Leticia,Ana,Juan'.split(',')); // converter uma string para array .split quebrando-os depois da vírgula
console.log('Leticia,Ana,Juan'.split(/,/)); // mesma coisa, mas com rejex