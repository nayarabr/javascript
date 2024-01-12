/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

const precoEtiqueta = 100;
const condicaoPagamento = '3'; // Condições: 1 - debito, 2 - dinheiroPix, 3 - parcelado2x, 4 - parceladoMais2x

console.log('Preço da etiqueta: ' + precoEtiqueta.toFixed(2) + ' reais');

if (condicaoPagamento === '1') {
    precoFinal = precoEtiqueta * 0.9;
    console.log('Preço final do produto no débito: ' + precoFinal.toFixed(2) + ' reais');
} else if (condicaoPagamento === '2') {
    precoFinal = precoEtiqueta * 0.85;
    console.log('Preço final do produto no dinheiro ou pix: ' + precoFinal.toFixed(2) + ' reais');
} else if (condicaoPagamento === '3') {
    parcela2x = precoEtiqueta / 2;
    console.log('Preço final do produto parcelado em 2 vezes: ' + precoEtiqueta.toFixed(2) + ' reais');
    console.log('Cada parcela será no valor de: ' + parcela2x.toFixed(2) + ' reais');
} else {
    qtdParcela = 3;
    precoFinal = precoEtiqueta * 1.1;
    parcela = precoFinal / qtdParcela;
    console.log('Preço final do produto parcelado em ' + qtdParcela + ' vezes: ' + precoFinal.toFixed(2) + ' reais');
    console.log('Cada parcela será no valor de: ' + parcela.toFixed(2) + ' reais');
}