console.clear();

// 3 formas de fazê-las: aspas, aspas simples, e backticks (acento grave)

let v1 = "Aspas Duplas";
let v2 = 'Aspas Simples';
let v3 = `Acento Grave`;

// Nos dois primeiros casos, são praticamente iguais.

// No terceiro caso, são consideradas aspas com funcionalidades. Vamos ver:

let nome = "Fab";
console.log(`Bom dia, ${nome}`);

console.log(`O resultado de 10 + 20 é: ${10 + 20}`);


// a expressão dentro de ${} é avaliada e transformada em resultado

// conhecido como interpolação de string ou template string.