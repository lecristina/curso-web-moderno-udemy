const a = {name: 'Teste'};
a
// {name: "Teste"}

const b = a // agora elas apontam para o mesmo lugar na memoria, se eu mudo qualquer uma, reflete para a outra

b.name = 'Opa';
// "Opa"

a
// {name: "Opa"}

a = 3 // erro, ja que ja foi atribuido

let c = 3
let d = c // d e c tem seus respectivos valores, se eu mudar d, c não muda
d++ 

d
// 4

c
// 3