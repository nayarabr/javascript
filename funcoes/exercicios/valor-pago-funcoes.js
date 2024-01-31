//Função calcular preço da etiqueta - MINHA RESOLUÇÃO (com extra)

function debito(precoEtiqueta) {
    precoFinal = precoEtiqueta * 0.9;
    console.log('Preço final do produto no débito: ' + precoFinal.toFixed(2) + ' reais');
}

function dinheiroPix(precoEtiqueta) {
    precoFinal = precoEtiqueta * 0.85;
    console.log('Preço final do produto no dinheiro ou pix: ' + precoFinal.toFixed(2) + ' reais');
}
function parcela2x(precoEtiqueta) {
    parcela2x = precoEtiqueta / 2;
    console.log('Preço final do produto parcelado em 2 vezes: ' + precoEtiqueta.toFixed(2) + ' reais');
    console.log('Cada parcela será no valor de: ' + parcela2x.toFixed(2) + ' reais');
}
function parceladoMais2x(precoEtiqueta) {
    qtdParcela = 3;
    precoFinal = precoEtiqueta * 1.1;
    parcela = precoFinal / qtdParcela;
    console.log('Preço final do produto parcelado em ' + qtdParcela + ' vezes: ' + precoFinal.toFixed(2) + ' reais');
    console.log('Cada parcela será no valor de: ' + parcela.toFixed(2) + ' reais');
}

//const precoEtiqueta = 100;
//const condicaoPagamento = 2; // Condições: 1 - debito, 2 - dinheiroPix, 3 - parcelado2x, 4 - parceladoMais2x

switch (condicaoPagamento) {
    case 1:
        debito(precoEtiqueta);
        break;
    case 2:
        dinheiroPix(precoEtiqueta);
        break;
    case 3:
        parcela2x(precoEtiqueta);
        break;
    case 4:
        parceladoMais2x(precoEtiqueta);
        break;
    default:
        console.log('Não foi escolhida uma condição de pagamento!');
        break;
}

//RESOLUÇÃO DO PROFESSOR
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const condicaoPagamento = 1;

if (condicaoPagamento === '1') {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (condicaoPagamento === '2') {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (condicaoPagamento === '3') {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}