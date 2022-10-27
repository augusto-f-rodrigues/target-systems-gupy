/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */

const vetorFaturamentoMensal = require("./vetorFaturamentoMensal");

const menorValor = vetorFaturamentoMensal
  .map((el) => el.valor)
  .reduce((a, b) => {
    return Math.min(a, b);
  });

const maiorValor = vetorFaturamentoMensal
  .map((el) => el.valor)
  .reduce((a, b) => {
    return Math.max(a, b);
  });

console.log(`O maior valor é ${maiorValor}.\nO menor valor é ${menorValor}.`);

const calcularMediaDoVetor = (vetor) => {
  const diasComValores = vetor.filter((el) => el.valor != 0).length;
  const somaDosValores = vetor
    .filter((el) => el.valor != 0)
    .map((el) => el.valor)
    .reduce((a, b) => (a += b));

  const media = (somaDosValores / diasComValores).toFixed(2);

  return media;
};

const resultadoMedia = calcularMediaDoVetor(vetorFaturamentoMensal);

const diasValorAcimaDaMedia = vetorFaturamentoMensal.filter((el) => {
  return el.valor > Number(resultadoMedia);
});

console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de: ${diasValorAcimaDaMedia.length} dias.`);
