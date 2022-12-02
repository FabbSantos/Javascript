// BigInt

// Caso o numero seja um numero consideravelmente grande;
// a limitação do int é +-: 
// 2^53-1 = 9007199254740991 (ou o valor negativo)

// na maioria da vezes, é uma limitação aceitável

// colocamos um 'n' no final do valor.

console.clear();

console.log("Essa linha irá funcionar corretamente:");
console.log(123151684548457997645684546879n);
console.log("Já essa, nos trará o numero quebrado:");
console.log(123151684548457997645684546879);