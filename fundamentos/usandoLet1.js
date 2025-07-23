var numero = 1;
{
    let numero = 2;
    console.log('dentro =', numero); // 2
}
console.log('fora =', numero); // 1

// let tem seu próprio escopo de bloco, ou seja, a variável 'numero' dentro do bloco não afeta a variável 'numero' fora do bloco.

// VAR ==> POSSUEM ESCOPO GLOBAL E ESCOPO DE FUNÇÃO
// LET ==> POSSUEM ESCOPO GLOBAL E ESCOPO DE FUNÇÃO E POSSUEM ESCOPO DE BLOCO, OU SEJA, SÓ EXISTE DENTRO DO BLOCO ONDE FOI DECLARADA