// # Exercício 3

// Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.

// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

// Faça o que se pede abaixo nas **cópias** dos arrays originais:

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.

const arrayNumber = [4,21,100,70]

const arrayString = ["hugo","amor", "papel","gta"]

const arrayMix = [20,"complicado", true, "outro"]

const arrayNumberCopy = arrayNumber.slice()

const arrayStringCopy = arrayString.slice()

const arrayMixCopy = arrayMix.slice()

// a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.

arrayNumberCopy.unshift(1)

console.log("Origin:",arrayNumber);
console.log("Copy:",arrayNumberCopy);

// b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.

arrayStringCopy.pop()

console.log("Origin", arrayString);
console.log("Copy",arrayString);

// c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.

arrayMixCopy.splice(1,1)

console.log("Origin", arrayMix);
console.log("Copy",arrayMixCopy);