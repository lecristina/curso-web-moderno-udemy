console.log(typeof Object); // 'function'
console.log(typeof new Object()); // 'object'

const Cliente = function() {} // Function constructor
console.log(typeof Cliente); // 'function'
console.log(typeof new Cliente); // 'object'

class Produto {} // Class declaration
console.log(typeof Produto); // 'function'
console.log(typeof new Produto()); // 'object'