var funcs = []; // pode ser: const funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2](); // 2
funcs[8](); // 8
