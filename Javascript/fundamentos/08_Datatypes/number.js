console.clear();

// number - permite valores inteiros (integer) e valores com casas decimais (float)

let n1 = 100;
let n2 = -100;
let n3 = 12.75;

// Podemos fazer operações matematicas
// além dos valores numéricos, existem 3 outros valores especiais:
// Infinity, -Infinity e NaN.

// Infinity - valor equivalente ao infinito matemático. (divisão por 0, etc)

// -Infinity - também é uma divisão por zero, mas com numero negativo. ex: -6/0

// NaN - É um erro matemático, quando, por exemplo, voce tenta dividir uma string por um número.

// Resultado do NaN não será alterado mais. (NaN +1 n será 1)

// porém, neste caso:

let valor = "100";
let resultado = valor/2;

console.log(resultado)

// o output será 50. O Javascript percebe que na string contem um numero, e ao tentar realizar a operação com o conteudo dessa string, ele consegue. Cuidado com efeitos contraditórios.
