/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */


const sp = 6783643;
const rj = 3667866;
const mg = 2922988;
const es = 2716548;
const outrosEstados = 1984953;

const somarValores = (...valores) => {
  return valores.reduce((acc, cur) => {
    return (acc += cur);
  });
};

const calcularPorcentagem = (...valores) => {
  return valores.map((el) => {
    return ((el * 100) / total).toFixed(2);
  });
};

const total = somarValores(sp, rj, mg, es, outrosEstados);
const porcentagens = calcularPorcentagem(sp, rj, mg, es, outrosEstados);


console.log(`Porcentagens:
SP – ${porcentagens[0]}%
RJ – ${porcentagens[1]}%
MG – ${porcentagens[2]}%
ES – ${porcentagens[3]}%
Outros – ${porcentagens[4]}%`);
