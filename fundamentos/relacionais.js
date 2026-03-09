const { log } = require("console");

log('01)', '1' == 1) // comparação de valor, o resultado é true
log('02)', '1' === 1) // comparação de valor e tipo, o resultado é false, porque o tipo de '1' é string e o tipo de 1 é number
log('03)', '3' != 3) // comparação de valor, o resultado é false
log('04)', '3' !== 3) // comparação de valor e tipo, o resultado é true, porque o tipo de '3' é string e o tipo de 3 é number

log('05)', 3 < 2) // comparação de valor, o resultado é false
log('06)', 3 > 2) // comparação de valor, o resultado é true
log('07)', 3 <= 2) // comparação de valor, o resultado é false
log('08)', 3 >= 2) // comparação de valor, o resultado é true

const d1 = new Date(0) // data de referência, que é 1º de janeiro de 1970
const d2 = new Date(0) // d1 e d2 são iguais, porque eles representam a mesma data, que é 1º de janeiro de 1970

log('09)', d1 === d2) // comparação de valor e tipo, o resultado é false, porque d1 e d2 são objetos diferentes na memória, mesmo que eles representem a mesma data
log('10)', d1 == d2) // comparação de valor, o resultado é false, porque d1 e d2 são objetos diferentes na memória, mesmo que eles representem a mesma data
log('11)', d1.getTime() === d2.getTime()) // comparação de valor e tipo, o resultado é true, porque getTime() retorna o número de milissegundos desde 1º de janeiro de 1970, e como d1 e d2 representam a mesma data, eles têm o mesmo número de milissegundos 
log('12)', undefined == null) // comparação de valor, o resultado é true, porque undefined e null são considerados iguais em comparação de valor
log('13)', undefined === null) // comparação de valor e tipo, o resultado é false, porque undefined e null são de tipos diferentes, undefined é do tipo undefined e null é do tipo object