/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
 */

/* ESCOLHA O NÚMERO NA VARIÁVEL ABAIXO: */
const numeroEscolhido = 55;

const sequenciaFibonacci = (numEscolhido) => {
  let i = 0;
  let sequencia = [0, 1];
  let numEncontrado = false;

  while (!numEncontrado) {
    const proxValor = sequencia[i] + sequencia[i + 1];
    sequencia.push(proxValor);
    numEncontrado = sequencia.find(
      (el) => el === numEscolhido || el > numEscolhido
    );
    i++;
  }

  return console.log(
    `Baseado no número escolhido (${numeroEscolhido}) foi encontrada a sequencia: ${sequencia} onde o número escolhido ${
      sequencia.find((el) => el === numEscolhido)
        ? `foi encontrado.`
        : `não foi encontrado.`
    }`
  );
};

sequenciaFibonacci(numeroEscolhido);
