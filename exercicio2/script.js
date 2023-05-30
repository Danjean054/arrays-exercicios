// # Exercício 2

// Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.

const arrayNumeros = [45,12,20,79]

const arrayString = ["daniel","vida", "caixa","ana"]

const arrayMix = [14,"vida", true, 77]

// a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).

console.log("Quantidade de itens",arrayNumeros.length);
console.log("Quantidade de itens",arrayString.length);
console.log("Quantidade de itens",arrayMix.length);

// b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.

console.log("Imprimindo o primeiro intem",arrayNumeros[0]);
console.log("Imprimindo o segundo intem",arrayString[1]);
console.log("Imprimindo o terceiro intem",arrayMix[2]);


// c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.

console.log("Verficando se o intem está incluso",arrayNumeros.includes(12));

console.log("Verficando se o intem está incluso",arrayMix.includes(false));
