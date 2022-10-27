/* 
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
 */

const indice = 13;
let soma = 0, k = 0;

while (k < indice) {
  k++;
  soma = soma + k;
}

console.log(soma)

/* R: 91 */