{
    {
        {
            {
                var sera = 'Será???';
                console.log(sera); // Será???
            }
        }
    }
}

console.log(sera) // Será???

function teste() {
    var local = 123;
    console.log(local); // 123
}

teste();
console.log(local); // ReferenceError: local is not defined

// com VAR é importante colocar elas dentro de scopos

// -------------------------------------------------------------------------------------------------------------------------
// Exemplo no console

var a = 123;

window.a // Exibe o valor de 'a' no console do navegador, o window é aquilo que é global, caso eu coloque a dentro de uma função, ele não estara mais dentro de window
// no node.js, o global é o objeto global, mas não é recomendado usar ele diretamente

var a = 'teste'; // undefined

window.a // "teste"

// não é recomendado usar variaveis globais, pois elas podem ser sobrescritas por outras partes do código, causando bugs difíceis de rastrear.
// -------------------------------------------------------------------------------------------------------------------------